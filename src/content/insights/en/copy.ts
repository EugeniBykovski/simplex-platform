import type { InsightsCopy } from "../types";

/** From Insights.dc.html and Article.dc.html. See docs/content/insights-editorial-register.md. */
export const copy: InsightsCopy = {
  meta: {
    title: "Insights - SimpleX",
    description:
      "Practical writing on architecture, delivery, design and applied AI, from SimpleX. No articles are published yet.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "Insights" },
  hero: {
    lines: ["Notes from", "the work."],
    lead: "Practical writing on architecture, delivery, design and applied AI.",
  },
  featuredTag: "Featured",
  latest: {
    title: "Latest",
    searchLabel: "Search articles",
    searchPlaceholder: "Search articles",
    categoryLabel: "Category",
    all: "All",
    count: { one: "{count} article", other: "{count} articles" },
    inCategory: "in {category}",
    none: {
      title: "No articles published yet",
      body: "When an article is ready, it will appear here with its author and date.",
    },
    noMatch: {
      title: "Nothing found",
      body: "Try a broader term or another category.",
      reset: "Reset filters",
    },
  },
  categories: {
    architecture: "Architecture",
    "ai-in-practice": "AI in practice",
    leadership: "Leadership",
    "product-design": "Product design",
    delivery: "Delivery",
    cloud: "Cloud",
    quality: "Quality",
    modernisation: "Modernisation",
  },
  minutes: "{count} min read",
  cta: {
    title: "Have a problem you’d like us to write about - or solve?",
    lead: "Tell us what you’re trying to understand.",
    primary: "Let’s Talk",
  },
  article: {
    breadcrumb: "Insights",
    shareLabel: "Share this article",
    copy: "Copy link",
    copied: "Link copied",
    linkedIn: "Share on LinkedIn",
    x: "Share on X",
    email: "Share by email",
    onThisPage: "On this page",
    related: "Related articles",
    all: "All insights",
  },
};
