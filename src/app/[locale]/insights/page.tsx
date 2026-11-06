import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  InsightsCta,
  InsightsHero,
  InsightsLatest,
} from "@/components/sections/insights/insights-index";
import { getInsightsCopy, getPublishedArticles } from "@/content/insights";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getInsightsCopy(locale).meta;
  // An empty index has nothing to offer search. It can be indexed once articles are published.
  return buildPageMetadata({
    locale,
    family: "insights",
    path: "/insights",
    title,
    description,
    noindex: getPublishedArticles(locale).length === 0,
  });
}

/** The section order follows Insights.dc.html, without the playbook, which does not exist. */
export default async function InsightsPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("insights", locale)) notFound();
  setRequestLocale(locale);

  const content = getInsightsCopy(locale);
  const articles = getPublishedArticles(locale);
  const featured = articles.find((article) => article.featured);

  return (
    <main>
      <InsightsHero content={content} featured={featured} locale={locale} />
      <InsightsLatest
        content={content}
        articles={articles.filter((article) => article !== featured)}
        locale={locale}
      />
      <InsightsCta content={content.cta} />
    </main>
  );
}
