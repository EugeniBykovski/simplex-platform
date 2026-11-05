import type { Locale } from "@/i18n/routing";
import { en } from "./en";
import { ru } from "./ru";
import type { AgentContent } from "./types";

const content: Record<Locale, AgentContent> = { en, ru };

export function getAgentContent(locale: Locale): AgentContent {
  return content[locale];
}

export type { AgentContent } from "./types";
