import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug mobile-development, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "Mobile Development — SimpleX",
    description:
      "Native and cross-platform apps that are fast, accessible and dependable offline — with release pipelines that make weekly updates routine.",
  },
  title: "Mobile Development",
  short: "Mobile Development",
  blurb: "Native and cross-platform apps.",
  headline: "Apps people keep on their home screen.",
  lead: "Native and cross-platform apps that are fast, accessible and dependable offline — with release pipelines that make weekly updates routine.",
  glance: [
    "iOS, Android or React Native — from a two-person pod",
    "Offline-first architecture",
    "Automated store releases",
  ],
  problem: "Mobile is unforgiving.",
  pains: [
    "Users judge an app in its first session and rarely give it a second chance.",
    "Fragmented devices make quality expensive without automation.",
    "Two native codebases can double cost if architecture isn’t shared well.",
  ],
  capsTitle: "What we bring to mobile.",
  capsIntro:
    "We choose native or cross-platform per product, based on performance needs, team skills and long-term cost — and explain the trade-off.",
  caps: [
    {
      title: "Native iOS & Android",
      body: "Swift and Kotlin for platform-defining experiences.",
    },
    {
      title: "Cross-platform",
      body: "React Native or Flutter where shared code pays off.",
    },
    {
      title: "Offline & sync",
      body: "Local-first data with conflict resolution.",
    },
    {
      title: "Secure auth & payments",
      body: "Biometrics, token handling and in-app purchases.",
    },
    {
      title: "Push, deep links & analytics",
      body: "Engagement features with privacy built in.",
    },
    {
      title: "Release automation",
      body: "Signed builds, staged rollouts and crash monitoring.",
    },
  ],
  value: [
    {
      title: "Higher ratings & retention",
      body: "Performance and polish users notice.",
    },
    {
      title: "Lower cost per platform",
      body: "Shared architecture where it makes sense.",
    },
    {
      title: "Predictable releases",
      body: "Weekly updates without heroics.",
    },
    {
      title: "Secure by default",
      body: "Platform security guidance from day one.",
    },
  ],
  steps: [
    {
      title: "Define",
      body: "Users, platforms and the native vs cross-platform decision.",
    },
    {
      title: "Prototype",
      body: "Clickable flows tested with real users.",
    },
    {
      title: "Build & test",
      body: "Automated tests on a real device matrix.",
    },
    {
      title: "Launch & iterate",
      body: "Staged rollouts, analytics and improvement.",
    },
  ],
  tech: ["Swift / SwiftUI", "Kotlin / Compose", "React Native", "Flutter", "Firebase", "Fastlane"],
  uses: [
    {
      title: "A field-worker app with offline sync",
      body: "Reliable data capture in places with no signal, synced when connection returns.",
    },
    {
      title: "A consumer app with subscriptions",
      body: "Onboarding, payments and retention features in one coherent product.",
    },
    {
      title: "A companion app to a web platform",
      body: "Mobile-first workflows on a shared API and design system.",
    },
  ],
  cta: "Planning an app your users will actually keep?",
};
