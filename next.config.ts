import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import createNextIntlPlugin from "next-intl/plugin";
import { parseSiteEnv } from "./src/config/env";
import { buildSecurityHeaders } from "./src/config/security-headers";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default function config(phase: string): NextConfig {
  // Fails the build on bad values, because static pages bake them in.
  const { indexable } = parseSiteEnv(process.env);
  const headers = buildSecurityHeaders({ indexable });

  return withNextIntl({
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
      formats: ["image/avif", "image/webp"],
      deviceSizes: [390, 768, 1024, 1280, 1440, 1920, 2560],
      // Local images only. Add exact hosts here if a real need appears.
      remotePatterns: [],
    },
    experimental: {
      // Needed for server-rendered 404s: see src/app/global-not-found.tsx.
      globalNotFound: true,
      // The contact form is the only Server Action. Its fields fit well within this.
      serverActions: { bodySizeLimit: "32kb" },
    },
    // The policy would block the dev server's eval-based tooling.
    ...(phase === PHASE_DEVELOPMENT_SERVER
      ? {}
      : { headers: async () => [{ source: "/:path*", headers }] }),
  });
}
