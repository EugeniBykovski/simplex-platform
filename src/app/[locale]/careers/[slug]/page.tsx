import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { JobBody, JobHero, JobOthers } from "@/components/sections/careers/job-sections";
import { getCareers, jobPositions } from "@/content/careers";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

/** Only approved vacancies get a page. There are none today, so every slug is a real 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return jobPositions.map(({ slug }) => ({ slug }));
}

const findPosition = (slug: string) => jobPositions.find((position) => position.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const position = findPosition(slug);
  if (!hasLocale(routing.locales, locale) || !position) return {};

  const { title, description } = position.copy[locale].meta;
  return buildPageMetadata({
    locale,
    family: "careers",
    path: `/careers/${slug}`,
    title,
    description,
  });
}

/** The section order follows Job.dc.html. */
export default async function JobPage({ params }: Props) {
  const { locale, slug } = await params;
  const position = findPosition(slug);
  if (!hasLocale(routing.locales, locale) || !position || !isLocaleAvailable("careers", locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const content = getCareers(locale);
  const job = position.copy[locale];
  const others = jobPositions.filter((other) => other.slug !== slug).slice(0, 3);

  return (
    <main>
      <JobHero content={content} job={job} path={`/careers/${slug}`} />
      <JobBody content={content.job} job={job} />
      <JobOthers content={content.job} others={others} locale={locale} />
    </main>
  );
}
