import type { Metadata } from "next";
import DivisionPage, { type DivisionConfig } from "@/components/site/DivisionPage";

export const metadata: Metadata = {
  title: "Real Estate — Property & Land | MurliLeela",
  description:
    "Property sales, acquisitions, and rental management across Jodhpur, Rajasthan and growth corridors. Built on trust, valuation built on transparency.",
};

const config: DivisionConfig = {
  title: "Real Estate",
  subtitle:
    "Properties built on trust, valuation built on transparency, partnerships built to last — across Jodhpur, Rajasthan, and growing.",
  heroIcon: "realestate",
  accent: "#374e6b",

  mission: {
    eyebrowLabel: "Real Estate Division",
    headline: "A real estate practice grounded in transparency.",
    description:
      "We acquire, sell, and manage residential and commercial property across Jodhpur and Rajasthan — with a turnover-sharing model that aligns our incentives with the people we work for.",
    bullets: [
      "Residential and commercial property sales and acquisitions",
      "Verified titles, clearances, and due diligence before every deal",
      "Turnover-sharing rental management for property owners",
      "Strategic land sourcing for development partners",
      "Long-term joint ventures and co-investment structures",
    ],
  },

  sectionsEyebrow: "What we offer",
  sectionsHeadline: "Five ways we work with property.",
  sections: [
    {
      icon: "building",
      title: "Property Sales",
      body: "Residential and commercial property acquisitions in Jodhpur and across Rajasthan, with thorough due diligence on every deal.",
    },
    {
      icon: "compass",
      title: "Land Acquisition",
      body: "Strategic land sourcing for development projects with verified titles, clearances, and zoning support end-to-end.",
    },
    {
      icon: "handshake",
      title: "Rental Management",
      body: "Turnover-sharing model for property owners — we handle tenants, maintenance, and reporting so owners stay hands-off.",
    },
    {
      icon: "realestate",
      title: "Development Pipeline",
      body: "Carefully planned projects in growth corridors with a long-term hold thesis and disciplined capital deployment.",
    },
    {
      icon: "chart",
      title: "Investor Partnerships",
      body: "Joint ventures and co-investment structures for institutional partners and family offices seeking Rajasthan exposure.",
    },
  ],

  cta: {
    headline: "Buying, selling, or co-investing?",
    description:
      "Reach out to discuss specific properties, development opportunities, or our rental management programme — we respond within one business day.",
    primaryLabel: "Contact real estate team",
    primaryHref: "/#contact",
    secondaryLabel: "Explore divisions",
    secondaryHref: "/#business",
  },
};

export default function RealEstatePage() {
  return <DivisionPage config={config} />;
}
