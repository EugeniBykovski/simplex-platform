import type { Metadata } from "next";
import type { RouteFamily } from "@/config/routes";
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

export type PageMetadataInput = {
  locale: Locale;
  family: RouteFamily;
  /** Locale-neutral path, for example "/services/web-development". */
  path: string;
  title: string;
  description: string;
  /** Force noindex regardless of environment, for example on /contact/thank-you. */
  noindex?: boolean;
};

export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const { locale, family, path, title, description, noindex = false } = input;
  const published = publishedLocales(family);
  const indexable = siteConfig.indexable && !noindex && published.includes(locale);

  // An unreviewed translation canonicalises to English so it cannot compete with it.
  const canonical = localizedUrl(published.includes(locale) ? locale : defaultLocale, path);

  // hreflang only makes sense with at least two real language versions.
  const languages =
    published.length > 1
      ? {
          ...Object.fromEntries(published.map((l) => [l, localizedUrl(l, path)])),
          "x-default": localizedUrl(defaultLocale, path),
        }
      : undefined;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: { canonical, ...(languages ? { languages } : {}) },
    robots: { index: indexable, follow: indexable },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: canonical,
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
    twitter: { card: "summary", title, description },
  };
}
