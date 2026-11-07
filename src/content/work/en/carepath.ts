import type { CarepathCopy } from "../types";

/** A concept, from CasePage.dc.html, Layout B. It is told as a scenario, not as past client work. */
export const page: CarepathCopy = {
  meta: {
    title: "Carepath (demonstration) — SimpleX",
    description:
      "Demonstration case study: how SimpleX would unify patient intake and triage across clinics. An illustrative concept, not client work or a clinical product.",
  },
  name: "Carepath",
  industry: "Healthcare",
  tagline: "One front door for patients. One queue for clinicians.",
  facts: [
    { key: "Scenario", value: "Fictional multi-site outpatient clinic group" },
    { key: "Services", value: "Product design · Web & mobile · AI engineering" },
    { key: "Duration", value: "Illustrative · 7 months" },
    { key: "Team", value: "Illustrative · 6 people" },
  ],
  overview:
    "A demonstration of how we would unify patient intake and triage — designed with patients and clinicians, integrated with the records they already use.",
  context:
    "In this scenario, patients book by phone, complete paper forms in waiting rooms and repeat the same history at every visit. Clinicians triage from handwritten notes, while three systems hold different parts of the record.",
  challenges: [
    "Phone lines saturated in the first hour of every morning.",
    "The same data entered by hand into three systems.",
    "Triage decisions made on incomplete information.",
    "Patients of every age and level of digital confidence.",
  ],
  approach: [
    {
      when: "Weeks 1–4",
      title: "Research",
      body: "Interview patients, reception and clinicians; observe clinic mornings end to end.",
    },
    {
      when: "Weeks 5–8",
      title: "Prototype",
      body: "Test intake flows with a wide age range of patients and iterate on language and order.",
    },
    {
      when: "Months 3–6",
      title: "Build",
      body: "Accessible intake, a clinician triage queue and FHIR integration.",
    },
    {
      when: "Month 7",
      title: "Rollout",
      body: "Site-by-site launch with on-site support and feedback loops.",
    },
  ],
  solution:
    "Patients complete a short, accessible intake on any device. Structured answers feed a triage queue ranked by clinical rules, and an assistive summary highlights relevant history — clinicians always make the decision.",
  bullets: [
    "Accessible multi-step intake, designed to WCAG 2.2 AA",
    "Rules-based triage with clinician override",
    "Assistive history summaries with links to source records",
    "FHIR integration with existing records",
    "Consent capture and access auditing",
  ],
  arch: [
    {
      label: "Channels",
      nodes: [
        { name: "Patient web" },
        { name: "Patient app", note: "React Native" },
        { name: "Clinician console", note: "React" },
      ],
    },
    {
      label: "Edge",
      nodes: [{ name: "API gateway" }, { name: "Identity", note: "Patients · staff" }],
    },
    {
      label: "Services",
      nodes: [
        { name: "Intake" },
        { name: "Triage rules", note: "Versioned", highlight: true },
        { name: "Summary service", note: "LLM + guardrails", highlight: true },
        { name: "Notifications" },
      ],
    },
    {
      label: "Data",
      nodes: [
        { name: "PostgreSQL" },
        { name: "Audit log", note: "Append-only" },
        { name: "FHIR store" },
      ],
    },
    {
      label: "Integrations",
      nodes: [{ name: "Records system", note: "FHIR" }, { name: "SMS & email" }],
    },
  ],
  mocks: [
    {
      title: "Triage queue · Clinic A",
      tag: "Sample",
      kpis: [
        { label: "Waiting", value: "—" },
        { label: "Urgent", value: "—" },
        { label: "Avg wait", value: "—" },
      ],
      rows: [
        { text: "Sample patient · new symptoms", badge: "Urgent", dot: "o" },
        { text: "Sample patient · follow-up", badge: "Today", dot: "b" },
        { text: "Sample patient · prescription", badge: "Routine", dot: "m" },
      ],
    },
    {
      title: "Patient summary",
      tag: "Assistive",
      kpis: [
        { label: "Visits", value: "—" },
        { label: "Allergies", value: "—" },
        { label: "Sources", value: "—" },
      ],
      rows: [
        { text: "Allergy · sample record", badge: "Source", dot: "o" },
        { text: "Last visit · sample record", badge: "Source", dot: "b" },
        { text: "Clinician decision required", badge: "Open", dot: "none" },
      ],
    },
  ],
  outcomes: [
    { value: "Less", label: "Peak-hour call volume" },
    { value: "Once", label: "Patients enter their history once" },
    { value: "Faster", label: "Time from intake to triage decision" },
    { value: "AA", label: "Accessibility conformance target" },
  ],
  intake: {
    step: "STEP 2 OF 4",
    question: "What brings you in today?",
    options: ["New symptoms", "Follow-up visit", "Prescription", "Something else"],
    next: "Continue",
  },
};
