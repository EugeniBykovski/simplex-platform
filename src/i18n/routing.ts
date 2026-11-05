import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  // English keeps the approved design URLs (/about). Russian lives under /ru/about.
  localePrefix: "as-needed",
  // No Accept-Language redirects: every URL returns the same language for every visitor and
  // crawler, which keeps pages statically cacheable and canonicals unambiguous.
  localeDetection: false,
  localeCookie: false,
  // hreflang is emitted per page by lib/seo, gated on translation status.
  alternateLinks: false,
});
