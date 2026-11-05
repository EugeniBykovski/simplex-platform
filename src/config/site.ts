import { parseSiteEnv } from "./env";

const env = parseSiteEnv({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  SITE_INDEXABLE: process.env.SITE_INDEXABLE,
  VERCEL_ENV: process.env.VERCEL_ENV,
});

export const siteConfig = {
  name: "SimpleX",
  url: env.siteUrl,
  indexable: env.indexable,
} as const;
