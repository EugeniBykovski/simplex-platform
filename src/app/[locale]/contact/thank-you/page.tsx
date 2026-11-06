import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { notFound } from "next/navigation";
import {
  ThankYouHero,
  ThankYouMore,
  type ThankYouState,
} from "@/components/sections/contact/contact-sections";
import { getContact } from "@/content/contact";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { CONFIRMATION_COOKIE, verifyConfirmation } from "@/lib/contact/confirmation";
import { confirmationSecret, resolveDelivery } from "@/lib/email/delivery";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getContact(locale).thankYouMeta;
  return buildPageMetadata({
    locale,
    family: "contact",
    path: "/contact/thank-you",
    title,
    description,
    noindex: true,
  });
}

/** Claims a submission only with an unexpired signed cookie. Otherwise the copy stays neutral. */
export default async function ThankYouRoute({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("contact", locale)) notFound();
  setRequestLocale(locale);

  const requestHeaders = await headers();
  const delivery = resolveDelivery(
    { host: requestHeaders.get("host"), forwardedHost: requestHeaders.get("x-forwarded-host") },
    locale,
  );
  const cookie = (await cookies()).get(CONFIRMATION_COOKIE)?.value;

  let state: ThankYouState = "neutral";
  if (delivery.mode !== "unavailable") {
    const valid = verifyConfirmation(cookie, delivery.mode, confirmationSecret(delivery.mode));
    if (valid) state = delivery.mode === "live" ? "confirmed" : "demo";
  }

  const { thankYou } = getContact(locale);
  return (
    <main>
      <ThankYouHero content={thankYou} state={state} />
      <ThankYouMore content={thankYou.more} />
    </main>
  );
}
