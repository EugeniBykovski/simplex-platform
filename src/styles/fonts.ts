import { Geist, Geist_Mono } from "next/font/google";

// The design loads Geist 300..700 and Geist Mono 400/500. Cyrillic is required for /ru.
const geist = Geist({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: "variable",
  variable: "--font-geist",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const fontClassNames = `${geist.variable} ${geistMono.variable}`;
