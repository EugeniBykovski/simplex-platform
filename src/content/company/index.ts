import type { Locale } from "@/i18n/routing";
import { about as enAbout, type AboutCopy } from "./en/about";
import { howWeWork as enHow, type HowWeWorkCopy } from "./en/how-we-work";
import { technologies as enTech, type TechnologiesCopy } from "./en/technologies";
import { about as ruAbout } from "./ru/about";
import { howWeWork as ruHow } from "./ru/how-we-work";
import { technologies as ruTech } from "./ru/technologies";

const about: Record<Locale, AboutCopy> = { en: enAbout, ru: ruAbout };
const how: Record<Locale, HowWeWorkCopy> = { en: enHow, ru: ruHow };
const tech: Record<Locale, TechnologiesCopy> = { en: enTech, ru: ruTech };

export const getAbout = (locale: Locale) => about[locale];
export const getHowWeWork = (locale: Locale) => how[locale];
export const getTechnologies = (locale: Locale) => tech[locale];

export type { AboutCopy, HowWeWorkCopy, TechnologiesCopy };
