import type { Locale } from "@/i18n/routing";

export const legalDocumentIds = ["privacy", "cookie", "terms"] as const;
export type LegalDocumentId = (typeof legalDocumentIds)[number];

/**
 * Approval is recorded per document and per language, so an approved English policy never approves
 * its Russian draft. TypeScript refuses `approved` without a real authority and dates: never fill
 * these in on anyone's behalf. See docs/content/legal-document-register.md.
 */
export type LegalRecord =
  | { status: "draft" | "in_review" }
  | {
      status: "approved";
      /** Who approved it, as a person or firm that actually did. */
      approvedBy: string;
      /** YYYY-MM-DD. */
      effectiveDate: string;
      /** YYYY-MM-DD. */
      lastRevised: string;
    };

export const legalDocuments: Record<LegalDocumentId, Record<Locale, LegalRecord>> = {
  privacy: { en: { status: "draft" }, ru: { status: "draft" } },
  cookie: { en: { status: "draft" }, ru: { status: "draft" } },
  terms: { en: { status: "draft" }, ru: { status: "draft" } },
};

/** The only test of whether a document may be public and indexed. */
export const isLegalPublished = (id: LegalDocumentId, locale: Locale) =>
  legalDocuments[id][locale].status === "approved";
