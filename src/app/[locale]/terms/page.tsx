import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { LegalPage, legalMetadata } from "@/components/sections/legal/legal-page";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return hasLocale(routing.locales, locale) ? legalMetadata("terms", locale) : {};
}

export default async function TermsRoute({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("legal", locale)) notFound();
  setRequestLocale(locale);

  return <LegalPage id="terms" locale={locale} />;
}
