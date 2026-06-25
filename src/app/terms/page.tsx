import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms of Use | MurliLeela",
  description:
    "The terms of use governing access to and use of the MurliLeela Private Limited website.",
  alternates: { canonical: "https://murli-lila1.netlify.app/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg="#0c1320" position="absolute" />

      <PageHero
        eyebrow="Legal"
        heading={<>Terms of Use</>}
        subheading="Please read these terms carefully. By using this website, you agree to them."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />

      <section className="bg-white">
        <div className="frame page-body">
          <Reveal>
            <div data-reveal className="page-prose">
              <p>
                Welcome to the website of <strong>MurliLeela Private Limited</strong>{" "}
                (&ldquo;MurliLeela&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;). These Terms of Use govern your access to and use of
                this website. By accessing or using the site, you agree to be bound by
                these terms. If you do not agree, please do not use the site.
              </p>

              <h2>1. Use of the website</h2>
              <p>
                This website is provided for general information about MurliLeela and
                its businesses. You may use it for lawful, personal and informational
                purposes only. You agree not to misuse the site, attempt to gain
                unauthorised access, disrupt its operation, or use it in any way that
                could harm MurliLeela or any other party.
              </p>

              <h2>2. Information and content</h2>
              <p>
                We aim to keep the information on this website accurate and up to date,
                but we make no warranties or guarantees about its completeness,
                accuracy or reliability. Content — including descriptions of our
                divisions, products and plans — may describe initiatives that are in
                development or planned for the future, and may change without notice.
                Nothing on this site constitutes a binding offer, professional advice,
                or a commitment unless expressly stated in a separate written
                agreement.
              </p>

              <h2>3. Intellectual property</h2>
              <p>
                All content on this website — including text, graphics, logos, images,
                and design — is the property of MurliLeela or its licensors and is
                protected by applicable intellectual property laws. You may not copy,
                reproduce, distribute, or create derivative works from any part of this
                site without our prior written permission.
              </p>

              <h2>4. Third-party links</h2>
              <p>
                This website may contain links to third-party websites or services
                (for example, WhatsApp, LinkedIn, or app stores). These are provided
                for convenience only. We do not control and are not responsible for the
                content, policies or practices of any third-party site.
              </p>

              <h2>5. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, MurliLeela shall not be liable
                for any direct, indirect, incidental or consequential damages arising
                from your use of, or inability to use, this website or any information
                contained on it.
              </p>

              <h2>6. Changes to these terms</h2>
              <p>
                We may update these Terms of Use from time to time. Any changes will be
                posted on this page, and your continued use of the site after such
                changes constitutes your acceptance of the revised terms.
              </p>

              <h2>7. Contact us</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us
                at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
              </p>

              <div className="page-note">
                These terms are provided for general informational purposes and do not
                constitute legal advice. MurliLeela Private Limited, {CONTACT.addressLine1},{" "}
                {CONTACT.addressCity}.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
