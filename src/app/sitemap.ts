import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { localizedUrl, publishedLocales } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexable) return [];

  return indexableRoutes.flatMap(({ path, family }) => {
    const locales = publishedLocales(family);
    const languages = Object.fromEntries(locales.map((l) => [l, localizedUrl(l, path)]));
    return locales.map((locale) => ({
      url: localizedUrl(locale, path),
      ...(locales.length > 1 ? { alternates: { languages } } : {}),
    }));
  });
}
