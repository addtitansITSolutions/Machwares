
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: (
        <p>
          These Terms and Conditions govern your access to and use of
          machwares.com, operated by Machwares. By using the Website, you agree
          to these Terms. If you do not agree, please do not use the Website.
        </p>
      ),
    },
    {
      title: "Eligibility",
      content: (
        <p>
          The Website is intended for business use by individuals who are at
          least 18 years old. By using the Website, you confirm that you meet
          this requirement.
        </p>
      ),
    },
    {
      title: "Our Services",
      content: (
        <p>
          Machwares provides performance marketing, affiliate marketing,
          digital marketing, mobile performance marketing, and influencer
          marketing services. Descriptions on the Website are for general
          information only. Services are provided under a separate written
          agreement, proposal, or insertion order that you and Machwares have
          signed or accepted (a “Service Agreement”). If these Terms conflict
          with a Service Agreement, the Service Agreement controls for the
          services it covers.
        </p>
      ),
    },
    {
      title: "Acceptable Use",
      content: (
        <>
          <p>You agree not to:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Use the Website unlawfully or in violation of these Terms.</li>
            <li>
              Attempt to gain unauthorized access to the Website, its servers,
              or related systems.
            </li>
            <li>
              Introduce malware or interfere with the operation of the Website.
            </li>
            <li>Use automated tools to scrape or harvest content or data.</li>
            <li>Submit false, misleading, or another person’s information.</li>
            <li>Use the Website to send unsolicited communications.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Intellectual Property",
      content: (
        <p>
          Website content is owned by or licensed to Machwares and is protected
          by law. See our{" "}
          <Link
            to="/copyright-and-dmca"
            className="font-semibold text-[var(--primary)] transition-opacity hover:opacity-70"
          >
            Copyright & DMCA Policy
          </Link>{" "}
          for permitted use and for how to report alleged infringement.
        </p>
      ),
    },
    {
      title: "No Guarantee of Results",
      content: (
        <p>
          Marketing outcomes depend on factors outside our control, including
          advertising platform policies and pricing, app store requirements,
          competition, seasonality, consumer behavior, and the quality of your
          product, offer, website, or app. Descriptions and examples on this
          Website do not guarantee any specific result, such as a level of
          installs, leads, sales, or return on ad spend.
        </p>
      ),
    },
    {
      title: "Third-Party Platforms and Links",
      content: (
        <p>
          Our work involves third-party platforms, such as advertising
          networks, social media platforms, app stores, analytics and
          attribution providers, and affiliate networks. The Website may also
          link to third-party sites. These parties operate under their own
          terms and policies, and we do not control and are not responsible
          for them.
        </p>
      ),
    },
    {
      title: "Advertising and Compliance",
      content: (
        <p>
          Clients are responsible for the accuracy of the claims they make
          about their products and services and for having the rights to the
          materials they provide. Campaigns, affiliate programs, and influencer
          partnerships must comply with applicable law, including Federal
          Trade Commission rules on advertising and endorsements, and with the
          policies of the platforms involved. We may decline or pause any
          campaign that we reasonably believe violates the law or platform
          policy.
        </p>
      ),
    },
    {
      title: "Website Submissions",
      content: (
        <p>
          Information you send through the contact form or by email is handled
          under our Privacy Policy. Please do not send confidential, sensitive,
          or proprietary information through the Website before a Service
          Agreement is in place.
        </p>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <p>
          To the fullest extent permitted by law, Machwares and its owners,
          officers, employees, and agents will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or for lost
          profits, revenue, or data, arising from your use of the Website.
          Liability for services is governed by the applicable Service
          Agreement. Some jurisdictions do not allow certain limitations, so
          some of these limits may not apply to you.
        </p>
      ),
    },
    {
      title: "Indemnification",
      content: (
        <p>
          You agree to indemnify and hold harmless Machwares from claims,
          losses, and expenses, including reasonable attorneys’ fees, arising
          from your violation of these Terms or your misuse of the Website.
        </p>
      ),
    },
    {
      title: "Suspension and Termination",
      content: (
        <p>
          We may suspend or end your access to the Website at any time, without
          notice, if we believe you have violated these Terms.
        </p>
      ),
    },
    // {
    //   title: "Governing Law and Disputes",
    //   content: (
    //     <p>
    //       These Terms are governed by the laws of the State of US, without
    //       regard to its conflict-of-law rules. Any dispute arising from these
    //       Terms or the Website will be brought exclusively in the state or
    //       federal courts located in USA, and you consent to their
    //       jurisdiction.
    //     </p>
    //   ),
    // },
    {
      title: "Changes to These Terms",
      content: (
        <p>
          We may update these Terms from time to time. The effective date above
          shows the latest version. Your continued use of the Website after
          changes are posted means you accept them.
        </p>
      ),
    },
    {
      title: "General",
      content: (
        <p>
          If any provision of these Terms is found unenforceable, the remaining
          provisions stay in effect. These Terms, together with our Privacy
          Policy and Copyright & DMCA Policy, are the entire agreement between
          you and Machwares regarding the Website. Our failure to enforce a
          provision is not a waiver of it.
        </p>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          <p>Questions about these Terms? Contact us:</p>
          <div className="mt-4 space-y-2 rounded-2xl bg-black/[0.03] p-5">
            <p>
              <strong className="text-black">Email:</strong>{" "}
              <a
                href="mailto:admin@machwares.com"
                className="font-semibold text-[var(--primary)] transition-opacity hover:opacity-70"
              >
                admin@machwares.com
              </a>
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Read the Machwares Terms and Conditions governing access to and use of our website and information about our marketing services."
        path="/terms-and-conditions"
      />

      <Navbar forceScrolled />

      <main className="bg-white text-[var(--dark)]">
        {/* Hero */}
        <section className="bg-[#100C1C] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-6 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
              Legal
            </p>

            <h1 className="max-w-[1100px] font-[var(--font-display)] text-[14vw] font-semibold leading-[0.85] tracking-[-0.07em] text-white sm:text-[11vw] lg:text-[8vw] xl:text-[110px]">
              Terms &
              <br />
              <span className="text-[var(--primary)]">Conditions</span>
            </h1>

            <p className="mt-10 max-w-[650px] font-[var(--font-body)] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Please review these Terms and Conditions to understand the rules
              governing your access to and use of the Machwares website.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                Terms & Conditions
              </p>

              <div className="mt-5 h-px w-full bg-black/10" />

              <p className="mt-5 font-[var(--font-body)] text-sm leading-6 text-black/50">
                Information about website usage, service terms, responsibilities,
                and legal conditions.
              </p>

              <Link
                to="/copyright-and-dmca"
                className="group mt-7 inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)]"
              >
                Copyright & DMCA

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </aside>

            {/* Sections */}
            <div className="max-w-[800px]">
              <div className="mb-12 border-b border-black/10 pb-8">
                <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                  Effective Date: November 02, 2026
                </p>
              </div>

              <div className="space-y-0">
                {sections.map((section, index) => (
                  <article
                    key={section.title}
                    className="border-b border-black/10 py-9 first:pt-0"
                  >
                    <div className="flex gap-5">
                      <span className="hidden shrink-0 pt-1 font-[var(--font-body)] text-xs font-bold tracking-[0.12em] text-[var(--primary)] sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h2 className="font-[var(--font-display)] text-xl font-semibold tracking-[-0.02em] text-black sm:text-2xl">
                          {section.title}
                        </h2>

                        <div className="mt-5 font-[var(--font-body)] text-base leading-7 text-[var(--text)]">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-16 overflow-hidden rounded-3xl bg-[#100C1C] p-7 sm:p-10">
                <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[var(--secondary)]">
                  Questions About Our Terms?
                </p>

                <h2 className="mt-4 max-w-[600px] font-[var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Need clarification?
                </h2>

                <p className="mt-4 max-w-[550px] font-[var(--font-body)] text-sm leading-6 text-white/60">
                  If you have questions about these Terms and Conditions,
                  contact our team for further information.
                </p>

                <a
                  href="mailto:admin@machwares.com"
                  className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
                >
                  Contact our team

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-colors group-hover:bg-white/10">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsAndConditions;