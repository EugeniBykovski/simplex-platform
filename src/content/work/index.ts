import type { Locale } from "@/i18n/routing";
import { overview as enOverview } from "./en/overview";
import { shared as enShared } from "./en/shared";
import { overview as ruOverview } from "./ru/overview";
import { shared as ruShared } from "./ru/shared";
import type { WorkOverviewCopy, WorkSharedCopy } from "./types";

const overviews: Record<Locale, WorkOverviewCopy> = { en: enOverview, ru: ruOverview };
const sharedCopy: Record<Locale, WorkSharedCopy> = { en: enShared, ru: ruShared };

export function getWorkOverview(locale: Locale): WorkOverviewCopy {
  return overviews[locale];
}

export function getWorkShared(locale: Locale): WorkSharedCopy {
  return sharedCopy[locale];
}

export { getProject, nextProject, projects } from "./projects";
export type * from "./projects";
export type * from "./types";
