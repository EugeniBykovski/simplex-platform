import type { IndustryPageCopy } from "../types";

/** From IndustryPage.dc.html, slug "healthcare". Changes are listed in docs/content/industries-claims-register.md. */
export const page: IndustryPageCopy = {
  meta: {
    title: "Healthcare software engineering - SimpleX",
    description:
      "Patient and clinician platforms designed for safety, privacy and interoperability - and for the reality of busy, interrupted clinical work.",
  },
  name: "Healthcare",
  headline: "Technology that earns clinicians’ trust.",
  lead: "Patient and clinician platforms designed for safety, privacy and interoperability - and for the reality of busy, interrupted clinical work.",
  facts: [
    {
      key: "Typical systems",
      value: "Patient apps, intake & triage, clinical workflow tools",
    },
    {
      key: "Common frameworks",
      value: "GDPR, HIPAA where applicable, HL7 FHIR",
    },
    {
      key: "Engineering focus",
      value: "Safety, privacy, interoperability",
    },
  ],
  challengesTitle: "What makes Healthcare hard.",
  challengesIntro:
    "Healthcare software sits between patients, clinicians and decades-old systems. It has to be safe, private and genuinely easier than the paper it replaces.",
  challenges: [
    {
      title: "Fragmented records",
      body: "Data spread across systems that were never designed to share it.",
    },
    {
      title: "Clinician time",
      body: "Every extra click competes with patient care.",
    },
    {
      title: "Privacy and regulation",
      body: "Special-category data with strict consent, access and audit requirements.",
    },
    {
      title: "Accessible patient services",
      body: "Services must work for every age, ability and level of digital confidence.",
    },
  ],
  opportunitiesLead: "Three opportunities common in Healthcare, and how we would approach them.",
  opportunities: [
    {
      title: "Digital front door",
      body: "Accessible intake, booking and triage designed to reduce phone and paper load.",
    },
    {
      title: "Interoperability",
      body: "FHIR-based integration that gives clinicians one view of the patient.",
    },
    {
      title: "Decision support",
      body: "Assistive tools that summarise and flag - always with clinical oversight.",
    },
  ],
  scenarios: [
    {
      title: "Patient intake & triage",
      body: "Structured digital intake designed to route patients to the right care, with clinicians in control.",
      items: [
        "Accessible multi-step forms",
        "Rules-based triage with overrides",
        "Clinician queue & dashboards",
        "FHIR integration with records",
        "Notifications & reminders",
      ],
    },
    {
      title: "Remote monitoring",
      body: "Connected measurements and symptom reporting between visits, with alerts that respect clinical workload.",
      items: [
        "Device & app data capture",
        "Thresholds and escalation",
        "Clinician review workflows",
        "Patient-facing summaries",
        "Consent management",
      ],
    },
    {
      title: "Clinical workflow tools",
      body: "Internal tools designed to remove duplicate entry and give teams the information they need at the point of care.",
      items: [
        "Task & handover boards",
        "Single sign-on with existing systems",
        "Audit of record access",
        "Offline resilience",
        "Reporting for operations",
      ],
    },
  ],
  considerationsLead:
    "Priorities we design for in Healthcare, checked throughout delivery rather than once before launch.",
  considerations: [
    {
      title: "FHIR & HL7 integration",
      body: "Standards-based exchange with existing clinical systems.",
    },
    {
      title: "Consent management",
      body: "Granular, revocable consent recorded and enforced.",
    },
    {
      title: "Clinical safety",
      body: "Hazard logs and safety cases where required, by jurisdiction.",
    },
    {
      title: "Access auditing",
      body: "Every record view and change logged and reviewable.",
    },
    {
      title: "Inclusive design",
      body: "WCAG 2.2 AA and plain language as the design target.",
    },
    {
      title: "Resilience",
      body: "Graceful degradation when upstream systems are unavailable.",
    },
  ],
  capabilitiesTitle: "Services we bring to Healthcare.",
  complianceTitle: "The standards we build Healthcare for.",
  compliance: [
    {
      seal: "HIPAA",
      name: "HIPAA",
      note: "Protected health information",
    },
    {
      seal: "GDPR",
      name: "GDPR",
      note: "Consent and data residency",
    },
    {
      seal: "FHIR",
      name: "HL7 FHIR",
      note: "Interoperable clinical data",
    },
    {
      seal: "ISO",
      name: "ISO 27001",
      note: "Security management",
    },
  ],
  cta: "Designing care around people, not systems?",
};
