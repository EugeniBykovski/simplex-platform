import type { ServiceSlug } from "@/config/routes";
import type { CaseKey, ServiceStructure } from "./types";

/** The structure of each service page, from ServicePage.dc.html. It does not vary by locale. */
export const serviceCatalog: Record<ServiceSlug, ServiceStructure> = {
  "custom-software-development": {
    idx: "S01",
    theme: "light",
    visual: "code",
    icon: "custom",
    related: ["architecture-consulting", "product-design", "quality-engineering"],
    cases: ["ledgerline", "routewise"],
  },
  "enterprise-software": {
    idx: "S02",
    theme: "dark",
    visual: "arch",
    icon: "enterprise",
    related: ["legacy-modernization", "cloud-devops", "architecture-consulting"],
    cases: ["routewise", "ledgerline"],
  },
  "web-development": {
    idx: "S03",
    theme: "light",
    visual: "device",
    icon: "web",
    related: ["product-design", "mobile-development", "quality-engineering"],
    cases: ["carepath", "ledgerline"],
  },
  "mobile-development": {
    idx: "S04",
    theme: "dark",
    visual: "device",
    icon: "mobile",
    related: ["web-development", "product-design", "quality-engineering"],
    cases: ["routewise", "carepath"],
  },
  "desktop-development": {
    idx: "S12",
    theme: "dark",
    visual: "desktop",
    icon: "desktop",
    related: ["mobile-development", "legacy-modernization", "product-design"],
    cases: ["routewise", "ledgerline"],
  },
  "ai-engineering": {
    idx: "S05",
    theme: "light",
    visual: "graph",
    icon: "ai",
    related: ["architecture-consulting", "cloud-devops", "quality-engineering"],
    cases: ["carepath", "ledgerline"],
  },
  "cloud-devops": {
    idx: "S06",
    theme: "dark",
    visual: "pipeline",
    icon: "cloud",
    related: ["legacy-modernization", "architecture-consulting", "quality-engineering"],
    cases: ["ledgerline", "routewise"],
  },
  "architecture-consulting": {
    idx: "S07",
    theme: "light",
    visual: "arch",
    icon: "architecture",
    related: ["legacy-modernization", "enterprise-software", "cloud-devops"],
    cases: ["ledgerline", "routewise"],
  },
  "product-design": {
    idx: "S08",
    theme: "dark",
    visual: "device",
    icon: "design",
    related: ["web-development", "mobile-development", "custom-software-development"],
    cases: ["carepath", "routewise"],
  },
  "legacy-modernization": {
    idx: "S09",
    theme: "light",
    visual: "arch",
    icon: "legacy",
    related: ["architecture-consulting", "cloud-devops", "quality-engineering"],
    cases: ["routewise", "ledgerline"],
  },
  "quality-engineering": {
    idx: "S10",
    theme: "dark",
    visual: "pipeline",
    icon: "quality",
    related: ["cloud-devops", "web-development", "legacy-modernization"],
    cases: ["ledgerline", "carepath"],
  },
  "dedicated-teams": {
    idx: "S11",
    theme: "light",
    visual: "team",
    icon: "teams",
    related: ["custom-software-development", "quality-engineering", "cloud-devops"],
    cases: ["routewise", "carepath"],
  },
};

export const caseStudies: Record<
  CaseKey,
  { name: string; href: string; viz: "fintech" | "healthcare" | "logistics" }
> = {
  ledgerline: { name: "Ledgerline", href: "/work/ledgerline", viz: "fintech" },
  carepath: { name: "Carepath", href: "/work/carepath", viz: "healthcare" },
  routewise: { name: "Routewise", href: "/work/routewise", viz: "logistics" },
};
