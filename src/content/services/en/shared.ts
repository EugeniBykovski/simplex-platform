import type { ServiceSharedCopy } from "../types";

/** Copy shared by every service page, from ServicePage.dc.html, design 1793869596-167d. */
export const shared: ServiceSharedCopy = {
  breadcrumb: { label: "Breadcrumb", home: "Home", services: "Services" },
  hero: {
    primaryCta: "Discuss your project",
    relatedCta: "Related work",
    illustrative: "Illustrative",
  },
  problemEyebrow: "The problem",
  capsEyebrow: "Solution & capabilities",
  value: {
    tag: "Business value",
    title: "What changes for the business.",
    lead: "Outcomes we aim for - agreed with you at the start and reviewed as the work progresses.",
  },
  process: { title: "How the engagement runs", link: "Our full delivery approach" },
  tech: {
    eyebrow: "Relevant technologies",
    note: "Chosen per engagement - we’ll recommend what fits your team and estate.",
    link: "Technology directory",
  },
  uses: { eyebrow: "Representative use cases", title: "Where this service fits." },
  industries: "Relevant industries",
  related: { eyebrow: "Related", title: "Often combined with" },
  cases: {
    title: "Related projects",
    read: "View project",
  },
  first30: {
    tag: "What happens next",
    title: "Your first 30 days, in writing.",
    lead: "No vague “onboarding phase”. This is the shape of a typical first month, with the checkpoints agreed in writing when the contract is signed.",
    steps: [
      {
        mark: "D1",
        title: "Kick-off & access",
        body: "Named team, shared channel, repositories and environments set up.",
      },
      {
        mark: "W1",
        title: "Architecture brief",
        body: "Current state, risks and the plan - reviewed with your tech lead.",
      },
      {
        mark: "W2",
        title: "First deploy",
        body: "Working software on staging, CI/CD green, first demo.",
      },
      {
        mark: "D30",
        title: "Roadmap & estimate",
        body: "Delivery forecast, budget burn and the next quarter’s plan.",
      },
    ],
    sprintTitle: "Not ready to commit? Start with a paid discovery sprint.",
    sprintBody:
      "Two weeks and a decision-ready plan you keep - whether or not we build it. The price is agreed up front.",
    sprintCta: "Ask about discovery",
  },
  cta: {
    lead: "A conversation with an engineer. You’ll leave with a clearer view of options - whether or not we work together.",
    primary: "Let’s Talk",
  },
  visuals: {
    code: {
      badge: "Sample",
      coverage: "Coverage",
      coverageValue: "Target",
      build: "Build",
      buildValue: "Pass",
      deploy: "Deploy",
      deployValue: "Staging",
    },
    arch: [
      {
        label: "Channels",
        nodes: [
          { name: "Web portal", note: "React" },
          { name: "Mobile", note: "Native" },
          { name: "Partners", note: "REST / events" },
        ],
      },
      {
        label: "Integration",
        nodes: [
          { name: "API gateway", note: "Auth · rate limits", highlight: true },
          { name: "Event bus", note: "Kafka", highlight: true },
        ],
      },
      {
        label: "Domains",
        nodes: [
          { name: "Orders" },
          { name: "Billing" },
          { name: "Identity" },
          { name: "Reporting" },
        ],
      },
      {
        label: "Core & legacy",
        nodes: [
          { name: "ERP", note: "wrapped, not replaced", dashed: true },
          { name: "Mainframe", note: "via adapters", dashed: true },
        ],
      },
    ],
    device: {
      address: "app.yourproduct.com",
      sample: "Sample",
      overview: "Overview",
      activity: "Activity",
      settings: "Settings",
    },
    desktop: {
      title: "Ops Console · sample",
      status: "Offline",
      nav: ["Overview", "Dispatch", "Devices", "Sync"],
      jobs: "Jobs",
      devices: "Devices",
      sync: "Sync",
      sample: "—",
      syncValue: "OK",
    },
    graph: {
      title: "Evaluation run · sample",
      badge: "Sample",
      groundedness: "Groundedness",
      relevance: "Answer relevance",
      guardrails: "Guardrail violations",
      latency: "p95 latency",
      cost: "Cost / 1k requests",
      sample: "—",
    },
    pipeline: [
      { title: "Commit", note: "trunk · reviewed", state: "done" },
      { title: "Build & unit tests", note: "sample", state: "done" },
      { title: "Contract & integration", note: "sample", state: "done" },
      { title: "Security scan", note: "sample", state: "done" },
      { title: "Canary deploy · 5%", note: "watching SLOs", state: "active" },
      { title: "Full rollout", note: "queued", state: "queued" },
    ],
    team: {
      roles: [
        "Tech lead",
        "Senior engineer",
        "Senior engineer",
        "QA engineer",
        "Product designer",
        "Delivery lead",
      ],
      note: "Example role",
    },
  },
};
