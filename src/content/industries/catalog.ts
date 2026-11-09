import type { IndustrySlug } from "@/config/routes";
import type { IndustryStructure } from "./types";

/** The structure of each industry page, from IndustryPage.dc.html. It does not vary by locale. */
export const industryCatalog: Record<IndustrySlug, IndustryStructure> = {
  fintech: {
    icon: "fintech",
    viz: "fintech",
    services: [
      "custom-software-development",
      "cloud-devops",
      "ai-engineering",
      "quality-engineering",
    ],
    project: "financialpress",
  },
  healthcare: {
    icon: "health",
    viz: "healthcare",
    heroScrim: true,
    services: ["product-design", "mobile-development", "web-development", "ai-engineering"],
  },
  ecommerce: {
    icon: "commerce",
    viz: "ecommerce",
    services: ["web-development", "cloud-devops", "product-design", "quality-engineering"],
    project: "simple-market",
  },
  saas: {
    icon: "saas",
    viz: "saas",
    services: [
      "architecture-consulting",
      "cloud-devops",
      "custom-software-development",
      "ai-engineering",
    ],
    project: "simplefit-boxing",
  },
  enterprise: {
    icon: "building",
    viz: "enterprise",
    services: [
      "enterprise-software",
      "legacy-modernization",
      "architecture-consulting",
      "cloud-devops",
    ],
    project: "simple-house",
  },
  logistics: {
    icon: "logistics",
    viz: "logistics",
    services: [
      "mobile-development",
      "custom-software-development",
      "cloud-devops",
      "ai-engineering",
    ],
    project: "wait",
  },
};
