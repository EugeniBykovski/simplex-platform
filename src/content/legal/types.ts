export type LegalSection = {
  heading: string;
  body: string;
  list?: readonly string[];
};

/** Working text. Square brackets mark what counsel or the owner must supply. */
export type LegalDocumentCopy = {
  title: string;
  metaDescription: string;
  lead: string;
  sections: readonly LegalSection[];
  contact: string;
};

export type StorageItem = {
  name: string;
  purpose: string;
  rows: readonly { label: string; value: string }[];
};
