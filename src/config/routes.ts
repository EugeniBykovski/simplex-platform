import { jobPositions } from "@/content/careers/positions";

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
  "telegram-bots",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

/** The six industry pages in the design. There are no others, and no catch-all route. */
export const industrySlugs = [
  "fintech",
  "healthcare",
  "ecommerce",
  "saas",
  "enterprise",
  "logistics",
] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

/** The eight founder-approved projects (SF-157), in portfolio order. */
export const workSlugs = [
  "simplefit-boxing",
  "financialpress",
  "hobworks",
  "simple-house",
  "simple-market",
  "deeply",
  "wait",
  "anyway",
] as const;

export type WorkSlug = (typeof workSlugs)[number];

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
  "/industries",
  ...industrySlugs.map((slug) => `/industries/${slug}`),
  "/work",
  ...workSlugs.map((slug) => `/work/${slug}`),
  "/about",
  "/how-we-work",
  "/technologies",
  "/careers",
  ...jobPositions.map(({ slug }) => `/careers/${slug}`),
  "/insights",
  "/contact",
  "/contact/thank-you",
  "/privacy-policy",
  "/cookie-policy",
  "/terms",
];

export function isImplementedRoute(href: string): boolean {
  // A query or fragment never changes which page a link reaches.
  return implementedRoutes.includes(href.split(/[?#]/)[0] ?? href);
}

/**
 * The one list of static pages approved for search. Robots tags, the sitemap and structured data
 * all read it, so they cannot disagree. Articles and legal documents join through their own
 * approval records instead. Add a route only when its blockers in docs/seo/route-seo-matrix.md close.
 */
export const indexableRoutes: readonly { path: string; family: RouteFamily }[] = [
  { path: "/", family: "home" },
  { path: "/services", family: "services" },
  ...serviceSlugs.map((slug) => ({ path: `/services/${slug}`, family: "services" as const })),
];

/** The family a concrete path belongs to, matching its pattern in routeFamilies. */
export function familyOfPath(path: string): RouteFamily {
  const [, first = ""] = path.split("/");
  const root = `/${first}`;
  const found = (Object.keys(routeFamilies) as RouteFamily[]).find((family) =>
    routeFamilies[family].some((pattern) => pattern === path || pattern === root),
  );
  return found ?? "system";
}

/** Pages with their own social card. Anything else falls back through ogCardFor in lib/seo. */
export const ogCardPaths: readonly string[] = [
  "/agent",
  "/services",
  ...serviceSlugs.map((slug) => `/services/${slug}`),
  "/packages",
  "/industries",
  ...industrySlugs.map((slug) => `/industries/${slug}`),
  "/work",
  ...workSlugs.map((slug) => `/work/${slug}`),
  "/about",
  "/how-we-work",
  "/technologies",
  "/careers",
  "/insights",
  "/contact",
];
