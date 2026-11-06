import type { Locale } from "@/i18n/routing";
import { page as enCarepath } from "./en/carepath";
import { page as enLedgerline } from "./en/ledgerline";
import { overview as enOverview } from "./en/overview";
import { page as enRoutewise } from "./en/routewise";
import { shared as enShared } from "./en/shared";
import { page as ruCarepath } from "./ru/carepath";
import { page as ruLedgerline } from "./ru/ledgerline";
import { overview as ruOverview } from "./ru/overview";
import { page as ruRoutewise } from "./ru/routewise";
import { shared as ruShared } from "./ru/shared";
import type {
  CarepathCopy,
  CaseCopy,
  RoutewiseCopy,
  WorkOverviewCopy,
  WorkSharedCopy,
} from "./types";

type Cases = { ledgerline: CaseCopy; carepath: CarepathCopy; routewise: RoutewiseCopy };

const cases: Record<Locale, Cases> = {
  en: { ledgerline: enLedgerline, carepath: enCarepath, routewise: enRoutewise },
  ru: { ledgerline: ruLedgerline, carepath: ruCarepath, routewise: ruRoutewise },
};

const overviews: Record<Locale, WorkOverviewCopy> = { en: enOverview, ru: ruOverview };
const sharedCopy: Record<Locale, WorkSharedCopy> = { en: enShared, ru: ruShared };

export function getWorkCases(locale: Locale): Cases {
  return cases[locale];
}

export function getWorkOverview(locale: Locale): WorkOverviewCopy {
  return overviews[locale];
}

export function getWorkShared(locale: Locale): WorkSharedCopy {
  return sharedCopy[locale];
}

export { workCatalog, workProjects } from "./catalog";
export type * from "./types";
