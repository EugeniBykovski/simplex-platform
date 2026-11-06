import type { IndustryPageCopy } from "../types";

/** From IndustryPage.dc.html, slug "ecommerce". Changes are listed in docs/content/industries-claims-register.md. */
export const page: IndustryPageCopy = {
  meta: {
    title: "E-commerce software engineering — SimpleX",
    description:
      "Storefronts, search and order platforms engineered for peak days — and for constant change between them.",
  },
  name: "E-commerce",
  headline: "Commerce that stays fast when it matters most.",
  lead: "Storefronts, search and order platforms engineered for peak days — and for constant change between them.",
  facts: [
    {
      key: "Typical systems",
      value: "Headless storefronts, search, order management",
    },
    {
      key: "Common frameworks",
      value: "PCI DSS, GDPR, European Accessibility Act",
    },
    {
      key: "Engineering focus",
      value: "Performance, scale, speed of change",
    },
  ],
  challengesTitle: "What makes E-commerce hard.",
  challengesIntro:
    "Commerce rewards speed twice: pages that load instantly and teams that can ship a campaign by Friday. Monolithic platforms rarely deliver both.",
  challenges: [
    {
      title: "Peak traffic",
      body: "Revenue concentrates into a few days when failure is most expensive.",
    },
    {
      title: "Platforms that slow change",
      body: "Every campaign waits on a release train.",
    },
    {
      title: "Search & discovery",
      body: "Customers leave when they can’t find what they came for.",
    },
    {
      title: "Omnichannel inventory",
      body: "Stock, orders and returns must agree across every channel.",
    },
  ],
  opportunitiesLead: "Three opportunities common in E-commerce, and how we would approach them.",
  opportunities: [
    {
      title: "Composable commerce",
      body: "Headless front ends and best-of-breed services behind clean APIs.",
    },
    {
      title: "Search & personalisation",
      body: "Relevance tuning and recommendations measured against conversion.",
    },
    {
      title: "Unified order management",
      body: "One source of truth for orders, stock and fulfilment.",
    },
  ],
  scenarios: [
    {
      title: "Headless storefront",
      body: "A fast, accessible storefront decoupled from the commerce engine, so marketing can move without engineering bottlenecks.",
      items: [
        "Server-rendered React front end",
        "Headless CMS for campaigns",
        "Performance budgets in CI",
        "A/B testing framework",
        "Accessibility review",
      ],
    },
    {
      title: "Order management",
      body: "Orders, inventory and fulfilment orchestrated across warehouses, stores and marketplaces.",
      items: [
        "Event-driven order pipeline",
        "Real-time inventory",
        "Split shipments & returns",
        "Marketplace connectors",
        "Operational dashboards",
      ],
    },
    {
      title: "Marketplace platform",
      body: "Seller onboarding, catalogue management and payouts for a multi-vendor model.",
      items: [
        "Seller portal",
        "Catalogue moderation",
        "Split payments & payouts",
        "Search across sellers",
        "Trust & safety tooling",
      ],
    },
  ],
  considerationsLead:
    "Priorities we design for in E-commerce, checked throughout delivery rather than once before launch.",
  considerations: [
    {
      title: "Peak load testing",
      body: "Realistic traffic models run well before the season.",
    },
    {
      title: "Core Web Vitals budgets",
      body: "Performance regressions blocked in the pipeline.",
    },
    {
      title: "PCI scope reduction",
      body: "Hosted payment fields and tokenisation.",
    },
    {
      title: "Inventory consistency",
      body: "Guards against overselling.",
    },
    {
      title: "Feature flags",
      body: "Campaigns launched and rolled back without deploys.",
    },
    {
      title: "Accessibility",
      body: "Built around the accessibility law in your markets.",
    },
  ],
  capabilitiesTitle: "Services we bring to E-commerce.",
  complianceTitle: "The standards we build E-commerce for.",
  compliance: [
    {
      seal: "PCI",
      name: "PCI DSS",
      note: "Payments and checkout",
    },
    {
      seal: "GDPR",
      name: "GDPR",
      note: "Customer data and consent",
    },
    {
      seal: "WCAG",
      name: "WCAG 2.2 AA",
      note: "Accessible storefronts",
    },
    {
      seal: "SOC2",
      name: "SOC 2",
      note: "Vendor due diligence",
    },
  ],
  cta: "Ready for your next peak?",
};
