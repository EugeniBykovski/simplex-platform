import type { StorageItem } from "../types";

/**
 * Interface copy, kept apart from the documents. It states facts about the site, not policy. The
 * storage list comes from the audit in docs/content/cookie-storage-inventory.md: update both.
 */
export const ui = {
  breadcrumb: { label: "Breadcrumb", home: "Home", legal: "Legal" },
  tocLabel: "Sections",
  documentsLabel: "Legal documents",
  documentLinks: { privacy: "Privacy Policy", cookie: "Cookie Policy", terms: "Terms" },
  status: {
    draft: "Status: draft",
    in_review: "Status: in legal review",
    effective: "Effective: {date}",
    revised: "Last revised: {date}",
  },
  pending: {
    note: {
      title: "Not yet published.",
      body: "This document is being prepared and has not been approved, so it is not in force.",
    },
    heading: "What you can rely on today",
    privacy: [
      "The contact form does not accept requests until this policy is published.",
      "This site runs no analytics or advertising scripts. The Cookie Policy page lists what it stores.",
    ],
    cookie: ["Below is what this site actually stores. It is a technical list, not the policy."],
    terms: ["No terms are set out here yet."],
    englishOnly: "An approved version is available in English.",
    englishLink: "Read the English version",
  },
  review: {
    title: "Draft for internal review.",
    body: "Not approved by counsel and not in force. Square brackets mark what still has to be supplied.",
  },
  storage: {
    title: "Your cookie preferences",
    intro:
      "This site has no optional cookies, analytics or advertising scripts, so there is nothing to switch on or off. It stores only this:",
    items: [
      {
        name: "contact_confirmation",
        purpose: "Lets the confirmation page know that a request from this browser was accepted.",
        rows: [
          { label: "Type", value: "First-party cookie, set by this site" },
          { label: "When", value: "Only after you submit the contact form and it is accepted" },
          { label: "Holds", value: "A status, a time and a signature. Nothing about you" },
          { label: "Lasts", value: "15 minutes" },
          { label: "Category", value: "Essential to that confirmation" },
          { label: "Consent", value: "No choice offered, pending legal confirmation" },
          { label: "To remove", value: "Wait 15 minutes, or clear it in your browser" },
        ],
      },
    ] satisfies StorageItem[],
    browserStorage: "Nothing is kept in local storage or session storage.",
  },
} as const;
