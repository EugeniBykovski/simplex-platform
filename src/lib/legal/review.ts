import "server-only";

/**
 * Whether unapproved legal drafts render, for internal review. Read at build, as these pages are
 * static. parseSiteEnv fails a production or indexable build that sets it, and this refuses too.
 */
export function legalReviewEnabled(): boolean {
  const { LEGAL_REVIEW_MODE, VERCEL_ENV, SITE_INDEXABLE } = process.env;
  return (
    LEGAL_REVIEW_MODE?.trim() === "true" &&
    VERCEL_ENV !== "production" &&
    SITE_INDEXABLE?.trim() !== "true"
  );
}
