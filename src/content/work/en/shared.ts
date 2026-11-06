import type { WorkSharedCopy } from "../types";

/** Copy shared by the case studies, from CasePage.dc.html. See docs/content/portfolio-attribution-register.md. */
export const shared: WorkSharedCopy = {
  breadcrumb: { label: "Breadcrumb", home: "Home", work: "Our Work" },
  demoLong: "Demonstration case study · illustrative",
  demoShort: "Demonstration · illustrative",
  labels: {
    overview: "Overview",
    context: "Business context",
    overviewContext: "Overview & context",
    challenges: "Challenges",
    challenge: "Challenge",
    approach: "Approach",
    solution: "Solution",
    architecture: "Technical architecture",
    interface: "Product interface",
    outcomes: "Intended outcomes",
    onThisPage: "On this page",
  },
  discuss: "Discuss a similar project",
  architecture: {
    tag: "Technical architecture",
    title: "How it fits together.",
    lead: "Highlighted components carry the core logic. Illustrative architecture for a demonstration project.",
  },
  outcomes: {
    eyebrow: "Intended outcomes",
    title: "What it aims to change.",
    tag: "Design goals — not client results",
    tagShort: "Design goals",
  },
  shift: {
    tag: "Drag to compare",
    title: (name) => `${name}: the intended shift.`,
    lead: "Illustrative: where this concept starts, and what it aims for. Nothing here is a measured result.",
    before: {
      chip: "Starting point",
      title: "Manual, nightly, fragile.",
      items: [
        "Releases once a month after manual QA",
        "Data split across three systems and spreadsheets",
        "Issues found by customers first",
        "Hours each week lost to manual rework",
      ],
    },
    after: {
      chip: "Intended",
      title: "Automated, real-time, observable.",
      items: [
        "Frequent releases behind feature flags",
        "One event-driven platform, one source of truth",
        "Alerts before customers notice",
        "That time returned to the team",
      ],
    },
    slider: "Compare the starting point with the intended state",
  },
  next: { label: "Next demonstration" },
  cta: {
    title: "Facing a problem like this?",
    lead: "We’ll share how we’d approach it — and what we’d want to learn first.",
    primary: "Let’s Talk",
    secondary: "All work",
  },
};
