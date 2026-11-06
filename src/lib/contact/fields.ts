/**
 * The form's contract. Pure and free of secrets, so the browser can use it for instant hints. The
 * server runs the same checks and is the authority.
 */
export const SERVICE_IDS = [
  "custom-software",
  "web-mobile",
  "ai-engineering",
  "cloud-devops",
  "product-design",
  "architecture",
  "dedicated-team",
  "not-sure",
] as const;

export const BUDGET_IDS = [
  "prefer-not-to-say",
  "under-50k",
  "50k-150k",
  "150k-500k",
  "500k-plus",
] as const;

export const TIMELINE_IDS = [
  "not-sure",
  "asap",
  "within-3-months",
  "3-6-months",
  "exploring",
] as const;

export const LIMITS = {
  name: 200,
  email: 254,
  company: 200,
  descriptionMin: 20,
  descriptionMax: 2000,
} as const;

/** Off-screen, and left empty by people. */
export const HONEYPOT_FIELD = "website";

export type ContactValues = {
  services: string[];
  name: string;
  email: string;
  company: string;
  description: string;
  budget: string;
  timeline: string;
  consent: boolean;
};

export const emptyContactValues: ContactValues = {
  services: [],
  name: "",
  email: "",
  company: "",
  description: "",
  budget: BUDGET_IDS[0],
  timeline: TIMELINE_IDS[0],
  consent: false,
};

export type ContactField = keyof ContactValues;
export type ContactErrorCode = "required" | "invalid" | "tooShort" | "tooLong";
export type ContactErrors = Partial<Record<ContactField, ContactErrorCode>>;

/** Display order, which is also the order focus moves through errors. */
export const FIELD_ORDER: readonly ContactField[] = [
  "services",
  "name",
  "email",
  "company",
  "description",
  "budget",
  "timeline",
  "consent",
];

export type ContactStatus =
  | "idle"
  | "invalid"
  | "rejected"
  | "rate_limited"
  | "network_failure"
  | "provider_failure"
  | "unavailable"
  | "accepted";

export type ContactFormState = {
  status: ContactStatus;
  /** Whether an accepted submission was simulated. Always shown to the visitor. */
  simulated?: boolean;
  errors?: ContactErrors;
  /** The visitor's own input, so nothing is lost after a recoverable failure, even without JS. */
  values: ContactValues;
};

// Rejects characters that could break an address into a header, as well as whitespace.
const EMAIL_PATTERN = /^[^\s@<>()",;:\\[\]]+@[^\s@<>()",;:\\[\]]+\.[^\s@.<>()",;:\\[\]]+$/;
// Controls and line or paragraph separators. Stops header injection through single-line fields.
const FORBIDDEN_CHARACTERS = /[\p{Cc}\p{Zl}\p{Zp}]/u;

const clean = (value: string) => value.replace(/\s+/g, " ").trim();

export const isEmailShaped = (value: string) =>
  value.length <= LIMITS.email && EMAIL_PATTERN.test(value);

const checkSingleLine = (raw: string, limit: number): ContactErrorCode | null => {
  if (FORBIDDEN_CHARACTERS.test(raw)) return "invalid";
  return clean(raw).length > limit ? "tooLong" : null;
};

const normalizeDescription = (raw: string) => raw.replace(/\r\n?/g, "\n").trim();

/** Checks and normalizes. Errors are field-level, so the visitor can fix each one. */
export function validateContact(
  raw: ContactValues,
): { ok: true; values: ContactValues } | { ok: false; errors: ContactErrors } {
  const errors: ContactErrors = {};

  const nameIssue = checkSingleLine(raw.name, LIMITS.name);
  if (!clean(raw.name)) errors.name = "required";
  else if (nameIssue) errors.name = nameIssue;

  const email = raw.email.trim();
  if (!email) errors.email = "required";
  else if (!isEmailShaped(email)) errors.email = "invalid";

  const companyIssue = checkSingleLine(raw.company, LIMITS.company);
  if (companyIssue) errors.company = companyIssue;

  const description = normalizeDescription(raw.description);
  if (!description) errors.description = "required";
  else if (FORBIDDEN_CHARACTERS.test(description.replace(/[\n\t]/g, ""))) {
    errors.description = "invalid";
  } else if (description.length < LIMITS.descriptionMin) errors.description = "tooShort";
  else if (description.length > LIMITS.descriptionMax) errors.description = "tooLong";

  if (!raw.services.every((id) => (SERVICE_IDS as readonly string[]).includes(id))) {
    errors.services = "invalid";
  }
  if (!(BUDGET_IDS as readonly string[]).includes(raw.budget)) errors.budget = "invalid";
  if (!(TIMELINE_IDS as readonly string[]).includes(raw.timeline)) errors.timeline = "invalid";
  if (!raw.consent) errors.consent = "required";

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return {
    ok: true,
    values: {
      ...raw,
      services: [...new Set(raw.services)],
      name: clean(raw.name),
      email,
      company: clean(raw.company),
      description,
    },
  };
}
