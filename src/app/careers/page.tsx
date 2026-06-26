import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CareersHero from "@/components/careers/CareersHero";
import WhyJoin from "@/components/careers/WhyJoin";
import CareerValues from "@/components/careers/CareerValues";
import GrowthOpportunities from "@/components/careers/GrowthOpportunities";
import CareerEnquiry from "@/components/careers/CareerEnquiry";

export const metadata: Metadata = {
  title: "Careers — Build Your Future with MurliLila",
  description:
    "Join MurliLila Private Limited, a diversified Indian enterprise spanning petroleum, furniture export, real estate, technology, education, and community development. Explore careers and submit your interest.",
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
      <Footer />
    </main>
  );
}
