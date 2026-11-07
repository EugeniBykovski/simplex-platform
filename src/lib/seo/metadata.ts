import type { Metadata } from "next";
import { indexableRoutes, ogCardPaths, type RouteFamily } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { defaultLocale, locales, type Locale } from "@/i18n/routing";
import { russianTranslationStatus } from "@/i18n/translation-status";

/** Absolute URL for a locale-neutral path: ("ru", "/about") -> https://…/ru/about */
export function localizedUrl(locale: Locale, path: string): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const suffix = path === "/" ? "" : path;
  return `${siteConfig.url}${prefix}${suffix}`;
}

/** Locales that may be indexed and advertised through hreflang for this route family. */
export function publishedLocales(family: RouteFamily): readonly Locale[] {
  return locales.filter(
    (locale) => locale === defaultLocale || russianTranslationStatus[family] === "approved",
  );
}

/**
 * Whether content may be indexed, regardless of environment. A page qualifies through
 * indexableRoutes, or through its own approval record (`approved`), and only in a published language.
 */
export function isIndexEligible(input: {
  path: string;
  locale: Locale;
  family: RouteFamily;
  approved?: boolean;
}): boolean {
  const { path, locale, family, approved = false } = input;
  const listed = indexableRoutes.some((route) => route.path === path);
  return (listed || approved) && publishedLocales(family).includes(locale);
}

/** The social card for a path: its own, its section's, or the brand card. */
export function ogCardFor(path: string): string {
  if (ogCardPaths.includes(path)) return path;
  const section = `/${path.split("/")[1] ?? ""}`;
  return ogCardPaths.includes(section) && section !== "/contact" ? section : "/home";
}

export type PageMetadataInput = {
  locale: Locale;
  family: RouteFamily;
  /** Locale-neutral path, for example "/services/web-development". */
  path: string;
  title: string;
  description: string;
  /** Approved by its own record, as a published article or legal document is. */
  approved?: boolean;
  /** Published article times, which are real and approved. */
  article?: { publishedTime: string; modifiedTime?: string | undefined; authors: string[] };
};

export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const { locale, family, path, title, description, approved, article } = input;
  const published = publishedLocales(family);
  const eligible = isIndexEligible({ path, locale, family, approved: approved ?? false });
  const indexable = siteConfig.indexable && eligible;

  // Every page points at itself. A translation is not a duplicate, and a noindex page must not
  // also send its signals to another URL.
  const canonical = localizedUrl(locale, path);

  // hreflang only makes sense between real, indexable language versions.
  const languages =
    eligible && published.length > 1
      ? {
          ...Object.fromEntries(published.map((l) => [l, localizedUrl(l, path)])),
          "x-default": localizedUrl(defaultLocale, path),
        }
      : undefined;

  const image = {
    url: `${locale === defaultLocale ? "" : `/${locale}`}/og${ogCardFor(path)}`,
    width: 1200,
    height: 630,
    alt: title,
    type: "image/png",
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: { canonical, ...(languages ? { languages } : {}) },
    // Crawlers may follow links out of a noindex page on the real site, but not on a preview.
    robots: { index: indexable, follow: siteConfig.indexable },
    openGraph: {
      siteName: siteConfig.name,
      title,
      description,
      url: canonical,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      images: [image],
      ...(article
        ? {
            type: "article" as const,
            publishedTime: article.publishedTime,
            ...(article.modifiedTime ? { modifiedTime: article.modifiedTime } : {}),
            authors: article.authors,
          }
        : { type: "website" as const }),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
