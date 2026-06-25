import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Annual Reports — Growth & Performance | MurliLeela",
  description:
    "An overview of MurliLeela Private Limited's growth, performance and direction across its diversified businesses — petroleum & bitumen, furniture export, real estate, technology, education, pharma and agriculture.",
  alternates: { canonical: "https://murli-lila1.netlify.app/annual-reports" },
  openGraph: {
    title: "Annual Reports — Growth & Performance | MurliLeela",
    description:
      "An overview of MurliLeela's growth and direction across its diversified businesses.",
    url: "https://murli-lila1.netlify.app/annual-reports",
    type: "website",
  },
};

const HIGHLIGHTS = [
  { k: "8", v: "Active business divisions" },
  { k: "4", v: "International export markets" },
  { k: "10+", v: "Years of operating track record" },
  { k: "2", v: "New divisions in development" },
];

export default function AnnualReportsPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg="#0c1320" position="absolute" />

      <PageHero
        eyebrow="Investor · Annual Reports"
        heading={<>Growth, measured and deliberate.</>}
        subheading="A clear view of how MurliLeela is performing, where it is investing, and the direction we are building toward across every division."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Investor" },
          { label: "Annual Reports" },
        ]}
      />

      {/* Highlights */}
      <section className="bg-white">
        <div className="frame" style={{ paddingTop: 56, paddingBottom: 8 }}>
          <div className="ar-highlights">
            {HIGHLIGHTS.map((h) => (
              <div key={h.v} className="ar-highlight">
                <p className="ar-highlight-k">{h.k}</p>
                <p className="ar-highlight-v">{h.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="frame page-body">
          <Reveal>
            <div data-reveal className="page-prose">
              <h2>A year of steady, intentional growth</h2>
              <p>
                MurliLeela Private Limited continues to grow the way it always has —
                steadily, deliberately, and with a long-term view. Rather than chasing
                rapid expansion, we focus on entering each industry with discipline,
                building strong foundations, and earning trust before we scale. That
                philosophy has allowed us to grow into a diversified enterprise
                spanning eight active divisions while keeping quality and reliability
                at the centre of everything we do.
              </p>
              <p>
                Across the year, our established businesses — petroleum &amp; bitumen
                trading, premium furniture export, and real estate — continued to
                perform consistently, supported by repeat customers, dependable
                supply, and disciplined operations. At the same time, our newer
                divisions in technology, education, pharma and agriculture moved from
                vision toward execution, positioning the group for its next phase of
                growth.
              </p>

              <h2>How our businesses are performing</h2>
              <h3>Established divisions</h3>
              <p>
                Our <strong>petroleum &amp; bitumen</strong> business remains a
                dependable backbone of the group, trading and supplying high-grade
                bitumen, damar and petroleum products that power infrastructure across
                India. Our <strong>furniture export</strong> division continues to
                bring handcrafted Indian furniture to customers in Canada, Europe, the
                US and the domestic market, while <strong>real estate</strong> grows
                through a transparent, turnover-sharing model across Rajasthan and
                Gujarat.
              </p>
              <h3>Emerging divisions</h3>
              <p>
                Our <strong>technology</strong> arm is building enterprise software,
                AI and automation capabilities that increasingly support both clients
                and our own group operations. In <strong>education</strong>, our
                Kidzys early-learning franchise is preparing to open in Zundal,
                Ahmedabad. Our <strong>pharma</strong> division has introduced its
                first product — a daily multivitamin — and our{" "}
                <strong>agriculture</strong> initiative is in active planning, with a
                focus on sustainable, farm-to-market supply chains.
              </p>

              <h2>Our financial philosophy</h2>
              <p>
                We believe sustainable businesses are built on prudence, not
                speculation. We reinvest carefully into the divisions with the
                clearest long-term potential, maintain healthy reserves, and avoid
                over-leveraging. This conservative-but-ambitious approach is precisely
                what allows us to keep entering new industries with confidence while
                protecting the businesses we have already built.
              </p>

              <h2>Looking ahead</h2>
              <p>
                The year ahead is about turning momentum into footprint — opening our
                first Kidzys centre, growing our technology and pharma offerings, and
                advancing our agriculture plans from blueprint to reality. As always,
                we will grow at the pace that lets us do things <em>well</em>, not
                merely fast. We are grateful to our customers, partners and team for
                being part of this journey.
              </p>

              <div className="page-note">
                Detailed, audited financial statements are prepared in line with
                applicable regulations and are available to verified stakeholders and
                partners on request. For investor relations enquiries, please{" "}
                <a href={`mailto:${CONTACT.email}?subject=Investor%20Relations%20Enquiry`}>
                  contact our team
                </a>
                .
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
