/** The categories in Insights.dc.html, in its order. */
export const insightCategories = [
  "architecture",
  "ai-in-practice",
  "leadership",
  "product-design",
  "delivery",
  "cloud",
  "quality",
  "modernisation",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export type ArticleViz =
  "fintech" | "healthcare" | "ecommerce" | "saas" | "enterprise" | "logistics";

/** A controlled set of blocks, so an article can never inject markup or code. */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; id: string; text: string; toc: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "quote"; text: string }
  | { type: "code"; label: string; code: string }
  | { type: "callout"; label: string; text: string; link: { label: string; href: string } };

/** The design's cover is a drawn diagram. No article image has been approved yet. */
export type ArticleCover = {
  caption: string;
  layers: readonly {
    label: string;
    nodes: readonly { name: string; highlight?: boolean; dashed?: boolean }[];
  }[];
};

type ArticleWords = {
  title: string;
  summary: string;
  seo: { title: string; description: string };
  cover: ArticleCover;
  body: readonly ArticleBlock[];
};

/**
 * A translation is either unpublished, or published with every fact publication requires. The type
 * makes it impossible to publish without a named author and a real date. Never derive a date from
 * the build.
 */
export type ArticleTranslation =
  | (ArticleWords & { status: "draft" | "review" })
  | (ArticleWords & {
      status: "published";
      author: { name: string; role: string };
      /** ISO date, for example 2026-11-06. */
      publishedAt: string;
      modifiedAt?: string;
    });

export type Article = {
  /** Stable, from the title, with no date. See docs/seo/seo-architecture.md. */
  slug: string;
  category: InsightCategory;
  viz: ArticleViz;
  readingMinutes: number;
  featured?: boolean;
  /** Slugs, in order. Only published ones are ever shown. */
  related?: readonly string[];
  translations: { en?: ArticleTranslation; ru?: ArticleTranslation };
};

export type PublishedTranslation = Extract<ArticleTranslation, { status: "published" }>;
export type PublishedArticle = Omit<Article, "translations"> & { words: PublishedTranslation };

export type InsightsCopy = {
  meta: { title: string; description: string };
  breadcrumb: { label: string; home: string; current: string };
  hero: { lines: readonly [string, string]; lead: string };
  featuredTag: string;
  latest: {
    title: string;
    searchLabel: string;
    searchPlaceholder: string;
    categoryLabel: string;
    all: string;
    /** Keyed by plural category, so Russian gets its three forms. */
    count: Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };
    inCategory: string;
    none: { title: string; body: string };
    noMatch: { title: string; body: string; reset: string };
  };
  categories: Record<InsightCategory, string>;
  minutes: string;
  cta: { title: string; lead: string; primary: string };
  article: {
    breadcrumb: string;
    shareLabel: string;
    copy: string;
    copied: string;
    linkedIn: string;
    x: string;
    email: string;
    onThisPage: string;
    related: string;
    all: string;
  };
};
