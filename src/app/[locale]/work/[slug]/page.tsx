import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ProjectCta,
  ProjectEngineering,
  ProjectHero,
  ProjectNext,
  ProjectScope,
} from "@/components/sections/work/case-shared";
import { workSlugs, type WorkSlug } from "@/config/routes";
import { getProject, getWorkShared, nextProject } from "@/content/work";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

/** Unknown slugs get the real 404, since only the approved projects are generated. */
export const dynamicParams = false;

export function generateStaticParams() {
  return workSlugs.map((slug) => ({ slug }));
}

const isWorkSlug = (slug: string): slug is WorkSlug =>
  (workSlugs as readonly string[]).includes(slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale) || !isWorkSlug(slug)) return {};

  const project = getProject(slug);
  const { title, description } = getWorkShared(locale).meta(
    project.name,
    project.words[locale].tagline,
  );
  // Work stays out of the index until the founder approves each project page (GAP-C02).
  return buildPageMetadata({
    locale,
    family: "work",
    path: `/work/${slug}`,
    title,
    description,
  });
}

export default async function WorkProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  if (
    !hasLocale(routing.locales, locale) ||
    !isWorkSlug(slug) ||
    !isLocaleAvailable("work", locale)
  ) {
    notFound();
  }
  setRequestLocale(locale);

  const project = getProject(slug);
  const shared = getWorkShared(locale);

  return (
    <main>
      <ProjectHero project={project} shared={shared} locale={locale} />
      <ProjectScope project={project} shared={shared} locale={locale} />
      <ProjectEngineering project={project} shared={shared} locale={locale} />
      <ProjectNext shared={shared} next={nextProject(slug)} locale={locale} />
      <ProjectCta shared={shared} />
    </main>
  );
}
