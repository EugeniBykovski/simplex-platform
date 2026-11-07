import { Geist, Geist_Mono } from "next/font/google";

// The design loads Geist 300..700 and Geist Mono 400/500. `subsets` only chooses what is preloaded:
// every face stays available, including Cyrillic, and loads when text needs it. Preloading all of
// them competed with the render-blocking stylesheet. See docs/performance/font-audit.md.
const geist = Geist({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-geist",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const fontClassNames = `${geist.variable} ${geistMono.variable}`;
