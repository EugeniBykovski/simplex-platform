import type { WorkSlug } from "@/config/routes";
import type { WorkProjectStructure } from "./types";

/** Each case uses its own composition in the design: A, B or C. */
export const workCatalog: Record<
  WorkSlug,
  { viz: "fintech" | "healthcare" | "logistics"; next: WorkSlug }
> = {
  ledgerline: { viz: "fintech", next: "carepath" },
  carepath: { viz: "healthcare", next: "routewise" },
  routewise: { viz: "logistics", next: "ledgerline" },
};

/**
 * The six projects in Work.dc.html, in its order. All are illustrative concepts, as that page says.
 * See docs/content/portfolio-attribution-register.md.
 */
export const workProjects: readonly WorkProjectStructure[] = [
  {
    id: "ledgerline",
    name: "Ledgerline",
    industry: "fintech",
    services: ["custom", "cloud"],
    slug: "ledgerline",
  },
  {
    id: "carepath",
    name: "Carepath",
    industry: "healthcare",
    services: ["design", "web-mobile", "ai"],
    slug: "carepath",
  },
  {
    id: "routewise",
    name: "Routewise",
    industry: "logistics",
    services: ["web-mobile", "custom", "ai"],
    slug: "routewise",
  },
  { id: "northbeam", name: "Northbeam", industry: "saas", services: ["cloud", "modernisation"] },
  {
    id: "atlas-commerce",
    name: "Atlas Commerce",
    industry: "ecommerce",
    services: ["web-mobile", "design"],
  },
  {
    id: "meridian-works",
    name: "Meridian Works",
    industry: "enterprise",
    services: ["custom", "modernisation"],
  },
];
