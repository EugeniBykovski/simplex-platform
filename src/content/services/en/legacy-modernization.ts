import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug legacy-modernization, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "Legacy Modernization - SimpleX",
    description:
      "Modernise the legacy systems that still run your business, incrementally: understand, wrap, replace and retire, with value delivered at every step.",
  },
  title: "Legacy Modernization",
  short: "Legacy Modernization",
  blurb: "Evolve systems without stopping them.",
  headline: "Modernise without stopping the business.",
  lead: "Your legacy systems still run the business - that’s why they’re hard to change. We modernise incrementally, replacing parts behind stable interfaces until the old system can retire quietly.",
  glance: [
    "Incremental, reversible steps",
    "No big-bang cut-overs",
    "Business continuity throughout",
  ],
  problem: "Rewrites are where good intentions stall.",
  pains: [
    "Big-bang rewrites take years and rarely reach feature parity.",
    "Knowledge of the old system is concentrated in a few people.",
    "Every month of delay raises the cost of standing still.",
  ],
  capsTitle: "What we bring to modernisation.",
  capsIntro:
    "An incremental approach: understand, wrap, replace, retire - with value delivered at every step.",
  caps: [
    {
      title: "System discovery & mapping",
      body: "Code analysis, dependency maps and domain reconstruction.",
    },
    {
      title: "Strangler-fig migration",
      body: "New services grow around the old system, piece by piece.",
    },
    {
      title: "Data migration & reconciliation",
      body: "Parallel runs and automated reconciliation.",
    },
    {
      title: "Re-platforming",
      body: "Moving workloads to cloud with minimal change first.",
    },
    {
      title: "API enablement",
      body: "Modern interfaces on systems that can’t move yet.",
    },
    {
      title: "Test harnesses",
      body: "Characterisation tests that capture today’s behaviour.",
    },
  ],
  value: [
    {
      title: "Lower risk",
      body: "Each step is small, tested and reversible.",
    },
    {
      title: "Value delivered early",
      body: "New capability ships long before migration ends.",
    },
    {
      title: "Reduced run cost",
      body: "Retire licences and infrastructure as you go.",
    },
    {
      title: "Retained knowledge",
      body: "Behaviour captured in tests and documentation.",
    },
  ],
  steps: [
    {
      title: "Map",
      body: "Understand behaviour, data and dependencies.",
    },
    {
      title: "Wrap",
      body: "APIs and tests around the existing system.",
    },
    {
      title: "Replace",
      body: "Incremental replacement behind stable interfaces.",
    },
    {
      title: "Retire",
      body: "Decommission safely, with reconciliation.",
    },
  ],
  tech: ["Java", ".NET", "Kafka", "PostgreSQL", "Debezium", "AWS / Azure"],
  uses: [
    {
      title: "Extracting services from a monolith",
      body: "Moving high-change domains out first while the core keeps running.",
    },
    {
      title: "Database migration without downtime",
      body: "Change data capture, dual writes and reconciliation.",
    },
    {
      title: "Modern APIs on a mainframe-era core",
      body: "New digital channels without touching the system of record.",
    },
  ],
  cta: "Is a legacy system holding your roadmap hostage?",
};
