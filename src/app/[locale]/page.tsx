import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HomeAgent } from "@/components/sections/home/home-agent";
import { HomeCta } from "@/components/sections/home/home-cta";
import { HomeEngagement } from "@/components/sections/home/home-engagement";
import { HomeEstimator } from "@/components/sections/home/home-estimator";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeHow } from "@/components/sections/home/home-how";
import { HomeIndustries } from "@/components/sections/home/home-industries";
import { HomeInsights } from "@/components/sections/home/home-insights";
import { HomeModels } from "@/components/sections/home/home-models";
import { HomePackages } from "@/components/sections/home/home-packages";
import { HomeTechnology } from "@/components/sections/home/home-technology";
import { HomeWhatWeDo } from "@/components/sections/home/home-what-we-do";
import { HomeWhy } from "@/components/sections/home/home-why";
import { HomeWork } from "@/components/sections/home/home-work";
import { getHomeContent } from "@/content/home";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { JsonLd } from "@/components/seo/json-ld";
import { homeJsonLd } from "@/lib/seo/jsonld";
import { buildPageMetadata, isIndexEligible } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getHomeContent(locale).meta;
  return buildPageMetadata({ locale, family: "home", path: "/", title, description });
}

/** The section order follows Home.dc.html. */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("home", locale)) notFound();
  setRequestLocale(locale);

  const content = getHomeContent(locale);

  return (
    <main>
      {isIndexEligible({ path: "/", locale, family: "home" }) ? (
        <JsonLd data={homeJsonLd(locale, content.meta.description)} />
      ) : null}
      <HomeHero hero={content.hero} statements={content.statements} />
      <HomeWhatWeDo content={content.whatWeDo} />
      <HomeAgent content={content.agent} />
      <HomePackages content={content.packages} />
      <HomeWhy content={content.why} />
      <HomeWork content={content.work} locale={locale} />
      <HomeHow content={content.how} />
      <HomeIndustries content={content.industries} />
      <HomeTechnology content={content.technology} />
      <HomeModels content={content.models} />
      <HomeEngagement content={content.engagement} />
      <HomeInsights content={content.insights} />
      <HomeEstimator content={content.estimator} />
      <HomeCta content={content.cta} />
    </main>
  );
}
