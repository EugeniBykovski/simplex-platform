import type { RouteFamily } from "@/config/routes";
import { defaultLocale, type Locale } from "@/i18n/routing";

/**
 * "draft" pages render for review but stay noindex and out of hreflang.
 * "approved" means a human reviewed the Russian copy, including its factual claims.
 * Russian is added per route family as each page ticket ships.
 */
export type TranslationStatus = "missing" | "draft" | "approved";

export const russianTranslationStatus: Record<RouteFamily, TranslationStatus> = {
  home: "draft",
  agent: "missing",
  services: "missing",
  packages: "missing",
  industries: "missing",
  work: "missing",
  company: "missing",
  careers: "missing",
  insights: "missing",
  contact: "missing",
  legal: "missing",
  system: "missing",
};

/** A page with no translation for this locale must 404 rather than show the wrong language. */
export function isLocaleAvailable(family: RouteFamily, locale: Locale): boolean {
  return locale === defaultLocale || russianTranslationStatus[family] !== "missing";
}
