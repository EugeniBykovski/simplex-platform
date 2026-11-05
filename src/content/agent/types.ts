import type { GlyphName } from "@/components/ui/icon";

/** A gradient tile from the design's widgets. The empty tone is the default blue. */
export type AgentTone = "" | "t" | "m" | "k";

export type BlueprintBlock = {
  title: string;
  icon: GlyphName;
  tone: AgentTone;
  items: readonly string[];
};

export type AgentStack = {
  id: string;
  label: string;
  detected: readonly string[];
  blocks: readonly BlueprintBlock[];
};

export type RoiCopy = {
  rangeEngineers: string;
  rangeShare: string;
  rangeCost: string;
  assumption: string;
  heading: string;
  hours: string;
  capacity: string;
  value: string;
  perMonth: string;
  pilotLabel: string;
  pilotValue: string;
  outputLabel: string;
  outputValue: string;
};

export type AgentContent = {
  meta: { title: string; description: string };
  breadcrumb: { label: string; home: string; current: string };
  hero: {
    isNew: string;
    label: string;
    lines: readonly [string, string];
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    illustrative: string;
    mock: {
      label: string;
      name: string;
      repository: string;
      status: string;
      you: string;
      ai: string;
      request: string;
      answerStart: string;
      answerStack: string;
      answerEnd: string;
      steps: readonly { text: string; state: string; running?: boolean }[];
      testsTitle: string;
      testsNote: string;
      stackTitle: string;
      stackItems: readonly string[];
      stackNote: string;
    };
  };
  stack: {
    eyebrow: string;
    title: string;
    lead: string;
    tabsLabel: string;
    detected: string;
    blueprint: string;
    note: string;
    stacks: readonly AgentStack[];
  };
  how: {
    tag: string;
    title: string;
    lead: string;
    steps: readonly {
      n: string;
      icon: GlyphName;
      tone: AgentTone;
      title: string;
      body: string;
    }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    lead: string;
    feature: { head: string; title: string };
    tests: { head: string; ring: string; note: string };
    infrastructure: { head: string; big: string; note: string };
    migrations: { head: string; title: string; note: string };
    docs: { head: string; title: string; note: string };
    observability: {
      head: string;
      items: readonly string[];
      state: string;
    };
  };
  embed: {
    eyebrow: string;
    title: string;
    lead: string;
    checks: readonly string[];
    cta: string;
    tag: string;
    mock: {
      bar: string;
      view: string;
      assistant: string;
      question: string;
      answer: string;
      action: string;
    };
  };
  deployment: {
    tag: string;
    demoTag: string;
    title: string;
    lead: string;
    models: readonly {
      n: string;
      icon: GlyphName;
      title: string;
      body: string;
      points: readonly string[];
      featured?: boolean;
    }[];
    governance: readonly { title: string; body: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly { question: string; answer: string }[];
  };
  roi: {
    tag: string;
    title: string;
    lead: string;
    copy: RoiCopy;
    cta: string;
  };
  cta: {
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
};
