import type { ProjectCapability, ProjectPlatform } from "./projects";

/** The Work index. The projects themselves live in ./projects, one record per project. */
export type WorkOverviewCopy = {
  meta: { title: string; description: string };
  breadcrumb: { label: string; home: string; current: string };
  hero: {
    lines: readonly [string, string];
    lead: string;
    noticeTitle: string;
    notice: string;
  };
  featured: { tag: string; read: string };
  grid: {
    title: string;
    platformLabel: string;
    platformGroup: string;
    focusLabel: string;
    focusGroup: string;
    all: string;
    platforms: { mobile: string; web: string };
    capabilities: Record<ProjectCapability, string>;
    count: Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };
    read: string;
    empty: { title: string; body: string; clear: string; ask: string };
  };
  cta: { title: string; lead: string; primary: string };
};

/** Labels shared by every project page. */
export type WorkSharedCopy = {
  breadcrumb: { label: string; home: string; work: string };
  meta: (name: string, tagline: string) => { title: string; description: string };
  platforms: Record<ProjectPlatform, string>;
  labels: {
    details: string;
    category: string;
    role: string;
    status: string;
    platforms: string;
    built: string;
    builtLead: string;
    next: string;
    nextLead: string;
    engineering: string;
    stack: string;
    note: string;
  };
  scope: string;
  next: { label: string };
  cta: { title: string; lead: string; primary: string; secondary: string };
};
