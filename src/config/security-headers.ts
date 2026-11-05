/**
 * Static pages cannot carry per-request nonces, and Next.js inlines bootstrap scripts, so scripts
 * need 'unsafe-inline'. Everything else is limited to this origin. Any new external service must
 * be added here on purpose.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

export function buildSecurityHeaders({ indexable }: { indexable: boolean }) {
  return [
    { key: "Content-Security-Policy", value: contentSecurityPolicy },
    // No includeSubDomains or preload until the production domain and its subdomains are known.
    { key: "Strict-Transport-Security", value: "max-age=31536000" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    // Also covers non-HTML responses, which a robots meta tag cannot.
    ...(indexable ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
  ];
}
