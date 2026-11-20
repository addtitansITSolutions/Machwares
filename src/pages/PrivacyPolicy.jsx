
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction and Scope",
      content: (
        <p>
          This Privacy Policy explains how we collects, uses, shares, and protects personal
          information when you visit machwares.com or contact
          us. It does not cover personal data we process on behalf of clients
          in their campaigns, which is described in Section 6.
        </p>
      ),
    },
    {
      title: "Information We Collect",
      content: (
        <>
          <p className="font-semibold text-black">Information you provide.</p>
          <p className="mt-2">
            When you complete our contact form or email us, we collect your
            name, work email address, phone number, company name, website or app
            link, service of interest, and the contents of your message.
          </p>

          <p className="mt-5 font-semibold text-black">
            Information collected automatically.
          </p>
          <p className="mt-2">
            Through cookies and similar technologies, we collect your IP
            address, browser and device type, operating system, pages viewed,
            referring website, date and time of visit, and approximate location
            derived from your IP address.
          </p>

          <p className="mt-5 font-semibold text-black">
            Information from third parties.
          </p>
          <p className="mt-2">
            Analytics and advertising providers may supply aggregated or
            de-identified information about Website usage.
          </p>

          <p className="mt-5 font-semibold text-black">
            Information about creators and publishers.
          </p>
          <p className="mt-2">
            If you are a creator or publisher we work with, we collect your
            business contact details and public profile information, such as
            your name, email address, and social media handles.
          </p>

          <p className="mt-5">
            We do not intentionally collect sensitive personal information
            through the Website, such as Social Security numbers, financial
            account numbers, or health information. Please do not submit it.
          </p>
        </>
      ),
    },
    {
      title: "How We Use Information",
      content: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to inquiries and prepare proposals.</li>
          <li>Operate, maintain, and secure the Website.</li>
          <li>Analyze Website use and improve our content and services.</li>
          <li>
            Send business communications and, where permitted, marketing emails
            (you may unsubscribe at any time).
          </li>
          <li>Measure the performance of our own marketing.</li>
          <li>
            Comply with legal obligations and enforce our Terms and Conditions.
          </li>
        </ul>
      ),
    },
    {
      title: "Cookies and Similar Technologies",
      content: (
        <p>
          We use cookies and similar technologies for essential Website
          functions, analytics, and, where applicable, marketing. You can
          manage cookies through your browser settings and, where available,
          our cookie banner. We treat Global Privacy Control (GPC) signals as
          an opt-out of sale or sharing where required by law. Blocking some
          cookies may affect how the Website works.
        </p>
      ),
    },
    {
      title: "How We Share Information",
      content: (
        <>
          <p>We share personal information only with:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              Service providers that help us operate the Website and our
              business, such as hosting, analytics, email, customer
              relationship management, and security providers, under contracts
              that limit their use of the information.
            </li>
            <li>
              Advertising and analytics partners, where we use their tools on
              the Website, subject to your choices.
            </li>
            <li>Professional advisers, such as attorneys and accountants.</li>
            <li>
              Government authorities, when required by law or to protect rights
              and safety.
            </li>
            <li>A successor, in a merger, acquisition, or sale of assets.</li>
          </ul>
          <p className="mt-4">
            We do not sell your personal information for money.
          </p>
        </>
      ),
    },
    {
      title: "Campaign and Client Data",
      content: (
        <p>
          When we run campaigns for clients, including mobile and influencer
          campaigns, we may process data such as mobile device identifiers
          (for example, Apple’s IDFA and Google’s advertising ID), IP addresses,
          and campaign interaction and conversion data. In that role, we act
          as a service provider or processor for our clients. We process the
          data only on their instructions and for the services they request,
          and we follow applicable platform privacy requirements, including
          Apple’s App Tracking Transparency framework. Questions about how a
          client uses your data should be directed to that client.
        </p>
      ),
    },
    {
      title: "Data Retention",
      content: (
        <p>
          We keep personal information only as long as needed for the purposes
          described in this policy, to meet legal, accounting, or reporting
          requirements, or to resolve disputes.
        </p>
      ),
    },
    {
      title: "Security",
      content: (
        <p>
          We use reasonable administrative, technical, and physical safeguards
          to protect personal information. No method of transmission or
          storage is completely secure, so we cannot guarantee absolute
          security.
        </p>
      ),
    },
    {
      title: "Your Privacy Rights (U.S. State Residents)",
      content: (
        <>
          <p>
            Depending on your state of residence, including California,
            Colorado, Connecticut, Texas, Virginia, and other states with
            comprehensive privacy laws, you may have the right to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Know and access the personal information we collect about you.</li>
            <li>Correct inaccurate personal information.</li>
            <li>Delete your personal information.</li>
            <li>Obtain a portable copy of your personal information.</li>
            <li>
              Opt out of the sale or sharing of personal information and of
              targeted advertising.
            </li>
            <li>Be free from discrimination for exercising these rights.</li>
          </ul>

          <p className="mt-5">
            In the past 12 months, we have collected the following categories
            of personal information: identifiers, internet or network
            activity, professional information such as company name, and the
            contents of your communications with us.
          </p>

          <p className="mt-5">
            To submit a request, email{" "}
            <a
              href="mailto:admin@machwares.com"
              className="font-semibold text-[var(--primary)] transition-opacity hover:opacity-70"
            >
              admin@machwares.com
            </a>
            . We will verify your identity before acting on a request. We
            respond within 45 days, and we may extend that period once by up to
            45 additional days where the law permits. You may use an authorized
            agent with your written permission. If we deny a request and your
            state law provides a right to appeal, you may appeal by replying to
            our decision with “Appeal” in the subject line.
          </p>
        </>
      ),
    },
    {
      title: "Email Communications",
      content: (
        <p>
          Marketing emails include an unsubscribe link, and we honor opt-out
          requests in accordance with the CAN-SPAM Act. We may still send
          transactional or service-related messages.
        </p>
      ),
    },
    {
      title: "Children’s Privacy",
      content: (
        <p>
          The Website is not directed to individuals under 18, and we do not
          knowingly collect personal information from children. If you believe
          a child has provided us with personal information, contact us and we
          will delete it.
        </p>
      ),
    },
    {
      title: "Visitors Outside the United States",
      content: (
        <p>
          The Website is operated from the United States, and information we
          collect may be processed here. If you are located in the European
          Union or European Economic Area, please see our{" "}
          <Link
            to="/gdpr-compliance"
            className="font-semibold text-[var(--primary)] transition-opacity hover:opacity-70"
          >
            GDPR Compliance
          </Link>{" "}
          page for additional information and rights.
        </p>
      ),
    },
    {
      title: "Do Not Track",
      content: (
        <p>
          There is no uniform standard for browser “Do Not Track” signals, and
          we do not respond to them. We do respond to Global Privacy Control
          signals as described in Section 4.
        </p>
      ),
    },
    {
      title: "Third-Party Sites",
      content: (
        <p>
          The Website may link to third-party sites. We are not responsible for
          their privacy practices, and we encourage you to read their policies.
        </p>
      ),
    },
    {
      title: "Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time. The effective
          date above shows the latest version, and material changes will be
          posted on this page.
        </p>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          <p>Privacy questions or requests? Contact us:</p>
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
        title="Privacy Policy"
        description="Learn how Machwares collects, uses, shares, and protects personal information when you visit our website or contact our team."
        path="/privacy-policy"
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
              Privacy
              <br />
              <span className="text-[var(--primary)]">Policy</span>
            </h1>

            <p className="mt-10 max-w-[650px] font-[var(--font-body)] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Understand how Machwares collects, uses, and protects information
              when you visit our website or get in touch with our team.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                Privacy Policy
              </p>

              <div className="mt-5 h-px w-full bg-black/10" />

              <p className="mt-5 font-[var(--font-body)] text-sm leading-6 text-black/50">
                Information about the personal data we collect, how we use it,
                and the privacy choices available to you.
              </p>

              <Link
                to="/terms-and-conditions"
                className="group mt-7 inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)]"
              >
                Terms & Conditions

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
                  Privacy Questions?
                </p>

                <h2 className="mt-4 max-w-[600px] font-[var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Need help with your privacy rights?
                </h2>

                <p className="mt-4 max-w-[550px] font-[var(--font-body)] text-sm leading-6 text-white/60">
                  Contact our team if you have questions about this Privacy
                  Policy or would like to submit a privacy request.
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

export default PrivacyPolicy;