import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  footerColumns,
  footerLegalLinks,
  industryMenuItems,
  isActiveSection,
  mobileServiceLinks,
  primaryLinks,
  serviceMenuGroups,
} from "@/config/navigation";
import { companyDetails } from "@/config/company";

const registry = JSON.parse(readFileSync("docs/architecture/route-registry.json", "utf8")) as {
  routes: { route: string }[];
};
const known = new Set(registry.routes.map(({ route }) => route));

describe("navigation data", () => {
  const hrefs = [
    ...serviceMenuGroups.flatMap(({ items }) => items.map(({ href }) => href)),
    ...industryMenuItems.map(({ href }) => href),
    ...primaryLinks.map(({ href }) => href),
    ...mobileServiceLinks.map(({ href }) => href),
    ...Object.values(footerColumns).flatMap((links) => links.map(({ href }) => href)),
    ...footerLegalLinks.map(({ href }) => href),
  ];

  it.each(hrefs)("%s is in the route registry", (href) => {
    expect(known).toContain(href);
  });

  it("matches the counts on the design boards", () => {
    expect(serviceMenuGroups.flatMap(({ items }) => items)).toHaveLength(13);
    expect(industryMenuItems).toHaveLength(6);
    expect(mobileServiceLinks).toHaveLength(8);
    expect(footerColumns.services).toHaveLength(8);
    expect(footerColumns.company).toHaveLength(8);
  });
});

describe("isActiveSection", () => {
  it("matches a section and its children, but not similar prefixes", () => {
    expect(isActiveSection("/work", "/work")).toBe(true);
    expect(isActiveSection("/work/ledgerline", "/work")).toBe(true);
    expect(isActiveSection("/workshop", "/work")).toBe(false);
  });

  it("treats packages as part of services, as the design does", () => {
    expect(isActiveSection("/packages", "/services")).toBe(true);
    expect(isActiveSection("/packages", "/work")).toBe(false);
  });
});

describe("company details", () => {
  it("invents nothing: every value stays empty until the owner supplies it", () => {
    expect(companyDetails.contactEmail).toBeNull();
    expect(companyDetails.registeredDetails).toBeNull();
    expect(Object.values(companyDetails.social).every((value) => value === null)).toBe(true);
  });
});
