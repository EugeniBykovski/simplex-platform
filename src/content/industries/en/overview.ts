import type { IndustriesOverviewCopy } from "../types";

/** From Industries.dc.html. Changes are listed in docs/content/industries-claims-register.md. */
export const overview: IndustriesOverviewCopy = {
  meta: {
    title: "Industries - SimpleX",
    description:
      "Regulation, peak load, patient safety, multi-tenancy, real-time operations. The engineering is familiar; the constraints are not.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "Industries" },
  hero: {
    lines: ["Context changes", "everything."],
    lead: "Regulation, peak load, patient safety, multi-tenancy, real-time operations. The engineering is familiar; the constraints are not. We bring patterns suited to your sector - and the judgement to know when they don’t apply.",
  },
  rows: [
    {
      summary:
        "Real-time, auditable systems for payments, lending, treasury and wealth - where correctness is not negotiable.",
      chips: ["Ledgers", "Payments", "Risk & compliance"],
    },
    {
      summary:
        "Patient and clinician platforms built for safety, privacy and interoperability with the systems care already runs on.",
      chips: ["Patient apps", "Clinical workflow", "FHIR"],
    },
    {
      summary:
        "Commerce platforms that stay fast at peak and flexible between peaks - from storefront to fulfilment.",
      chips: ["Headless commerce", "Search", "Order management"],
    },
    {
      summary:
        "Multi-tenant products engineered for growth, reliability and healthy unit economics.",
      chips: ["Multi-tenancy", "Billing", "Platform"],
    },
    {
      summary: "Core systems, integration and modernisation across complex, long-lived estates.",
      chips: ["Integration", "Workflow", "Modernisation"],
    },
    {
      summary:
        "Real-time visibility, planning and orchestration for operations that never stop moving.",
      chips: ["Routing", "Telematics", "Warehouse"],
    },
  ],
  constants: {
    eyebrow: "Across every sector",
    title: "Four constants we design for.",
    lead: "Whatever the industry, we aim to engineer these in from the first sprint - not audit them in before launch.",
    items: [
      {
        title: "Security",
        body: "Threat modelling, least privilege and dependency hygiene as part of the definition of done.",
      },
      {
        title: "Compliance",
        body: "Designing for GDPR; sector frameworks such as PCI DSS or HIPAA mapped to controls where they apply.",
      },
      {
        title: "Scale",
        body: "Capacity modelled and load-tested ahead of the peaks your business already knows about.",
      },
      {
        title: "Accessibility",
        body: "WCAG 2.2 AA as the design target for every customer- and staff-facing interface.",
      },
    ],
  },
  compliance: {
    tag: "Compliance-aware",
    title: "Compliance is a requirement, not a phase.",
    lead: "We design with the standards your auditors will ask about in mind, and aim to generate evidence from the delivery pipeline rather than assemble it the week before review.",
    tiles: [
      { seal: "PCI", name: "PCI DSS", note: "Card data handling and tokenisation" },
      { seal: "PSD2", name: "PSD2 · Open Banking", note: "Strong customer authentication, APIs" },
      { seal: "DORA", name: "DORA", note: "Operational resilience for EU finance" },
      { seal: "SOC2", name: "SOC 2", note: "Controls evidence from the pipeline" },
      { seal: "ISO", name: "ISO 27001", note: "Information-security management" },
      { seal: "HIPAA", name: "HIPAA", note: "Protected health information" },
      { seal: "GDPR", name: "GDPR", note: "Privacy by design, data residency" },
      { seal: "WCAG", name: "WCAG 2.2 AA", note: "Accessible interfaces" },
    ],
    note: "Standards we design and build for - not certifications SimpleX holds, and not a guarantee of compliance.",
  },
  cta: {
    title: "Don’t see your industry?",
    lead: "Most of what makes software hard is shared across sectors. Tell us about your constraints and we’ll tell you honestly whether we’re a fit.",
    primary: "Let’s Talk",
  },
};
