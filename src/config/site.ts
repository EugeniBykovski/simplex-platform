export const siteConfig = {
  name: "SimpleX",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  // Previews and local builds stay out of search indexes unless explicitly enabled.
  indexable: process.env.SITE_INDEXABLE === "true",
} as const;
