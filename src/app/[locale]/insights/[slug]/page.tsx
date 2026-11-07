import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ArticleBody,
  ArticleHeader,
  ArticleRelated,
} from "@/components/sections/insights/article-sections";
import { siteConfig } from "@/config/site";
import {
  getInsightsCopy,
  getPublishedArticle,
  getPublishedArticles,
  getRelatedArticles,
} from "@/content/insights";
import { JsonLd } from "@/components/seo/json-ld";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata, localizedUrl } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

/** Only published articles get a page, so a draft's slug is a real 404, like any unknown one. */
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getPublishedArticles(locale).map(({ slug }) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const article = getPublishedArticle(locale, slug);
  if (!article) return {};

  const { title, description } = article.words.seo;
  return buildPageMetadata({
    locale,
    family: "insights",
    path: `/insights/${slug}`,
    title,
    description,
    approved: true,
    article: {
      publishedTime: article.words.publishedAt,
      modifiedTime: article.words.modifiedAt,
      authors: [article.words.author.name],
    },
  });
}

/** The section order follows Article.dc.html. */
export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("insights", locale)) notFound();
  const article = getPublishedArticle(locale, slug);
  if (!article) notFound();
  setRequestLocale(locale);

  const content = getInsightsCopy(locale);
  const url = localizedUrl(locale, `/insights/${slug}`);
  const { words } = article;
  // Only facts the article carries. The type guarantees a real author and date.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: words.title,
    description: words.seo.description,
    inLanguage: locale,
    mainEntityOfPage: url,
    datePublished: words.publishedAt,
    ...(words.modifiedAt ? { dateModified: words.modifiedAt } : {}),
    author: { "@type": "Person", name: words.author.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <main>
      <JsonLd data={structuredData} />
      <div className="progress-bar motion-reduce:hidden" aria-hidden="true">
        <i />
      </div>
      <article>
        <ArticleHeader article={article} content={content} locale={locale} />
        <ArticleBody article={article} content={content.article} url={url} />
      </article>
      <ArticleRelated related={getRelatedArticles(locale, article)} content={content} />
    </main>
  );
}
