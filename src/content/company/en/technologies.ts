/**
 * From Technologies.dc.html. The directory is the design's, and awaits a founder's confirmation:
 * see docs/content/company-claims-register.md. No logo or vendor relationship is implied.
 */
export const technologies = {
  meta: {
    title: "Technologies — SimpleX",
    description:
      "A directory of technologies SimpleX plans around, grouped by capability. It describes engineering practice, not vendor certifications or partnerships.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", company: "Company", current: "Technologies" },
  hero: {
    lines: ["The toolkit,", "and how we use it."],
    lead: "A directory of the technologies we plan around, grouped by capability. It describes engineering practice — not vendor certifications or partnerships.",
    core: "Core — our usual choice",
    selective: "Selective — used where it fits",
  },
  directory: {
    searchLabel: "Search technologies",
    searchPlaceholder: "Search — e.g. Kotlin, Terraform, RAG",
    categoryLabel: "Category",
    all: "All",
    coreTag: "Core",
    selectiveTag: "Selective",
    count: { one: "{count} technology", other: "{count} technologies" } as Partial<
      Record<Intl.LDMLPluralRule, string>
    > & { other: string },
    inCategory: "in {category}",
    matching: "matching “{query}”",
    empty: {
      title: "No match for “{query}”",
      body: "This list covers the tools we plan around most. Ask us directly about anything else.",
      clear: "Clear search",
      ask: "Ask about a technology",
    },
    groups: [
      {
        name: "Frontend",
        description: "Type-safe, accessible, performance-budgeted interfaces.",
        items: [
          { name: "TypeScript", use: "Default language for front-end work", core: true },
          { name: "React", use: "Product interfaces and design systems", core: true },
          { name: "Next.js", use: "Server-rendered apps and content sites", core: true },
          { name: "Vue", use: "Existing estates and lighter apps", core: false },
          { name: "Angular", use: "Enterprise front ends", core: false },
          { name: "Storybook", use: "Component documentation", core: true },
        ],
      },
      {
        name: "Backend",
        description: "Clear domain boundaries and well-documented APIs.",
        items: [
          { name: "Node.js", use: "APIs and backends-for-frontends", core: true },
          { name: "Java / Kotlin", use: "Transactional and event-driven systems", core: true },
          { name: ".NET / C#", use: "Enterprise platforms", core: true },
          { name: "Go", use: "High-throughput services", core: false },
          { name: "Python", use: "Data and ML services", core: true },
          { name: "GraphQL", use: "Product-facing APIs", core: false },
        ],
      },
      {
        name: "Mobile",
        description: "Native where it matters, shared where it pays.",
        items: [
          { name: "Swift / SwiftUI", use: "Native iOS", core: true },
          { name: "Kotlin / Compose", use: "Native Android", core: true },
          { name: "React Native", use: "Cross-platform apps", core: true },
          { name: "Flutter", use: "Cross-platform apps", core: false },
          { name: "Fastlane", use: "Release automation", core: true },
        ],
      },
      {
        name: "Cloud",
        description: "Everything as code; cost visible per service.",
        items: [
          { name: "AWS", use: "Primary cloud platform", core: true },
          { name: "Microsoft Azure", use: "Enterprise estates", core: true },
          { name: "Google Cloud", use: "Data-heavy workloads", core: false },
          { name: "Terraform", use: "Infrastructure as code", core: true },
          { name: "Kubernetes", use: "Container orchestration", core: true },
          { name: "Serverless", use: "Event-driven workloads", core: false },
        ],
      },
      {
        name: "Data",
        description: "Pipelines with contracts, tests and owners.",
        items: [
          { name: "PostgreSQL", use: "Primary relational store", core: true },
          { name: "Kafka", use: "Event streaming", core: true },
          { name: "Snowflake", use: "Analytics warehouse", core: false },
          { name: "BigQuery", use: "Analytics warehouse", core: false },
          { name: "dbt", use: "Transformation", core: true },
          { name: "Airflow", use: "Orchestration", core: false },
        ],
      },
      {
        name: "AI",
        description: "Model-agnostic, evaluated, observable.",
        items: [
          { name: "Foundation model APIs", use: "Language and vision features", core: true },
          { name: "RAG", use: "Grounded, cited answers", core: true },
          { name: "Vector databases", use: "Semantic retrieval", core: true },
          { name: "LangGraph", use: "Agent workflows", core: false },
          { name: "PyTorch", use: "Custom models", core: false },
          { name: "MLflow", use: "Experiment tracking", core: false },
        ],
      },
      {
        name: "DevOps",
        description: "Releases that are routine.",
        items: [
          { name: "GitHub Actions", use: "CI/CD", core: true },
          { name: "GitLab CI", use: "CI/CD", core: false },
          { name: "Argo CD", use: "GitOps delivery", core: true },
          { name: "Docker", use: "Containers", core: true },
          { name: "OpenTelemetry", use: "Tracing and metrics", core: true },
          { name: "Grafana", use: "Dashboards and alerting", core: true },
        ],
      },
      {
        name: "Quality",
        description: "Confidence you can measure.",
        items: [
          { name: "Playwright", use: "End-to-end web testing", core: true },
          { name: "Cypress", use: "Component and E2E testing", core: false },
          { name: "Appium", use: "Mobile automation", core: false },
          { name: "Pact", use: "Contract testing", core: true },
          { name: "k6", use: "Load and performance", core: true },
          { name: "SonarQube", use: "Static analysis", core: false },
        ],
      },
    ],
  },
  follows: {
    title: "Technology follows the problem.",
    lead: "We recommend mature, well-supported tools your team can hire for and maintain — and explain every choice in writing.",
    primary: "Architecture & consulting",
    secondary: "Let’s Talk",
  },
  radar: {
    tag: "Technology radar · sample",
    title: "What we adopt, trial, assess — and hold.",
    lead: "An illustrative radar, to show how we would reason about a stack for you, and why. It is not a published position.",
    label: "Radar ring",
    rings: {
      adopt: {
        label: "Adopt",
        items: [
          { name: "TypeScript", why: "Default for web and Node services" },
          { name: "PostgreSQL", why: "First choice for transactional data" },
          { name: "Kotlin", why: "JVM services and Android" },
          { name: "Terraform", why: "All infrastructure as code" },
          { name: "OpenTelemetry", why: "Tracing across every service" },
        ],
      },
      trial: {
        label: "Trial",
        items: [
          { name: "Tauri", why: "Lightweight desktop apps" },
          { name: "Temporal", why: "Durable workflows and sagas" },
          { name: "Bun", why: "Fast tooling for JS monorepos" },
          { name: "pgvector", why: "Retrieval without a new database" },
        ],
      },
      assess: {
        label: "Assess",
        items: [
          { name: "WebGPU", why: "In-browser ML and visualisation" },
          { name: "Rust on the backend", why: "Hot paths and edge workers" },
          { name: "Local LLMs", why: "Private, offline AI features" },
        ],
      },
      hold: {
        label: "Hold",
        items: [
          { name: "Micro-frontends by default", why: "Only with clear team boundaries" },
          { name: "Hand-rolled auth", why: "Use a proven identity provider" },
          { name: "Big-bang rewrites", why: "Strangle incrementally instead" },
        ],
      },
    },
    note: "Sample radar, to be replaced by the one SimpleX’s engineering leads own.",
  },
};

export type TechnologiesCopy = typeof technologies;
