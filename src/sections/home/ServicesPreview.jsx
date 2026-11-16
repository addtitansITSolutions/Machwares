import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  ServerCog,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Custom Software Engineering",
    subtitle: "Enterprise Platforms & Internal Systems",
    description:
      "End-to-end architecture and development of bespoke web applications, ERP/CRM portals, and API ecosystems tailored to streamline complex business workflows.",
    highlights: [
      "Full-stack web platforms & SaaS products",
      "Legacy system modernization & API integration",
      "Scalable microservices & database design",
    ],
    tags: ["React & Node", "Enterprise APIs", "System Architecture"],
    icon: Code2,
    href: "/services/custom-software",
    image: "/home/software.jpg",
    stat: "99.9% Uptime Architecture",
  },
  {
    number: "02",
    title: "Cloud & DevOps Infrastructure",
    subtitle: "Resilient Multi-Cloud & Automation",
    description:
      "Seamless cloud migrations, automated CI/CD release pipelines, and containerized infrastructure built for high availability and predictable scaling.",
    highlights: [
      "AWS, Azure & GCP cloud architecture",
      "Docker, Kubernetes & automated CI/CD",
      "Cloud cost optimization & disaster recovery",
    ],
    tags: ["Cloud Migration", "CI/CD Pipelines", "Kubernetes"],
    icon: Cloud,
    href: "/services/cloud-devops",
    image: "/home/cloud.jpg",
    stat: "Zero-Downtime Deployments",
  },
  {
    number: "03",
    title: "Cybersecurity & Compliance",
    subtitle: "Proactive Threat Defense & Governance",
    description:
      "Comprehensive security audits, zero-trust access controls, and compliance-ready frameworks that protect your infrastructure and customer data.",
    highlights: [
      "Vulnerability assessments & penetration testing",
      "End-to-end encryption & IAM governance",
      "ISO 27001, SOC 2 & GDPR readiness",
    ],
    tags: ["Security Audits", "Zero-Trust", "Data Protection"],
    icon: ShieldCheck,
    href: "/services/cybersecurity",
    image: "/home/security.jpg",
    stat: "24/7 Threat Monitoring",
  },
  {
    number: "04",
    title: "Web & Mobile App Development",
    subtitle: "High-Performance Customer Experiences",
    description:
      "Fast, intuitive iOS, Android, and progressive web applications engineered with clean UI/UX and rock-solid backend reliability.",
    highlights: [
      "Cross-platform & native iOS/Android apps",
      "High-converting customer portals & storefronts",
      "Offline-first sync & real-time notifications",
    ],
    tags: ["iOS & Android", "Progressive Web", "UI/UX Systems"],
    icon: Smartphone,
    href: "/services/web-mobile",
    image: "/home/mobile.jpg",
    stat: "Sub-Second Load Speeds",
  },
  {
    number: "05",
    title: "AI Automation & Data Analytics",
    subtitle: "Intelligent Workflows & Business Intelligence",
    description:
      "Practical AI integrations, automated document pipelines, and real-time analytics dashboards that turn raw operational data into clear decisions.",
    highlights: [
      "Custom LLM workflows & process automation",
      "Unified data warehouses & BI dashboards",
      "Predictive analytics & reporting pipelines",
    ],
    tags: ["AI Workflows", "Data Pipelines", "BI Dashboards"],
    icon: BrainCircuit,
    href: "/services/ai-data",
    image: "/home/ai-data.jpg",
    stat: "Automated Operational Ops",
  },
  {
    number: "06",
    title: "Managed IT & Dedicated Teams",
    subtitle: "Continuous Support & Engineering Pods",
    description:
      "Proactive infrastructure maintenance, SLA-backed helpdesk operations, and dedicated Machwares engineers embedded directly with your team.",
    highlights: [
      "24/7 server, network & endpoint monitoring",
      "Dedicated full-stack & DevOps engineering pods",
      "Predictable monthly retainers with clear SLAs",
    ],
    tags: ["24/7 Support", "Dedicated Pods", "SLA Management"],
    icon: ServerCog,
    href: "/services/managed-it",
    image: "/home/managed-it.jpg",
    stat: "15-Min Incident Response",
  },
];

const ease = [0.22, 1, 0.36, 1];

const ServicesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section className="relative overflow-hidden bg-[var(--dark)] py-24 text-white sm:py-28 lg:py-32">
      {/* Subtle Technical Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:56px_56px]"
      />

      {/* Crimson & Slate Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-[440px] w-[440px] rounded-full bg-[var(--primary)]/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-[380px] w-[380px] rounded-full bg-white/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:pb-14"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[var(--primary)]/35 bg-[var(--primary)]/10 px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-white/90">
                Our Capabilities
              </span>
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Technology services built to{" "}
              <span className="text-[var(--primary)]">run, protect, and scale</span>{" "}
              your business.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <p className="max-w-md font-[var(--font-body)] text-sm leading-relaxed text-white/60 sm:text-base lg:text-right">
              Select a capability below to explore how Machwares architects,
              deploys, and supports enterprise-grade IT solutions.
            </p>

            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[var(--primary)]"
            >
              <span>View All Services</span>
              <ArrowUpRight
                size={15}
                className="text-[var(--primary)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>

        {/* =====================================================
            DESKTOP INTERACTIVE SPLIT SHOWCASE (lg+)
        ===================================================== */}
        <div className="mt-12 hidden grid-cols-12 gap-8 lg:grid xl:gap-10">
          {/* LEFT: Interactive Service Selector List (5 Cols) */}
          <div className="col-span-5 flex flex-col justify-between gap-2.5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isSelected = index === activeIndex;

              return (
                <button
                  key={service.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-[var(--primary)] bg-[#22262A] shadow-lg shadow-black/25"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  {/* Active Left Crimson Accent Pill */}
                  {isSelected && (
                    <motion.span
                      layoutId="activeServiceIndicator"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      className="absolute bottom-3 left-0 top-3 w-1 rounded-r-full bg-[var(--primary)]"
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isSelected ? "text-[var(--primary)]" : "text-white/35"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isSelected
                          ? "bg-[var(--primary)] text-white"
                          : "bg-white/5 text-white/60 group-hover:text-white"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3
                        className={`font-[var(--font-display)] text-base font-bold transition-colors ${
                          isSelected ? "text-white" : "text-white/75 group-hover:text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-0.5 font-[var(--font-body)] text-xs text-white/45">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`shrink-0 transition-all duration-300 ${
                      isSelected
                        ? "translate-x-0 text-[var(--primary)] opacity-100"
                        : "-translate-x-2 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Capability Spotlight Panel (7 Cols) */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.number}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease }}
                className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/80 bg-white/20 shadow-2xl"
              >
                {/* Top Visual Banner */}
                <div className="relative h-[250px] overflow-hidden bg-[#15181B]">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-85 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202428] via-[#202428]/35 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#14171A]/85 px-3 py-1.5 font-mono text-xs font-bold text-white backdrop-blur-md">
                      <ActiveIcon size={14} className="text-[var(--primary)]" />
                      <span>CAPABILITY {activeService.number}</span>
                    </span>

                    <span className="rounded-lg bg-[var(--primary)] px-3 py-1.5 font-[var(--font-body)] text-xs font-bold text-white shadow-md">
                      {activeService.stat}
                    </span>
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="flex flex-1 flex-col justify-between p-8 xl:p-9">
                  <div>
                    <h3 className="font-[var(--font-display)] text-2xl font-bold tracking-[-0.025em] text-white xl:text-3xl">
                      {activeService.title}
                    </h3>

                    <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-white/70 xl:text-[15px]">
                      {activeService.description}
                    </p>

                    {/* Key Deliverables Checklist */}
                    <div className="mt-6 grid grid-cols-1 gap-2.5 border-t border-white/10 pt-5">
                      {activeService.highlights.map((point) => (
                        <div key={point} className="flex items-center gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-[var(--primary)]"
                          />
                          <span className="font-[var(--font-body)] text-sm text-white/85">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags & CTA */}
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <div className="flex flex-wrap gap-2">
                      {activeService.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-[var(--font-body)] text-xs font-medium text-white/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={activeService.href}
                      className="group inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-[#b81b21]"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =====================================================
            MOBILE & TABLET CARDS (< lg)
        ===================================================== */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease }}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#202428]"
              >
                <div>
                  <div className="relative h-[200px] overflow-hidden bg-[#15181B]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#202428] via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-white shadow-md">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <span className="absolute right-4 top-4 rounded-md bg-black/50 px-2.5 py-1 font-mono text-xs font-bold text-white/85 backdrop-blur-sm">
                      {service.number}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="font-[var(--font-body)] text-xs font-semibold text-[var(--primary)]">
                      {service.stat}
                    </span>

                    <h3 className="mt-1 font-[var(--font-display)] text-xl font-bold text-white sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-white/65">
                      {service.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-[var(--font-body)] text-[11px] font-medium text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 px-6 py-4">
                  <Link
                    to={service.href}
                    className="group inline-flex items-center gap-2 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-[var(--primary)]"
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight
                      size={15}
                      className="text-[var(--primary)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;