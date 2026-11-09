import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug quality-engineering, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "Quality Engineering & Test Automation - SimpleX",
    description:
      "We build quality into delivery: test strategy, automation and performance engineering that let teams release often without crossing their fingers.",
  },
  title: "Quality Engineering & Test Automation",
  short: "Quality Engineering",
  blurb: "Release confidence on every change.",
  headline: "Confidence, measured - on every release.",
  lead: "We build quality into delivery: test strategy, automation and performance engineering that let teams release often without crossing their fingers.",
  glance: [
    "Risk-based test strategy",
    "Automation inside the pipeline",
    "Performance tested before launch",
  ],
  problem: "Manual testing can’t keep pace.",
  pains: [
    "Regression cycles take longer than the sprint that produced the change.",
    "Flaky tests teach teams to ignore failures.",
    "Performance problems are discovered by customers.",
  ],
  capsTitle: "What we bring to quality.",
  capsIntro:
    "Quality engineering as part of the team, not a phase at the end - shifting checks left and keeping them fast.",
  caps: [
    {
      title: "Test strategy",
      body: "A pyramid tuned to your risk profile and architecture.",
    },
    {
      title: "UI & API automation",
      body: "Fast, stable suites that run on every change.",
    },
    {
      title: "Contract testing",
      body: "Safe independent releases between services.",
    },
    {
      title: "Performance & load",
      body: "Capacity verified before peak, not during it.",
    },
    {
      title: "Mobile device testing",
      body: "Automated coverage across a real device matrix.",
    },
    {
      title: "Quality metrics",
      body: "Escaped defects, flakiness and coverage made visible.",
    },
  ],
  value: [
    {
      title: "Fewer escaped defects",
      body: "More issues caught in the pipeline, before production.",
    },
    {
      title: "Shorter release cycles",
      body: "Automated regression on every change.",
    },
    {
      title: "Trustworthy pipelines",
      body: "Green means ready.",
    },
    {
      title: "Visible quality",
      body: "Metrics leadership can act on.",
    },
  ],
  steps: [
    {
      title: "Assess",
      body: "Current coverage, flakiness and risk.",
    },
    {
      title: "Strategise",
      body: "Target test pyramid and tooling.",
    },
    {
      title: "Automate",
      body: "Suites integrated into CI/CD.",
    },
    {
      title: "Monitor",
      body: "Quality dashboards and continuous tuning.",
    },
  ],
  tech: ["Playwright", "Cypress", "Appium", "Pact", "k6", "SonarQube", "GitHub Actions"],
  uses: [
    {
      title: "Automating a release-blocking regression suite",
      body: "From days of manual testing to a suite that runs on every pull request.",
    },
    {
      title: "Load testing before a launch",
      body: "Realistic traffic models and capacity planning ahead of peak.",
    },
    {
      title: "Contract testing across microservices",
      body: "Teams release independently without breaking each other.",
    },
  ],
  cta: "Want every release to be a non-event?",
};
