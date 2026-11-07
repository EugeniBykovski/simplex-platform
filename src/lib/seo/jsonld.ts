import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routing";
import { localizedUrl } from "./metadata";

/**
 * Typed JSON-LD builders. Only facts the site can stand behind: there is deliberately no legal name,
 * address, phone, rating, review, founding date or price. See docs/seo/structured-data.md.
 */
const organizationId = () => `${siteConfig.url}/#organization`;
const websiteId = () => `${siteConfig.url}/#website`;

export function homeJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId(),
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/apple-icon.png`,
      },
      {
        "@type": "WebSite",
        "@id": websiteId(),
        name: siteConfig.name,
        url: siteConfig.url,
        description,
        inLanguage: locale,
        publisher: { "@id": organizationId() },
      },
    ],
  };
}

export function serviceJsonLd(input: {
  locale: Locale;
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: localizedUrl(input.locale, input.path),
    inLanguage: input.locale,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}

/**
 * Mirrors the visible breadcrumb. A crumb with no page of its own is left out, as the schema needs a
 * URL for each item but the last.
 */
export function breadcrumbJsonLd(
  locale: Locale,
  path: string,
  items: readonly { label: string; href?: string }[],
) {
  const linked = items.filter((item, index) => item.href || index === items.length - 1);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: linked.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: localizedUrl(locale, index === linked.length - 1 ? path : (item.href ?? path)),
    })),
  };
}
