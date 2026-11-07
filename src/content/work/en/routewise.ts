import type { RoutewiseCopy } from "../types";

/** A concept, from CasePage.dc.html, Layout C. It is told as a scenario, not as past client work. */
export const page: RoutewiseCopy = {
  meta: {
    title: "Routewise (demonstration) — SimpleX",
    description:
      "Demonstration case study: adaptive route planning with live telematics and an offline-first driver app. An illustrative concept, not client work.",
  },
  name: "Routewise",
  industry: "Logistics",
  tagline: "Plans that adapt as fast as the road does.",
  facts: [
    { key: "Scenario", value: "Fictional regional distribution network" },
    { key: "Services", value: "Custom software · Mobile · AI · Cloud" },
    { key: "Duration", value: "Illustrative · 10 months" },
    { key: "Team", value: "Illustrative · 8 people" },
  ],
  overview:
    "A demonstration of route planning that takes minutes, not an evening — and re-plans itself during the day.",
  context:
    "In this scenario, dispatchers build routes each evening in spreadsheets. As volumes grow, planning takes longer than the shift allows, drivers call in for every change and customers have no reliable ETA.",
  challenges: [
    "Planning time growing faster than volume.",
    "No live view of vehicles or exceptions.",
    "Driver tools that fail without signal.",
    "ETAs customers cannot trust.",
  ],
  approach: [
    {
      when: "Weeks 1–3",
      title: "Discovery",
      body: "Ride along with drivers; map planning rules with dispatchers.",
    },
    {
      when: "Weeks 4–8",
      title: "Solver spike",
      body: "Benchmark optimisation approaches on historical data before committing.",
    },
    {
      when: "Months 3–8",
      title: "Platform build",
      body: "Planner, dispatcher console, telematics streaming and driver app.",
    },
    {
      when: "Months 9–10",
      title: "Scale",
      body: "Depot-by-depot rollout, tuned for peak season.",
    },
  ],
  solution:
    "A planning engine proposes routes that dispatchers can adjust by drag-and-drop. Live telematics re-plan the day as conditions change, and an offline-first driver app keeps stops, proofs of delivery and messages in sync.",
  bullets: [
    "Constraint-based route optimisation",
    "Dispatcher console with live map",
    "Streaming telematics and ETA prediction",
    "Offline-first driver app",
    "Proactive customer notifications",
  ],
  arch: [
    {
      label: "Channels",
      nodes: [
        { name: "Dispatcher console", note: "React" },
        { name: "Driver app", note: "Flutter" },
        { name: "Tracking page" },
      ],
    },
    {
      label: "Edge",
      nodes: [{ name: "API gateway" }, { name: "Realtime", note: "WebSockets" }],
    },
    {
      label: "Services",
      nodes: [
        { name: "Planner", note: "Python · OR solver", highlight: true },
        { name: "Telematics ingest", note: "Go", highlight: true },
        { name: "Dispatch" },
        { name: "ETA model" },
        { name: "Notifications" },
      ],
    },
    {
      label: "Data",
      nodes: [
        { name: "Stream", note: "Pub/Sub" },
        { name: "PostgreSQL", note: "PostGIS" },
        { name: "Warehouse", note: "BigQuery" },
      ],
    },
    {
      label: "Integrations",
      nodes: [{ name: "Telematics vendors" }, { name: "WMS" }, { name: "SMS" }],
    },
  ],
  mocks: [],
  outcomes: [
    { value: "Faster", label: "Nightly planning time" },
    { value: "Less", label: "Distance per stop" },
    { value: "Live", label: "ETA for every delivery" },
    { value: "Offline", label: "Driver app works without signal" },
  ],
  dispatch: {
    title: "Routewise · Dispatch console",
    live: "Sample · Region North",
    routes: [
      { name: "Route 12", note: "18 stops", dot: "b" },
      { name: "Route 14", note: "22 stops", dot: "none" },
      { name: "Route 15", note: "Delay 6m", dot: "o" },
      { name: "Route 19", note: "16 stops", dot: "m" },
      { name: "Route 21", note: "20 stops", dot: "b" },
    ],
  },
  approachTitle: "Prove it on historical data first.",
  bench: {
    title: "Solver comparison · what we would measure",
    rows: [
      { name: "Manual plan", value: "Baseline" },
      { name: "Heuristic solver", value: "To measure" },
      { name: "Constraint solver + live re-plan", value: "To measure" },
    ],
    note: "No benchmark has been run. This is a demonstration project.",
  },
  solutionTitle: "Plans that adapt in real time.",
  driver: {
    stop: "STOP 7 OF 18 · OFFLINE",
    address: "Unit 4, Riverside Park",
    parcels: "2 parcels · signature",
    eta: "ETA 10:42",
    complete: "Complete delivery",
  },
  archTitle: "Streaming in, decisions out.",
  archBody:
    "Telemetry flows through a streaming backbone into the planner and ETA model, so dispatchers and drivers see the same state within seconds.",
};
