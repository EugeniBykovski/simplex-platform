import type { Locale } from "@/i18n/routing";
import { contact as en, type ContactCopy } from "./en";
import { contact as ru } from "./ru";

const contact: Record<Locale, ContactCopy> = { en, ru };

export const getContact = (locale: Locale) => contact[locale];

export type { ContactCopy };
