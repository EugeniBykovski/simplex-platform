import type { Locale } from "@/i18n/routing";
import { careers as en, type CareersCopy } from "./en/careers";
import { careers as ru } from "./ru/careers";

const careers: Record<Locale, CareersCopy> = { en, ru };

export const getCareers = (locale: Locale) => careers[locale];

export { jobPositions } from "./positions";
export type { JobCopy, JobPosition } from "./positions";
export type { CareersCopy };
