export type ServiceCard = {
  icon: "custom" | "web" | "ai" | "cloud" | "design" | "architecture";
  title: string;
  href: string;
  description: string;
  chips: string[];
};

export type TechTab = {
  id: string;
  label: string;
  headline: string;
  description: string;
  items: { name: string; use: string }[];
};

export type EstimatorContent = {
  tag: string;
  title: string;
  lead: string;
  steps: { type: string; platforms: string; stage: string; pace: string };
  types: { mobile: string; web: string; full: string; desktop: string };
  platforms: { ios: string; android: string; web: string; admin: string; desktop: string };
  stages: { idea: string; mvp: string; scale: string };
  paces: { std: string; fast: string };
  roles: {
    reactNative: string;
    android: string;
    ios: string;
    fullStack: string;
    desktop: string;
    qa: string;
    productLead: string;
    frontend: string;
    backend: string;
    fullStackAdmin: string;
    productDesigner: string;
    mobilePair: string;
    mobile: string;
    qaDevOps: string;
    architect: string;
    extraEngineer: string;
  };
  result: {
    heading: string;
    live: string;
    sizeCompact: string;
    sizeSquad: string;
    engagement: string;
    modelPod: string;
    modelDiscovery: string;
    modelSquad: string;
    cta: string;
    note: string;
  };
};

export type HomeContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    lines: [string, string];
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
  };
  statements: {
    label: string;
    items: {
      counter: string;
      icon: "architecture" | "legacy" | "ai";
      title: string;
      body: string;
    }[];
  };
  whatWeDo: {
    tag: string;
    titleStart: string;
    titleTone: string;
    lead: string;
    link: string;
    services: ServiceCard[];
  };
  agent: {
    isNew: string;
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    lead: string;
    illustrative: string;
    checks: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  packages: {
    isNew: string;
    chip: string;
    title: string;
    lead: string;
    link: string;
    cards: { label: string; team: string; title: string; body: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: { label: string; title: string; body: string }[];
  };
  work: {
    eyebrow: string;
    titleStart: string;
    titleTone: string;
    link: string;
    role: string;
    built: string;
    cta: string;
  };
  how: {
    tag: string;
    titleStart: string;
    titleTone: string;
    lead: string;
    chain: string[];
    cta: string;
    receive: string;
    steps: { n: string; kicker: string; title: string; description: string; out: string[] }[];
  };
  industries: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: {
      name: string;
      icon: "fintech" | "health" | "commerce" | "saas" | "building" | "logistics";
      viz: "fintech" | "healthcare" | "ecommerce" | "saas" | "enterprise" | "logistics";
      href: string;
      description: string;
    }[];
  };
  technology: {
    eyebrow: string;
    titleStart: string;
    titleTone: string;
    lead: string;
    tabsLabel: string;
    directory: string;
    showAll: string;
    showFewer: string;
    tabs: TechTab[];
  };
  models: {
    tag: string;
    title: string;
    lead: string;
    bestFor: string;
    cards: {
      label: string;
      icon: "custom" | "teams" | "architecture";
      title: string;
      description: string;
      best: string[];
      cta: string;
      featured?: boolean;
    }[];
  };
  engagement: {
    chip: string;
    title: string;
    lead: string;
    room: { live: string; label: string; title: string; body: string; chips: string[] };
    agent: { label: string; status: string; body: string };
    team: { label: string; body: string };
    toasts: { title: string; body: string }[];
  };
  insights: {
    eyebrow: string;
    title: string;
    link: string;
    sample: string;
    minutes: string;
    featured: { tag: string; title: string; body: string; minutes: number };
    cards: { tag: string; title: string; body: string; minutes: number }[];
  };
  estimator: EstimatorContent;
  cta: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    kpis: { title: string; body: string }[];
    trust: string[];
  };
};
