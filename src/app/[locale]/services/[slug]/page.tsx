import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ServiceCapabilities,
  ServiceCta,
  ServiceFirst30,
  ServiceFit,
  ServiceHero,
  ServiceProblem,
  ServiceProcess,
  ServiceRelated,
  ServiceValue,
} from "@/components/sections/services/service-sections";
import { JsonLd } from "@/components/seo/json-ld";
import { industrySlugs, serviceSlugs, type ServiceSlug } from "@/config/routes";
import { getIndustryPage, industryCatalog } from "@/content/industries";
import { getServicePage, getServiceShared, serviceCatalog } from "@/content/services";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { serviceJsonLd } from "@/lib/seo/jsonld";
import { buildPageMetadata, isIndexEligible } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

/** Unknown slugs get the real 404, since only the design's twelve pages are generated. */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

const isServiceSlug = (slug: string): slug is ServiceSlug =>
  (serviceSlugs as readonly string[]).includes(slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale) || !isServiceSlug(slug)) return {};

  const { title, description } = getServicePage(locale, slug).meta;
  return buildPageMetadata({
    locale,
    family: "services",
    path: `/services/${slug}`,
    title,
    description,
  });
}

/** The section order follows ServicePage.dc.html. */
export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (
    !hasLocale(routing.locales, locale) ||
    !isServiceSlug(slug) ||
    !isLocaleAvailable("services", locale)
  ) {
    notFound();
  }
  setRequestLocale(locale);

  const page = getServicePage(locale, slug);
  const shared = getServiceShared(locale);
  const structure = serviceCatalog[slug];
  const relatedPages = Object.fromEntries(
    structure.related.map((related) => [related, getServicePage(locale, related)]),
  ) as Record<ServiceSlug, typeof page>;

  // The design's own pairing: an industry page lists this service among its capabilities.
  const industries = industrySlugs
    .filter((industry) => (industryCatalog[industry].services as readonly string[]).includes(slug))
    .map((industry) => ({
      href: `/industries/${industry}`,
      name: getIndustryPage(locale, industry).name,
    }));
  const path = `/services/${slug}`;

  return (
    <main>
      {isIndexEligible({ path, locale, family: "services" }) ? (
        <JsonLd
          data={serviceJsonLd({
            locale,
            path,
            name: page.title,
            description: page.meta.description,
          })}
        />
      ) : null}
      <ServiceHero page={page} shared={shared} structure={structure} path={path} />
      <ServiceProblem page={page} eyebrow={shared.problemEyebrow} />
      <ServiceCapabilities page={page} eyebrow={shared.capsEyebrow} />
      <ServiceValue page={page} content={shared.value} />
      <ServiceProcess page={page} content={shared.process} />
      <ServiceFit page={page} tech={shared.tech} uses={shared.uses} />
      <ServiceRelated
        structure={structure}
        relatedPages={relatedPages}
        shared={shared}
        industries={industries}
      />
      <ServiceFirst30 content={shared.first30} />
      <ServiceCta page={page} content={shared.cta} />
    </main>
  );
}
