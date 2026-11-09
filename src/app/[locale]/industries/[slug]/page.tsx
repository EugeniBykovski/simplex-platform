import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  IndustryCapabilities,
  IndustryChallenges,
  IndustryCompliance,
  IndustryConsiderations,
  IndustryCta,
  IndustryHero,
  IndustryOpportunities,
  IndustryScenarios,
} from "@/components/sections/industries/industry-sections";
import { industrySlugs, type IndustrySlug } from "@/config/routes";
import { getIndustryPage, getIndustryShared, industryCatalog } from "@/content/industries";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

/** Unknown slugs get the real 404, since only the design's six pages are generated. */
export const dynamicParams = false;

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

const isIndustrySlug = (slug: string): slug is IndustrySlug =>
  (industrySlugs as readonly string[]).includes(slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale) || !isIndustrySlug(slug)) return {};

  const { title, description } = getIndustryPage(locale, slug).meta;
  // Compliance and capability claims are unconfirmed, so the section stays out of search. See
  // docs/content/industries-claims-register.md.
  return buildPageMetadata({
    locale,
    family: "industries",
    path: `/industries/${slug}`,
    title,
    description,
  });
}

/** The section order follows IndustryPage.dc.html. */
export default async function IndustryDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (
    !hasLocale(routing.locales, locale) ||
    !isIndustrySlug(slug) ||
    !isLocaleAvailable("industries", locale)
  ) {
    notFound();
  }
  setRequestLocale(locale);

  const page = getIndustryPage(locale, slug);
  const shared = getIndustryShared(locale);
  const structure = industryCatalog[slug];

  return (
    <main>
      <IndustryHero
        page={page}
        shared={shared}
        structure={structure}
        path={`/industries/${slug}`}
      />
      <IndustryChallenges page={page} shared={shared} />
      <IndustryOpportunities page={page} shared={shared} />
      <IndustryScenarios page={page} shared={shared} />
      <IndustryConsiderations page={page} shared={shared} />
      <IndustryCapabilities page={page} shared={shared} structure={structure} locale={locale} />
      <IndustryCompliance page={page} shared={shared} />
      <IndustryCta page={page} shared={shared} />
    </main>
  );
}
