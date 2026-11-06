/**
 * Route families from the approved design. docs/architecture/route-registry.json holds the full
 * per-route record; scripts/validate-docs.mjs fails if the two disagree.
 */
export const routeFamilies = {
  home: ["/"],
  agent: ["/agent"],
  services: ["/services", "/services/[slug]"],
  packages: ["/packages"],
  industries: ["/industries", "/industries/[slug]"],
  work: ["/work", "/work/[slug]"],
  company: ["/about", "/how-we-work", "/technologies"],
  careers: ["/careers", "/careers/[slug]"],
  insights: ["/insights", "/insights/[slug]"],
  contact: ["/contact", "/contact/thank-you"],
  legal: ["/privacy-policy", "/cookie-policy", "/terms"],
  system: ["/404"],
} as const;

export type RouteFamily = keyof typeof routeFamilies;

/** The twelve service pages in the design. There are no others, and no catch-all route. */
export const serviceSlugs = [
  "custom-software-development",
  "enterprise-software",
  "web-development",
  "mobile-development",
  "desktop-development",
  "ai-engineering",
  "cloud-devops",
  "architecture-consulting",
  "product-design",
  "legacy-modernization",
  "quality-engineering",
  "dedicated-teams",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

/**
 * Routes that have a page today. Each page ticket adds its own. The 404 page offers only these,
 * so it never links to another 404.
 */
export const implementedRoutes: readonly string[] = [
  "/",
  "/agent",
  "/services",
  ...serviceSlugs.map((slug) => `/services/${slug}`),
  "/packages",
];

export function isImplementedRoute(href: string): boolean {
  return implementedRoutes.includes(href);
}

/**
 * Routes approved for search, which feed sitemap.ts. Empty until real pages ship: the placeholder
 * home is deliberately not listed. Each page ticket adds its route when its blockers in
 * docs/seo/page-seo-matrix.md are closed.
 */
export const indexableRoutes: readonly { path: string; family: RouteFamily }[] = [];
