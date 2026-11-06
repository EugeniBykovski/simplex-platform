/** The three packages in Packages.dc.html. There are no others, and no price exists for any. */
export const packageIds = ["mobile-pod", "desktop", "full-cycle"] as const;
export type PackageId = (typeof packageIds)[number];

/** The design's order. React Native is the track it opens on. */
export const trackIds = ["ios", "android", "rn"] as const;
export type TrackId = (typeof trackIds)[number];
export const defaultTrack: TrackId = "rn";

export type Role = { initials: string; name: string; note: string };

export type PackageTrack = {
  label: string;
  title: string;
  stores: string;
  description: string;
  stack: readonly string[];
  lead: Role;
  support: Role;
  /** Shown only inside the illustrated phone. */
  release: string;
};

export type PackageFeature = { title: string; body: string };

export type EcosystemNode = { title: string; body: string; chips: readonly [string, string] };

export type ComparisonRowCopy = {
  label: string;
  values: Record<PackageId, string>;
};

export type StartRow = { name: string; team: string; start: string; depends: string };

export type PackagesContent = {
  meta: { title: string; description: string };
  breadcrumb: { label: string; home: string; services: string; current: string };
  hero: {
    isNew: string;
    chip: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
  };
  selection: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: Record<
      PackageId,
      { label: string; team: string; title: string; body: string; link: string }
    >;
  };
  pod: {
    eyebrow: string;
    title: string;
    lead: string;
    tracksLabel: string;
    tracks: Record<TrackId, PackageTrack>;
    checks: readonly string[];
    note: string;
  };
  desktop: {
    eyebrow: string;
    title: string;
    lead: string;
    platformsTitle: string;
    platforms: readonly string[];
    technologyTitle: string;
    technology: readonly string[];
    builtInTitle: string;
    builtIn: readonly string[];
    features: readonly PackageFeature[];
  };
  fullCycle: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Eight, in the order they surround the core. */
    nodes: readonly EcosystemNode[];
    coreTitle: string;
    coreBody: string;
    squadTitle: string;
    squad: readonly Role[];
    note: string;
  };
  starts: {
    tag: string;
    title: string;
    lead: string;
    action: string;
    panelTitle: string;
    panelStatus: string;
    rows: readonly StartRow[];
    note: string;
  };
  compare: {
    title: string;
    tag: string;
    /** The accessible name of the scroll region and the table's caption. */
    label: string;
    /** Names the last row for screen readers. The design leaves its first cell empty. */
    actionsLabel: string;
    columns: Record<PackageId, string>;
    rows: readonly ComparisonRowCopy[];
    actions: Record<PackageId, string>;
  };
  faq: readonly { question: string; answer: string }[];
  cta: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
  };
  /** Text inside the decorative device mock-ups. Everything here is fictional interface copy. */
  mock: {
    sample: string;
    welcome: string;
    welcomeTitle: string;
    getStarted: string;
    haveAccount: string;
    greeting: string;
    person: string;
    personFull: string;
    thisWeek: string;
    order: string;
    orderStatus: string;
    report: string;
    reportStatus: string;
    checkout: string;
    plan: string;
    seats: string;
    monthly: string;
    payWith: string;
    pay: string;
    hello: string;
    opsConsole: string;
    queue: string;
    devices: string;
    sync: string;
    syncOk: string;
    adminUrl: string;
    bookings: string;
    today: string;
    slots: string;
    review: string;
    room: string;
    demo: string;
    online: string;
    synced: string;
    appName: string;
    goal: string;
    push: string;
    releaseLabel: string;
    profile: string;
    teamPlan: string;
    biometric: string;
    notifications: string;
    offline: string;
    fieldOps: string;
    offlineBadge: string;
    nav: readonly string[];
    settings: string;
    overview: string;
    localDb: string;
    openJobs: string;
    devicesOnline: string;
    pendingSync: string;
    throughput: string;
    adminUrlSample: string;
    users: string;
    orders: string;
    revenue: string;
    orderPaid: string;
    orderRefund: string;
    newRole: string;
    ship: string;
    reviewBadge: string;
    audit: string;
  };
};
