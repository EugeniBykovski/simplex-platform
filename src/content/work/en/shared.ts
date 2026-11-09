import type { WorkSharedCopy } from "../types";

/** Labels shared by the project pages. See docs/content/portfolio-attribution-register.md. */
export const shared: WorkSharedCopy = {
  breadcrumb: { label: "Breadcrumb", home: "Home", work: "Our Work" },
  meta: (name, tagline) => ({
    title: `${name} - Project - SimpleX`,
    description: `${name}: ${tagline} What SimpleX built, what is still in progress, and the technology behind it.`,
  }),
  platforms: { ios: "iOS", android: "Android", web: "Web", backend: "Backend" },
  labels: {
    details: "Project details",
    category: "Category",
    role: "Our role",
    status: "Status",
    platforms: "Platforms",
    built: "What is built",
    builtLead: "Implemented in the codebase today.",
    next: "In progress and planned",
    nextLead: "Partly built or on the roadmap, and not yet part of the product.",
    engineering: "Engineering",
    stack: "Technology",
    note: "Attribution",
  },
  scope:
    "Described from the project’s code and documentation. No usage, revenue or launch figures are published.",
  next: { label: "Next project" },
  cta: {
    title: "Building something similar?",
    lead: "We’ll share how we’d approach it - and what we’d want to learn first.",
    primary: "Let’s Talk",
    secondary: "All work",
  },
};
