import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Verticals from "@/components/sections/Verticals";
import WhyMurliLila from "@/components/sections/WhyMurliLila";
import Careers from "@/components/sections/Careers";
import { CONTACT } from "@/lib/contact";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MurliLila Private Limited",
  url: "https://www.murlila.com/",
  description:
    "A diversified Indian enterprise spanning bitumen & petroleum trading, furniture export, real estate, technology, education, pharma, agriculture and community trust initiatives.",
  email: CONTACT.email,
  telephone: CONTACT.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${CONTACT.addressLine1}, ${CONTACT.addressLine2}`,
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382470",
    addressCountry: "IN",
  },
  sameAs: [CONTACT.linkedinCompany],
  knowsAbout: [
    "Bitumen and petroleum trading",
    "Furniture export",
    "Real estate development",
    "Enterprise technology",
    "Early-childhood education",
    "Pharmaceutical distribution",
    "Agriculture",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />
      <Header initialBg="#ffffff" position="absolute" />
      <main id="main-content">
        <Hero />
        <About />
        <Verticals />
        <WhyMurliLila />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
