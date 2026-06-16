import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CareersHero from "@/components/careers/CareersHero";
import WhyJoin from "@/components/careers/WhyJoin";
import CareerValues from "@/components/careers/CareerValues";
import GrowthOpportunities from "@/components/careers/GrowthOpportunities";
import CareerEnquiry from "@/components/careers/CareerEnquiry";

export const metadata: Metadata = {
  title: "Careers — Build Your Future with MurliLeela",
  description:
    "Join MurliLeela Private Limited, a diversified Indian enterprise spanning petroleum, furniture export, real estate, technology, education, and community development. Explore careers and submit your interest.",
};

export default function CareersPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg="#ffffff" position="fixed" />
      <CareersHero />
      <WhyJoin />
      <CareerValues />
      <GrowthOpportunities />
      <CareerEnquiry />
      <div aria-hidden style={{ background: "#0a0a0c", paddingTop: 8, paddingBottom: 8 }}>
        <div className="frame">
          <div className="careers-footer-divider" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
