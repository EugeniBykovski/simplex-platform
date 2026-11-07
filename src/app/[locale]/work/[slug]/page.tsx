import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CaseLayoutA, CaseLayoutB, CaseLayoutC } from "@/components/sections/work/case-layouts";
import { CaseCta, CaseNext, CaseShift } from "@/components/sections/work/case-shared";
import { workSlugs, type WorkSlug } from "@/config/routes";
import { getWorkCases, getWorkShared, workCatalog } from "@/content/work";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

/** Unknown slugs get the real 404, since only the design's three cases are generated. */
export const dynamicParams = false;

export function generateStaticParams() {
  return workSlugs.map((slug) => ({ slug }));
}

const isWorkSlug = (slug: string): slug is WorkSlug =>
  (workSlugs as readonly string[]).includes(slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale) || !isWorkSlug(slug)) return {};

  const { title, description } = getWorkCases(locale)[slug].meta;
  // A labelled demonstration, never indexed as client work (GAP-C02).
  return buildPageMetadata({
    locale,
    family: "work",
    path: `/work/${slug}`,
    title,
    description,
  });
}

/** The three layouts and the order of sections follow CasePage.dc.html. */
export default async function WorkCasePage({ params }: Props) {
  const { locale, slug } = await params;
  if (
    !hasLocale(routing.locales, locale) ||
    !isWorkSlug(slug) ||
    !isLocaleAvailable("work", locale)
  ) {
    notFound();
  }
  setRequestLocale(locale);

  const cases = getWorkCases(locale);
  const shared = getWorkShared(locale);
  const page = cases[slug];
  const next = workCatalog[slug].next;

  return (
    <main>
      {slug === "ledgerline" ? <CaseLayoutA page={cases.ledgerline} shared={shared} /> : null}
      {slug === "carepath" ? <CaseLayoutB page={cases.carepath} shared={shared} /> : null}
      {slug === "routewise" ? <CaseLayoutC page={cases.routewise} shared={shared} /> : null}
      <CaseShift shared={shared} name={page.name} />
      <CaseNext shared={shared} slug={next} next={cases[next]} />
      <CaseCta shared={shared} />
    </main>
  );
}
