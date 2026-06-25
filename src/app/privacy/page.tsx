import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/anim/Reveal";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy | MurliLeela",
  description:
    "How MurliLeela Private Limited collects, uses and protects the personal information you share through our website.",
  alternates: { canonical: "https://murli-lila1.netlify.app/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="relative bg-white">
      <Header initialBg="#0c1320" position="absolute" />

      <PageHero
        eyebrow="Legal"
        heading={<>Privacy Policy</>}
        subheading="Your privacy matters to us. This policy explains what we collect and how we use it."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="bg-white">
        <div className="frame page-body">
          <Reveal>
            <div data-reveal className="page-prose">
              <p>
                <strong>MurliLeela Private Limited</strong> (&ldquo;MurliLeela&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your
                privacy and is committed to protecting the personal information you
                share with us. This Privacy Policy explains what we collect, how we use
                it, and the choices you have.
              </p>

              <h2>1. Information we collect</h2>
              <p>
                We only collect information you choose to provide — for example, when
                you submit an enquiry or career-interest form, or contact us by email
                or WhatsApp. This may include your name, email address, phone number,
                area of interest, and any message you send us. We do not require you to
                create an account to browse this website.
              </p>

              <h2>2. How we use your information</h2>
              <p>
                We use the information you provide solely to respond to your enquiry,
                process your interest, and communicate with you about the relevant
                product, role or partnership. We may also use it to improve our
                services and respond to your future requests. We do{" "}
                <strong>not</strong> sell, rent or trade your personal information to
                third parties.
              </p>

              <h2>3. Cookies and analytics</h2>
              <p>
                This website may use basic cookies or analytics tools to understand how
                visitors use the site and to improve performance and experience. You
                can control or disable cookies through your browser settings. Disabling
                cookies will not prevent you from using the core parts of the site.
              </p>

              <h2>4. How we protect your information</h2>
              <p>
                We take reasonable technical and organisational measures to protect the
                information you share with us against loss, misuse and unauthorised
                access. However, no method of transmission over the internet is
                completely secure, and we cannot guarantee absolute security.
              </p>

              <h2>5. Third-party services</h2>
              <p>
                When you contact us through third-party platforms such as WhatsApp,
                LinkedIn or email, those services handle your information according to
                their own privacy policies. We encourage you to review them. We are not
                responsible for the privacy practices of third-party platforms.
              </p>

              <h2>6. Your choices</h2>
              <p>
                You may request access to, correction of, or deletion of the personal
                information you have shared with us at any time by contacting us. We
                will respond to reasonable requests in line with applicable law.
              </p>

              <h2>7. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will
                be posted on this page with an updated effective date.
              </p>

              <h2>8. Contact us</h2>
              <p>
                If you have any questions about this Privacy Policy or how your
                information is handled, please contact us at{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call{" "}
                <a href={`tel:${CONTACT.phoneDigits}`}>{CONTACT.phoneDisplay}</a>.
              </p>

              <div className="page-note">
                This policy is provided for general informational purposes and does not
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
