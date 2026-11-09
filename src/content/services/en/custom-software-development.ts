import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug custom-software-development, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "Custom Software Development - SimpleX",
    description:
      "When off-the-shelf tools force workarounds, custom software turns the way you work into an advantage.",
  },
  title: "Custom Software Development",
  short: "Custom Software",
  blurb: "Bespoke platforms and internal tools, built to last.",
  headline: "Software shaped around your business - not the other way round.",
  lead: "When off-the-shelf tools force workarounds, custom software turns the way you work into an advantage. We design and build platforms, internal tools and APIs that fit - and stay maintainable for years.",
  glance: [
    "Platforms, portals and internal tools",
    "Clean, documented, tested code",
    "Working software early, with regular releases",
  ],
  problem: "Generic tools create specific problems.",
  pains: [
    "Teams bridge gaps between SaaS tools with spreadsheets and manual exports.",
    "Critical logic lives in one person’s head - or in an unsupported plugin.",
    "Every new requirement means another workaround, or another vendor.",
  ],
  capsTitle: "What we bring to custom software.",
  capsIntro:
    "Product and platform engineering from domain model to deployment, with the documentation and tests your team needs to take ownership.",
  caps: [
    {
      title: "Product & platform engineering",
      body: "Multi-user platforms with roles, workflows and integrations.",
    },
    {
      title: "API design & integration",
      body: "Well-documented APIs that connect your systems and partners.",
    },
    {
      title: "Internal tools",
      body: "Operational software that removes manual work and errors.",
    },
    {
      title: "Data-intensive applications",
      body: "Search, reporting and analytics built into the product.",
    },
    {
      title: "Security by design",
      body: "Threat modelling, least privilege and secure defaults.",
    },
    {
      title: "Documentation & handover",
      body: "Runbooks and decision records your team can own.",
    },
  ],
  value: [
    {
      title: "Lower cost of change",
      body: "Modular, tested foundations make each new feature cheaper than the last.",
    },
    {
      title: "Clear ownership",
      body: "Ownership of code, cloud accounts and IP set out in the contract.",
    },
    {
      title: "Faster operations",
      body: "Workflows designed around the people who use them daily.",
    },
    {
      title: "No vendor ceiling",
      body: "Extend in whatever direction the business takes.",
    },
  ],
  steps: [
    {
      title: "Discover",
      body: "Map workflows, users and the systems involved.",
    },
    {
      title: "Architect",
      body: "Domain model, stack and delivery plan.",
    },
    {
      title: "Build",
      body: "Fortnightly releases into a production-like environment.",
    },
    {
      title: "Evolve",
      body: "Handover, support or continued development.",
    },
  ],
  tech: ["TypeScript", "Kotlin", ".NET", "PostgreSQL", "React", "AWS", "Terraform"],
  uses: [
    {
      title: "An operations platform that replaces spreadsheets",
      body: "One system of record for orders, approvals and reporting - with an audit trail and integrations to finance and CRM.",
    },
    {
      title: "A partner portal with role-based access",
      body: "Self-service onboarding, documents and status for partners, with permissions that mirror your contracts.",
    },
    {
      title: "A pricing or quoting engine",
      body: "Rules your commercial team can change safely, with versioning, simulation and approvals.",
    },
  ],
  cta: "Have a process that deserves better software?",
};
