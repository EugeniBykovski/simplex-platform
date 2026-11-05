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

/**
 * Routes that have a page today. Each page ticket adds its own. The 404 page offers only these,
 * so it never links to another 404.
 */
export const implementedRoutes: readonly string[] = ["/"];
