import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/site/ScrollToTop";

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
  metadataBase: new URL("https://murli-lila1.netlify.app"),
  title: {
    default: "MurliLeela Private Limited — Diversified Indian Enterprise",
    template: "%s | MurliLeela",
  },
  description:
    "MurliLeela Private Limited is a diversified Indian enterprise based in Ahmedabad & Jodhpur, spanning bitumen & petroleum trading, premium furniture export, real estate, enterprise technology, early-childhood education, pharma, agriculture, and community trust initiatives.",
  keywords: [
    "MurliLeela",
    "MurliLeela Private Limited",
    "diversified Indian enterprise",
    "Ahmedabad business group",
    "bitumen supplier India",
    "furniture export India",
    "real estate Rajasthan",
    "enterprise technology India",
  ],
  authors: [{ name: "MurliLeela Private Limited" }],
  alternates: { canonical: "https://murli-lila1.netlify.app/" },
  openGraph: {
    type: "website",
    siteName: "MurliLeela Private Limited",
    title: "MurliLeela Private Limited — Diversified Indian Enterprise",
    description:
      "A diversified Indian enterprise spanning bitumen & petroleum, furniture export, real estate, technology, education, pharma, agriculture and community trust initiatives.",
    url: "https://murli-lila1.netlify.app/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MurliLeela Private Limited — Diversified Indian Enterprise",
    description:
      "A diversified Indian enterprise spanning bitumen & petroleum, furniture export, real estate, technology, education, pharma, agriculture and community trust.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoCondensed.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400..700;1,400..700&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-paper text-ink">
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollToTop />
      </body>
    </html>
  );
}
