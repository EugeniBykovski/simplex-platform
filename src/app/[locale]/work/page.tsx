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
import { getWorkOverview, getWorkShared } from "@/content/work";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getWorkOverview(locale).meta;
  // Work stays out of the index until the founder approves the project pages (GAP-C02).
  return buildPageMetadata({
    locale,
    family: "work",
    path: "/work",
    title,
    description,
  });
}

/** The section order follows Work.dc.html, with the approved projects in place of its concepts. */
export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("work", locale)) notFound();
  setRequestLocale(locale);

  const content = getWorkOverview(locale);
  const shared = getWorkShared(locale);

  return (
    <main>
      <WorkHero content={content} />
      <WorkFeatured content={content} shared={shared} locale={locale} />
      <WorkProjects content={content} shared={shared} locale={locale} />
      <WorkCta content={content.cta} />
    </main>
  );
}
