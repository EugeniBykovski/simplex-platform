import type { GlyphName } from "@/components/ui/icon";
import type { ServiceSlug } from "@/config/routes";
import type { CaseKey } from "@/content/services";

export type TitledBody = { title: string; body: string };

export type IndustryScenario = TitledBody & { items: readonly string[] };

export type ComplianceTile = { seal: string; name: string; note: string };

/** Everything that differs between industries in words. The structure is in catalog.ts. */
export type IndustryPageCopy = {
  meta: { title: string; description: string };
  name: string;
  headline: string;
  lead: string;
  facts: readonly { key: string; value: string }[];
  challengesTitle: string;
  challengesIntro: string;
  challenges: readonly TitledBody[];
  opportunitiesLead: string;
  opportunities: readonly TitledBody[];
  scenarios: readonly IndustryScenario[];
  considerationsLead: string;
  considerations: readonly TitledBody[];
  capabilitiesTitle: string;
  complianceTitle: string;
  compliance: readonly ComplianceTile[];
  cta: string;
};

export type IndustryViz =
  "fintech" | "healthcare" | "ecommerce" | "saas" | "enterprise" | "logistics";

export type IndustryStructure = {
  icon: GlyphName;
  viz: IndustryViz;
  /** Darkens a hero gradient too light for its text at the design's values (GAP-D24). */
  heroScrim?: boolean;
  /** The four services the design relates to this industry, in its order. */
  services: readonly ServiceSlug[];
  /** One demonstration project. Some belong to another sector, as in the design (GAP-D23). */
  project: CaseKey;
};

export type IndustrySharedCopy = {
  breadcrumb: { label: string; home: string; industries: string };
  hero: { eyebrow: string; primary: string; secondary: string };
  challengesEyebrow: string;
  opportunities: { tag: string; title: string };
  scenarios: {
    eyebrow: string;
    title: string;
    label: string;
    scenario: string;
    discuss: string;
    components: string;
  };
  considerations: { eyebrow: string; title: string };
  capabilities: { eyebrow: string; projects: string; tag: string; read: string };
  /** The names used on the capability cards. */
  services: Partial<Record<ServiceSlug, string>>;
  cases: Record<CaseKey, { industry: string; summary: string }>;
  compliance: { tag: string; lead: string; note: string };
  cta: { lead: string; primary: string };
};

export type IndustriesOverviewCopy = {
  meta: { title: string; description: string };
  breadcrumb: { label: string; home: string; current: string };
  hero: { lines: readonly [string, string]; lead: string };
  /** In the design's order, matching industrySlugs. */
  rows: readonly { summary: string; chips: readonly string[] }[];
  constants: {
    eyebrow: string;
    title: string;
    lead: string;
    items: readonly TitledBody[];
  };
  compliance: {
    tag: string;
    title: string;
    lead: string;
    tiles: readonly ComplianceTile[];
    note: string;
  };
  cta: { title: string; lead: string; primary: string };
};
