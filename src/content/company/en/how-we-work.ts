/** From HowWeWork.dc.html. Changes are listed in docs/content/company-claims-register.md. */
export const howWeWork = {
  meta: {
    title: "How We Work - SimpleX",
    description:
      "Most project risk is invisible until it’s expensive. Our way of working is designed to make it visible early - in architecture, in code and in conversation.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "How We Work" },
  hero: {
    lines: ["Clarity is a", "delivery method."],
    lead: "Most project risk is invisible until it’s expensive. Our way of working is designed to make it visible early - in architecture, in code and in conversation.",
    chain: [
      "Discovery",
      "Architecture",
      "Strategy",
      "Design",
      "Engineering",
      "QA",
      "Deployment",
      "Optimisation",
    ],
  },
  principles: {
    eyebrow: "Principles",
    title: "Four principles we work to.",
    lead: "They describe how we intend to work. What’s binding goes in the statement of work.",
    items: [
      {
        title: "Ownership",
        body: "One accountable lead per engagement. We want to own outcomes, not just tickets - and to say so when something is at risk.",
      },
      {
        title: "Transparency",
        body: "Your code, your backlog, your dashboards. Delivery shouldn’t be hidden in our tools.",
      },
      {
        title: "Communication",
        body: "A regular cadence of demos, reviews and steering, plus direct access to the engineers doing the work.",
      },
      {
        title: "Delivery",
        body: "Working software early and often. Progress is measured in production, not in status reports.",
      },
    ],
  },
  method: {
    tag: "Methodology",
    titleStart: "Eight stages.",
    titleEnd: "Fewer surprises.",
    lead: "Stages overlap and repeat - architecture keeps evolving during engineering, optimisation feeds the next discovery. What stays the same is that each stage should end with something concrete.",
    action: "Plan your first stage",
    durationLabel: "Indicative duration",
    outputLabel: "You receive",
    stages: [
      {
        title: "Discovery",
        body: "Interviews, analytics and a hands-on system audit. We separate what everyone believes about the problem from what the evidence says.",
        duration: "2–4 weeks",
        output: "Opportunity map, risk register",
      },
      {
        title: "Technical architecture",
        body: "Target architecture, technology choices and the trade-offs behind them, written as decision records your team can challenge.",
        duration: "2–3 weeks",
        output: "Architecture, ADRs",
      },
      {
        title: "Product strategy",
        body: "Outcomes, success metrics and a roadmap sequenced by value and risk - so the first release tests the riskiest assumption.",
        duration: "1–2 weeks",
        output: "Roadmap, success metrics",
      },
      {
        title: "Design",
        body: "Flows and prototypes tested with real users; a design system engineers build directly from.",
        duration: "Continuous",
        output: "Prototypes, design system",
      },
      {
        title: "Engineering",
        body: "Small, reviewed changes on trunk, behind automated tests and pipelines. Demos every sprint in a production-like environment.",
        duration: "Sprints of 2 weeks",
        output: "Working software",
      },
      {
        title: "Quality assurance",
        body: "Quality engineers involved from the start: automated suites, exploratory testing and performance checks before release.",
        duration: "Continuous",
        output: "Test suites, quality metrics",
      },
      {
        title: "Deployment",
        body: "Progressive delivery with feature flags, canary releases and tested rollbacks. Launch is a business decision, not a technical event.",
        duration: "Continuous",
        output: "Release, runbooks",
      },
      {
        title: "Optimisation",
        body: "Observability, performance and cost work, plus product analytics that feed the next discovery cycle.",
        duration: "Ongoing",
        output: "SLOs, insights, next roadmap",
      },
    ],
  },
  rhythm: {
    eyebrow: "Rhythm",
    title: "A cadence you can plan around.",
    body: "The rhythm we propose, agreed at the start of each engagement. You should always know when you’ll next see progress and who to call.",
    items: [
      {
        when: "Daily",
        title: "Async stand-up",
        body: "Written progress and blockers in your channel - no meeting tax.",
      },
      {
        when: "Weekly",
        title: "Working demo",
        body: "Software you can click, not slides. Feedback goes straight into the backlog.",
      },
      {
        when: "Fortnightly",
        title: "Review & planning",
        body: "Sprint outcomes, metrics and next priorities, agreed with your product owner.",
      },
      {
        when: "Monthly",
        title: "Steering",
        body: "Outcomes, budget, risks and forecast with your sponsor.",
      },
      {
        when: "Quarterly",
        title: "Architecture review",
        body: "A review of structure, debt and fitness for the next quarter’s plans.",
      },
    ],
  },
  transparency: {
    eyebrow: "Transparency",
    title: "Everything visible, by default.",
    checks: [
      "Code in your repositories from the first commit",
      "Backlog in your tool - Jira, Linear or Azure DevOps",
      "Delivery metrics on a shared dashboard: lead time, deployment frequency, change failure rate",
      "Architecture decision records next to the code",
      "A monthly risk register reviewed with your sponsor",
    ],
    mock: {
      title: "Delivery dashboard · sample",
      badge: "Sample",
      kpis: ["Lead time", "Deploys / week", "Change failure"],
      burnup: "Scope burn-up",
      illustrative: "Illustrative",
      risk: "Risk: bank API rate limits",
      riskBadge: "Mitigating",
    },
  },
  report: {
    tag: "Every sprint",
    title: "The report you’ll actually read.",
    lead: "One page, every sprint: what shipped, what it cost, what’s at risk and what we decided. Same numbers your team sees in the backlog.",
    checks: [
      "Budget burn against forecast",
      "Risks with owners and dates",
      "Decisions logged as ADRs in your repo",
    ],
    mock: {
      label: "Sprint report · sample",
      title: "Sample project",
      badge: "Sample",
      tiles: ["Scope done", "PRs merged", "Deploys", "Budget used"],
      burnup: "Burn-up · sample",
      risk: "Risk · bank sandbox delays",
      riskOwner: "Owner: TL",
      decision: "Decision · idempotent payouts",
      decisionStatus: "Sample",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions we hear early.",
    action: "Ask something else",
    items: [
      {
        question: "How do you estimate cost and timeline?",
        answer:
          "After discovery we give a range with explicit assumptions and risks, then re-forecast as we learn. For fixed-scope work, fixed prices per stage can be discussed once the architecture is settled.",
      },
      {
        question: "Can we start small?",
        answer:
          "Yes - an engagement can begin with a short discovery or architecture review. You decide whether to continue based on what it produces.",
      },
      {
        question: "How do you work with our in-house engineers?",
        answer:
          "As one team: shared backlog, shared rituals, shared definition of done. We pair deliberately so knowledge stays with you.",
      },
      {
        question: "Where is your team located?",
        answer:
          "We’ll confirm where the team is based, and agree core overlap hours, when we scope the work.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We discuss the options with you: a planned handover with documentation and pairing, ongoing evolution with a smaller team, or an operations agreement with service levels set out in it.",
      },
    ],
  },
  cta: {
    title: "Start with a conversation, not a contract.",
    lead: "Tell us where you are. We’ll suggest the smallest first stage that would make the next decision easier.",
    primary: "Let’s Talk",
  },
};

export type HowWeWorkCopy = typeof howWeWork;
