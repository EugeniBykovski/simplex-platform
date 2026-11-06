import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getPublishedArticles } from "@/content/insights";
import { localizedUrl, publishedLocales } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexable) return [];

  const pages = indexableRoutes.flatMap(({ path, family }) => {
    const locales = publishedLocales(family);
    const languages = Object.fromEntries(locales.map((l) => [l, localizedUrl(l, path)]));
    return locales.map((locale) => ({
      url: localizedUrl(locale, path),
      ...(locales.length > 1 ? { alternates: { languages } } : {}),
    }));
  });

  // Published articles only, in the languages they are approved in, and the index once it has any.
  const articles = publishedLocales("insights").flatMap((locale) => {
    const published = getPublishedArticles(locale);
    if (published.length === 0) return [];
    return [
      { url: localizedUrl(locale, "/insights") },
      ...published.map(({ slug, words }) => ({
        url: localizedUrl(locale, `/insights/${slug}`),
        lastModified: words.modifiedAt ?? words.publishedAt,
      })),
    ];
  });

  return [...pages, ...articles];
}
