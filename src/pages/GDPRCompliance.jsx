
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const GDPRCompliance = () => {
  const sections = [
    {
      title: "Our Commitment",
      content: (
        <p>
          Machwares serves brands that market to audiences in the United
          States. When we offer services to, or monitor the behavior of,
          individuals located in the European Union (EU) or European Economic
          Area (EEA), the EU General Data Protection Regulation (GDPR) applies,
          and we handle their personal data in line with it. This page explains
          how.
        </p>
      ),
    },
    {
      title: "When the GDPR Applies",
      content: (
        <p>
          The GDPR applies to organizations established outside the EU that
          offer goods or services, paid or free, to individuals in the EU, or
          that monitor the behavior of individuals in the EU. It protects
          individuals and does not apply to data about companies or other legal
          entities. Our services are directed to the U.S. market. This page
          applies wherever the GDPR covers our processing, for example when we
          process the personal data of an individual located in the EU or EEA.
        </p>
      ),
    },
    {
      title: "What Counts as Personal Data",
      content: (
        <p>
          Personal data is any information relating to an identified or
          identifiable individual. Under the GDPR, this includes names, email
          addresses, IP addresses, cookie IDs, location data, and mobile
          advertising identifiers. Data that has been pseudonymized but can
          still be used to re-identify a person remains personal data. Data
          that is irreversibly anonymized is no longer personal data.
        </p>
      ),
    },
    {
      title: "Our Role",
      content: (
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong className="text-black">Controller:</strong> For personal
            data collected through our Website, contact inquiries, creator and
            publisher relationships, and our own marketing, Machwares decides
            why and how the data is processed, so we act as the controller.
          </li>
          <li>
            <strong className="text-black">Processor:</strong> For personal
            data we handle in client campaigns, we act as a processor. We
            process that data only on behalf of the client, who is the
            controller, and under a written agreement. We do not engage another
            processor without the client’s prior written authorization, and
            any such processor must meet the same data protection obligations.
          </li>
        </ul>
      ),
    },
    {
      title: "Principles We Follow",
      content: (
        <>
          <p>We process personal data in accordance with Article 5 of the GDPR:</p>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            <li>
              <strong className="text-black">
                Lawfulness, fairness, and transparency:
              </strong>{" "}
              We process data lawfully and explain how we use it.
            </li>
            <li>
              <strong className="text-black">Purpose limitation:</strong> We
              collect data for specified purposes and do not use it in
              incompatible ways.
            </li>
            <li>
              <strong className="text-black">Data minimization:</strong> We
              collect only what is necessary.
            </li>
            <li>
              <strong className="text-black">Accuracy:</strong> We keep data
              accurate and correct it when needed.
            </li>
            <li>
              <strong className="text-black">Storage limitation:</strong> We
              keep data only as long as necessary.
            </li>
            <li>
              <strong className="text-black">
                Integrity and confidentiality:
              </strong>{" "}
              We protect data with appropriate security measures.
            </li>
            <li>
              <strong className="text-black">Accountability:</strong> We can
              demonstrate our compliance with these principles.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Legal Bases for Processing",
      content: (
        <>
          <p>
            We process personal data of individuals in the EU and EEA only
            where a legal basis under Article 6 of the GDPR applies:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            <li>
              <strong className="text-black">Consent:</strong> For example, for
              non-essential cookies and marketing emails. You may withdraw
              consent at any time.
            </li>
            <li>
              <strong className="text-black">Contract:</strong> When we respond
              to your request about our services or take steps before entering
              into an agreement.
            </li>
            <li>
              <strong className="text-black">Legitimate interests:</strong>{" "}
              Such as operating and securing the Website and communicating
              with business contacts, balanced against your rights. You may
              object to this processing.
            </li>
            <li>
              <strong className="text-black">Legal obligation:</strong> When
              the law requires us to process data.
            </li>
          </ul>
          <p className="mt-4">
            Direct marketing emails and non-essential cookies are also subject
            to the ePrivacy Directive, and we comply with its requirements.
          </p>
        </>
      ),
    },
    {
      title: "Your Rights",
      content: (
        <>
          <p>If the GDPR applies to you, you have the right to:</p>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            <li>
              <strong className="text-black">Access</strong> your personal
              data, including confirmation of whether we process it, a copy,
              and information about the purposes, categories, and recipients.
            </li>
            <li>
              <strong className="text-black">Rectify</strong> inaccurate or
              incomplete personal data.
            </li>
            <li>
              <strong className="text-black">Erase</strong> your personal data
              without undue delay in certain cases, such as when it is no
              longer needed for its original purpose or you withdraw consent.
              Exceptions apply, for example where we must keep data to comply
              with the law or to establish or defend legal claims.
            </li>
            <li>
              <strong className="text-black">Restrict</strong> processing in
              certain cases, such as while we verify the accuracy of data you
              have contested.
            </li>
            <li>
              <strong className="text-black">Port</strong> your data, receiving
              it in a structured, commonly used format or having it transmitted
              to another organization.
            </li>
            <li>
              <strong className="text-black">Object</strong> to processing
              based on legitimate interests and to direct marketing at any
              time.
            </li>
            <li>
              <strong className="text-black">Withdraw consent</strong> at any
              time, without affecting the lawfulness of processing before
              withdrawal.
            </li>
            <li>
              Exercise your rights relating to automated decision-making and
              profiling, where applicable.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How to Exercise Your Rights",
      content: (
        <p>
          Email{" "}
          <a
            href="mailto:admin@machwares.com"
            className="font-semibold text-[var(--primary)] transition-opacity hover:opacity-70"
          >
            admin@machwares.com
          </a>
          . We respond without undue delay and, in principle, within one month
          of receiving your request. Requests are free of charge. We may ask
          for additional information to confirm your identity. If a request is
          manifestly unfounded or excessive, particularly because it is
          repetitive, we may charge a reasonable fee or decline to act, and we
          will explain why. If we decline a request, we will tell you the
          reasons, your right to lodge a complaint with a data protection
          authority, and your right to seek a judicial remedy. If your request
          concerns data we process for a client campaign, we will direct it to
          that client.
        </p>
      ),
    },
    {
      title: "Security and Breach Notification",
      content: (
        <p>
          We apply technical and organizational measures appropriate to the
          risk, such as access controls and encryption where appropriate. If a
          personal data breach is likely to result in a risk to individuals’
          rights and freedoms, the controller must notify the competent
          supervisory authority without undue delay and, where feasible,
          within 72 hours of becoming aware of it. Where the breach is likely
          to result in a high risk, affected individuals are also notified
          without undue delay. When we act as a processor, we notify the client
          without undue delay after becoming aware of a breach.
        </p>
      ),
    },
    {
      title: "International Data Transfers",
      content: (
        <>
          <p>
            Machwares operates in the United States, so personal data of
            individuals in the EU and EEA may be transferred to and processed
            outside the EEA. Where we do so, we rely on a transfer mechanism
            permitted by Chapter V of the GDPR, such as:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            <li>
              <strong className="text-black">
                Standard Contractual Clauses:
              </strong>{" "}
              Adopted by the European Commission, with supplementary measures
              where needed.
            </li>
            <li>
              <strong className="text-black">Adequacy decisions:</strong>{" "}
              Including the EU–U.S. Data Privacy Framework (Commission
              Implementing Decision (EU) 2023/1795, adopted July 10, 2023), for
              transfers to U.S. organizations certified under it.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Data Protection by Design and by Default",
      content: (
        <p>
          We limit data collection to what is necessary for each purpose and
          configure our tools and processes with privacy-protective defaults.
        </p>
      ),
    },
    {
      title: "Data Protection Officer and EU Representative",
      content: (
        <p>
          The GDPR requires a Data Protection Officer only where an
          organization’s core activities involve large-scale regular
          monitoring of individuals or large-scale processing of sensitive
          data. Privacy inquiries are handled by our privacy contact at{" "}
          <a
            href="mailto:admin@machwares.com"
            className="font-semibold text-[var(--primary)] transition-opacity hover:opacity-70"
          >
            admin@machwares.com
          </a>
          . EU representative under Article 27, where applicable: [Name and
          Address of EU Representative].
        </p>
      ),
    },
    {
      title: "Complaints",
      content: (
        <p>
          You have the right to lodge a complaint with the supervisory
          authority in the EU or EEA country where you live, where you work, or
          where you believe an infringement occurred. A directory of
          authorities is available on the European Data Protection Board
          website at{" "}
          <a
            href="https://edpb.europa.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--primary)] transition-opacity hover:opacity-70"
          >
            edpb.europa.eu
          </a>
          . We encourage you to contact us first so we can try to resolve your
          concern.
        </p>
      ),
    },
    {
      title: "Updates to This Page",
      content: (
        <p>
          We review this page periodically and update it as our practices or
          the law change. The effective date above shows the latest version.
        </p>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          <p>GDPR inquiries? Contact us:</p>
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
        title="GDPR Compliance"
        description="Learn how Machwares handles personal data under the GDPR, including your privacy rights, legal bases for processing, international data transfers, and how to contact us."
        path="/gdpr-compliance"
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
              GDPR
              <br />
              <span className="text-[var(--primary)]">Compliance</span>
            </h1>

            <p className="mt-10 max-w-[650px] font-[var(--font-body)] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Learn how Machwares approaches personal data protection and
              respects the privacy rights of individuals covered by the
              General Data Protection Regulation.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                GDPR Compliance
              </p>

              <div className="mt-5 h-px w-full bg-black/10" />

              <p className="mt-5 font-[var(--font-body)] text-sm leading-6 text-black/50">
                Information about our GDPR responsibilities, data processing
                practices, and the privacy rights available to individuals.
              </p>

              <Link
                to="/privacy-policy"
                className="group mt-7 inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)]"
              >
                Privacy Policy

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
                  GDPR Questions?
                </p>

                <h2 className="mt-4 max-w-[600px] font-[var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Have a privacy concern?
                </h2>

                <p className="mt-4 max-w-[550px] font-[var(--font-body)] text-sm leading-6 text-white/60">
                  If you have questions about how we handle personal data or
                  wish to exercise your GDPR rights, contact our team.
                </p>

                <a
                  href="mailto:admin@machwares.com"
                  className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
                >
                  Email our team

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

export default GDPRCompliance;
