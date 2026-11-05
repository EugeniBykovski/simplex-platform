import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug ai-engineering, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "AI Engineering & Intelligent Automation — SimpleX",
    description:
      "We integrate language models, retrieval and automation into real products — with evaluation, guardrails, observability and cost controls engineered in, not bolted on.",
  },
  title: "AI Engineering & Intelligent Automation",
  short: "AI Engineering",
  blurb: "Production-grade intelligent features.",
  headline: "AI features that hold up in production.",
  lead: "We integrate language models, retrieval and automation into real products — with evaluation, guardrails, observability and cost controls engineered in, not bolted on.",
  glance: [
    "Can draw on SimpleX Agent, our engineering agent concept",
    "Evaluated before release, monitored after",
    "Model-agnostic, with clear cost per interaction",
  ],
  problem: "Demos are easy. Production is not.",
  pains: [
    "Prototypes impress, then fail on real data, edge cases and scale.",
    "No reliable way to tell whether a model change made things better or worse.",
    "Costs and latency grow faster than usage.",
  ],
  capsTitle: "What we bring to AI engineering.",
  capsIntro:
    "AI treated as software engineering: versioned, tested, observable and owned — and used only where it measurably helps.",
  caps: [
    {
      title: "Retrieval-augmented generation",
      body: "Answers grounded in your documents and data, with citations.",
    },
    {
      title: "Workflow automation & agents",
      body: "Multi-step automation with human approval where it matters.",
    },
    {
      title: "Evaluation & testing",
      body: "Test sets, automated scoring and regression gates.",
    },
    {
      title: "Guardrails & safety",
      body: "Input/output filtering, PII handling and policy checks.",
    },
    {
      title: "LLMOps & observability",
      body: "Tracing, prompt versioning and cost dashboards.",
    },
    {
      title: "Data preparation",
      body: "Clean, chunked, permission-aware knowledge sources.",
    },
  ],
  value: [
    {
      title: "Measurable quality",
      body: "Every release scored against an agreed evaluation set.",
    },
    {
      title: "Controlled cost",
      body: "Caching, routing and model choice tuned per task.",
    },
    {
      title: "Lower risk",
      body: "Guardrails and audit trails satisfy security and legal.",
    },
    {
      title: "Faster iteration",
      body: "Swap models or prompts with confidence.",
    },
  ],
  steps: [
    {
      title: "Frame",
      body: "Use case, users and a measurable success metric.",
    },
    {
      title: "Prototype",
      body: "Iterate against an evaluation set, not impressions.",
    },
    {
      title: "Harden",
      body: "Guardrails, monitoring and cost controls.",
    },
    {
      title: "Launch & learn",
      body: "Staged release and continuous evaluation.",
    },
  ],
  tech: [
    "Python",
    "TypeScript",
    "Foundation model APIs",
    "Vector databases",
    "LangGraph",
    "OpenTelemetry",
    "MLflow",
  ],
  uses: [
    {
      title: "A knowledge assistant grounded in internal docs",
      body: "Staff get cited answers from policies and manuals, respecting existing permissions.",
    },
    {
      title: "Document processing automation",
      body: "Extraction and classification of incoming documents, with human review for low-confidence cases.",
    },
    {
      title: "Support triage and drafting",
      body: "Tickets routed and replies drafted for agents to approve — faster, not unsupervised.",
    },
  ],
  cta: "Have an AI prototype that needs to grow up?",
};
