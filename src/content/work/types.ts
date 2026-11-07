import type { WorkSlug } from "@/config/routes";

export type DotTone = "m" | "o" | "b" | "none";

export type MockRow = { text: string; badge: string; dot: DotTone };

/** A decorative interface mock-up. Every figure in it is fictional. */
export type CaseMock = {
  title: string;
  tag: string;
  kpis: readonly { label: string; value: string }[];
  rows: readonly MockRow[];
};

export type ArchLayer = {
  label: string;
  nodes: readonly { name: string; note?: string; highlight?: boolean }[];
};

export type CaseCopy = {
  meta: { title: string; description: string };
  name: string;
  industry: string;
  tagline: string;
  facts: readonly { key: string; value: string }[];
  overview: string;
  context: string;
  challenges: readonly string[];
  approach: readonly { when: string; title: string; body: string }[];
  solution: string;
  bullets: readonly string[];
  arch: readonly ArchLayer[];
  mocks: readonly CaseMock[];
  /** Design goals in words. No measured result exists for any concept project. */
  outcomes: readonly { value: string; label: string }[];
};

/** Layout B: the patient form in the hero. */
export type CarepathCopy = CaseCopy & {
  intake: { step: string; question: string; options: readonly string[]; next: string };
};

/** Layout C: art-directed headings and panels only this page has. */
export type RoutewiseCopy = CaseCopy & {
  dispatch: {
    title: string;
    live: string;
    routes: readonly { name: string; note: string; dot: DotTone }[];
  };
  approachTitle: string;
  bench: { title: string; rows: readonly { name: string; value: string }[]; note: string };
  solutionTitle: string;
  driver: { stop: string; address: string; parcels: string; eta: string; complete: string };
  archTitle: string;
  archBody: string;
};

export type WorkSharedCopy = {
  breadcrumb: { label: string; home: string; work: string };
  demoLong: string;
  demoShort: string;
  labels: {
    overview: string;
    context: string;
    overviewContext: string;
    challenges: string;
    challenge: string;
    approach: string;
    solution: string;
    architecture: string;
    interface: string;
    outcomes: string;
    onThisPage: string;
    caseDetails: string;
  };
  discuss: string;
  architecture: { tag: string; title: string; lead: string };
  outcomes: { eyebrow: string; title: string; tag: string; tagShort: string };
  shift: {
    tag: string;
    title: (name: string) => string;
    lead: string;
    before: { chip: string; title: string; items: readonly string[] };
    after: { chip: string; title: string; items: readonly string[] };
    slider: string;
  };
  next: { label: string };
  cta: { title: string; lead: string; primary: string; secondary: string };
};

export type WorkIndustry =
  "fintech" | "healthcare" | "ecommerce" | "saas" | "enterprise" | "logistics";
export type WorkService = "custom" | "web-mobile" | "ai" | "cloud" | "design" | "modernisation";

export type WorkProjectStructure = {
  id: string;
  name: string;
  industry: WorkIndustry;
  services: readonly WorkService[];
  /** Only three projects have a case study. */
  slug?: WorkSlug;
};

export type WorkOverviewCopy = {
  meta: { title: string; description: string };
  breadcrumb: { label: string; home: string; current: string };
  hero: {
    lines: readonly [string, string];
    lead: string;
    noticeTitle: string;
    notice: string;
    /** The label on every project card. */
    demoTag: string;
  };
  featured: {
    tag: string;
    tagline: string;
    chips: readonly string[];
    read: string;
    mock: {
      title: string;
      live: string;
      kpis: readonly { label: string; value: string }[];
    };
  };
  grid: {
    title: string;
    industryLabel: string;
    industryGroup: string;
    serviceLabel: string;
    serviceGroup: string;
    all: string;
    industries: Record<WorkIndustry, string>;
    services: Record<WorkService, string>;
    /** Keyed by plural category, so Russian gets its three forms. */
    count: Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };
    /** One line per project, by id. */
    lines: Record<string, string>;
    read: string;
    noCase: string;
    empty: { title: string; body: string; clear: string; ask: string };
  };
  cta: { title: string; lead: string; primary: string };
};
