import type { Locale } from "@/i18n/routing";
import { documents as enDocuments } from "./en/documents";
import { ui as enUi } from "./en/ui";
import { documents as ruDocuments } from "./ru/documents";
import { ui as ruUi } from "./ru/ui";
import type { LegalDocumentId } from "./registry";

const documents = { en: enDocuments, ru: ruDocuments };
const uis = { en: enUi, ru: ruUi };

export const getLegalDocument = (id: LegalDocumentId, locale: Locale) => documents[locale][id];
export const getLegalUi = (locale: Locale) => uis[locale];

export type LegalUiCopy = (typeof uis)[Locale];
export { isLegalPublished, legalDocuments, legalDocumentIds } from "./registry";
export type { LegalDocumentId, LegalRecord } from "./registry";
