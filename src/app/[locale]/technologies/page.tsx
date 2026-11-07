import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  TechFollows,
  TechHero,
  TechList,
  TechRadarSection,
} from "@/components/sections/company/technologies-sections";
import { getTechnologies } from "@/content/company";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getTechnologies(locale).meta;
  // Claims here are unconfirmed, so the page stays out of search until the registers clear.
  return buildPageMetadata({
    locale,
    family: "company",
    path: "/technologies",
    title,
    description,
  });
}

/** The section order follows Technologies.dc.html. */
export default async function TechnologiesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("company", locale)) notFound();
  setRequestLocale(locale);

  const content = getTechnologies(locale);

  return (
    <main>
      <TechHero content={content} />
      <TechList content={content} locale={locale} />
      <TechFollows content={content.follows} />
      <TechRadarSection content={content.radar} />
    </main>
  );
}
