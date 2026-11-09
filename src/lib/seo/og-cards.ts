import "server-only";
import { ogCardPaths, type IndustrySlug, type ServiceSlug, type WorkSlug } from "@/config/routes";
import { getAgentContent } from "@/content/agent";
import { getCareers } from "@/content/careers";
import { getAbout, getHowWeWork, getTechnologies } from "@/content/company";
import { getContact } from "@/content/contact";
import { getHomeContent } from "@/content/home";
import { getIndustriesOverview, getIndustryPage } from "@/content/industries";
import { getInsightsCopy } from "@/content/insights";
import { getPackagesContent } from "@/content/packages";
import { getServicePage, getServicesOverview } from "@/content/services";
import { getProject, getWorkOverview, getWorkShared } from "@/content/work";
import type { Locale } from "@/i18n/routing";

export const ogCardKeys = ["home", ...ogCardPaths.map((path) => path.slice(1))];

const sections: Record<Locale, Record<string, string>> = {
  en: {
    home: "Software engineering",
    agent: "Agent",
    services: "Services",
    packages: "Build packages",
    industries: "Industries",
    work: "Our Work",
    about: "Company",
    "how-we-work": "Company",
    technologies: "Company",
    careers: "Careers",
    insights: "Insights",
    contact: "Contact",
  },
  ru: {
    home: "Разработка ПО",
    agent: "Агент",
    services: "Услуги",
    packages: "Пакеты разработки",
    industries: "Отрасли",
    work: "Проекты",
    about: "Компания",
    "how-we-work": "Компания",
    technologies: "Компания",
    careers: "Карьера",
    insights: "Статьи",
    contact: "Контакты",
  },
};

function pageTitle(locale: Locale, key: string): string {
  const [section, slug] = key.split("/");
  if (slug && section === "services") return getServicePage(locale, slug as ServiceSlug).meta.title;
  if (slug && section === "industries") {
    return getIndustryPage(locale, slug as IndustrySlug).meta.title;
  }
  if (slug && section === "work") {
    const project = getProject(slug as WorkSlug);
    return getWorkShared(locale).meta(project.name, project.words[locale].tagline).title;
  }
  switch (section) {
    case "home":
      return getHomeContent(locale).meta.title;
    case "agent":
      return getAgentContent(locale).meta.title;
    case "services":
      return getServicesOverview(locale).meta.title;
    case "packages":
      return getPackagesContent(locale).meta.title;
    case "industries":
      return getIndustriesOverview(locale).meta.title;
    case "work":
      return getWorkOverview(locale).meta.title;
    case "about":
      return getAbout(locale).meta.title;
    case "how-we-work":
      return getHowWeWork(locale).meta.title;
    case "technologies":
      return getTechnologies(locale).meta.title;
    case "careers":
      return getCareers(locale).meta.title;
    case "insights":
      return getInsightsCopy(locale).meta.title;
    default:
      return getContact(locale).meta.title;
  }
}

/** A card repeats the page's approved title, so it can never claim more than the page does. */
export function getOgCard(locale: Locale, key: string) {
  const section = key.split("/")[0] ?? "home";
  const title = pageTitle(locale, key)
    .replace(/ [—-] SimpleX$/, "")
    .replace(/^SimpleX [—-] /, "");
  return { eyebrow: sections[locale][section] ?? "SimpleX", title };
}
