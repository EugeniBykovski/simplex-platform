import type { IndustrySharedCopy } from "../types";

/** Copy shared by every industry page, from IndustryPage.dc.html. */
export const shared: IndustrySharedCopy = {
  breadcrumb: { label: "Breadcrumb", home: "Home", industries: "Industries" },
  hero: { eyebrow: "Industry", primary: "Talk to an engineer", secondary: "Relevant work" },
  challengesEyebrow: "Market challenges",
  opportunities: {
    tag: "Digital engineering opportunities",
    title: "Where engineering creates the most value.",
  },
  scenarios: {
    eyebrow: "Solution scenarios",
    title: "What we can build.",
    label: "Solution scenarios",
    scenario: "Scenario",
    discuss: "Discuss this scenario",
    components: "Typical components",
  },
  considerations: {
    eyebrow: "Engineering considerations",
    title: "Built in from the first sprint.",
  },
  capabilities: {
    eyebrow: "Relevant capabilities",
    projects: "Relevant projects",
    tag: "Demonstration project",
    read: "Read case study",
  },
  services: {
    "custom-software-development": "Custom Software",
    "enterprise-software": "Enterprise Software",
    "web-development": "Web Development",
    "mobile-development": "Mobile Development",
    "ai-engineering": "AI Engineering",
    "cloud-devops": "Cloud & DevOps",
    "architecture-consulting": "Architecture & Consulting",
    "product-design": "Product Design",
    "legacy-modernization": "Legacy Modernization",
    "quality-engineering": "Quality Engineering",
  },
  cases: {
    ledgerline: {
      industry: "FinTech · Demonstration",
      summary:
        "A real-time treasury platform with continuous reconciliation, approvals and an auditor-readable trail.",
    },
    carepath: {
      industry: "Healthcare · Demonstration",
      summary:
        "Unified patient intake and triage across clinic sites, integrated with existing records via FHIR.",
    },
    routewise: {
      industry: "Logistics · Demonstration",
      summary: "Route orchestration with live telematics and an offline-first driver app.",
    },
  },
  compliance: {
    tag: "Compliance-aware",
    lead: "Controls, audit trails and evidence are planned into the architecture from the first sprint, so compliance is less likely to block a release.",
    note: "Standards we design for — not certifications SimpleX holds, and not a guarantee of compliance.",
  },
  cta: {
    lead: "Talk to engineers about your constraints. No sales script — just a useful first conversation.",
    primary: "Let’s Talk",
  },
};
