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
    // One permanent hop for the default locale's prefixed URLs. English lives at the bare path.
    redirects: async () => [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ],
    experimental: {
      // Needed for server-rendered 404s: see src/app/global-not-found.tsx.
      globalNotFound: true,
      // The contact form is the only Server Action. Its fields fit well within this.
      serverActions: { bodySizeLimit: "32kb" },
    },
    // The policy would block the dev server's eval-based tooling.
    ...(phase === PHASE_DEVELOPMENT_SERVER
      ? {}
      : {
          headers: async () => [
            { source: "/:path*", headers },
            // Social cards are built once per deployment. A day suits link-preview crawlers.
            {
              source: "/:prefix(ru)?/og/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=86400, stale-while-revalidate=604800",
                },
              ],
            },
            // Not fingerprinted, so a day fresh rather than immutable: a changed image still arrives.
            {
              source: "/images/design/:file*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=86400, stale-while-revalidate=604800",
                },
              ],
            },
          ],
        }),
  });
}
