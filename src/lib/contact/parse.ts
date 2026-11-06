import "server-only";
import { emptyContactValues, HONEYPOT_FIELD, SERVICE_IDS, type ContactValues } from "./fields";

const SINGLE_VALUE = ["name", "email", "company", "description", "budget", "timeline"] as const;
const KNOWN = new Set<string>([...SINGLE_VALUE, "services", "consent", HONEYPOT_FIELD]);

type Parsed = { ok: false } | { ok: true; values: ContactValues; honeypotFilled: boolean };

/**
 * Takes form data as hostile: only known fields, only strings, one value each, and only as many
 * services as exist. Next.js adds its own $ACTION fields for a form posted without JavaScript.
 */
export function parseContactForm(form: FormData): Parsed {
  const keys = [...new Set(form.keys())].filter((key) => !key.startsWith("$ACTION"));
  if (keys.some((key) => !KNOWN.has(key))) return { ok: false };

  const text = (key: string, fallback: string): string | null => {
    const all = form.getAll(key);
    if (all.length === 0) return fallback;
    const [only] = all;
    return all.length === 1 && typeof only === "string" ? only : null;
  };

  const services = form.getAll("services");
  if (
    services.length > SERVICE_IDS.length ||
    !services.every((value): value is string => typeof value === "string")
  ) {
    return { ok: false };
  }

  const values: ContactValues = { ...emptyContactValues, services };
  for (const key of SINGLE_VALUE) {
    const value = text(key, emptyContactValues[key]);
    if (value === null) return { ok: false };
    values[key] = value;
  }

  const consent = text("consent", "");
  const honeypot = text(HONEYPOT_FIELD, "");
  if (consent === null || honeypot === null || !["", "yes"].includes(consent)) return { ok: false };

  return {
    ok: true,
    values: { ...values, consent: consent === "yes" },
    honeypotFilled: honeypot !== "",
  };
}
