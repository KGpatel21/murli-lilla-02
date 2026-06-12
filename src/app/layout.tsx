import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MurliLeela Private Limited — Shaping Diversified Industries",
  description:
    "MurliLeela Private Limited is a forward-thinking Indian conglomerate headquartered in Rajasthan, with operations spanning petroleum trading, premium furniture export, real estate, cutting-edge IT solutions, child education, and social welfare.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoCondensed.variable} antialiased`}
    >
      <body className="min-h-screen bg-paper text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
