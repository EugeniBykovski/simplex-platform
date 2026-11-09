import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug product-design, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "Product Design & UI/UX - SimpleX",
    description:
      "Research, UX and interface systems for products with real complexity - designed alongside the engineers who will build them, so nothing is lost in translation.",
  },
  title: "Product Design & UI/UX",
  short: "Product Design",
  blurb: "Complex products, made obvious.",
  headline: "Complex products, made obvious.",
  lead: "Research, UX and interface systems for products with real complexity - designed alongside the engineers who will build them, so nothing is lost in translation.",
  glance: [
    "Research with real users",
    "Design systems in Figma and in code",
    "Accessible by default",
  ],
  problem: "Complexity leaks into the interface.",
  pains: [
    "Powerful features that users can’t find or don’t trust.",
    "Inconsistent UI built screen by screen by different teams.",
    "Design handed over as pictures, then reinterpreted in code.",
  ],
  capsTitle: "What we bring to product design.",
  capsIntro:
    "Product design embedded in delivery teams, measured by adoption and task success rather than by screens produced.",
  caps: [
    {
      title: "Discovery & research",
      body: "Interviews, analytics and contextual inquiry.",
    },
    {
      title: "UX architecture & flows",
      body: "Information architecture and journeys for complex domains.",
    },
    {
      title: "Interface design",
      body: "Precise, accessible UI with a clear visual hierarchy.",
    },
    {
      title: "Design systems",
      body: "Tokens and components maintained in Figma and code.",
    },
    {
      title: "Prototyping & testing",
      body: "Usability testing before a line of production code.",
    },
    {
      title: "Accessibility",
      body: "WCAG 2.2 AA built into components and reviews.",
    },
  ],
  value: [
    {
      title: "Higher adoption",
      body: "Features people find, understand and use.",
    },
    {
      title: "Fewer support requests",
      body: "Clarity that reduces confusion.",
    },
    {
      title: "Faster delivery",
      body: "Reusable patterns shorten every iteration.",
    },
    {
      title: "Consistent brand",
      body: "One coherent experience across products.",
    },
  ],
  steps: [
    {
      title: "Research",
      body: "Understand users, tasks and context.",
    },
    {
      title: "Define",
      body: "Flows, structure and success measures.",
    },
    {
      title: "Prototype & test",
      body: "Validate with real users, iterate quickly.",
    },
    {
      title: "Systemise & ship",
      body: "Components in code alongside engineering.",
    },
  ],
  tech: ["Figma", "Storybook", "Design tokens", "Maze", "Dovetail", "Playwright visual tests"],
  uses: [
    {
      title: "Redesigning a data-heavy dashboard",
      body: "Turning dense operational data into decisions users can make at a glance.",
    },
    {
      title: "A design system for a multi-product company",
      body: "One component library, documented and adopted across teams.",
    },
    {
      title: "Onboarding optimisation",
      body: "Shortening time-to-value for new users with tested flows.",
    },
  ],
  cta: "Is your product harder to use than it needs to be?",
};
