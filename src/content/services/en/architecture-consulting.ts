import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug architecture-consulting, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "Software Architecture & Technical Consulting — SimpleX",
    description:
      "Independent architecture advice for the moments that matter: before a rewrite, after an acquisition or ahead of a growth phase.",
  },
  title: "Software Architecture & Technical Consulting",
  short: "Architecture & Consulting",
  blurb: "Decisions you can build on.",
  headline: "Decisions you can build on.",
  lead: "Independent, senior architecture advice for the moments that matter — before a rewrite, after an acquisition, ahead of a growth phase. Written by engineers who build, not slideware.",
  glance: [
    "Focused, time-boxed architecture reviews",
    "Technical due diligence for investors",
    "Actionable, sequenced roadmaps",
  ],
  problem: "Big technical decisions are made with too little evidence.",
  pains: [
    "Rewrites approved on frustration rather than analysis.",
    "Boards and investors without an independent view of technical risk.",
    "Architecture nobody has reviewed since the first version shipped.",
  ],
  capsTitle: "What we bring to architecture decisions.",
  capsIntro:
    "Evidence-led assessments that end in decisions and a plan — not a report that sits in a drawer.",
  caps: [
    {
      title: "Architecture review",
      body: "Structure, scalability, security and operability assessed against your goals.",
    },
    {
      title: "Technical due diligence",
      body: "Independent risk assessment for investment and M&A.",
    },
    {
      title: "Modernisation strategy",
      body: "Rewrite, refactor or replace — with evidence for each.",
    },
    {
      title: "Platform & vendor selection",
      body: "Structured evaluation and proof-of-concept work.",
    },
    {
      title: "Engineering process assessment",
      body: "Delivery metrics, practices and team topology.",
    },
    {
      title: "Fractional architect / CTO",
      body: "Senior leadership, part-time, for as long as it’s useful.",
    },
  ],
  value: [
    {
      title: "Evidence over assumptions",
      body: "Decisions grounded in code, metrics and interviews.",
    },
    {
      title: "De-risked investment",
      body: "Risks priced in before money moves.",
    },
    {
      title: "Clear sequencing",
      body: "What to do first, and what not to do at all.",
    },
    {
      title: "Aligned teams",
      body: "Shared understanding of the target state.",
    },
  ],
  steps: [
    {
      title: "Context",
      body: "Goals, constraints and questions to answer.",
    },
    {
      title: "Evidence",
      body: "Code, infrastructure, metrics and interviews.",
    },
    {
      title: "Options",
      body: "Trade-offs written as decision records.",
    },
    {
      title: "Roadmap",
      body: "Sequenced plan and handover workshop.",
    },
  ],
  tech: [
    "C4 models",
    "Architecture decision records",
    "Fitness functions",
    "Threat modelling",
    "DORA metrics",
    "Cost modelling",
  ],
  uses: [
    {
      title: "Pre-investment technical due diligence",
      body: "An independent view of code quality, scalability, security and team for investors.",
    },
    {
      title: "Rewrite versus refactor",
      body: "A decision backed by evidence, with costed options and risks.",
    },
    {
      title: "Post-merger platform consolidation",
      body: "Which systems to keep, merge or retire — and in what order.",
    },
  ],
  cta: "Facing a decision that’s expensive to reverse?",
};
