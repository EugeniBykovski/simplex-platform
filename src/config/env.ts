/**
 * Environment rules. Kept free of path aliases and server-only imports so next.config.ts can use
 * parseSiteEnv. Error messages name variables, and never print secret values.
 */
export type SiteEnv = { siteUrl: string; indexable: boolean };
export type EmailEnv = { apiKey: string; fromEmail: string; toEmail: string };
type RawEnv = Record<string, string | undefined>;

const LOCAL_FALLBACK = "http://localhost:3000";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);
const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const invalid = (errors: string[]) => new Error(`Invalid environment:\n- ${errors.join("\n- ")}`);

/**
 * A site URL is required only for a build that may be indexed. Every other build is noindex, so a
 * local fallback in its canonical tag cannot reach search results. Vercel previews can never be
 * indexable, even if SITE_INDEXABLE=true is set for all environments by mistake.
 */
export function parseSiteEnv(raw: RawEnv): SiteEnv {
  const errors: string[] = [];
  const urlValue = raw.NEXT_PUBLIC_SITE_URL?.trim() || undefined;
  const indexableValue = raw.SITE_INDEXABLE?.trim() || "false";

  let url: URL | undefined;
  if (urlValue) {
    try {
      url = new URL(urlValue);
      if (!["http:", "https:"].includes(url.protocol)) {
        errors.push("NEXT_PUBLIC_SITE_URL must use http or https.");
      }
      if (url.pathname !== "/" || url.search || url.hash) {
        errors.push("NEXT_PUBLIC_SITE_URL must be an origin with no path.");
      }
    } catch {
      errors.push(`NEXT_PUBLIC_SITE_URL is not a valid URL: "${urlValue}".`);
    }
  }

  if (!["true", "false"].includes(indexableValue)) {
    errors.push(`SITE_INDEXABLE must be "true" or "false", not "${indexableValue}".`);
  }

  const onVercelNonProduction = Boolean(raw.VERCEL_ENV) && raw.VERCEL_ENV !== "production";
  const indexable = indexableValue === "true" && !onVercelNonProduction;

  if (indexable && (!url || url.protocol !== "https:" || LOCAL_HOSTS.has(url.hostname))) {
    errors.push("SITE_INDEXABLE=true requires a public https NEXT_PUBLIC_SITE_URL.");
  }

  // Unapproved legal drafts must never reach a public build. The pages refuse them too.
  if (raw.LEGAL_REVIEW_MODE?.trim() === "true" && (indexable || raw.VERCEL_ENV === "production")) {
    errors.push("LEGAL_REVIEW_MODE=true is not allowed in a production or indexable build.");
  }

  // Simulated delivery must never reach a public build. Runtime selection also refuses it.
  if (raw.EMAIL_PROVIDER?.trim() === "mock" && (indexable || raw.VERCEL_ENV === "production")) {
    errors.push("EMAIL_PROVIDER=mock is not allowed in a production or indexable build.");
  }

  if (errors.length > 0) throw invalid(errors);
  return { siteUrl: url ? url.origin : LOCAL_FALLBACK, indexable };
}

/** Validated when email is first used, so static builds never need these values. */
export function parseEmailEnv(raw: RawEnv): EmailEnv {
  const apiKey = raw.RESEND_API_KEY?.trim();
  const fromEmail = raw.CONTACT_FROM_EMAIL?.trim();
  const toEmail = raw.CONTACT_TO_EMAIL?.trim();
  const errors: string[] = [];

  if (!apiKey) errors.push("RESEND_API_KEY is required to send email.");
  if (!fromEmail || !EMAIL_PATTERN.test(fromEmail)) {
    errors.push("CONTACT_FROM_EMAIL must be an email address.");
  }
  if (!toEmail || !EMAIL_PATTERN.test(toEmail)) {
    errors.push("CONTACT_TO_EMAIL must be an email address.");
  }

  if (errors.length > 0 || !apiKey || !fromEmail || !toEmail) throw invalid(errors);
  return { apiKey, fromEmail, toEmail };
}
