import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  IndustriesCompliance,
  IndustriesConstants,
  IndustriesCta,
  IndustriesHero,
} from "@/components/sections/industries/industries-overview";
import { getIndustriesOverview } from "@/content/industries";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getIndustriesOverview(locale).meta;
  // Compliance and capability claims are unconfirmed, so the section stays out of search. See
  // docs/content/industries-claims-register.md.
  return buildPageMetadata({
    locale,
    family: "industries",
    path: "/industries",
    title,
    description,
  });
}

/** The section order follows Industries.dc.html. */
export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("industries", locale)) notFound();
  setRequestLocale(locale);

  const content = getIndustriesOverview(locale);

  return (
    <main>
      <IndustriesHero content={content} locale={locale} />
      <IndustriesConstants content={content.constants} />
      <IndustriesCompliance content={content.compliance} />
      <IndustriesCta content={content.cta} />
    </main>
  );
}
