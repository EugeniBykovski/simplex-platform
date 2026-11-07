import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  WorkCta,
  WorkFeatured,
  WorkHero,
  WorkProjects,
} from "@/components/sections/work/work-overview";
import { getWorkOverview } from "@/content/work";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getWorkOverview(locale).meta;
  // Every project is a labelled demonstration, never indexed as client work (GAP-C02).
  return buildPageMetadata({
    locale,
    family: "work",
    path: "/work",
    title,
    description,
  });
}

/** The section order follows Work.dc.html, without the withheld reference block. */
export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("work", locale)) notFound();
  setRequestLocale(locale);

  const content = getWorkOverview(locale);

  return (
    <main>
      <WorkHero content={content} />
      <WorkFeatured content={content} />
      <WorkProjects content={content} locale={locale} />
      <WorkCta content={content.cta} />
    </main>
  );
}
