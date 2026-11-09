import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug cloud-devops, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "Cloud Engineering & DevOps - SimpleX",
    description:
      "We design cloud platforms, delivery pipelines and observability so teams ship small changes often, recover fast and see exactly what they’re paying for.",
  },
  title: "Cloud Engineering & DevOps",
  short: "Cloud & DevOps",
  blurb: "Infrastructure, pipelines and reliability.",
  headline: "Releases that are routine. Infrastructure you can read.",
  lead: "We design cloud platforms, delivery pipelines and observability so teams ship small changes often, recover fast and see exactly what they’re paying for.",
  glance: ["Everything as code", "Small, frequent, safe deployments", "Cost visible per service"],
  problem: "Manual infrastructure doesn’t scale with ambition.",
  pains: [
    "Environments drift and nobody is sure what’s running in production.",
    "Releases need a war room and a weekend.",
    "Cloud bills grow without a clear owner.",
  ],
  capsTitle: "What we bring to cloud and delivery.",
  capsIntro:
    "Platform engineering that treats developers as customers: paved roads, fast feedback and guardrails instead of gates.",
  caps: [
    {
      title: "Cloud architecture & migration",
      body: "Landing zones and migrations on AWS, Azure or GCP.",
    },
    {
      title: "Infrastructure as code",
      body: "Reproducible environments with Terraform and policy as code.",
    },
    {
      title: "CI/CD & GitOps",
      body: "Pipelines with automated tests, security scans and progressive delivery.",
    },
    {
      title: "Kubernetes & platforms",
      body: "Internal developer platforms that remove toil.",
    },
    {
      title: "Observability & SRE",
      body: "SLOs, tracing, alerting and incident practice.",
    },
    {
      title: "FinOps",
      body: "Cost allocation, rightsizing and spend forecasting.",
    },
  ],
  value: [
    {
      title: "Shorter lead time",
      body: "Smaller changes reach production sooner.",
    },
    {
      title: "Fewer failed changes",
      body: "Automated checks and small batches.",
    },
    {
      title: "Faster recovery",
      body: "Rollbacks and runbooks that work under pressure.",
    },
    {
      title: "Predictable cost",
      body: "Spend tied to services and owners.",
    },
  ],
  steps: [
    {
      title: "Assess",
      body: "Baseline delivery metrics, cost and risk.",
    },
    {
      title: "Design",
      body: "Target platform and landing zone.",
    },
    {
      title: "Automate",
      body: "Pipelines, IaC and observability.",
    },
    {
      title: "Operate",
      body: "SLOs, on-call practice and optimisation.",
    },
  ],
  tech: [
    "AWS",
    "Azure",
    "Google Cloud",
    "Terraform",
    "Kubernetes",
    "GitHub Actions",
    "Argo CD",
    "OpenTelemetry",
  ],
  uses: [
    {
      title: "Migrating a monolith to the cloud",
      body: "Re-platforming with minimal code change first, then modernising where it pays.",
    },
    {
      title: "An internal developer platform",
      body: "Self-service environments and golden paths for product teams.",
    },
    {
      title: "Observability and incident response",
      body: "From alert fatigue to SLO-based alerting and calm on-call.",
    },
  ],
  cta: "Want releases to be the least exciting part of your week?",
};
