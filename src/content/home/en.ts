import type { HomeContent } from "./types";

/**
 * Copy from Home.dc.html, design 1793869596-167d. Departures for truthfulness are listed in
 * docs/qa/homepage-visual-parity.md.
 */
export const en: HomeContent = {
  meta: {
    title: "SimpleX - Complex engineering. Clear outcomes.",
    description:
      "We design, build, and scale digital products that turn ambitious ideas into real business advantage.",
  },
  hero: {
    eyebrow: "Software engineering · AI agents · Digital products",
    lines: ["Complex engineering.", "Clear outcomes."],
    lead: "We design, build, and scale digital products that turn ambitious ideas into real business advantage.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Our Expertise",
    scroll: "Scroll",
  },
  statements: {
    label: "Our point of view",
    items: [
      {
        counter: "01 / 03 · Our point of view",
        icon: "architecture",
        title: "Software rarely fails all at once.",
        body: "It erodes - through shortcuts nobody revisits, ownership nobody holds and architecture nobody can explain. We build systems that stay understandable as they grow.",
      },
      {
        counter: "02 / 03",
        icon: "legacy",
        title: "Speed without structure is borrowed time.",
        body: "We move quickly because we decide carefully. Clear architecture, automated quality and honest estimates let teams ship every week without paying for it later.",
      },
      {
        counter: "03 / 03",
        icon: "ai",
        title: "AI that ships inside your product.",
        body: "Our own SimpleX Agent is designed to build on your stack and run inside your product - evaluated, governed and engineered to the same standard as everything else.",
      },
    ],
  },
  whatWeDo: {
    tag: "What we do",
    titleStart: "Engineering everything",
    titleTone: "that moves you forward.",
    lead: "Every capability, one accountable team - from a two-person app pod to the full product. Bring us a blank page, a product that needs to grow, or a system that has outgrown itself.",
    link: "See all services",
    services: [
      {
        icon: "custom",
        title: "Custom Software",
        href: "/services/custom-software-development",
        description:
          "Bespoke platforms and products designed around how your business actually works - not around a template.",
        chips: ["Platforms", "Internal tools", "APIs"],
      },
      {
        icon: "web",
        title: "Web & Mobile",
        href: "/services/web-development",
        description:
          "Fast, accessible web applications and native-quality mobile apps, built on one coherent product architecture.",
        chips: ["Web apps", "iOS & Android", "Design systems"],
      },
      {
        icon: "ai",
        title: "AI Engineering",
        href: "/services/ai-engineering",
        description:
          "Retrieval, automation and intelligent features engineered for production: evaluated, observable and cost-aware.",
        chips: ["LLM integration", "Automation", "Evaluation"],
      },
      {
        icon: "cloud",
        title: "Cloud & DevOps",
        href: "/services/cloud-devops",
        description:
          "Infrastructure as code, delivery pipelines and observability that make releases routine.",
        chips: ["AWS · Azure · GCP", "Kubernetes", "Platform"],
      },
      {
        icon: "design",
        title: "Product Design",
        href: "/services/product-design",
        description:
          "Research, UX and interface systems that make complex products feel obvious to the people who use them.",
        chips: ["Discovery", "UX & UI", "Design systems"],
      },
      {
        icon: "architecture",
        title: "Architecture & Consulting",
        href: "/services/architecture-consulting",
        description:
          "Architecture reviews, technical due diligence and roadmaps you can act on - written by engineers who build.",
        chips: ["Reviews", "Due diligence", "Roadmaps"],
      },
    ],
  },
  agent: {
    isNew: "New",
    eyebrow: "SimpleX Agent",
    titleStart: "An AI engineer",
    titleAccent: "that knows your stack.",
    lead: "Our own agent is designed to connect to your repositories, understand your frameworks and generate services, pipelines, infrastructure and features as reviewable changes - for stacks such as Next.js, Spring, .NET, Django and Flutter.",
    illustrative: "Product details illustrative",
    checks: [
      "Stack-aware: designed to follow your frameworks, versions and conventions",
      "Reviewable: services, CI/CD, IaC and observability proposed as pull requests",
      "Embeddable: planned as white-labelled assistants inside your own apps",
      "Governed: every change approved by a SimpleX engineer",
    ],
    primaryCta: "Meet the agent",
    secondaryCta: "Ask for a demo",
  },
  packages: {
    isNew: "New",
    chip: "Build packages",
    title: "From a two-person app team to your whole product.",
    lead: "A compact pod for iOS, Android or React Native. Desktop software for Windows, macOS and Linux. Or the full cycle - backend, web app, website, admin panel and both mobile apps from one squad.",
    link: "Compare packages",
    cards: [
      {
        label: "01 · Mobile pod",
        team: "2 people",
        title: "A complete app, from two engineers.",
        body: "Native iOS, native Android or one React Native app for both stores - designed, built and released.",
      },
      {
        label: "02 · Desktop apps",
        team: "2–3 people",
        title: "Software that belongs on the desk.",
        body: "Windows, macOS and Linux - offline-first, hardware-aware, signed and auto-updating.",
      },
      {
        label: "03 · Full cycle",
        team: "One squad",
        title: "Backend, web, website, admin, iOS & Android.",
        body: "The whole product as one system - one API, one design system, one release train.",
      },
    ],
  },
  why: {
    eyebrow: "Why SimpleX",
    title: "The best engineering is the part nobody notices.",
    lead: "Until it’s missing. We balance six things most partners trade against each other - so the product you launch is also the product you can keep.",
    cards: [
      {
        label: "01 · Engineering excellence",
        title: "Standards written down, not assumed.",
        body: "Senior engineers, peer-reviewed code and automated quality gates on every change. Our engineering handbook is part of the contract.",
      },
      {
        label: "02 · Product thinking",
        title: "Why before how.",
        body: "Every sprint is tied to an outcome you can measure. We’ll challenge a feature before we build it.",
      },
      {
        label: "03 · Long-term maintainability",
        title: "The system you get is the system you can keep.",
        body: "Readable code, documented decisions and tests that describe behaviour.",
      },
      {
        label: "04 · Delivery ownership",
        title: "One accountable team, start to finish.",
        body: "Risks surfaced early and in writing. No hand-offs between agencies.",
      },
      {
        label: "05 · Architectural quality",
        title: "Structure that stays honest.",
        body: "Decision records, fitness functions and regular reviews as scope grows.",
      },
      {
        label: "06 · Business outcomes",
        title: "Measured in outcomes, not hours.",
        body: "We report on lead time, reliability, adoption and cost to serve - the numbers your board actually asks about.",
      },
    ],
  },
  work: {
    eyebrow: "Featured work",
    titleStart: "Real products,",
    titleTone: "engineered end to end.",
    link: "All work",
    role: "Our role",
    built: "What is built",
    cta: "View project",
  },
  how: {
    tag: "How we work",
    titleStart: "From complexity",
    titleTone: "to clarity.",
    lead: "Five stages, the same on a six-week discovery or a five-year platform. Each one ends with something you can see, use or decide on.",
    chain: ["Discover", "Architect", "Design", "Build", "Scale"],
    cta: "Our delivery approach",
    receive: "You receive",
    steps: [
      {
        n: "01",
        kicker: "Discover",
        title: "Understand the system as it really is.",
        description:
          "Interviews, analytics and a hands-on audit of code and infrastructure. We separate what you believe about the system from what it actually does.",
        out: ["Opportunity map", "System audit", "Risk register"],
      },
      {
        n: "02",
        kicker: "Architect",
        title: "Make the expensive decisions deliberately.",
        description:
          "Target architecture, trade-offs written as decision records, and a delivery plan sequenced by risk - not by convenience.",
        out: ["Target architecture", "ADRs", "Delivery plan"],
      },
      {
        n: "03",
        kicker: "Design",
        title: "Shape the product with its users.",
        description:
          "Prototypes tested with real users, a design system engineers can build from, and flows that make complexity feel obvious.",
        out: ["Prototypes", "Design system", "Usability findings"],
      },
      {
        n: "04",
        kicker: "Build",
        title: "Ship working software every sprint.",
        description:
          "Small, reviewed changes behind automated tests and pipelines. You see progress in production-like environments, not in status reports.",
        out: ["Production code", "Test suites", "CI/CD"],
      },
      {
        n: "05",
        kicker: "Scale",
        title: "Operate, measure and evolve.",
        description:
          "Observability, performance and cost work as usage grows - and a roadmap that keeps the architecture ahead of demand.",
        out: ["Observability", "SLOs", "Evolution roadmap"],
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Context changes everything.",
    lead: "Regulation, peak load, safety, scale. We bring patterns that already work in your sector - and the judgement to know when they don’t.",
    cards: [
      {
        name: "FinTech",
        icon: "fintech",
        viz: "fintech",
        href: "/industries/fintech",
        description: "Real-time, auditable systems for payments, lending and treasury.",
      },
      {
        name: "Healthcare",
        icon: "health",
        viz: "healthcare",
        href: "/industries/healthcare",
        description:
          "Patient and clinician platforms built for safety, privacy and interoperability.",
      },
      {
        name: "E-\u2060commerce",
        icon: "commerce",
        viz: "ecommerce",
        href: "/industries/ecommerce",
        description: "Commerce platforms that stay fast at peak and flexible between peaks.",
      },
      {
        name: "SaaS",
        icon: "saas",
        viz: "saas",
        href: "/industries/saas",
        description:
          "Multi-tenant products engineered for growth, reliability and healthy unit economics.",
      },
      {
        name: "Enterprise",
        icon: "building",
        viz: "enterprise",
        href: "/industries/enterprise",
        description: "Core systems, integration and modernisation across complex estates.",
      },
      {
        name: "Logistics",
        icon: "logistics",
        viz: "logistics",
        href: "/industries/logistics",
        description: "Real-time visibility, planning and orchestration for operations in motion.",
      },
    ],
  },
  technology: {
    eyebrow: "Technology expertise",
    titleStart: "Chosen for the problem,",
    titleTone: "not the trend.",
    lead: "A deliberately broad toolkit, applied conservatively. We favour mature, well-supported technology and introduce new tools only where they earn their place.",
    tabsLabel: "Technology categories",
    directory: "Full technology directory",
    showAll: "Show all {count}",
    showFewer: "Show fewer",
    tabs: [
      {
        id: "frontend",
        label: "Frontend",
        headline: "Interfaces that stay fast as products grow.",
        description:
          "Type-safe component architectures, design systems shared with design, and performance budgets enforced in CI.",
        items: [
          { name: "TypeScript", use: "Default for all front-end code" },
          { name: "React", use: "Product interfaces" },
          { name: "Next.js", use: "Web apps & content sites" },
          { name: "Vue", use: "Existing estates" },
          { name: "Angular", use: "Enterprise front ends" },
          { name: "Storybook", use: "Component documentation" },
          { name: "Tailwind CSS", use: "Utility styling" },
          { name: "Web Components", use: "Cross-framework UI" },
        ],
      },
      {
        id: "backend",
        label: "Backend",
        headline: "Services that are boring in the best way.",
        description:
          "Clear domain boundaries, well-documented APIs and data models designed for change.",
        items: [
          { name: "Node.js", use: "APIs & BFFs" },
          { name: "Java / Kotlin", use: "Transactional systems" },
          { name: ".NET / C#", use: "Enterprise platforms" },
          { name: "Go", use: "High-throughput services" },
          { name: "Python", use: "Data & ML services" },
          { name: "GraphQL", use: "Product APIs" },
          { name: "gRPC", use: "Service-to-service" },
          { name: "PostgreSQL", use: "Primary data store" },
        ],
      },
      {
        id: "mobile",
        label: "Mobile",
        headline: "Native quality, shared where it makes sense.",
        description:
          "We choose native or cross-platform per product - based on performance needs, team skills and long-term cost.",
        items: [
          { name: "Swift / SwiftUI", use: "iOS" },
          { name: "Kotlin / Compose", use: "Android" },
          { name: "React Native", use: "Cross-platform" },
          { name: "Flutter", use: "Cross-platform" },
          { name: "Expo", use: "Delivery & updates" },
          { name: "Firebase", use: "Messaging & analytics" },
        ],
      },
      {
        id: "cloud",
        label: "Cloud",
        headline: "Infrastructure you can read like code.",
        description:
          "Everything provisioned as code, environments reproducible, costs visible per service.",
        items: [
          { name: "AWS", use: "Primary cloud" },
          { name: "Microsoft Azure", use: "Enterprise estates" },
          { name: "Google Cloud", use: "Data-heavy workloads" },
          { name: "Terraform", use: "Infrastructure as code" },
          { name: "Kubernetes", use: "Container orchestration" },
          { name: "Serverless", use: "Event-driven workloads" },
        ],
      },
      {
        id: "data",
        label: "Data",
        headline: "Data that the business can trust.",
        description:
          "Pipelines with contracts and tests, models with owners, and lineage you can explain to an auditor.",
        items: [
          { name: "Kafka", use: "Event streaming" },
          { name: "Snowflake", use: "Analytics warehouse" },
          { name: "BigQuery", use: "Analytics warehouse" },
          { name: "dbt", use: "Transformation" },
          { name: "Airflow", use: "Orchestration" },
          { name: "Elasticsearch", use: "Search" },
        ],
      },
      {
        id: "ai",
        label: "AI",
        headline: "Intelligent features, engineered properly.",
        description:
          "Model-agnostic integrations with evaluation, guardrails, observability and cost controls from day one.",
        items: [
          { name: "Foundation model APIs", use: "Language & vision" },
          { name: "Retrieval (RAG)", use: "Grounded answers" },
          { name: "Vector databases", use: "Semantic search" },
          { name: "LangGraph", use: "Agent workflows" },
          { name: "PyTorch", use: "Custom models" },
          { name: "MLflow", use: "Experiment tracking" },
          { name: "Evaluation harnesses", use: "Quality gates" },
        ],
      },
      {
        id: "devops",
        label: "DevOps",
        headline: "Releases that are routine, not events.",
        description:
          "Trunk-based workflows, progressive delivery and observability wired in from the first service.",
        items: [
          { name: "GitHub Actions", use: "CI/CD" },
          { name: "GitLab CI", use: "CI/CD" },
          { name: "Argo CD", use: "GitOps delivery" },
          { name: "Docker", use: "Containers" },
          { name: "OpenTelemetry", use: "Tracing & metrics" },
          { name: "Grafana", use: "Dashboards & alerting" },
        ],
      },
      {
        id: "quality",
        label: "Quality",
        headline: "Confidence you can measure.",
        description:
          "A test pyramid tuned to your risk: contracts between services, journeys end to end, load before launch.",
        items: [
          { name: "Playwright", use: "End-to-end web" },
          { name: "Cypress", use: "Component & E2E" },
          { name: "Appium", use: "Mobile automation" },
          { name: "Pact", use: "Contract testing" },
          { name: "k6", use: "Load & performance" },
          { name: "SonarQube", use: "Static analysis" },
        ],
      },
    ],
  },
  models: {
    tag: "Engagement models",
    title: "Three ways to work together.",
    lead: "Same standards, same people, different shapes. Most clients start with one model and move between them as their needs change.",
    bestFor: "Best for",
    cards: [
      {
        label: "Model 01",
        icon: "custom",
        title: "End-to-End Product Delivery",
        description:
          "From idea to production and beyond - strategy, design, engineering and operation under one accountable lead.",
        best: [
          "Startups building a first product",
          "New digital business lines",
          "Teams without in-house engineering",
        ],
        cta: "Discuss a product",
      },
      {
        label: "Model 02",
        icon: "teams",
        title: "Dedicated Engineering Teams",
        description:
          "Senior engineers who join your rituals and tooling, scaling with your roadmap instead of your hiring pipeline.",
        best: [
          "Scale-ups growing faster than hiring",
          "Product teams with a clear roadmap",
          "Long-running platform work",
        ],
        cta: "Build a team",
        featured: true,
      },
      {
        label: "Model 03",
        icon: "architecture",
        title: "Technical Consulting & Architecture",
        description:
          "Focused senior expertise for decisions that matter: architecture reviews, due diligence and modernisation strategy.",
        best: [
          "CTOs facing a major technical decision",
          "Investors assessing a portfolio company",
          "Teams planning modernisation",
        ],
        cta: "Ask for a review",
      },
    ],
  },
  engagement: {
    chip: "Working with SimpleX",
    title: "Transparent by default.",
    lead: "You see the same board, the same pull requests and the same work in progress we do - every day, not at the end of a phase.",
    room: {
      live: "Live",
      label: "Shared delivery room",
      title: "One room. Your team and ours.",
      body: "A shared channel, a shared backlog and weekly demos. Decisions are written down; nothing waits for a status report.",
      chips: ["Weekly demo", "Shared backlog", "Decision log"],
    },
    agent: {
      label: "Agent pilot",
      status: "Running in your repo",
      body: "Planned to start read-only, and write only through reviewed pull requests.",
    },
    team: { label: "Your team", body: "Senior engineers you can name, from week one." },
    toasts: [
      { title: "Demo · sprint review", body: "Friday · sample" },
      { title: "PR reviewed by an engineer", body: "Every change" },
      { title: "Decision recorded", body: "ADR in your repo" },
      { title: "Deployed behind a flag", body: "Rollback in one step" },
    ],
  },
  insights: {
    eyebrow: "Insights",
    title: "Notes from the work.",
    link: "All insights",
    sample: "Sample articles",
    minutes: "{count} min read",
    featured: {
      tag: "Architecture",
      title: "The quiet cost of a distributed monolith",
      body: "Microservices that must deploy together are a monolith with network latency. How to spot one, and three ways out.",
      minutes: 9,
    },
    cards: [
      {
        tag: "AI in practice",
        title: "Evaluating LLM features before they reach users",
        body: "Offline test sets, guardrails and online metrics - a practical evaluation stack for product teams.",
        minutes: 7,
      },
      {
        tag: "Engineering leadership",
        title: "Five questions to ask before a rewrite",
        body: "Most rewrites fail for reasons that were visible on day one. A checklist for CTOs and their boards.",
        minutes: 6,
      },
    ],
  },
  estimator: {
    tag: "Estimator · 60 seconds",
    title: "Shape your team before the first call.",
    lead: "Choose what you’re building. See the team we’d put on it - then get a written proposal from a senior engineer.",
    steps: {
      type: "1 · What are you building?",
      platforms: "2 · Platforms",
      stage: "3 · Where are you now?",
      pace: "4 · Pace",
    },
    types: {
      mobile: "Mobile app",
      web: "Web platform",
      full: "Full product",
      desktop: "Desktop app",
    },
    platforms: {
      ios: "iOS",
      android: "Android",
      web: "Web app",
      admin: "Admin panel",
      desktop: "Desktop",
    },
    stages: { idea: "Idea / discovery", mvp: "Building an MVP", scale: "Scaling a live product" },
    paces: { std: "Standard", fast: "Fast-track" },
    roles: {
      reactNative: "React Native engineer",
      android: "Android engineer",
      ios: "iOS engineer",
      fullStack: "Full-stack engineer",
      desktop: "Desktop engineer",
      qa: "QA engineer",
      productLead: "Product lead",
      frontend: "Frontend engineer",
      backend: "Backend engineer",
      fullStackAdmin: "Full-stack (admin)",
      productDesigner: "Product designer",
      mobilePair: "Mobile ×2 (iOS + Android)",
      mobile: "Mobile engineer",
      qaDevOps: "QA & DevOps (shared)",
      architect: "Solution architect",
      extraEngineer: "+1 engineer to parallelise",
    },
    result: {
      heading: "Your indicative team",
      live: "Live",
      sizeCompact: "people · compact pod",
      sizeSquad: "people · one accountable squad",
      engagement: "Engagement",
      modelPod: "Pod · monthly",
      modelDiscovery: "Discovery sprint → squad",
      modelSquad: "Dedicated squad · monthly",
      cta: "Get a written proposal",
      note: "Indicative only",
    },
  },
  cta: {
    eyebrow: "Start a conversation",
    title: "Let’s build something exceptional.",
    lead: "Tell us what you’re building. We’ll help you make it real.",
    primaryCta: "Let’s Talk",
    secondaryCta: "See our work",
    kpis: [
      { title: "30-minute call", body: "With a senior engineer, not sales" },
      { title: "Written proposal", body: "Scope, team and price" },
      { title: "NDA first", body: "Signed before you share details" },
    ],
    trust: ["Code and IP are yours", "Senior engineers only"],
  },
};
