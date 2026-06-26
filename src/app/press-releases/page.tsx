import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Press Releases — News & Announcements | MurliLila",
  description:
    "The latest news and announcements from MurliLila Private Limited — new divisions, product launches, and milestones across petroleum, furniture, real estate, technology, education, pharma and agriculture.",
  alternates: { canonical: "https://murli-lila1.netlify.app/press-releases" },
  openGraph: {
    title: "Press Releases — News & Announcements | MurliLila",
    description:
      "The latest news and announcements from across MurliLila's businesses.",
    url: "https://murli-lila1.netlify.app/press-releases",
    type: "website",
  },
};

const RELEASES = [
  {
    tag: "Pharma",
    date: "Recent",
    title: "MurliLila Pharma introduces its first product: a daily multivitamin",
    body: "Our healthcare division has launched its first product — a thoughtfully balanced daily multivitamin designed to support everyday energy, immunity and overall wellbeing. It marks the careful first step of a quality-first healthcare division, with more products to follow as we expand the range deliberately.",
  },
  {
    tag: "Education",
    date: "Upcoming",
    title: "Kidzys early-learning centre preparing to open in Zundal, Ahmedabad",
    body: "MurliLila Education is bringing the Kidzys preschool experience to Zundal, Ahmedabad. Admissions enquiries are now open for our founding batch, offering families a safe, joyful and modern early-learning environment for young children.",
  },
  {
    tag: "Real Estate",
    date: "In development",
    title: "A single property app — buy, sell, rent and track — coming to Play Store",
    body: "Our real estate division is building one app for everything property: list a home in minutes, discover verified listings, connect directly with owners with no brokerage, and track your home's value. The Android app is in active development, with iOS to follow.",
  },
  {
    tag: "Agriculture",
    date: "In planning",
    title: "MurliLila announces plans for a sustainable agriculture division",
    body: "We are in the planning stages of a new agriculture division focused on sustainable cultivation, fair producer economics and transparent farm-to-market supply chains. We are building it deliberately, and we look forward to sharing more as the vision takes shape.",
  },
  {
    tag: "Technology",
    date: "Ongoing",
    title: "Technology division expands AI and automation capabilities",
    body: "MurliLila Technology continues to grow its expertise across custom software, AI and GenAI, intelligent automation and full-stack development — building digital systems for clients and strengthening the group's own operations.",
  },
];

export default function PressReleasesPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg="#0c1320" position="absolute" />

      <PageHero
        eyebrow="Investor · Press Releases"
        heading={<>News from across the group.</>}
        subheading="Announcements, launches and milestones as MurliLila continues to grow across its diversified businesses."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Investor" },
          { label: "Press Releases" },
        ]}
      />

      <section className="bg-white">
        <div className="frame page-body">
          <Reveal stagger={0.07}>
            <div className="pr-list">
              {RELEASES.map((r) => (
                <article key={r.title} data-reveal className="pr-card">
                  <div className="pr-meta">
                    <span className="pr-tag">{r.tag}</span>
                    <span className="pr-date">{r.date}</span>
                  </div>
                  <h2 className="pr-title">{r.title}</h2>
                  <p className="pr-body">{r.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <div className="page-note" style={{ maxWidth: 760 }}>
            For media enquiries, interviews or additional information, please{" "}
            <a href={`mailto:${CONTACT.email}?subject=Media%20Enquiry`}>contact our team</a>
            . We&apos;re always happy to share more about what we&apos;re building.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
