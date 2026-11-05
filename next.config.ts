import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    // Needed for server-rendered 404s: see src/app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default withNextIntl(nextConfig);
