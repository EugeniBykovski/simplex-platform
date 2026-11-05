import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ServicesCompare,
  ServicesCta,
  ServicesGroups,
  ServicesHero,
  ServicesMatrix,
} from "@/components/sections/services/services-overview";
import { getServicesOverview } from "@/content/services";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getServicesOverview(locale).meta;
  return buildPageMetadata({ locale, family: "services", path: "/services", title, description });
}

/** The section order follows Services.dc.html. */
export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("services", locale)) notFound();
  setRequestLocale(locale);

  const content = getServicesOverview(locale);

  return (
    <main>
      <ServicesHero content={content} />
      <ServicesGroups groups={content.groups} />
      <ServicesMatrix content={content.matrix} />
      <ServicesCompare content={content.compare} />
      <ServicesCta content={content.cta} />
    </main>
  );
}
