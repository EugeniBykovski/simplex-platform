import type { WorkOverviewCopy } from "../types";

/** The Work index for the eight approved projects. See docs/content/portfolio-attribution-register.md. */
export const overview: WorkOverviewCopy = {
  meta: {
    title: "Our Work - SimpleX",
    description:
      "Products SimpleX has designed and engineered: sports, financial media, professional networking, PropTech, B2B commerce, training, mobility and pet travel.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "Our Work" },
  hero: {
    lines: ["Real products,", "engineered end to end."],
    lead: "Web, mobile and backend platforms we design and build. Each page says what is built today and what is still on the roadmap.",
    noticeTitle: "What these pages cover.",
    notice:
      "They describe the engineering. Most of these products are still in development, and we don’t publish usage or business figures.",
  },
  featured: { tag: "Featured", read: "View project" },
  grid: {
    title: "All projects",
    platformLabel: "Platform",
    platformGroup: "Filter by platform",
    focusLabel: "Focus",
    focusGroup: "Filter by focus",
    all: "All",
    platforms: { mobile: "Mobile", web: "Web" },
    capabilities: {
      realtime: "Real-time",
      payments: "Payments",
      ai: "AI",
      marketplace: "Marketplaces",
    },
    count: { one: "{count} project", other: "{count} projects" },
    read: "View project",
    empty: {
      title: "No projects match these filters",
      body: "Try a different combination - or ask us directly.",
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
