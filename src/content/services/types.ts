import type { GlyphName } from "@/components/ui/icon";
import type { ServiceSlug, WorkSlug } from "@/config/routes";

export type TitledText = { title: string; body: string };

/** The copy of one service page. Its structure, shared across locales, is in catalog.ts. */
export type ServicePageCopy = {
  meta: { title: string; description: string };
  title: string;
  short: string;
  blurb: string;
  headline: string;
  lead: string;
  glance: readonly string[];
  problem: string;
  pains: readonly string[];
  capsTitle: string;
  capsIntro: string;
  caps: readonly TitledText[];
  value: readonly TitledText[];
  steps: readonly TitledText[];
  tech: readonly string[];
  uses: readonly TitledText[];
  cta: string;
};

export type ServiceVisual = "code" | "arch" | "device" | "desktop" | "graph" | "pipeline" | "team";

export type ServiceStructure = {
  idx: string;
  theme: "light" | "dark";
  visual: ServiceVisual;
  icon: GlyphName;
  related: readonly ServiceSlug[];
  /** Approved portfolio projects that used this service, if any. */
  cases: readonly WorkSlug[];
};

/** The copy every service page shares, including the labels inside its hero illustrations. */
export type ServiceSharedCopy = {
  breadcrumb: { label: string; home: string; services: string };
  hero: { primaryCta: string; relatedCta: string; illustrative: string };
  problemEyebrow: string;
  capsEyebrow: string;
  value: { tag: string; title: string; lead: string };
  process: { title: string; link: string };
  tech: { eyebrow: string; note: string; link: string };
  uses: { eyebrow: string; title: string };
  related: { eyebrow: string; title: string };
  industries: string;
  cases: { title: string; read: string };
  first30: {
    tag: string;
    title: string;
    lead: string;
    steps: readonly { mark: string; title: string; body: string }[];
    sprintTitle: string;
    sprintBody: string;
    sprintCta: string;
  };
  cta: { lead: string; primary: string };
  visuals: {
    code: {
      badge: string;
      coverage: string;
      coverageValue: string;
      build: string;
      buildValue: string;
      deploy: string;
      deployValue: string;
    };
    arch: readonly {
      label: string;
      nodes: readonly { name: string; note?: string; highlight?: boolean; dashed?: boolean }[];
    }[];
    device: {
      address: string;
      sample: string;
      overview: string;
      activity: string;
      settings: string;
    };
    desktop: {
      title: string;
      status: string;
      nav: readonly string[];
      jobs: string;
      devices: string;
      sync: string;
      sample: string;
      syncValue: string;
    };
    graph: {
      title: string;
      badge: string;
      groundedness: string;
      relevance: string;
      guardrails: string;
      latency: string;
      cost: string;
      sample: string;
    };
    pipeline: readonly { title: string; note: string; state: "done" | "active" | "queued" }[];
    team: { roles: readonly string[]; note: string };
  };
};

export type ServicesOverviewCopy = {
  meta: { title: string; description: string };
  breadcrumb: { label: string; home: string; current: string };
  hero: {
    lines: readonly [string, string];
    lead: string;
    pickerTitle: string;
    picks: readonly { href: string; title: string; path: string }[];
  };
  groups: readonly {
    n: string;
    title: string;
    body: string;
    ground: "mist" | "ink" | "white";
    items: readonly {
      icon: GlyphName;
      href: string;
      title: string;
      body: string;
      tags: readonly string[];
    }[];
  }[];
  matrix: {
    eyebrow: string;
    title: string;
    lead: string;
    label: string;
    service: string;
    stages: readonly string[];
    lead_role: string;
    support_role: string;
    no_role: string;
    view: string;
    rows: readonly { title: string; href: string; cells: readonly ("L" | "S" | "O")[] }[];
  };
  compare: {
    tag: string;
    title: string;
    lead: string;
    label: string;
    heads: readonly [string, string, string, string];
    rows: readonly { key: string; values: readonly [string, string, string, string] }[];
    note: string;
  };
  cta: { title: string; lead: string; primary: string; secondary: string };
};
