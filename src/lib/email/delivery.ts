import "server-only";
import { russianTranslationStatus } from "@/i18n/translation-status";
import type { Locale } from "@/i18n/routing";
import { getEmailConfig } from "./config";
import { MockEmailProvider } from "./mock-provider";
import type { EmailProvider } from "./provider";
import { ResendEmailProvider } from "./resend-provider";

export type UnavailableReason =
  "no_provider" | "mock_refused" | "resend_not_configured" | "not_enabled" | "locale_not_approved";

export type Delivery =
  | { mode: "live" | "demo"; provider: EmailProvider; from: string; to: string }
  | { mode: "unavailable"; reason: UnavailableReason };

const LOOPBACK = new Set(["localhost", "127.0.0.1", "[::1]"]);

const hostnameOf = (host: string) => {
  try {
    return new URL(`http://${host}`).hostname;
  } catch {
    return null;
  }
};

const isLoopback = (host: string | null) => {
  const name = host ? hostnameOf(host) : null;
  return name !== null && LOOPBACK.has(name);
};

/** Every condition must hold, so a public visitor can never reach simulated delivery. */
function mockAllowed(hosts: readonly (string | null)[]): boolean {
  const { VERCEL_ENV, SITE_INDEXABLE, NEXT_PUBLIC_SITE_URL } = process.env;
  const siteUrl = NEXT_PUBLIC_SITE_URL?.trim();
  return (
    (!VERCEL_ENV || VERCEL_ENV === "development") &&
    SITE_INDEXABLE?.trim() !== "true" &&
    (!siteUrl || isLoopback(siteUrl.replace(/^https?:\/\//, ""))) &&
    hosts.some(Boolean) &&
    hosts.every((host) => host === null || isLoopback(host))
  );
}

/**
 * The only place delivery is chosen. It fails closed, and there is no fallback from Resend to the
 * mock: a missing key is a configuration state, not permission to fake delivery. CONTACT_LIVE_ENABLED
 * records that the checks code cannot make have been done (verified domain, edge rate limiting,
 * privacy notice, smoke test). Russian also waits for its legal review (GAP-I02).
 */
export function resolveDelivery(
  hosts: { host: string | null; forwardedHost: string | null },
  locale: Locale,
): Delivery {
  const provider = process.env.EMAIL_PROVIDER?.trim();

  if (provider === "mock") {
    return mockAllowed([hosts.host, hosts.forwardedHost])
      ? {
          mode: "demo",
          provider: new MockEmailProvider(),
          from: "demo@example.invalid",
          to: "demo@example.invalid",
        }
      : { mode: "unavailable", reason: "mock_refused" };
  }

  if (provider !== "resend") return { mode: "unavailable", reason: "no_provider" };

  let config;
  try {
    config = getEmailConfig();
  } catch {
    return { mode: "unavailable", reason: "resend_not_configured" };
  }
  if (process.env.CONTACT_LIVE_ENABLED?.trim() !== "true") {
    return { mode: "unavailable", reason: "not_enabled" };
  }
  if (locale === "ru" && russianTranslationStatus.contact !== "approved") {
    return { mode: "unavailable", reason: "locale_not_approved" };
  }
  return {
    mode: "live",
    provider: new ResendEmailProvider(config.apiKey),
    from: config.fromEmail,
    to: config.toEmail,
  };
}

/** The confirmation key is derived, so going live needs no extra secret. */
export function confirmationSecret(mode: "live" | "demo"): string {
  return mode === "live" ? `live:${getEmailConfig().apiKey}` : "demo";
}
