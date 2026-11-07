/* eslint-disable no-restricted-syntax -- This renders a PNG through next/og, never browser DOM, and
   its layout engine only reads style objects. Site styling stays in Tailwind classes. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hasLocale } from "next-intl";
import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";
import { getOgCard, ogCardKeys } from "@/lib/seo/og-cards";

/** Generated at build for known pages only. Anything else is a 404, not an open image service. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ogCardKeys.map((key) => ({ locale, path: key.split("/") })),
  );
}

const font = (name: string) => readFile(join(process.cwd(), "src/assets/og", name));

type Context = { params: Promise<{ locale: string; path: string[] }> };

export async function GET(_request: Request, { params }: Context) {
  const { locale, path } = await params;
  const key = path.join("/");
  if (!hasLocale(routing.locales, locale) || !ogCardKeys.includes(key)) {
    return new Response(null, { status: 404 });
  }

  const { eyebrow, title } = getOgCard(locale, key);
  const fontSize = title.length > 44 ? 60 : title.length > 26 ? 72 : 88;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#FFFFFF",
        fontFamily: "Geist",
        backgroundColor: "#070B2B",
        backgroundImage:
          "radial-gradient(70% 90% at 92% 100%, rgba(47,87,245,.75), rgba(7,11,43,0) 70%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", fontSize: 44, letterSpacing: "-.03em" }}>
        Simple
        <svg width="44" height="50" viewBox="0 0 88 100" style={{ marginLeft: 6 }}>
          <path fill="#FFFFFF" d="M0 0H15L88 100H73Z" />
          <path fill="#9DB4CC" d="M73 0H88L54.5 45.9 47 35.6Z" />
          <path fill="#9DB4CC" d="M33.5 54.1 41 64.4 15 100H0Z" />
        </svg>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 28, color: "#9DB4CC", marginBottom: 24 }}>
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize,
            lineHeight: 1.05,
            letterSpacing: "-.035em",
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Geist", data: await font("geist-600-latin.woff"), weight: 600, style: "normal" },
        {
          name: "Geist",
          data: await font("geist-600-cyrillic.woff"),
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
