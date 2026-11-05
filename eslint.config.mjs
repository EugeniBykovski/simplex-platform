import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  { ignores: [".next/**", "next-env.d.ts"] },
  {
    // Locale-aware navigation only: a bare next/link silently drops the /ru prefix.
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/i18n/navigation.ts"],
    rules: {
      // Static styling lives in Tailwind classes. See docs/design/component-implementation.md.
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='style']",
          message: "Use Tailwind classes in className instead of inline styles.",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            { name: "next/link", message: "Use Link from @/i18n/navigation." },
            {
              name: "next/navigation",
              importNames: ["redirect", "permanentRedirect", "usePathname", "useRouter"],
              message: "Use the locale-aware versions from @/i18n/navigation.",
            },
          ],
        },
      ],
    },
  },
];

export default config;
