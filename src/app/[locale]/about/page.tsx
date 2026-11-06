import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  AboutCta,
  AboutCulture,
  AboutHero,
  AboutMission,
  AboutStory,
  AboutTrust,
  AboutValues,
  AboutWays,
} from "@/components/sections/company/about-sections";
import { getAbout } from "@/content/company";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getAbout(locale).meta;
  // Claims here are unconfirmed, so the page stays out of search until the registers clear.
  return buildPageMetadata({
    locale,
    family: "company",
    path: "/about",
    title,
    description,
    noindex: true,
  });
}

/** The section order follows About.dc.html, without leadership and the photo slots. */
export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("company", locale)) notFound();
  setRequestLocale(locale);

  const content = getAbout(locale);

  return (
    <main>
      <AboutHero content={content} />
      <AboutStory content={content.story} />
      <AboutMission content={content.mission} />
      <AboutValues content={content.values} />
      <AboutWays content={content.ways} />
      <AboutCulture content={content.culture} />
      <AboutTrust content={content.trust} />
      <AboutCta content={content.cta} />
    </main>
  );
}
