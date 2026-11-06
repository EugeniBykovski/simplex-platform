/** From About.dc.html. Changes are listed in docs/content/company-claims-register.md. */
export const about = {
  meta: {
    title: "About — SimpleX",
    description:
      "SimpleX is a software engineering and digital product company. We exist to make complex systems feel simple, for the people who use them and the people who maintain them.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "About" },
  hero: {
    lines: ["Simple to use.", "Simple to change."],
    lead: "SimpleX is a software engineering and digital product company. We exist to make complex systems feel simple — for the people who use them and the people who maintain them.",
  },
  story: {
    eyebrow: "Our story",
    title: "The name is the brief.",
    logoLabel: "SimpleX",
    quote:
      "“Simple” is what people should experience. “X” is everything it takes to get there — the integrations, edge cases, constraints and trade-offs nobody sees.",
    paragraphs: [
      "SimpleX starts from a simple observation: most software doesn’t fail because the problem was too hard. It fails because complexity was allowed to leak — into the interface, into the codebase, into the way teams work together.",
      "So we are building a company around the opposite habit. We want to take on difficult systems — financial ledgers, clinical workflows, logistics platforms, decade-old enterprise cores — and refuse to let their complexity become the user’s problem, or the next team’s.",
      "Our logo carries that idea. Two strokes cross; one is deliberately interrupted where the other passes through. It’s the moment complexity is resolved into something clear.",
    ],
  },
  mission: {
    tag: "Mission",
    titleStart: "Engineer the complex so that what people experience is",
    titleEnd: "clear.",
    philosophy: [
      {
        label: "Philosophy 01",
        title: "Clarity over cleverness",
        body: "The best solution is the one the next engineer understands on first read.",
      },
      {
        label: "Philosophy 02",
        title: "Evidence over opinion",
        body: "We measure before we change and say what we don’t know.",
      },
      {
        label: "Philosophy 03",
        title: "Long term by default",
        body: "We build as if we’ll maintain it for ten years — because someone will.",
      },
    ],
  },
  values: {
    eyebrow: "Engineering values",
    title: "How we make decisions when nobody’s watching.",
    lead: "Values are only useful if they change behaviour. Each of these is meant to show up in our code reviews, our estimates and our hiring.",
    practice: "In practice:",
    items: [
      {
        title: "Leave it clearer than you found it",
        body: "Every change should make the system easier to understand.",
        practice: "refactoring is part of every estimate.",
      },
      {
        title: "Write it down",
        body: "Decisions, trade-offs and assumptions belong in writing, next to the code.",
        practice: "architecture decision records.",
      },
      {
        title: "Small, safe, often",
        body: "Small changes are easier to review, test, release and undo.",
        practice: "trunk-based development and feature flags.",
      },
      {
        title: "Test what matters",
        body: "Tests describe behaviour the business depends on.",
        practice: "risk-based test strategy, not coverage targets.",
      },
      {
        title: "Say the uncomfortable thing early",
        body: "Bad news gets cheaper the earlier it arrives.",
        practice: "a risk register reviewed every month.",
      },
      {
        title: "Own the outcome",
        body: "We measure ourselves by what changes for the business.",
        practice: "success metrics agreed for each engagement.",
      },
    ],
  },
  ways: {
    eyebrow: "Ways of working",
    title: "Small teams, written decisions, one lead.",
    body: "We aim to keep teams small and experienced. Decisions are written down where everyone can find them. And each engagement should have one accountable lead who answers for the outcome.",
    action: "See how we work",
    tiles: [
      { value: "Small", label: "Teams, sized to the work" },
      { value: "1", label: "Accountable lead, planned per engagement" },
      { value: "Often", label: "Working demos, on a rhythm agreed up front" },
      { value: "Agreed", label: "Ownership of code and IP, set out in the contract" },
    ],
  },
  culture: {
    eyebrow: "Team culture",
    title: "Curious, candid, calm under pressure.",
    lead: "We want to work with people who like hard problems and explain them simply, and to protect the time they need to do their best work.",
    learning: {
      label: "Learning time",
      title: "Time to learn should be scheduled, not squeezed in.",
    },
    guild: {
      label: "Engineering practice",
      title: "Internal talks, RFCs and a shared engineering handbook anyone can improve.",
    },
  },
  trust: {
    tag: "Trust",
    title: "How we intend to handle your code and your data.",
    lead: "The questions your security and procurement teams will ask. What’s binding is what the contract says.",
    tiles: [
      {
        seal: "NDA",
        title: "NDA before kick-off",
        body: "A mutual NDA can be signed before you share details.",
      },
      {
        seal: "IAM",
        title: "Least-privilege access",
        body: "SSO, MFA and access reviews are how we plan to work.",
      },
      {
        seal: "DATA",
        title: "Your cloud, your data",
        body: "We prefer to work inside your own accounts.",
      },
      {
        seal: "SEC",
        title: "Security in the pipeline",
        body: "SAST, dependency and secret scanning planned in CI.",
      },
      {
        seal: "IP",
        title: "Ownership in the contract",
        body: "Code, designs and documentation, set out before work starts.",
      },
      {
        seal: "CERT",
        title: "Certifications",
        body: "None is claimed on this site.",
      },
    ],
    action: "Ask about security",
  },
  cta: {
    title: "Want to build with us?",
    lead: "Tell us what you’re building, or see how we think about careers at SimpleX.",
    primary: "View careers",
    secondary: "Work with us",
  },
};

export type AboutCopy = typeof about;
