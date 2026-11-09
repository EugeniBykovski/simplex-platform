import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug web-development, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "Web Development - SimpleX",
    description:
      "Customer portals and complex SaaS front ends, built with performance budgets, accessibility and maintainable component architecture from the first commit.",
  },
  title: "Web Development",
  short: "Web Development",
  blurb: "Fast, accessible web applications.",
  headline: "Web applications that feel instant and work for everyone.",
  lead: "From customer portals to complex SaaS front ends, we build web applications with performance budgets, accessibility and maintainable component architecture from the first commit.",
  glance: [
    "Core Web Vitals budgets enforced in CI",
    "WCAG 2.2 AA as the baseline",
    "Design-system driven front ends",
  ],
  problem: "Slow and inaccessible costs more than it looks.",
  pains: [
    "Every extra second of load time loses users who never complain - they just leave.",
    "Front ends that grew without structure become slower to change than the back end.",
    "Accessibility debt turns into legal and reputational risk.",
  ],
  capsTitle: "What we bring to the web.",
  capsIntro:
    "Modern front-end engineering with the discipline usually reserved for back ends: architecture, testing and measurable performance.",
  caps: [
    {
      title: "Web applications & portals",
      body: "Authenticated, data-rich applications for customers and teams.",
    },
    {
      title: "Front-end architecture",
      body: "Component boundaries, state and data-fetching patterns that scale.",
    },
    {
      title: "Design systems in code",
      body: "Tokens and components shared between design and engineering.",
    },
    {
      title: "Performance engineering",
      body: "Budgets, profiling and server rendering where it matters.",
    },
    {
      title: "Accessibility",
      body: "Inclusive by design and verified with assistive technology.",
    },
    {
      title: "Headless CMS & content",
      body: "Editorial flexibility without front-end compromise.",
    },
  ],
  value: [
    {
      title: "Faster experiences",
      body: "Measured with real-user data, not lab scores alone.",
    },
    {
      title: "Broader reach",
      body: "Usable by everyone, on every device and connection.",
    },
    {
      title: "Quicker feature delivery",
      body: "Reusable components shorten every new screen.",
    },
    {
      title: "Consistent brand",
      body: "One system across products and teams.",
    },
  ],
  steps: [
    {
      title: "Audit",
      body: "Performance, accessibility and code health baseline.",
    },
    {
      title: "Architect",
      body: "Component model, rendering strategy and budgets.",
    },
    {
      title: "Build & measure",
      body: "Ship incrementally with real-user monitoring.",
    },
    {
      title: "Optimise",
      body: "Continuous improvement against agreed targets.",
    },
  ],
  tech: ["TypeScript", "React", "Next.js", "Vue", "Storybook", "Playwright", "Vercel / AWS"],
  uses: [
    {
      title: "A customer self-service portal",
      body: "Accounts, billing and support in one accessible, fast experience.",
    },
    {
      title: "A SaaS front-end rebuild",
      body: "Incrementally replacing a legacy front end without a freeze on features.",
    },
    {
      title: "A content platform with headless CMS",
      body: "Marketing autonomy with engineering-grade performance.",
    },
  ],
  cta: "Is your web product as fast as your team?",
};
