import type { IndustryPageCopy } from "../types";

/** From IndustryPage.dc.html, slug "saas". Changes are listed in docs/content/industries-claims-register.md. */
export const page: IndustryPageCopy = {
  meta: {
    title: "SaaS software engineering - SimpleX",
    description:
      "Multi-tenant SaaS engineered for reliability, security and unit economics - from the first paying customer to enterprise deals.",
  },
  name: "SaaS",
  headline: "Products built to grow without growing pains.",
  lead: "Multi-tenant SaaS engineered for reliability, security and unit economics - from the first paying customer to enterprise deals.",
  facts: [
    {
      key: "Typical systems",
      value: "Multi-tenant platforms, billing, admin & analytics",
    },
    {
      key: "Common frameworks",
      value: "SOC 2, ISO 27001, GDPR",
    },
    {
      key: "Engineering focus",
      value: "Tenancy, reliability, velocity",
    },
  ],
  challengesTitle: "What makes SaaS hard.",
  challengesIntro:
    "SaaS companies live on velocity, but enterprise customers buy reliability and controls. The architecture has to serve both without slowing either.",
  challenges: [
    {
      title: "Enterprise readiness",
      body: "SSO, audit logs, SLAs and security reviews gate the biggest deals.",
    },
    {
      title: "Multi-tenancy at scale",
      body: "Noisy neighbours, data isolation and per-tenant configuration.",
    },
    {
      title: "Velocity versus stability",
      body: "Shipping fast without breaking customers’ workflows.",
    },
    {
      title: "Cost to serve",
      body: "Infrastructure costs that grow faster than revenue.",
    },
  ],
  opportunitiesLead: "Three opportunities common in SaaS, and how we would approach them.",
  opportunities: [
    {
      title: "Platform foundations",
      body: "Shared services for identity, billing, notifications and audit.",
    },
    {
      title: "Usage-based billing",
      body: "Metering and pricing models that match the value delivered.",
    },
    {
      title: "In-product intelligence",
      body: "AI features evaluated and priced like any other feature.",
    },
  ],
  scenarios: [
    {
      title: "Enterprise readiness",
      body: "The controls enterprise buyers ask for, built once and reused by every product team.",
      items: [
        "SSO (SAML/OIDC) & SCIM",
        "Role-based access control",
        "Customer-visible audit logs",
        "Data export & retention",
        "Status page & SLOs",
      ],
    },
    {
      title: "Re-architecting for scale",
      body: "Evolving a successful first version into a platform that can carry the next stage of growth.",
      items: [
        "Tenant isolation strategy",
        "Database partitioning",
        "Async processing",
        "Observability per tenant",
        "Zero-downtime migrations",
      ],
    },
    {
      title: "Self-serve growth",
      body: "Onboarding, trials and in-product upgrades designed to work without a sales call.",
      items: [
        "Onboarding flows",
        "Trial & plan management",
        "Product analytics",
        "In-app messaging",
        "Experimentation",
      ],
    },
  ],
  considerationsLead:
    "Priorities we design for in SaaS, checked throughout delivery rather than once before launch.",
  considerations: [
    {
      title: "Tenant isolation",
      body: "Data and performance boundaries designed to hold under load.",
    },
    {
      title: "Identity & SSO",
      body: "Enterprise identity integration as a platform service.",
    },
    {
      title: "Audit-ready controls",
      body: "Designed to produce evidence for SOC 2 or ISO 27001 from the system itself.",
    },
    {
      title: "SLOs & status",
      body: "Reliability targets that are measured and published.",
    },
    {
      title: "Per-tenant cost",
      body: "Visibility into what each customer costs to serve.",
    },
    {
      title: "Safe migrations",
      body: "Schema and data changes planned to avoid downtime.",
    },
  ],
  capabilitiesTitle: "Services we bring to SaaS.",
  complianceTitle: "The standards we build SaaS for.",
  compliance: [
    {
      seal: "SOC2",
      name: "SOC 2",
      note: "Enterprise-ready controls",
    },
    {
      seal: "ISO",
      name: "ISO 27001",
      note: "Security management",
    },
    {
      seal: "GDPR",
      name: "GDPR",
      note: "Tenant data isolation",
    },
    {
      seal: "SSO",
      name: "SAML · OIDC",
      note: "Enterprise single sign-on",
    },
  ],
  cta: "Ready to win bigger customers?",
};
