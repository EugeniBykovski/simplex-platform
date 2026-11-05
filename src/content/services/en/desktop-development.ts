import type { ServicePageCopy } from "../types";

/** Copy from ServicePage.dc.html, slug desktop-development, design 1793869596-167d. Changes are in docs/content/services-claims-register.md. */
export const page: ServicePageCopy = {
  meta: {
    title: "Desktop Applications & Programs — SimpleX",
    description:
      "Windows, macOS and Linux applications for the work that still happens at a keyboard: operator consoles, terminals, point-of-sale, field tools and device control — offline-first, signed and auto-updating.",
  },
  title: "Desktop Applications & Programs",
  short: "Desktop Development",
  blurb: "Windows, macOS and Linux software.",
  headline: "Desktop software that belongs on the desk.",
  lead: "Windows, macOS and Linux applications for the work that still happens at a keyboard: operator consoles, terminals, point-of-sale, field tools and device control — offline-first, signed and auto-updating.",
  glance: [
    "Windows, macOS and Linux",
    "Offline-first with background sync",
    "Signed installers and silent auto-update",
  ],
  problem: "Some work doesn’t fit in a browser tab.",
  pains: [
    "Operators need multiple monitors, keyboard speed and local files the web can’t give them.",
    "Ageing WinForms, VB6 or Delphi tools hold critical workflows hostage.",
    "Unreliable networks turn cloud-only tools into downtime.",
  ],
  capsTitle: "What we bring to desktop software.",
  capsIntro:
    "We pick the runtime per product — native, .NET, Tauri, Electron or Qt — based on performance, platforms and the team that will maintain it.",
  caps: [
    {
      title: "Native & cross-platform desktop",
      body: "SwiftUI/AppKit, WinUI/WPF, Tauri, Electron, Qt or Flutter desktop.",
    },
    {
      title: "Offline-first data",
      body: "Local databases with conflict-aware sync to your cloud.",
    },
    {
      title: "Hardware integration",
      body: "Printers, scanners, payment terminals, serial and USB devices.",
    },
    {
      title: "Packaging & updates",
      body: "Code signing, notarisation, MSI/DMG/AppImage, MDM-friendly rollout.",
    },
    {
      title: "Legacy desktop modernisation",
      body: "Incremental rewrites of WinForms, VB6 and Delphi applications.",
    },
    {
      title: "Telemetry & support",
      body: "Crash reporting, usage analytics and remote diagnostics.",
    },
  ],
  value: [
    {
      title: "Faster operators",
      body: "Keyboard-first flows and multi-window layouts.",
    },
    {
      title: "Works offline",
      body: "No lost work when the network drops.",
    },
    {
      title: "Painless updates",
      body: "Silent, staged releases across the fleet.",
    },
    {
      title: "One codebase where it pays",
      body: "Cross-platform when it makes sense, native where it matters.",
    },
  ],
  steps: [
    {
      title: "Observe",
      body: "Sit with operators; map workflows and devices.",
    },
    {
      title: "Choose runtime",
      body: "Native vs cross-platform, with the trade-offs written down.",
    },
    {
      title: "Build & package",
      body: "Signed builds and installers from CI.",
    },
    {
      title: "Roll out",
      body: "Staged deployment, telemetry and support.",
    },
  ],
  tech: ["Tauri", "Electron", ".NET · WinUI", "SwiftUI", "Qt", "SQLite", "Rust"],
  uses: [
    {
      title: "An operations console for a control room",
      body: "Multi-monitor dispatch and monitoring that keeps working through network outages.",
    },
    {
      title: "A point-of-sale and kiosk application",
      body: "Payment terminals, receipt printers and offline sales with reconciliation.",
    },
    {
      title: "Replacing a 20-year-old WinForms tool",
      body: "Module-by-module modernisation without retraining every user at once.",
    },
  ],
  cta: "Have a desktop tool that deserves better?",
};
