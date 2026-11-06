import type { WorkOverviewCopy } from "../types";

/** From Work.dc.html. Changes are listed in docs/content/portfolio-attribution-register.md. */
export const overview: WorkOverviewCopy = {
  meta: {
    title: "Our Work — demonstration projects — SimpleX",
    description:
      "Illustrative concepts that show how SimpleX approaches hard software problems across industries and services. These are demonstrations, not client work.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "Our Work" },
  hero: {
    lines: ["Hard problems,", "made simple to use."],
    lead: "Illustrative concepts across industries and services. Each one starts with a messy, specific problem and shows how we would approach it.",
    noticeTitle: "Demonstration content.",
    notice:
      "Projects on this page are illustrative concepts that show our case-study format. They are not client work.",
    demoTag: "Demonstration",
  },
  featured: {
    tag: "Featured",
    tagline: "From overnight reconciliation to a live view of every position.",
    chips: ["Custom Software", "Cloud & DevOps", "Kotlin · Kafka"],
    read: "Read case study",
    mock: {
      title: "Ledgerline · Positions",
      live: "Sample",
      kpis: [
        { label: "EUR", value: "—" },
        { label: "USD", value: "—" },
        { label: "GBP", value: "—" },
      ],
    },
  },
  grid: {
    title: "All projects",
    industryLabel: "Industry",
    industryGroup: "Filter by industry",
    serviceLabel: "Service",
    serviceGroup: "Filter by service",
    all: "All",
    industries: {
      fintech: "FinTech",
      healthcare: "Healthcare",
      ecommerce: "E-commerce",
      saas: "SaaS",
      enterprise: "Enterprise",
      logistics: "Logistics",
    },
    services: {
      custom: "Custom Software",
      "web-mobile": "Web & Mobile",
      ai: "AI Engineering",
      cloud: "Cloud & DevOps",
      design: "Product Design",
      modernisation: "Modernisation",
    },
    count: {
      one: "{count} project · demonstration content",
      other: "{count} projects · demonstration content",
    },
    lines: {
      ledgerline: "Real-time treasury platform with continuous reconciliation and approvals.",
      carepath: "Unified patient intake and triage across clinic sites, integrated via FHIR.",
      routewise: "Route orchestration with live telematics and an offline-first driver app.",
      northbeam: "A usage-analytics product re-architected for multi-tenancy and enterprise SSO.",
      "atlas-commerce": "Headless storefront and order management built for seasonal peaks.",
      "meridian-works":
        "Finance and procurement workflows moved from email to an auditable platform.",
    },
    read: "Read case study",
    noCase: "Concept only · no full case study",
    empty: {
      title: "No projects match these filters",
      body: "Try a different combination — or ask us directly.",
      clear: "Clear filters",
      ask: "Ask about relevant work",
    },
  },
  cta: {
    title: "Tell us about your project.",
    lead: "Tell us what you’re building, and we’ll tell you how we’d approach it.",
    primary: "Start a Project",
  },
};
