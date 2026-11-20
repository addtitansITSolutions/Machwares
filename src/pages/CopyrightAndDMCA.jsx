
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const CopyrightAndDMCA = () => {
  const sections = [
    {
      title: "Copyright Notice",
      content: (
        <p>
          All content on machwares.com, including text, graphics, logos, icons,
          images, page layouts, and software, is owned by or licensed to
          “Machwares” and is protected by international copyright laws. © 2026
          Machwares. All rights reserved.
        </p>
      ),
    },
    {
      title: "Permitted Use",
      content: (
        <p>
          You may view and print pages of this website for your own personal,
          non-commercial use, provided that you keep all copyright and
          proprietary notices intact. You may not copy, reproduce, modify,
          distribute, publicly display, or create derivative works from our
          content without our prior written permission.
        </p>
      ),
    },
    {
      title: "Trademarks",
      content: (
        <p>
          “Machwares,” our logo, and related names are trademarks of Machwares.
          Other names and logos on this website belong to their respective
          owners. Use of any trademark without written permission is prohibited.
        </p>
      ),
    },
    {
      title: "Materials You Provide",
      content: (
        <p>
          If you send us content, such as creative assets, logos, text, app
          materials, or creator content, you represent that you own it or have
          the right to provide it, and that its use for the agreed services will
          not infringe the rights of any third party.
        </p>
      ),
    },
    {
      title: "Respect for Third-Party Rights",
      content: (
        <p>
          Machwares respects the intellectual property rights of others and
          responds to notices of alleged copyright infringement that comply
          with the Digital Millennium Copyright Act, 17 U.S.C. § 512 (“DMCA”).
        </p>
      ),
    },
    {
      title: "Filing a DMCA Notice of Infringement",
      content: (
        <>
          <p>
            If you believe that material on this website infringes your
            copyright, send a written notice to our Designated Agent that
            includes:
          </p>

          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>
              A physical or electronic signature of the copyright owner or a
              person authorized to act on the owner’s behalf.
            </li>
            <li>
              Identification of the copyrighted work claimed to have been
              infringed.
            </li>
            <li>
              Identification of the material claimed to be infringing, with
              enough detail, such as a URL, for us to locate it.
            </li>
            <li>
              Your name, mailing address, telephone number, and email address.
            </li>
            <li>
              A statement that you have a good faith belief that the use is not
              authorized by the copyright owner, its agent, or the law.
            </li>
            <li>
              A statement that the information in the notice is accurate and,
              under penalty of perjury, that you are the copyright owner or are
              authorized to act on the owner’s behalf.
            </li>
          </ol>
        </>
      ),
    },
    {
      title: "Designated Agent",
      content: (
        <div className="space-y-3">
          <p>
            Please direct DMCA notices and copyright-related communications to
            our Designated Agent:
          </p>

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
        </div>
      ),
    },
    {
      title: "Our Response",
      content: (
        <p>
          Upon receiving a valid notice, we may remove or disable access to the
          material and will make a reasonable effort to notify the person who
          posted it.
        </p>
      ),
    },
    {
      title: "Counter-Notification",
      content: (
        <>
          <p>
            If you believe that material was removed because of a mistake or
            misidentification, you may send a counter-notification to the
            Designated Agent that includes:
          </p>

          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Your physical or electronic signature.</li>
            <li>
              Identification of the material that was removed and the location
              where it appeared before removal.
            </li>
            <li>
              A statement, under penalty of perjury, that you have a good faith
              belief that the material was removed as a result of mistake or
              misidentification.
            </li>
            <li>
              Your name, address, and telephone number, a statement that you
              consent to the jurisdiction of the federal district court for the
              judicial district where your address is located (or, if your
              address is outside the United States, any judicial district in
              which Machwares may be found), and a statement that you will
              accept service of process from the person who submitted the
              original notice.
            </li>
          </ol>

          <p className="mt-4">
            If we receive a valid counter-notification, we will forward it to
            the original complainant. We will restore the material in not less
            than 10 and not more than 14 business days after receiving the
            counter-notification, unless the complainant notifies us that it
            has filed a court action seeking an order to restrain the alleged
            infringement.
          </p>
        </>
      ),
    },
    {
      title: "Repeat Infringers",
      content: (
        <p>
          In appropriate circumstances, Machwares will restrict or terminate
          access for users who are repeat infringers.
        </p>
      ),
    },
    {
      title: "Misrepresentations",
      content: (
        <p>
          Under 17 U.S.C. § 512(f), any person who knowingly and materially
          misrepresents that material is infringing, or that it was removed by
          mistake or misidentification, may be liable for damages, including
          costs and attorneys’ fees. Consider consulting an attorney before
          submitting a notice.
        </p>
      ),
    },
    {
      title: "Changes to This Policy",
      content: (
        <p>
          We may update this policy from time to time. The effective date above
          shows the latest version.
        </p>
      ),
    },
    {
      title: "Contact",
      content: (
        <p>
          Questions about this policy? Contact us at{" "}
          <a
            href="mailto:admin@machwares.com"
            className="font-semibold text-[var(--primary)] transition-opacity hover:opacity-70"
          >
            admin@machwares.com
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Copyright & DMCA Policy"
        description="Read the Machwares Copyright and DMCA Policy to understand content ownership, permitted use, and how to submit copyright infringement notices and counter-notifications."
        path="/copyright-and-dmca"
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
              Copyright &
              <br />
              <span className="text-[var(--primary)]">DMCA Policy</span>
            </h1>

            <p className="mt-10 max-w-[650px] font-[var(--font-body)] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Learn about content ownership, permitted use, intellectual
              property rights, and how to report copyright concerns relating to
              the Machwares website.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                Copyright & DMCA
              </p>

              <div className="mt-5 h-px w-full bg-black/10" />

              <p className="mt-5 font-[var(--font-body)] text-sm leading-6 text-black/50">
                Information about copyright ownership, permitted use, reporting
                infringement, and protecting intellectual property rights.
              </p>

              <a
                href="mailto:admin@machwares.com"
                className="group mt-7 inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)]"
              >
                Contact our team

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
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
                  Copyright Questions?
                </p>

                <h2 className="mt-4 max-w-[600px] font-[var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Have a copyright concern?
                </h2>

                <p className="mt-4 max-w-[550px] font-[var(--font-body)] text-sm leading-6 text-white/60">
                  If you believe material on our website infringes your
                  copyright or need clarification about this policy, contact
                  our team.
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

export default CopyrightAndDMCA;