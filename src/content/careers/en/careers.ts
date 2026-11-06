/** From Careers.dc.html and Job.dc.html. Changes are listed in docs/content/careers-positions-register.md. */
export const careers = {
  meta: {
    title: "Careers — SimpleX",
    description:
      "How SimpleX thinks about work: hard problems, written decisions and the time to do things properly. No roles are listed right now.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "Careers" },
  hero: {
    lines: ["Do the best work", "of your career."],
    lead: "Hard problems, written decisions and the time to do things properly. We care about engineers, designers and delivery leads who care about craft — and about the people who use what they build.",
    primary: "Open roles",
    secondary: "About SimpleX",
  },
  culture: {
    eyebrow: "Culture",
    title: "What we want working here to feel like.",
    lead: "Small teams. Written decisions. Real ownership. And a shared belief that clarity is a skill worth practising.",
    items: [
      {
        title: "Meaningful complexity",
        body: "The kind of system we want to work on: ledgers, clinical workflows, logistics engines, where engineering quality matters.",
      },
      {
        title: "Good colleagues",
        body: "Pairing, design reviews and RFCs as everyday practice.",
      },
      {
        title: "Time to do it right",
        body: "Refactoring and tests are part of the estimate, not a favour.",
      },
    ],
  },
  roles: {
    eyebrow: "Open positions",
    title: "Find your role.",
    count: { one: "{count} open role", other: "{count} open roles" } as Partial<
      Record<Intl.LDMLPluralRule, string>
    > & { other: string },
    empty: {
      title: "No open roles right now",
      body: "When a role opens, it will be listed here with its team, location and how to apply.",
    },
  },
  process: {
    eyebrow: "Hiring process",
    title: "Four steps. No trick questions.",
    lead: "How we intend to hire when a role opens. We aim to give written feedback at every stage.",
    steps: [
      {
        title: "Intro call",
        body: "A short conversation about you, the role and what you’re looking for.",
      },
      {
        title: "Practical conversation",
        body: "Walk us through real work — or a short exercise if you prefer.",
      },
      {
        title: "Team session",
        body: "Meet future colleagues and design something together.",
      },
      {
        title: "Offer",
        body: "A clear offer and an honest answer to every question.",
      },
    ],
  },
  onboarding: {
    tag: "Your first 90 days",
    title: "How we plan to bring people in.",
    lead: "A buddy, a real first task and a written growth plan — so you know what good looks like.",
    steps: [
      { mark: "W1", title: "Buddy & setup", body: "Accounts, tools and a buddy from the start." },
      { mark: "M1", title: "First reviewed change", body: "A real, reviewed change, shipped." },
      {
        mark: "M2",
        title: "Own a feature",
        body: "End to end: design review, build, release, metrics.",
      },
      { mark: "M3", title: "Growth plan", body: "Written goals, reviewed together." },
    ],
  },
  cta: {
    title: "Interested anyway?",
    lead: "No role is listed today. You can get in touch, and we’ll tell you honestly whether it makes sense to talk.",
    primary: "Get in touch",
  },
  job: {
    breadcrumb: "Careers",
    responsibilities: "What you’ll do",
    requirements: "What you’ll bring",
    niceToHave: "Nice to have",
    howWeWork: "How we work",
    howWeWorkLink: "More on how we work",
    hiringProcess: "Hiring process",
    teamLabel: "Team",
    locationLabel: "Location",
    typeLabel: "Type",
    salaryLabel: "Salary",
    apply: "Apply for this role",
    copy: "Copy link to role",
    copied: "Link copied",
    others: "Other open roles",
    all: "All roles",
  },
};

export type CareersCopy = typeof careers;
