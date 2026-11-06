import type { IndustrySlug } from "@/config/routes";
import type { Locale } from "@/i18n/routing";
import { page as enEcommerce } from "./en/ecommerce";
import { page as enEnterprise } from "./en/enterprise";
import { page as enFintech } from "./en/fintech";
import { page as enHealthcare } from "./en/healthcare";
import { page as enLogistics } from "./en/logistics";
import { overview as enOverview } from "./en/overview";
import { page as enSaas } from "./en/saas";
import { shared as enShared } from "./en/shared";
import { page as ruEcommerce } from "./ru/ecommerce";
import { page as ruEnterprise } from "./ru/enterprise";
import { page as ruFintech } from "./ru/fintech";
import { page as ruHealthcare } from "./ru/healthcare";
import { page as ruLogistics } from "./ru/logistics";
import { overview as ruOverview } from "./ru/overview";
import { page as ruSaas } from "./ru/saas";
import { shared as ruShared } from "./ru/shared";
import type { IndustriesOverviewCopy, IndustryPageCopy, IndustrySharedCopy } from "./types";

const pages: Record<Locale, Record<IndustrySlug, IndustryPageCopy>> = {
  en: {
    fintech: enFintech,
    healthcare: enHealthcare,
    ecommerce: enEcommerce,
    saas: enSaas,
    enterprise: enEnterprise,
    logistics: enLogistics,
  },
  ru: {
    fintech: ruFintech,
    healthcare: ruHealthcare,
    ecommerce: ruEcommerce,
    saas: ruSaas,
    enterprise: ruEnterprise,
    logistics: ruLogistics,
  },
};

const overviews: Record<Locale, IndustriesOverviewCopy> = { en: enOverview, ru: ruOverview };
const sharedCopy: Record<Locale, IndustrySharedCopy> = { en: enShared, ru: ruShared };

export function getIndustryPage(locale: Locale, slug: IndustrySlug): IndustryPageCopy {
  return pages[locale][slug];
}

export function getIndustriesOverview(locale: Locale): IndustriesOverviewCopy {
  return overviews[locale];
}

export function getIndustryShared(locale: Locale): IndustrySharedCopy {
  return sharedCopy[locale];
}

export { industryCatalog } from "./catalog";
export type * from "./types";
