import type { PackageId } from "./types";

/**
 * Locale-neutral facts about each package: its anchor on the page and where its comparison action
 * goes. /contact stays a disabled link until SF-151 adds the route, through implementedRoutes.
 */
export const packageCatalog: Record<
  PackageId,
  { anchor: `#${string}`; action: { href: string; look: "link" | "button" }; highlighted: boolean }
> = {
  "mobile-pod": {
    anchor: "#mobile-pod",
    action: { href: "/contact", look: "link" },
    highlighted: false,
  },
  desktop: {
    anchor: "#desktop",
    action: { href: "/services/desktop-development", look: "link" },
    highlighted: false,
  },
  "full-cycle": {
    anchor: "#full-cycle",
    action: { href: "/contact", look: "button" },
    highlighted: true,
  },
};
