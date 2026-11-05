/**
 * Navigation structure from the design's Nav and Footer boards. Hrefs are checked against
 * docs/architecture/route-registry.json by tests/unit/navigation.test.ts.
 */
export type NavItemKey =
  | "customSoftware"
  | "enterpriseSoftware"
  | "webDevelopment"
  | "mobileDevelopment"
  | "desktopApplications"
  | "aiEngineering"
  | "cloudDevops"
  | "legacyModernization"
  | "qualityEngineering"
  | "architectureConsulting"
  | "productDesign"
  | "dedicatedTeams"
  | "buildPackages"
  | "fintech"
  | "healthcare"
  | "ecommerce"
  | "saas"
  | "enterprise"
  | "logistics";

export type IconName =
  | "custom"
  | "enterprise"
  | "web"
  | "mobile"
  | "desktop"
  | "ai"
  | "cloud"
  | "legacy"
  | "quality"
  | "architecture"
  | "design"
  | "teams"
  | "package"
  | "fintech"
  | "health"
  | "commerce"
  | "saas"
  | "building"
  | "logistics";

export type MegaItem = { key: NavItemKey; href: string; icon: IconName };

export const serviceMenuGroups: readonly {
  key: "build" | "platforms" | "advisory";
  items: readonly MegaItem[];
}[] = [
  {
    key: "build",
    items: [
      { key: "customSoftware", href: "/services/custom-software-development", icon: "custom" },
      { key: "enterpriseSoftware", href: "/services/enterprise-software", icon: "enterprise" },
      { key: "webDevelopment", href: "/services/web-development", icon: "web" },
      { key: "mobileDevelopment", href: "/services/mobile-development", icon: "mobile" },
      { key: "desktopApplications", href: "/services/desktop-development", icon: "desktop" },
    ],
  },
  {
    key: "platforms",
    items: [
      { key: "aiEngineering", href: "/services/ai-engineering", icon: "ai" },
      { key: "cloudDevops", href: "/services/cloud-devops", icon: "cloud" },
      { key: "legacyModernization", href: "/services/legacy-modernization", icon: "legacy" },
      { key: "qualityEngineering", href: "/services/quality-engineering", icon: "quality" },
    ],
  },
  {
    key: "advisory",
    items: [
      {
        key: "architectureConsulting",
        href: "/services/architecture-consulting",
        icon: "architecture",
      },
      { key: "productDesign", href: "/services/product-design", icon: "design" },
      { key: "dedicatedTeams", href: "/services/dedicated-teams", icon: "teams" },
      { key: "buildPackages", href: "/packages", icon: "package" },
    ],
  },
];

export const industryMenuItems: readonly MegaItem[] = [
  { key: "fintech", href: "/industries/fintech", icon: "fintech" },
  { key: "healthcare", href: "/industries/healthcare", icon: "health" },
  { key: "ecommerce", href: "/industries/ecommerce", icon: "commerce" },
  { key: "saas", href: "/industries/saas", icon: "saas" },
  { key: "enterprise", href: "/industries/enterprise", icon: "building" },
  { key: "logistics", href: "/industries/logistics", icon: "logistics" },
];

/** Top-level links after Services, Agent and Industries. Prefixes drive the active state. */
export const primaryLinks = [
  { key: "work", href: "/work" },
  { key: "howWeWork", href: "/how-we-work" },
  { key: "about", href: "/about" },
  { key: "insights", href: "/insights" },
  { key: "careers", href: "/careers" },
] as const;

/** The mobile menu lists these eight services, as drawn on the board. */
export const mobileServiceLinks = [
  { key: "customSoftware", href: "/services/custom-software-development" },
  { key: "webDevelopment", href: "/services/web-development" },
  { key: "mobileDevelopment", href: "/services/mobile-development" },
  { key: "desktopApps", href: "/services/desktop-development" },
  { key: "buildPackages", href: "/packages" },
  { key: "aiEngineering", href: "/services/ai-engineering" },
  { key: "cloudDevops", href: "/services/cloud-devops" },
  { key: "productDesign", href: "/services/product-design" },
] as const;

export const footerColumns = {
  services: [
    { key: "agent", href: "/agent", isNew: true },
    { key: "customSoftware", href: "/services/custom-software-development" },
    { key: "webMobileDesktop", href: "/services/web-development" },
    { key: "aiEngineering", href: "/services/ai-engineering" },
    { key: "cloudDevops", href: "/services/cloud-devops" },
    { key: "productDesign", href: "/services/product-design" },
    { key: "architecture", href: "/services/architecture-consulting" },
    { key: "allServices", href: "/services" },
  ],
  industries: [
    { key: "fintech", href: "/industries/fintech" },
    { key: "healthcare", href: "/industries/healthcare" },
    { key: "ecommerce", href: "/industries/ecommerce" },
    { key: "saas", href: "/industries/saas" },
    { key: "enterprise", href: "/industries/enterprise" },
    { key: "logistics", href: "/industries/logistics" },
  ],
  company: [
    { key: "about", href: "/about" },
    { key: "howWeWork", href: "/how-we-work" },
    { key: "work", href: "/work" },
    { key: "technologies", href: "/technologies" },
    { key: "insights", href: "/insights" },
    { key: "buildPackages", href: "/packages" },
    { key: "careers", href: "/careers" },
    { key: "contact", href: "/contact" },
  ],
} as const;

export const footerLegalLinks = [
  { key: "privacy", href: "/privacy-policy" },
  { key: "cookies", href: "/cookie-policy" },
  { key: "terms", href: "/terms" },
] as const;

/** Whether a path falls inside a top-level section, for the header's active state. */
export function isActiveSection(pathname: string, section: string): boolean {
  if (section === "/services") {
    return pathname === "/packages" || pathname === section || pathname.startsWith(`${section}/`);
  }
  return pathname === section || pathname.startsWith(`${section}/`);
}
