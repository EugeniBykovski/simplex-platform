import type { Locale } from "@/i18n/routing";
import { en } from "./en";
import { ru } from "./ru";
import type { HomeContent } from "./types";

const content: Record<Locale, HomeContent> = { en, ru };

export function getHomeContent(locale: Locale): HomeContent {
  return content[locale];
}

export type { HomeContent } from "./types";
