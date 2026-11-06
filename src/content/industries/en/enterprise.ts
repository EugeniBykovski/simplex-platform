import type { IndustryPageCopy } from "../types";

/** From IndustryPage.dc.html, slug "enterprise". Changes are listed in docs/content/industries-claims-register.md. */
export const page: IndustryPageCopy = {
  meta: {
    title: "Enterprise software engineering — SimpleX",
    description:
      "Core systems, integration and modernisation across large, long-lived estates — delivered incrementally and governed properly.",
  },
  name: "Enterprise",
  headline: "Change at scale, without breaking what works.",
  lead: "Core systems, integration and modernisation across large, long-lived estates — delivered incrementally and governed properly.",
  facts: [
    {
      key: "Typical systems",
      value: "Integration platforms, workflow, core modernisation",
    },
    {
      key: "Common frameworks",
      value: "ISO 27001, GDPR, internal governance",
    },
    {
      key: "Engineering focus",
      value: "Integration, governance, longevity",
    },
  ],
  challengesTitle: "What makes Enterprise hard.",
  challengesIntro:
    "Large organisations rarely lack ideas. They lack safe ways to change systems that hundreds of people and processes depend on.",
  challenges: [
    {
      title: "Legacy constraints",
      body: "Critical systems that are hard to change and harder to replace.",
    },
    {
      title: "Integration sprawl",
      body: "Point-to-point links that make every change risky.",
    },
    {
      title: "Governance & security",
      body: "Controls that slow delivery when added late.",
    },
    {
      title: "Change adoption",
      body: "New systems that people work around instead of with.",
    },
  ],
  opportunitiesLead: "Three opportunities common in Enterprise, and how we would approach them.",
  opportunities: [
    {
      title: "API-led integration",
      body: "Governed interfaces that decouple systems and teams.",
    },
    {
      title: "Workflow digitisation",
      body: "Replacing email and spreadsheets with auditable processes.",
    },
    {
      title: "Incremental modernisation",
      body: "Replacing legacy piece by piece while the business runs.",
    },
  ],
  scenarios: [
    {
      title: "Integration platform",
      body: "A governed backbone that replaces brittle point-to-point integrations.",
      items: [
        "API gateway & catalogue",
        "Event streaming",
        "Contract testing",
        "Monitoring & alerting",
        "Developer portal",
      ],
    },
    {
      title: "Workflow digitisation",
      body: "Cross-department processes moved into configurable, auditable workflows.",
      items: [
        "Process discovery",
        "Workflow engine",
        "Role-based forms",
        "Integrations to ERP/CRM",
        "Operational reporting",
      ],
    },
    {
      title: "Core modernisation",
      body: "Extracting capabilities from a legacy core without a big-bang cut-over.",
      items: [
        "System mapping",
        "Strangler-fig services",
        "Data synchronisation",
        "Parallel running",
        "Decommissioning plan",
      ],
    },
  ],
  considerationsLead:
    "Priorities we design for in Enterprise, checked throughout delivery rather than once before launch.",
  considerations: [
    {
      title: "Identity integration",
      body: "Single sign-on and provisioning with corporate identity.",
    },
    {
      title: "Change management",
      body: "Training, communication and staged rollouts.",
    },
    {
      title: "Data governance",
      body: "Ownership, lineage and retention defined up front.",
    },
    {
      title: "Vendor interoperability",
      body: "Clean boundaries with packaged software.",
    },
    {
      title: "Auditability",
      body: "Designed so evidence is available without manual assembly.",
    },
    {
      title: "Resilience",
      body: "Recovery objectives agreed and tested.",
    },
  ],
  capabilitiesTitle: "Services we bring to Enterprise.",
  complianceTitle: "The standards we build Enterprise for.",
  compliance: [
    {
      seal: "ISO",
      name: "ISO 27001",
      note: "Security management",
    },
    {
      seal: "SOX",
      name: "SOX",
      note: "Financial controls and audit",
    },
    {
      seal: "GDPR",
      name: "GDPR",
      note: "Privacy by design",
    },
    {
      seal: "IAM",
      name: "SAML · OIDC",
      note: "Identity and access",
    },
  ],
  cta: "Need to change a system everyone depends on?",
};
