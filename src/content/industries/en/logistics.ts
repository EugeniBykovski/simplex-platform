import type { IndustryPageCopy } from "../types";

/** From IndustryPage.dc.html, slug "logistics". Changes are listed in docs/content/industries-claims-register.md. */
export const page: IndustryPageCopy = {
  meta: {
    title: "Logistics software engineering - SimpleX",
    description:
      "Routing, tracking and warehouse systems that turn constant movement into decisions dispatchers and drivers can act on.",
  },
  name: "Logistics",
  headline: "Real-time operations, made visible.",
  lead: "Routing, tracking and warehouse systems that turn constant movement into decisions dispatchers and drivers can act on.",
  facts: [
    {
      key: "Typical systems",
      value: "Route planning, tracking, warehouse & driver apps",
    },
    {
      key: "Common integrations",
      value: "Telematics, WMS, carrier APIs, ERP",
    },
    {
      key: "Engineering focus",
      value: "Real-time data, optimisation, frontline UX",
    },
  ],
  challengesTitle: "What makes Logistics hard.",
  challengesIntro:
    "Logistics runs on thin margins and live data. Software has to be fast, reliable on the road and simple enough for a shift change at 5am.",
  challenges: [
    {
      title: "Volatile demand",
      body: "Volumes shift daily; plans built yesterday are wrong by noon.",
    },
    {
      title: "Fragmented data",
      body: "Telematics, warehouse and carrier data in separate silos.",
    },
    {
      title: "Frontline usability",
      body: "Drivers and pickers need tools that work in gloves and without signal.",
    },
    {
      title: "Margin pressure",
      body: "Every empty mile and missed slot costs money.",
    },
  ],
  opportunitiesLead: "Three opportunities common in Logistics, and how we would approach them.",
  opportunities: [
    {
      title: "Optimisation",
      body: "Route and load planning that adapts to live conditions.",
    },
    {
      title: "Real-time visibility",
      body: "A single, streaming view of every shipment and vehicle.",
    },
    {
      title: "Mobile frontline tools",
      body: "Offline-first apps for drivers and warehouse teams.",
    },
  ],
  scenarios: [
    {
      title: "Route planning & dispatch",
      body: "Optimised plans that dispatchers can adjust, with live re-planning as conditions change.",
      items: [
        "Optimisation engine",
        "Dispatcher console",
        "Live re-routing",
        "Driver app with offline mode",
        "Proof of delivery",
      ],
    },
    {
      title: "Shipment visibility",
      body: "Streaming tracking across carriers and fleets, with proactive exception alerts.",
      items: [
        "Carrier integrations",
        "Event streaming",
        "ETA prediction",
        "Customer notifications",
        "Exception management",
      ],
    },
    {
      title: "Warehouse operations",
      body: "Picking, packing and inventory tools designed to reduce errors and walking time.",
      items: [
        "Scanner apps",
        "Slotting optimisation",
        "WMS integration",
        "Labour dashboards",
        "Returns processing",
      ],
    },
  ],
  considerationsLead:
    "Priorities we design for in Logistics, checked throughout delivery rather than once before launch.",
  considerations: [
    {
      title: "Offline-first mobile",
      body: "Apps that keep working without connectivity.",
    },
    {
      title: "Event streaming",
      body: "High-volume telemetry processed in real time.",
    },
    {
      title: "Geospatial data",
      body: "Accurate maps, geofences and distance calculations.",
    },
    {
      title: "Carrier integration",
      body: "Resilient connectors to external APIs and EDI.",
    },
    {
      title: "Peak capacity",
      body: "Systems sized for seasonal surges.",
    },
    {
      title: "Device management",
      body: "Secure provisioning of handhelds and in-cab devices.",
    },
  ],
  capabilitiesTitle: "Services we bring to Logistics.",
  complianceTitle: "The standards we build Logistics for.",
  compliance: [
    {
      seal: "ISO",
      name: "ISO 27001",
      note: "Security management",
    },
    {
      seal: "GDPR",
      name: "GDPR",
      note: "Driver and customer data",
    },
    {
      seal: "EDI",
      name: "EDI · EDIFACT",
      note: "Partner integration",
    },
    {
      seal: "GS1",
      name: "GS1",
      note: "Product and shipment identifiers",
    },
  ],
  cta: "Want to see your operation in real time?",
};
