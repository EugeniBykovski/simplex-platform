import type { PackagesContent } from "./types";

/**
 * Copy from Packages.dc.html, design 1793869596-167d. Every change from the source, and every
 * commercial statement, is listed in docs/content/packages-commercial-register.md.
 */
export const content: PackagesContent = {
  meta: {
    title: "Build packages — SimpleX",
    description:
      "Three ways to build with SimpleX: a mobile pod for iOS, Android or React Native, desktop apps for Windows, macOS and Linux, or the full cycle from one team.",
  },
  breadcrumb: {
    label: "Breadcrumb",
    home: "Home",
    services: "Services",
    current: "Build packages",
  },
  hero: {
    isNew: "New",
    chip: "Build packages",
    title: "From a two-person app team to your whole product.",
    lead: "Three clear ways to build with us: a compact mobile pod for iOS, Android or React Native; desktop applications for Windows, macOS and Linux; or the full cycle — backend, web, website, admin panel and both mobile apps from one team.",
    primary: "Scope my build",
    secondary: "Compare packages",
  },
  selection: {
    eyebrow: "Three packages",
    title: "Pick the shape of your build.",
    lead: "Every package is planned around a named lead, an indicative team shape and a shared backlog.",
    cards: {
      "mobile-pod": {
        label: "01 · Mobile pod",
        team: "2 people",
        title: "A complete app, from two engineers.",
        body: "Native iOS, native Android or one React Native app for both stores — designed, built, released and supported.",
        link: "See the pod",
      },
      desktop: {
        label: "02 · Desktop apps",
        team: "2–3 people",
        title: "Software that belongs on the desk.",
        body: "Windows, macOS and Linux applications — offline-first, hardware-aware, signed and auto-updating.",
        link: "See desktop",
      },
      "full-cycle": {
        label: "03 · Full cycle",
        team: "One squad",
        title: "The whole product, one team.",
        body: "Backend, web app, website, admin panel, iOS and Android — designed and shipped as one system.",
        link: "See full cycle",
      },
    },
  },
  pod: {
    eyebrow: "01 · Mobile pod · 2 people",
    title: "Two engineers. A complete app in the stores.",
    lead: "A small, senior pod that owns the app end to end: product design, the app, the API it needs, automated tests and the release to the App Store and Google Play.",
    tracksLabel: "Mobile track",
    tracks: {
      ios: {
        label: "iOS · native",
        title: "Native iOS",
        stores: "App Store",
        description:
          "Swift and SwiftUI for apps that feel truly native — with widgets, Live Activities, Apple Pay and Face ID where the product needs them.",
        stack: ["Swift", "SwiftUI", "Combine", "Core Data", "Xcode Cloud"],
        lead: {
          initials: "iOS",
          name: "Senior iOS engineer",
          note: "App architecture, UI, store release",
        },
        support: {
          initials: "BE",
          name: "Full-stack engineer",
          note: "API, admin, push, QA automation",
        },
        release: "2.4 · iOS",
      },
      android: {
        label: "Android · native",
        title: "Native Android",
        stores: "Google Play",
        description:
          "Kotlin and Jetpack Compose with Material You, widgets and Google Pay — tested across a device matrix.",
        stack: ["Kotlin", "Jetpack Compose", "Coroutines", "Room", "Firebase"],
        lead: {
          initials: "AND",
          name: "Senior Android engineer",
          note: "App architecture, UI, Play release",
        },
        support: {
          initials: "BE",
          name: "Full-stack engineer",
          note: "API, admin, push, QA automation",
        },
        release: "2.4 · Android",
      },
      rn: {
        label: "React Native · both",
        title: "React Native — iOS + Android",
        stores: "Both stores",
        description:
          "One TypeScript codebase for both stores, with native modules where they matter — a practical way to ship on both platforms with two people.",
        stack: ["React Native", "TypeScript", "Expo", "Reanimated", "Detox"],
        lead: {
          initials: "RN",
          name: "Senior React Native engineer",
          note: "Shared app, native modules, releases",
        },
        support: {
          initials: "BE",
          name: "Full-stack engineer",
          note: "API, admin, push, QA automation",
        },
        release: "2.4 · RN",
      },
    },
    checks: [
      "UX and UI design from a shared SimpleX design system",
      "Backend/API, auth, push notifications, analytics and crash reporting",
      "CI/CD with automated store releases, TestFlight and Play testing tracks",
      "Accessibility, offline mode and localisation from the first release",
    ],
    note: "Team shape and scope are indicative. Timelines are scoped per product, and nothing here is a quote.",
  },
  desktop: {
    eyebrow: "02 · Desktop applications & programs",
    title: "Desktop software that belongs on the desk.",
    lead: "Operator consoles, trading and finance terminals, point-of-sale, field tools, device control and creative utilities — built for keyboards, multiple monitors, local files and unreliable networks.",
    platformsTitle: "Platforms",
    platforms: ["Windows", "macOS", "Linux", "Kiosk / embedded"],
    technologyTitle: "Technology — chosen per product",
    technology: [
      "Tauri + Rust",
      "Electron",
      ".NET · WinUI / WPF",
      ".NET MAUI",
      "SwiftUI · AppKit",
      "Qt · C++",
      "Flutter desktop",
    ],
    builtInTitle: "Built in",
    builtIn: [
      "Offline-first storage with background sync",
      "Code signing, notarisation and silent auto-update",
      "Hardware: printers, scanners, serial/USB devices",
      "Installers, MDM-friendly deployment and telemetry",
    ],
    features: [
      {
        title: "Trading & finance terminals",
        body: "Low-latency, multi-monitor, keyboard-first.",
      },
      { title: "Operations consoles", body: "Dispatch, monitoring and control rooms." },
      { title: "Point of sale & kiosks", body: "Works when the network doesn’t." },
      {
        title: "Legacy desktop rewrites",
        body: "VB6, WinForms and Delphi, modernised step by step.",
      },
    ],
  },
  fullCycle: {
    eyebrow: "03 · Full cycle · one squad",
    title: "The whole product. One team. One backlog.",
    lead: "When the backend, the web app, the website, the admin panel and both mobile apps are designed together, they share one API, one design system and one release train — and nothing falls between vendors.",
    nodes: [
      {
        title: "Backend & API",
        body: "Domain services, auth, payments, integrations, background jobs.",
        chips: ["Node / Kotlin / .NET", "PostgreSQL"],
      },
      {
        title: "Web app · frontend",
        body: "The signed-in product experience in the browser.",
        chips: ["React", "Next.js"],
      },
      {
        title: "Website",
        body: "Marketing site with CMS, SEO and analytics.",
        chips: ["Next.js", "Headless CMS"],
      },
      {
        title: "Admin panel",
        body: "Back-office: users, content, orders, roles, audit log, reports.",
        chips: ["RBAC", "Audit"],
      },
      {
        title: "iOS app",
        body: "Native Swift or shared React Native.",
        chips: ["SwiftUI", "App Store"],
      },
      {
        title: "Android app",
        body: "Native Kotlin or shared React Native.",
        chips: ["Compose", "Google Play"],
      },
      {
        title: "QA & release",
        body: "Automated tests across web, API and device matrix.",
        chips: ["Playwright", "Detox"],
      },
      {
        title: "Cloud & DevOps",
        body: "Infrastructure as code, monitoring, backups, environments.",
        chips: ["Terraform", "AWS / Azure"],
      },
    ],
    coreTitle: "One squad",
    coreBody: "Shared API · design system · CI/CD · QA · analytics",
    squadTitle: "Who’s in the squad",
    squad: [
      {
        initials: "PM",
        name: "Product lead",
        note: "Scope, priorities, demos — your single contact",
      },
      {
        initials: "UX",
        name: "Product designer",
        note: "Website, web app, admin and mobile in one system",
      },
      {
        initials: "BE",
        name: "Backend & frontend engineers",
        note: "API, web app, website, admin panel",
      },
      {
        initials: "MB",
        name: "Mobile engineers",
        note: "iOS + Android, or one React Native engineer",
      },
      { initials: "QA", name: "QA & DevOps", note: "Shared across the squad" },
    ],
    note: "Squad size scales with scope and is agreed when we scope the work.",
  },
  starts: {
    tag: "Team availability",
    title: "Start dates, on request.",
    lead: "We don’t publish a calendar. Tell us what you’re building, and we’ll say plainly when a team could start.",
    action: "Ask about start dates",
    panelTitle: "Start dates",
    panelStatus: "Not published",
    rows: [
      {
        name: "Mobile pod",
        team: "2 people",
        start: "On request",
        depends: "Depends on the track and scope",
      },
      {
        name: "Desktop team",
        team: "2–3 people",
        start: "On request",
        depends: "Depends on the platforms and scope",
      },
      {
        name: "Full-cycle squad",
        team: "Size follows scope",
        start: "On request",
        depends: "Depends on which parts you need",
      },
    ],
    note: "Team sizes are indicative. A start date only counts once we’ve confirmed it with you.",
  },
  compare: {
    title: "Compare packages",
    tag: "Indicative · not a quote",
    label: "Comparison of the three build packages",
    actionsLabel: "Next step",
    columns: { "mobile-pod": "Mobile pod", desktop: "Desktop app", "full-cycle": "Full cycle" },
    rows: [
      {
        label: "Team",
        values: {
          "mobile-pod": "2 people",
          desktop: "2–3 people",
          "full-cycle": "One squad · size follows scope",
        },
      },
      {
        label: "Platforms",
        values: {
          "mobile-pod": "iOS, Android or React Native",
          desktop: "Windows · macOS · Linux",
          "full-cycle": "Backend · web · website · admin · iOS · Android",
        },
      },
      {
        label: "Includes",
        values: {
          "mobile-pod": "Design, app, API, store release",
          desktop: "Design, app, installer, auto-update",
          "full-cycle": "Everything, plus DevOps & analytics",
        },
      },
      {
        label: "First release",
        values: {
          "mobile-pod": "Agreed when scoped",
          desktop: "Agreed when scoped",
          "full-cycle": "Agreed when scoped · MVP",
        },
      },
      {
        label: "Best for",
        values: {
          "mobile-pod": "A focused app or a mobile companion",
          desktop: "Internal tools, terminals, offline work",
          "full-cycle": "New products and full re-platforms",
        },
      },
    ],
    actions: {
      "mobile-pod": "Start a pod",
      desktop: "Desktop service",
      "full-cycle": "Scope the full cycle",
    },
  },
  faq: [
    {
      question: "Can two people really build a full app?",
      answer:
        "For a focused product, that is the idea: a senior mobile engineer and a full-stack engineer cover the app, its API and the release pipeline, with design and QA support from our shared practice. We confirm whether it fits your product when we scope it.",
    },
    {
      question: "Native or React Native?",
      answer:
        "React Native when both stores matter and the UI is product-standard; native when you need platform-defining performance, deep OS features or a single platform. We explain the trade-off before you commit.",
    },
    {
      question: "Can we start with a pod and grow into the full cycle?",
      answer:
        "That is how it is meant to work: the pod’s API and design system can become the foundation the full squad builds on.",
    },
    {
      question: "Who owns the code and the store accounts?",
      answer:
        "Ownership of repositories, cloud accounts, and App Store and Google Play listings is set out in the contract, before work starts.",
    },
  ],
  cta: {
    eyebrow: "Start",
    title: "Tell us what you’re building.",
    lead: "We’ll suggest the right package — and the smallest team that can ship it well.",
    primary: "Let’s Talk",
    secondary: "Meet the agent",
  },
  mock: {
    sample: "Sample",
    welcome: "Welcome",
    welcomeTitle: "Your product, in every pocket.",
    getStarted: "Get started",
    haveAccount: "I already have an account",
    greeting: "Good morning",
    person: "Alex",
    personFull: "Alex Morgan",
    thisWeek: "This week",
    order: "Order #2041",
    orderStatus: "Out for delivery",
    report: "Weekly report",
    reportStatus: "Ready to view",
    checkout: "Checkout",
    plan: "Plan · Team",
    seats: "Seats × 5",
    monthly: "monthly",
    payWith: "Pay with",
    pay: "Confirm & pay",
    hello: "Hello",
    opsConsole: "Ops Console",
    queue: "Queue",
    devices: "Devices",
    sync: "Sync",
    syncOk: "OK",
    adminUrl: "admin.yourproduct.com",
    bookings: "Bookings",
    today: "Today",
    slots: "3 slots",
    review: "09:30 · Design review",
    room: "Room 2",
    demo: "13:00 · Sprint demo",
    online: "Online",
    synced: "Synced offline",
    appName: "Today",
    goal: "Weekly goal",
    push: "Push · new update",
    releaseLabel: "Release",
    profile: "Profile",
    teamPlan: "Team plan",
    biometric: "Face / fingerprint login",
    notifications: "Notifications",
    offline: "Offline mode",
    fieldOps: "Field Ops — Desktop · sample",
    offlineBadge: "Offline",
    nav: ["Overview", "Dispatch", "Devices", "Inspections", "Sync"],
    settings: "Settings",
    overview: "Overview",
    localDb: "Local DB in sync",
    openJobs: "Open jobs",
    devicesOnline: "Devices online",
    pendingSync: "Pending sync",
    throughput: "Throughput · sample",
    adminUrlSample: "admin.yourproduct.com · sample",
    users: "Users",
    orders: "Orders",
    revenue: "Revenue",
    orderPaid: "Order #2041 · paid",
    orderRefund: "Order #2040 · refund",
    newRole: "New role · Support agent",
    ship: "Ship",
    reviewBadge: "Review",
    audit: "Audit",
  },
};
