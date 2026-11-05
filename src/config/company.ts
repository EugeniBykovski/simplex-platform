/**
 * Company facts the site may display. All unset: the design holds bracketed placeholders, and these
 * must never be guessed (GAP-C08). A column or line appears only once its value is real.
 */
export const companyDetails: {
  contactEmail: string | null;
  registeredDetails: string | null;
  social: Record<"linkedin" | "github" | "x", string | null>;
} = {
  contactEmail: null,
  registeredDetails: null,
  social: { linkedin: null, github: null, x: null },
};
