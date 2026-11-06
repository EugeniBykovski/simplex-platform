import type { IndustryPageCopy } from "../types";

/** From IndustryPage.dc.html, slug "fintech". Changes are listed in docs/content/industries-claims-register.md. */
export const page: IndustryPageCopy = {
  meta: {
    title: "FinTech software engineering — SimpleX",
    description:
      "Payments, lending, treasury and wealth platforms that are real-time, auditable and resilient — engineered for regulators as carefully as for users.",
  },
  name: "FinTech",
  headline: "Software where every number has to be right.",
  lead: "Payments, lending, treasury and wealth platforms that are real-time, auditable and resilient — engineered for regulators as carefully as for users.",
  facts: [
    {
      key: "Typical systems",
      value: "Ledgers, payment orchestration, onboarding & KYC",
    },
    {
      key: "Common frameworks",
      value: "PCI DSS, PSD2/3, DORA, GDPR",
    },
    {
      key: "Engineering focus",
      value: "Correctness, auditability, resilience",
    },
  ],
  challengesTitle: "What makes FinTech hard.",
  challengesIntro:
    "Financial products are judged on trust. The engineering has to make correctness provable — under load, across partners and through audits.",
  challenges: [
    {
      title: "Real-time expectations on batch-era cores",
      body: "Customers expect instant payments and live balances; many cores still settle overnight.",
    },
    {
      title: "Regulation that keeps moving",
      body: "Resilience, reporting and consumer-duty requirements arrive with fixed deadlines.",
    },
    {
      title: "Fraud and financial crime",
      body: "Detection must get sharper without adding friction for legitimate customers.",
    },
    {
      title: "Partner and API ecosystems",
      body: "Open banking and embedded finance turn internal systems into external products.",
    },
  ],
  opportunitiesLead: "Three opportunities common in FinTech, and how we would approach them.",
  opportunities: [
    {
      title: "Event-driven ledgers",
      body: "Continuous reconciliation instead of end-of-day batches, with every movement traceable.",
    },
    {
      title: "Embedded finance APIs",
      body: "Secure, versioned APIs that let partners build on your products.",
    },
    {
      title: "Intelligent operations",
      body: "AI-assisted review of exceptions and documents — with human sign-off and audit trails.",
    },
  ],
  scenarios: [
    {
      title: "Treasury & cash management",
      body: "Live positions across banks and currencies, automated reconciliation and approval workflows built with auditors in mind.",
      items: [
        "Bank connectivity (APIs, SWIFT files)",
        "Double-entry event ledger",
        "Exception queues & approvals",
        "Forecasting dashboards",
        "Immutable audit log",
      ],
    },
    {
      title: "Lending origination",
      body: "From application to decision to servicing, with explainable rules and integrations to bureaus and core banking.",
      items: [
        "Digital application journeys",
        "Decision engine with versioned rules",
        "Document capture & verification",
        "Servicing & collections",
        "Regulatory reporting",
      ],
    },
    {
      title: "Payments orchestration",
      body: "Routing across providers for cost, resilience and conversion — with a single view of every payment.",
      items: [
        "Provider abstraction layer",
        "Smart routing & retries",
        "Idempotent processing",
        "Disputes & refunds",
        "Real-time monitoring",
      ],
    },
  ],
  considerationsLead:
    "Priorities we design for in FinTech, checked throughout delivery rather than once before launch.",
  considerations: [
    {
      title: "Double-entry & idempotency",
      body: "Designed so that retries and race conditions cannot create or lose money.",
    },
    {
      title: "Immutable audit trails",
      body: "Who changed what, when and why — queryable by compliance.",
    },
    {
      title: "Strong customer authentication",
      body: "Secure, low-friction authentication and authorisation flows.",
    },
    {
      title: "PCI DSS scope reduction",
      body: "Tokenisation and isolation to keep card data out of most systems.",
    },
    {
      title: "Operational resilience",
      body: "Failure testing and recovery objectives aligned with DORA where applicable.",
    },
    {
      title: "Data residency",
      body: "Deployment topologies that respect jurisdictional requirements.",
    },
  ],
  capabilitiesTitle: "Services we bring to FinTech.",
  complianceTitle: "The standards we build FinTech for.",
  compliance: [
    {
      seal: "PCI",
      name: "PCI DSS",
      note: "Card data and tokenisation",
    },
    {
      seal: "PSD2",
      name: "PSD2 · Open Banking",
      note: "SCA and bank APIs",
    },
    {
      seal: "DORA",
      name: "DORA",
      note: "Operational resilience",
    },
    {
      seal: "SOC2",
      name: "SOC 2",
      note: "Pipeline-generated evidence",
    },
  ],
  cta: "Building something where accuracy is the product?",
};
