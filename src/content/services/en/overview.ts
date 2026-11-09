import type { ServicesOverviewCopy } from "../types";

const svc = (slug: string) => `/services/${slug}`;

/**
 * Copy from Services.dc.html, design 1793869596-167d. Changes for truthfulness are in
 * docs/content/services-claims-register.md.
 */
export const overview: ServicesOverviewCopy = {
  meta: {
    title: "Services - SimpleX",
    description:
      "Design, engineering, data and operations under one roof - so the people who architect your system are the people who build it, and still there when it scales.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "Services" },
  hero: {
    lines: ["Every capability.", "One accountable team."],
    lead: "Design, engineering, data and operations under one roof - so the people who architect your system are the people who build it, and still there when it scales.",
    pickerTitle: "Where are you starting from?",
    picks: [
      {
        href: svc("custom-software-development"),
        title: "“We have an idea.”",
        path: "Product design → custom software",
      },
      {
        href: svc("cloud-devops"),
        title: "“Our product needs to scale.”",
        path: "Architecture → cloud & DevOps",
      },
      {
        href: svc("legacy-modernization"),
        title: "“A system is holding us back.”",
        path: "Legacy modernization → quality",
      },
    ],
  },
  groups: [
    {
      n: "01",
      title: "Build",
      ground: "mist",
      body: "New products and platforms, engineered for the business they serve and the team that will run them.",
      items: [
        {
          icon: "custom",
          href: svc("custom-software-development"),
          title: "Custom Software Development",
          body: "Bespoke platforms and internal tools designed around how your business actually works.",
          tags: ["Platforms", "APIs", "Internal tools"],
        },
        {
          icon: "enterprise",
          href: svc("enterprise-software"),
          title: "Enterprise Software",
          body: "Core systems for complex organisations: integration-heavy, compliant and built to last a decade.",
          tags: ["ERP-adjacent", "Integration", "Workflow"],
        },
        {
          icon: "web",
          href: svc("web-development"),
          title: "Web Development",
          body: "Fast, accessible web applications and portals with performance budgets you can see.",
          tags: ["React", "Next.js", "Accessibility"],
        },
        {
          icon: "mobile",
          href: svc("mobile-development"),
          title: "Mobile Development",
          body: "Native iOS and Android or one React Native app - from a two-person pod upwards.",
          tags: ["iOS", "Android", "React Native"],
        },
        {
          icon: "desktop",
          href: svc("desktop-development"),
          title: "Desktop Applications",
          body: "Windows, macOS and Linux software - offline-first, signed and auto-updating.",
          tags: ["Tauri", ".NET", "SwiftUI"],
        },
        {
          icon: "package",
          href: "/packages",
          title: "Full-cycle Build Packages",
          body: "Backend, web app, website, admin panel, iOS and Android - one squad, one backlog.",
          tags: ["Full cycle", "Mobile pod", "MVP"],
        },
      ],
    },
    {
      n: "02",
      title: "Platforms & intelligence",
      ground: "ink",
      body: "The foundations that let products scale, learn and change safely.",
      items: [
        {
          icon: "ai",
          href: svc("ai-engineering"),
          title: "AI Engineering",
          body: "Retrieval, automation and intelligent features - evaluated, observable and cost-aware.",
          tags: ["LLM integration", "Agents", "Evaluation"],
        },
        {
          icon: "chat",
          href: svc("telegram-bots"),
          title: "Telegram Bots & Business Automation",
          body: "Custom Telegram bots and connected workflows that help businesses manage customer conversations, capture leads and automate everyday operations.",
          tags: ["Telegram Bot API", "Integrations", "Automation"],
        },
        {
          icon: "cloud",
          href: svc("cloud-devops"),
          title: "Cloud & DevOps",
          body: "Infrastructure as code, delivery pipelines and observability that make releases routine.",
          tags: ["IaC", "Kubernetes", "SRE"],
        },
        {
          icon: "legacy",
          href: svc("legacy-modernization"),
          title: "Legacy Modernization",
          body: "Evolve critical systems incrementally - without a risky big-bang rewrite.",
          tags: ["Strangler pattern", "Migration", "Re-platforming"],
        },
        {
          icon: "quality",
          href: svc("quality-engineering"),
          title: "Quality Engineering",
          body: "Test automation and quality strategy that make every release a non-event.",
          tags: ["Automation", "Performance", "Contract tests"],
        },
      ],
    },
    {
      n: "03",
      title: "Advise",
      ground: "white",
      body: "Senior judgement for decisions that are expensive to reverse.",
      items: [
        {
          icon: "architecture",
          href: svc("architecture-consulting"),
          title: "Architecture & Consulting",
          body: "Architecture reviews, technical due diligence and roadmaps - written by engineers who build.",
          tags: ["Reviews", "Due diligence", "Roadmaps"],
        },
        {
          icon: "design",
          href: svc("product-design"),
          title: "Product Design",
          body: "Research, UX and design systems that make complex products feel obvious.",
          tags: ["Research", "UX/UI", "Design systems"],
        },
      ],
    },
    {
      n: "04",
      title: "Extend",
      ground: "mist",
      body: "Capacity and capability that plug into the way you already work.",
      items: [
        {
          icon: "teams",
          href: svc("dedicated-teams"),
          title: "Dedicated Teams",
          body: "Senior, cross-functional engineers embedded in your rituals, tooling and roadmap.",
          tags: ["Squads", "Augmentation", "Leadership"],
        },
        {
          icon: "mobile",
          href: "/packages",
          title: "Mobile Pod · 2 engineers",
          body: "A compact senior pod that ships a complete iOS, Android or React Native app.",
          tags: ["iOS", "Android", "React Native"],
        },
      ],
    },
  ],
  matrix: {
    eyebrow: "How services connect",
    title: "Every capability, mapped to the lifecycle.",
    lead: "Services aren’t sold as silos. This is where each one typically does its work across Discover, Architect, Design, Build and Scale.",
    label: "Services by lifecycle stage",
    service: "Service",
    stages: ["Discover", "Architect", "Design", "Build", "Scale"],
    lead_role: "Lead role",
    support_role: "Supporting role",
    no_role: "No role",
    view: "View service →",
    rows: [
      {
        title: "Custom Software",
        href: svc("custom-software-development"),
        cells: ["S", "L", "S", "L", "S"],
      },
      {
        title: "Enterprise Software",
        href: svc("enterprise-software"),
        cells: ["S", "L", "O", "L", "L"],
      },
      { title: "Web Development", href: svc("web-development"), cells: ["O", "S", "S", "L", "S"] },
      {
        title: "Mobile Development",
        href: svc("mobile-development"),
        cells: ["O", "S", "S", "L", "S"],
      },
      { title: "AI Engineering", href: svc("ai-engineering"), cells: ["L", "L", "S", "L", "S"] },
      { title: "Telegram Bots", href: svc("telegram-bots"), cells: ["S", "O", "S", "L", "S"] },
      { title: "Cloud & DevOps", href: svc("cloud-devops"), cells: ["O", "L", "O", "S", "L"] },
      {
        title: "Architecture & Consulting",
        href: svc("architecture-consulting"),
        cells: ["L", "L", "O", "O", "S"],
      },
      { title: "Product Design", href: svc("product-design"), cells: ["L", "O", "L", "S", "O"] },
      {
        title: "Legacy Modernization",
        href: svc("legacy-modernization"),
        cells: ["L", "L", "O", "L", "S"],
      },
      {
        title: "Quality Engineering",
        href: svc("quality-engineering"),
        cells: ["O", "S", "O", "L", "L"],
      },
      { title: "Dedicated Teams", href: svc("dedicated-teams"), cells: ["O", "O", "S", "L", "L"] },
    ],
  },
  compare: {
    tag: "The honest comparison",
    title: "SimpleX vs. the usual options.",
    lead: "Every option has a place. Here’s where each one is strong - and where it tends to cost you later.",
    label: "SimpleX compared with freelancers, a large agency and hiring in-house",
    heads: ["Freelancers", "Large agency", "Hiring in-house", "SimpleX"],
    rows: [
      {
        key: "Time to start",
        values: [
          "Days · varies",
          "Weeks",
          "Depends on the market",
          "Agreed per scope · named team",
        ],
      },
      {
        key: "Seniority",
        values: ["Mixed", "Varies by team", "Depends on hiring", "Senior-led teams"],
      },
      {
        key: "Accountability",
        values: ["Individual", "Account manager", "Your own management", "One lead, one contract"],
      },
      {
        key: "Scale up / down",
        values: ["Hard", "Slow, contractual", "Slow, costly", "By role, with notice"],
      },
      {
        key: "IP & code",
        values: ["Contract-dependent", "Contract-dependent", "Yours", "Set out in the contract"],
      },
      {
        key: "AI acceleration",
        values: ["—", "Varies", "Build it yourself", "SimpleX Agent planned"],
      },
    ],
    note: "Positioning summary, not a benchmark. Start dates and team sizes depend on scope.",
  },
  cta: {
    title: "Not sure which service you need?",
    lead: "That’s normal. Tell us the problem - we’ll recommend the smallest useful first step, even if it isn’t us.",
    primary: "Let’s Talk",
    secondary: "How we work",
  },
};
