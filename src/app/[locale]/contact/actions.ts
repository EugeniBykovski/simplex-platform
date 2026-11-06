"use server";

import { hasLocale } from "next-intl";
import { cookies, headers } from "next/headers";
import { routing, type Locale } from "@/i18n/routing";
import {
  CONFIRMATION_COOKIE,
  CONFIRMATION_TTL_SECONDS,
  issueConfirmation,
} from "@/lib/contact/confirmation";
import { emptyContactValues, validateContact, type ContactFormState } from "@/lib/contact/fields";
import { logContactEvent } from "@/lib/contact/log";
import { composeLeadEmail } from "@/lib/contact/message";
import { parseContactForm } from "@/lib/contact/parse";
import { takeRateLimit } from "@/lib/contact/rate-limit";
import { confirmationSecret, resolveDelivery } from "@/lib/email/delivery";
import type { SendFailure } from "@/lib/email/provider";

const FAILURE_STATUS: Record<SendFailure, ContactFormState["status"]> = {
  rate_limited: "rate_limited",
  provider: "provider_failure",
  network: "network_failure",
  configuration: "unavailable",
};

/** Next.js makes the same check. This one also fails when a browser's fetch metadata disagrees. */
function isSameOrigin(requestHeaders: Headers): boolean {
  const origin = requestHeaders.get("origin");
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const fetchSite = requestHeaders.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") return false;
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

/**
 * The form's server boundary. Sender and recipient come from configuration, and nothing here leaves
 * the server except a status: no provider detail reaches the visitor, and form content is never
 * logged. Success means the provider accepted the message, or the mock simulated it.
 */
export async function submitContact(
  locale: Locale,
  _previous: ContactFormState,
  form: FormData,
): Promise<ContactFormState> {
  const correlation = crypto.randomUUID();
  const parsed = parseContactForm(form);
  const values = parsed.ok ? parsed.values : emptyContactValues;
  const respond = (status: ContactFormState["status"], extra: Partial<ContactFormState> = {}) => ({
    status,
    values,
    ...extra,
  });

  try {
    const requestHeaders = await headers();

    if (!hasLocale(routing.locales, locale) || !isSameOrigin(requestHeaders)) {
      logContactEvent("rejected_origin", correlation);
      return respond("rejected");
    }

    const delivery = resolveDelivery(
      {
        host: requestHeaders.get("host"),
        forwardedHost: requestHeaders.get("x-forwarded-host"),
      },
      locale,
    );
    if (delivery.mode === "unavailable") {
      logContactEvent("unavailable", correlation, { reason: delivery.reason });
      return respond("unavailable");
    }

    if (!parsed.ok) {
      logContactEvent("rejected_payload", correlation);
      return respond("rejected");
    }
    if (parsed.honeypotFilled) {
      logContactEvent("rejected_honeypot", correlation);
      return respond("rejected");
    }

    const validated = validateContact(parsed.values);
    if (!validated.ok) return respond("invalid", { errors: validated.errors });

    const address =
      requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      requestHeaders.get("x-real-ip") ||
      "unknown";
    if (!takeRateLimit(address)) {
      logContactEvent("rate_limited", correlation);
      return respond("rate_limited");
    }

    const result = await delivery.provider.send(
      composeLeadEmail(validated.values, {
        from: delivery.from,
        to: delivery.to,
        locale,
        receivedAt: new Date(),
      }),
    );

    if (!result.ok) {
      logContactEvent("send_failed", correlation, {
        provider: delivery.provider.name,
        reason: result.failure,
      });
      return respond(FAILURE_STATUS[result.failure]);
    }

    const secure =
      requestHeaders.get("x-forwarded-proto") === "https" ||
      requestHeaders.get("origin")?.startsWith("https:") === true;
    (await cookies()).set(
      CONFIRMATION_COOKIE,
      issueConfirmation(delivery.mode, confirmationSecret(delivery.mode)),
      {
        httpOnly: true,
        sameSite: "lax",
        secure,
        path: "/",
        maxAge: CONFIRMATION_TTL_SECONDS,
      },
    );

    logContactEvent("accepted", correlation, {
      provider: delivery.provider.name,
      messageId: result.id,
    });
    return respond("accepted", { simulated: result.simulated, values: validated.values });
  } catch (error) {
    logContactEvent("failed", correlation, {
      errorName: error instanceof Error ? error.name : "unknown",
    });
    return respond("provider_failure");
  }
}
