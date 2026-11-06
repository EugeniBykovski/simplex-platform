import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  CareersCta,
  CareersCulture,
  CareersHero,
  CareersOnboarding,
  CareersProcess,
  CareersRoles,
} from "@/components/sections/careers/careers-sections";
import { getCareers, jobPositions } from "@/content/careers";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getCareers(locale).meta;
  // Claims here are unconfirmed, so the page stays out of search until the registers clear.
  return buildPageMetadata({
    locale,
    family: "careers",
    path: "/careers",
    title,
    description,
    noindex: true,
  });
}

/** The section order follows Careers.dc.html, without the unconfirmed benefits. */
export default async function CareersPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("careers", locale)) notFound();
  setRequestLocale(locale);

  const content = getCareers(locale);

  return (
    <main>
      <CareersHero content={content} />
      <CareersCulture content={content.culture} />
      <CareersRoles content={content.roles} positions={jobPositions} locale={locale} />
      <CareersProcess content={content.process} />
      <CareersOnboarding content={content.onboarding} />
      <CareersCta content={content.cta} />
    </main>
  );
}
