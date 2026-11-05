import type { AgentContent, BlueprintBlock } from "./types";

const block = (
  title: string,
  icon: BlueprintBlock["icon"],
  tone: BlueprintBlock["tone"],
  items: readonly string[],
): BlueprintBlock => ({ title, icon, tone, items });

/**
 * Structure from Agent.dc.html, design 1793869596-167d. No agent capability has been verified
 * (GAP-C01), so claims are worded as design intent. Each change from the source is recorded in
 * docs/content/agent-claims-register.md.
 */
export const en: AgentContent = {
  meta: {
    title: "SimpleX Agent",
    description:
      "SimpleX Agent is an engineering agent concept designed to work within your stack, with every change reviewed by an engineer. Product details are illustrative.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "SimpleX Agent" },
  hero: {
    isNew: "New",
    label: "SimpleX Agent",
    lines: ["An engineering agent", "that speaks your stack."],
    lead: "SimpleX Agent is designed to connect to your repositories and tooling, understand your frameworks and conventions, and generate services, pipelines, infrastructure and features as reviewable changes. A SimpleX engineer reviews every change before it ships.",
    primaryCta: "Ask about the agent",
    secondaryCta: "How it works",
    illustrative: "Product details illustrative",
    mock: {
      label: "Conceptual illustration of an agent session, not a live product",
      name: "SimpleX Agent",
      repository: "acme/checkout",
      status: "Illustrative",
      you: "You",
      ai: "AI",
      request: "Add subscription billing to checkout and set up staging.",
      answerStart: "Detected ",
      answerStack: "Next.js 15 · TypeScript · Prisma · PostgreSQL",
      answerEnd: ". Here’s the plan — an engineer will review each PR.",
      steps: [
        { text: "Repository read · domains mapped", state: "done" },
        { text: "Billing module + webhooks · draft PR", state: "review" },
        { text: "Tests generated for review", state: "done" },
        { text: "Terraform staging · preview env", state: "running", running: true },
      ],
      testsTitle: "Tests",
      testsNote: "for review",
      stackTitle: "Stack",
      stackItems: ["Next.js 15", "Prisma", "PostgreSQL"],
      stackNote: "example stack",
    },
  },
  stack: {
    eyebrow: "Stack-aware by design",
    title: "Pick a stack. See an example blueprint.",
    lead: "The agent is designed to read your code before it writes any, to follow your frameworks, versions and conventions, and to produce an ecosystem blueprint your team can review before anything is deployed.",
    tabsLabel: "Technology stack",
    detected: "Example",
    blueprint: "example blueprint",
    note: "Examples of the output the agent is designed for, not a list of live integrations.",
    stacks: [
      {
        id: "next",
        label: "Next.js · Node",
        detected: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
        blocks: [
          block("Services", "web", "", [
            "Web app · Next.js",
            "API · route handlers",
            "Worker · BullMQ",
          ]),
          block("Infrastructure", "cloud", "t", ["Vercel + Postgres", "Redis", "Preview per PR"]),
          block("Delivery", "quality", "m", [
            "GitHub Actions",
            "Playwright suite",
            "Contract tests",
          ]),
          block("Observability", "ai", "k", [
            "OpenTelemetry",
            "Grafana dashboards",
            "Error budgets",
          ]),
        ],
      },
      {
        id: "spring",
        label: "Kotlin · Spring",
        detected: ["Kotlin", "Spring Boot 3", "Gradle", "Kafka", "PostgreSQL"],
        blocks: [
          block("Services", "custom", "", ["Domain services", "Event consumers", "API gateway"]),
          block("Infrastructure", "cloud", "t", [
            "Kubernetes · EKS",
            "Terraform modules",
            "Managed Kafka",
          ]),
          block("Delivery", "quality", "m", ["GitHub Actions", "Testcontainers", "Argo CD"]),
          block("Observability", "ai", "k", ["Micrometer", "Prometheus", "Tracing"]),
        ],
      },
      {
        id: "dotnet",
        label: ".NET · Azure",
        detected: ["C# · .NET 8", "ASP.NET Core", "EF Core", "SQL Server", "Azure"],
        blocks: [
          block("Services", "enterprise", "", ["Web API", "Background jobs", "Admin portal"]),
          block("Infrastructure", "cloud", "t", ["AKS", "Bicep", "Service Bus"]),
          block("Delivery", "quality", "m", ["Azure DevOps", "xUnit", "Release gates"]),
          block("Observability", "ai", "k", ["Application Insights", "Alerts", "Dashboards"]),
        ],
      },
      {
        id: "django",
        label: "Python · Django",
        detected: ["Python 3.12", "Django", "Celery", "PostgreSQL", "Google Cloud"],
        blocks: [
          block("Services", "custom", "", ["API · DRF", "Workers · Celery", "Admin"]),
          block("Infrastructure", "cloud", "t", ["Cloud Run", "Cloud SQL", "Terraform"]),
          block("Delivery", "quality", "m", ["GitLab CI", "pytest", "Preview envs"]),
          block("Observability", "ai", "k", ["OpenTelemetry", "Cloud Logging", "Uptime checks"]),
        ],
      },
      {
        id: "flutter",
        label: "Flutter · Firebase",
        detected: ["Flutter", "Dart", "Firebase", "GraphQL"],
        blocks: [
          block("Apps", "mobile", "", ["iOS & Android app", "Design system", "Offline sync"]),
          block("Backend", "cloud", "t", ["BFF API", "Cloud Functions", "Push service"]),
          block("Delivery", "quality", "m", ["Fastlane", "Device test matrix", "Staged rollout"]),
          block("Observability", "ai", "k", ["Crashlytics", "Analytics", "Performance"]),
        ],
      },
    ],
  },
  how: {
    tag: "How it is designed to work",
    title: "Four steps from repository to running ecosystem.",
    lead: "The agent is designed to do the heavy lifting while our engineers own the decisions. You see every plan, diff and deployment before it happens.",
    steps: [
      {
        n: "01",
        icon: "link",
        tone: "",
        title: "Connect",
        body: "Read-only access to repositories, tickets and docs. Scoped, revocable, logged.",
      },
      {
        n: "02",
        icon: "search",
        tone: "t",
        title: "Understand",
        body: "Maps domains, dependencies and conventions; flags risks and debt before touching code.",
      },
      {
        n: "03",
        icon: "custom",
        tone: "m",
        title: "Generate",
        body: "Proposes a blueprint, then writes services, tests, IaC and docs as small reviewable PRs.",
      },
      {
        n: "04",
        icon: "cloud",
        tone: "k",
        title: "Ship & evolve",
        body: "Changes go through your own pipelines to preview, staging and production, with a person approving each one.",
      },
    ],
  },
  capabilities: {
    eyebrow: "What the agent is designed to do",
    title: "The repetitive work — done properly.",
    lead: "Scaffolding, glue code, tests, infrastructure and documentation, generated to your standards, so senior engineers can spend their time on architecture and product decisions.",
    feature: { head: "Feature generation", title: "From ticket to reviewed pull request." },
    tests: { head: "Tests", ring: "Goal", note: "Coverage target agreed with your team" },
    infrastructure: {
      head: "Infrastructure",
      big: "IaC",
      note: "Terraform, Bicep or Pulumi — matched to your cloud",
    },
    migrations: {
      head: "Migrations",
      title: "Framework & version upgrades",
      note: "Codemods with characterisation tests first",
    },
    docs: {
      head: "Docs & ADRs",
      title: "Written as it builds",
      note: "Decision records next to the code",
    },
    observability: {
      head: "Observability",
      items: ["checkout-api · p95 within SLO", "billing-worker · queue healthy"],
      state: "example",
    },
  },
  embed: {
    eyebrow: "Embed it in your product",
    title: "Put the agent inside your own product.",
    lead: "The same engine is intended to power in-product assistants and automations for your customers — white-labelled, connected to your data and governed by your rules.",
    checks: [
      "Planned SDKs for web (React) and mobile (iOS, Android, Flutter)",
      "Designed to run in your cloud, with your data in your accounts",
      "Model-agnostic by design, with evaluations and guardrails",
      "Tool permissions, audit log and human approval for risky actions",
    ],
    cta: "Discuss an embedded agent",
    tag: "Conceptual mock-up",
    mock: {
      bar: "Your product · Dashboard",
      view: "customer view",
      assistant: "Assistant",
      question: "Why did churn rise last week?",
      answer: "3 enterprise accounts paused after the pricing update. Draft a win-back email?",
      action: "Draft email · needs approval",
    },
  },
  deployment: {
    tag: "Ways to run it",
    demoTag: "Proposed models",
    title: "Three proposed deployment models.",
    lead: "Start with a managed pilot, move it into your cloud, or embed it in your product. The same governance principles are meant to apply in every model. Availability is confirmed case by case.",
    models: [
      {
        n: "Model 01",
        icon: "teams",
        title: "Managed pilot",
        body: "SimpleX would run the agent with our engineers on one repository for two weeks.",
        points: ["Quick to start", "Fixed scope", "Clear go / no-go"],
      },
      {
        n: "Model 02",
        icon: "cloud",
        title: "In your cloud",
        body: "The agent is designed to run inside your VPC with your model agreements and identity provider.",
        points: ["Data kept in your accounts", "SSO and audit", "Your cost controls"],
        featured: true,
      },
      {
        n: "Model 03",
        icon: "mobile",
        title: "Embedded SDK",
        body: "White-labelled assistants and automations inside your product, for your customers.",
        points: ["Planned web & mobile SDKs", "Your brand and rules", "Evaluations by design"],
      },
    ],
    governance: [
      {
        title: "Human in the loop",
        body: "Every pull request and deployment is meant to be approved by a person.",
      },
      {
        title: "Least privilege",
        body: "Designed for scoped, revocable access to repositories and clouds.",
      },
      {
        title: "Full audit log",
        body: "Designed to record every action, prompt and tool call.",
      },
      {
        title: "Your code",
        body: "Terms for client code, including model training, are agreed in writing first.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions about the agent.",
    items: [
      {
        question: "Does the agent replace engineers?",
        answer:
          "No. It is designed to remove repetitive work so senior engineers can focus on architecture, product and review. A SimpleX engineer stays accountable for everything it produces.",
      },
      {
        question: "Which stacks are supported?",
        answer:
          "The final list is not confirmed yet. The direction covers TypeScript/Node, Java/Kotlin, .NET, Python, Go and mobile (Swift, Kotlin, Flutter, React Native). Tell us about your stack and we will tell you where it stands.",
      },
      {
        question: "Which models does it use?",
        answer:
          "It is designed to be model-agnostic, so models can be chosen per task and run through your own cloud agreements.",
      },
      {
        question: "How do we start?",
        answer:
          "We propose a two-week pilot on one repository: map your system, propose a plan and work towards a first reviewed feature. Ask us about current availability first.",
      },
    ],
  },
  roi: {
    tag: "ROI estimator",
    title: "What would the agent give back to your team?",
    lead: "Move the sliders. The estimate uses your numbers and one stated assumption, which only a pilot on your own repository could validate.",
    copy: {
      rangeEngineers: "Engineers on the team",
      rangeShare: "Time on boilerplate, tests & scaffolding",
      rangeCost: "Loaded cost per engineer / month",
      assumption:
        "Assumption: the agent takes over 40% of that work, with every change reviewed by an engineer. This figure is a modelling assumption, not a measured result or a guarantee.",
      heading: "Illustrative estimate, every month",
      hours: "engineering hours returned",
      capacity: "engineers’ worth of capacity",
      value: "Value of returned capacity",
      perMonth: "/ month",
      pilotLabel: "Proposed pilot",
      pilotValue: "2 weeks · your repo",
      outputLabel: "Pilot output",
      outputValue: "Reviewable PRs and pipelines",
    },
    cta: "Ask about a pilot",
  },
  cta: {
    title: "Talk to us about your code.",
    lead: "Tell us about your repositories and what you would want the agent to take on. We will be straight about what is ready and what is not.",
    primaryCta: "Ask about the agent",
    secondaryCta: "AI engineering",
  },
};
