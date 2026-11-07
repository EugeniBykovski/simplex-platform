import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  HowCta,
  HowFaq,
  HowHero,
  HowMethod,
  HowPrinciples,
  HowReport,
  HowRhythm,
  HowTransparency,
} from "@/components/sections/company/how-we-work-sections";
import { getHowWeWork } from "@/content/company";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getHowWeWork(locale).meta;
  // Claims here are unconfirmed, so the page stays out of search until the registers clear.
  return buildPageMetadata({
    locale,
    family: "company",
    path: "/how-we-work",
    title,
    description,
  });
}

/** The section order follows HowWeWork.dc.html. */
export default async function HowWeWorkPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("company", locale)) notFound();
  setRequestLocale(locale);

  const content = getHowWeWork(locale);

  return (
    <main>
      <HowHero content={content} />
      <HowPrinciples content={content.principles} />
      <HowMethod content={content.method} />
      <HowRhythm content={content.rhythm} />
      <HowTransparency content={content.transparency} />
      <HowReport content={content.report} />
      <HowFaq content={content.faq} />
      <HowCta content={content.cta} />
    </main>
  );
}
