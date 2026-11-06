import type { Locale } from "@/i18n/routing";
import { articles } from "./articles";
import { copy as en } from "./en/copy";
import { copy as ru } from "./ru/copy";
import type { InsightsCopy, PublishedArticle } from "./types";

const copies: Record<Locale, InsightsCopy> = { en, ru };

export const getInsightsCopy = (locale: Locale) => copies[locale];

/**
 * The only way to read articles. A translation that is not "published" never leaves this function,
 * so drafts cannot reach a page, a card, related links, metadata or the sitemap. Newest first, then
 * by slug, so the order is stable.
 */
export function getPublishedArticles(locale: Locale): readonly PublishedArticle[] {
  return articles
    .flatMap(({ translations, ...article }) => {
      const words = translations[locale];
      return words?.status === "published" ? [{ ...article, words }] : [];
    })
    .sort(
      (a, b) =>
        b.words.publishedAt.localeCompare(a.words.publishedAt) || a.slug.localeCompare(b.slug),
    );
}

export function getPublishedArticle(locale: Locale, slug: string): PublishedArticle | undefined {
  return getPublishedArticles(locale).find((article) => article.slug === slug);
}

/** Named links first, then the same category. Fewer than three is fine. Nothing is invented. */
export function getRelatedArticles(
  locale: Locale,
  article: PublishedArticle,
): readonly PublishedArticle[] {
  const others = getPublishedArticles(locale).filter((other) => other.slug !== article.slug);
  const named = (article.related ?? []).flatMap((slug) => {
    const match = others.find((other) => other.slug === slug);
    return match ? [match] : [];
  });
  const sameCategory = others.filter(
    (other) => other.category === article.category && !named.includes(other),
  );
  return [...named, ...sameCategory].slice(0, 3);
}

export { insightCategories } from "./types";
export type * from "./types";
