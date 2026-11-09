import type { ServiceSlug } from "@/config/routes";
import type { Locale } from "@/i18n/routing";
import { page as enAi } from "./en/ai-engineering";
import { page as enArchitecture } from "./en/architecture-consulting";
import { page as enCloud } from "./en/cloud-devops";
import { page as enCustom } from "./en/custom-software-development";
import { page as enTeams } from "./en/dedicated-teams";
import { page as enTelegram } from "./en/telegram-bots";
import { page as enDesktop } from "./en/desktop-development";
import { page as enEnterprise } from "./en/enterprise-software";
import { page as enLegacy } from "./en/legacy-modernization";
import { page as enMobile } from "./en/mobile-development";
import { overview as enOverview } from "./en/overview";
import { page as enDesign } from "./en/product-design";
import { page as enQuality } from "./en/quality-engineering";
import { shared as enShared } from "./en/shared";
import { page as enWeb } from "./en/web-development";
import { page as ruAi } from "./ru/ai-engineering";
import { page as ruArchitecture } from "./ru/architecture-consulting";
import { page as ruCloud } from "./ru/cloud-devops";
import { page as ruCustom } from "./ru/custom-software-development";
import { page as ruTeams } from "./ru/dedicated-teams";
import { page as ruTelegram } from "./ru/telegram-bots";
import { page as ruDesktop } from "./ru/desktop-development";
import { page as ruEnterprise } from "./ru/enterprise-software";
import { page as ruLegacy } from "./ru/legacy-modernization";
import { page as ruMobile } from "./ru/mobile-development";
import { overview as ruOverview } from "./ru/overview";
import { page as ruDesign } from "./ru/product-design";
import { page as ruQuality } from "./ru/quality-engineering";
import { shared as ruShared } from "./ru/shared";
import { page as ruWeb } from "./ru/web-development";
import type { ServicePageCopy, ServiceSharedCopy, ServicesOverviewCopy } from "./types";

const pages: Record<Locale, Record<ServiceSlug, ServicePageCopy>> = {
  en: {
    "custom-software-development": enCustom,
    "enterprise-software": enEnterprise,
    "web-development": enWeb,
    "mobile-development": enMobile,
    "desktop-development": enDesktop,
    "ai-engineering": enAi,
    "cloud-devops": enCloud,
    "architecture-consulting": enArchitecture,
    "product-design": enDesign,
    "legacy-modernization": enLegacy,
    "quality-engineering": enQuality,
    "dedicated-teams": enTeams,
    "telegram-bots": enTelegram,
  },
  ru: {
    "custom-software-development": ruCustom,
    "enterprise-software": ruEnterprise,
    "web-development": ruWeb,
    "mobile-development": ruMobile,
    "desktop-development": ruDesktop,
    "ai-engineering": ruAi,
    "cloud-devops": ruCloud,
    "architecture-consulting": ruArchitecture,
    "product-design": ruDesign,
    "legacy-modernization": ruLegacy,
    "quality-engineering": ruQuality,
    "dedicated-teams": ruTeams,
    "telegram-bots": ruTelegram,
  },
};

const overviews: Record<Locale, ServicesOverviewCopy> = { en: enOverview, ru: ruOverview };
const sharedCopy: Record<Locale, ServiceSharedCopy> = { en: enShared, ru: ruShared };

export function getServicePage(locale: Locale, slug: ServiceSlug): ServicePageCopy {
  return pages[locale][slug];
}

export function getServicesOverview(locale: Locale): ServicesOverviewCopy {
  return overviews[locale];
}

export function getServiceShared(locale: Locale): ServiceSharedCopy {
  return sharedCopy[locale];
}

export { serviceCatalog } from "./catalog";
export type * from "./types";
