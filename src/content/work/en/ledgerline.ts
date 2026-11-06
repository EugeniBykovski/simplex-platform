import type { CaseCopy } from "../types";

/** A concept, from CasePage.dc.html, Layout A. It is told as a scenario, not as past client work. */
export const page: CaseCopy = {
  meta: {
    title: "Ledgerline (demonstration) — SimpleX",
    description:
      "A demonstration case study: how SimpleX would replace overnight bank reconciliation with an event-driven ledger. An illustrative concept, not client work.",
  },
  name: "Ledgerline",
  industry: "FinTech",
  tagline: "From overnight reconciliation to a live view of every position.",
  facts: [
    { key: "Scenario", value: "Fictional mid-market corporate treasury" },
    { key: "Services", value: "Architecture · Custom software · Cloud · QA" },
    { key: "Duration", value: "Illustrative · 9 months" },
    { key: "Team", value: "Illustrative · 7 people" },
  ],
  overview:
    "A demonstration of how we would replace overnight batch reconciliation with an event-driven ledger — giving a finance team a live, trustworthy view of cash.",
  context:
    "In this scenario, a treasury team manages positions across fourteen bank accounts in six currencies. Statements arrive as files overnight, and reconciliation happens in spreadsheets the next morning. Funding and FX decisions are made on yesterday’s numbers.",
  challenges: [
    "Bank data arrives as files, APIs and portal exports — each with its own format and timing.",
    "Exceptions are tracked in spreadsheets with no audit trail.",
    "Payments are approved by email, outside any system of record.",
    "Audit evidence is assembled by hand for every review.",
  ],
  approach: [
    {
      when: "Weeks 1–3",
      title: "Discovery",
      body: "Shadow the team, map every data source and write down reconciliation rules that live in people’s heads.",
    },
    {
      when: "Weeks 4–6",
      title: "Architecture",
      body: "Choose an event-sourced, double-entry ledger and record the trade-offs as decision records.",
    },
    {
      when: "Months 2–7",
      title: "Incremental build",
      body: "Connect banks one at a time and run the new ledger in parallel with spreadsheets until the numbers match.",
    },
    {
      when: "Months 8–9",
      title: "Cut-over & scale",
      body: "Retire spreadsheets bank by bank; hand over runbooks and dashboards.",
    },
  ],
  solution:
    "An event-driven ledger receives bank movements as they happen, matches them against expected transactions and surfaces only true exceptions. Payments move through role-based approvals, and every change is written to an append-only audit log.",
  bullets: [
    "Bank connector framework for APIs and statement files",
    "Double-entry event ledger with idempotent ingestion",
    "Rules-based matching with a human exception queue",
    "Four-eyes approval workflows",
    "Real-time dashboards and cash forecasting",
  ],
  arch: [
    {
      label: "Channels",
      nodes: [
        { name: "Treasury web app", note: "React" },
        { name: "Approvals", note: "Mobile web" },
      ],
    },
    {
      label: "Edge",
      nodes: [{ name: "GraphQL gateway" }, { name: "Identity", note: "OIDC · MFA" }],
    },
    {
      label: "Services",
      nodes: [
        { name: "Ingestion", note: "Kotlin" },
        { name: "Ledger", note: "Event-sourced", highlight: true },
        { name: "Matching", note: "Rules engine", highlight: true },
        { name: "Approvals" },
        { name: "Reporting" },
      ],
    },
    {
      label: "Data",
      nodes: [
        { name: "Event log", note: "Kafka" },
        { name: "PostgreSQL" },
        { name: "Object storage", note: "Statements" },
      ],
    },
    {
      label: "Integrations",
      nodes: [{ name: "Bank APIs" }, { name: "SFTP file drops" }, { name: "ERP" }],
    },
  ],
  mocks: [
    {
      title: "Positions · today",
      tag: "Sample",
      kpis: [
        { label: "EUR", value: "—" },
        { label: "USD", value: "—" },
        { label: "GBP", value: "—" },
      ],
      rows: [
        { text: "Bank 01 · statement received", badge: "Matched", dot: "m" },
        { text: "Bank 03 · FX settlement", badge: "Review", dot: "o" },
        { text: "Bank 07 · payroll batch", badge: "Matched", dot: "m" },
      ],
    },
    {
      title: "Exceptions queue",
      tag: "Sample",
      kpis: [
        { label: "Auto-matched", value: "—" },
        { label: "Open", value: "—" },
        { label: "Aged > 1d", value: "—" },
      ],
      rows: [
        { text: "Duplicate reference", badge: "Assign", dot: "o" },
        { text: "Amount mismatch", badge: "Review", dot: "b" },
        { text: "Unknown counterparty", badge: "Assign", dot: "o" },
      ],
    },
  ],
  outcomes: [
    { value: "Continuous", label: "Reconciliation moves from next-morning to continuous" },
    { value: "Less", label: "Manual matching effort" },
    { value: "In-system", label: "Payments approved inside the system" },
    { value: "Faster", label: "Audit evidence retrieval" },
  ],
};
