import { ArrowUpRight, Mail, MapPin, ShieldCheck, Terminal } from "lucide-react";

const Footer = () => {
  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const serviceLinks = [
    { label: "Custom Software Development", href: "/services/custom-software" },
    { label: "Cloud & DevOps Engineering", href: "/services/cloud-devops" },
    { label: "Cybersecurity & Compliance", href: "/services/cybersecurity" },
    { label: "Enterprise Web & Mobile Apps", href: "/services/web-mobile" },
    { label: "AI & Data Analytics", href: "/services/ai-data" },
    { label: "Managed IT Infrastructure", href: "/services/managed-it" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--dark)] text-white">
      {/* Subtle Grid Pattern Overlay for Tech / IT Vibe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Crimson & Slate Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[var(--primary)]/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[var(--secondary)]/25 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* --------------------------------
            Redesigned Top CTA Banner Card
        -------------------------------- */}
        <div className="pt-14 sm:pt-16 lg:pt-20">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#23272A] via-[#1E2225] to-[#16191B] p-8 shadow-2xl sm:p-12 lg:p-14">
            {/* Top Crimson Accent Line */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              {/* Left Copy */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3.5 py-1.5">
                  <Terminal size={14} className="text-[var(--primary)]" />
                  <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
                    Ready to scale your infrastructure?
                  </span>
                </div>

                <h2 className="mt-5 font-[var(--font-display)] text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                  Engineer your next{" "}
                  <span className="text-[var(--primary)]">
                    digital breakthrough.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl font-[var(--font-body)] text-sm leading-relaxed text-white/65 sm:text-base">
                  From custom enterprise software to resilient cloud architecture,
                  Machwares builds technology that keeps your business ahead.
                </p>
              </div>

              {/* Right Action Buttons */}
              <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-7 py-4 font-[var(--font-body)] text-sm font-bold tracking-wide text-white shadow-lg shadow-[var(--primary)]/25 transition-all duration-300 hover:bg-[#b81b21] hover:shadow-[var(--primary)]/40"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-[var(--font-body)] text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------
            Footer Links Grid
        -------------------------------- */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.1fr_1.1fr] lg:gap-10 lg:py-20">
          {/* Brand Column */}
          <div>
            <a href="/" className="inline-flex items-center">
              <img
                src="/logo/Logo_Machwares.png"
                alt="Machwares - Digitally Yours!"
                className="h-auto w-[160px] object-contain sm:w-[175px]"
              />
            </a>

            <p className="mt-5 max-w-sm font-[var(--font-body)] text-sm leading-6 text-white/60">
              Machwares is a full-cycle IT services and software engineering partner.
              We architect, build, and manage secure digital ecosystems that drive
              operational efficiency and measurable business growth.
            </p>

            {/* Tagline Pill */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/75">
              <ShieldCheck size={15} className="text-[var(--primary)]" />
              <span>Digitally Yours! • Enterprise IT Solutions</span>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              Company
            </h3>

            <ul className="mt-6 space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 font-[var(--font-body)] text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={13}
                      className="text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              IT Capabilities
            </h3>

            <ul className="mt-6 space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 font-[var(--font-body)] text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={13}
                      className="text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-5">
              {/* Email */}
              <a
                href="mailto:info@machwares.com"
                className="group flex items-start gap-3.5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[var(--primary)] transition-colors duration-300 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Mail size={16} strokeWidth={1.75} />
                </div>

                <div>
                  <span className="block text-xs text-white/40">Email Us</span>
                  <span className="font-[var(--font-body)] text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                    admin@machwares.com
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[var(--primary)]">
                  <MapPin size={16} strokeWidth={1.75} />
                </div>

                <div>
                  <span className="block text-xs text-white/40">Headquarters</span>
                  <span className="font-[var(--font-body)] text-sm leading-6 text-white/75">
                    Machwares Technologies, Ghaziabad, Uttar Pradesh 201016, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------
            Bottom Bar
        -------------------------------- */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[var(--font-body)] text-xs text-white/45">
            © {new Date().getFullYear()} Machwares. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/privacy-policy"
              className="font-[var(--font-body)] text-xs text-white/45 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/security-policy"
              className="font-[var(--font-body)] text-xs text-white/45 transition-colors duration-300 hover:text-white"
            >
              Security & Compliance
            </a>

            <a
              href="/gdpr-compliance"
              className="font-[var(--font-body)] text-xs text-white/45 transition-colors duration-300 hover:text-white"
            >
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;