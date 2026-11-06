import type { Locale } from "@/i18n/routing";
import { content as en } from "./en";
import { content as ru } from "./ru";
import type { PackagesContent } from "./types";

const contents: Record<Locale, PackagesContent> = { en, ru };

export function getPackagesContent(locale: Locale): PackagesContent {
  return contents[locale];
}

export { packageCatalog } from "./catalog";
export { defaultTrack, packageIds, trackIds } from "./types";
export type * from "./types";
