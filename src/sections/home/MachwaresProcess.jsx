import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Compass,
  Headset,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    step: "01",
    phase: "Discovery & Audit",
    title: "Technical Assessment & Architecture",
    description:
      "We audit your existing infrastructure, bottlenecks, and business requirements to identify security gaps, technical debt, and high-impact opportunities.",
    deliverable: "System Audit & Scope Blueprint",
    duration: "Week 1–2",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    phase: "Roadmap & Design",
    title: "Solution Blueprint & Sprint Planning",
    description:
      "We define a clear technical roadmap, cloud topology, and milestone schedule—giving you transparent timelines and predictable costs before writing code.",
    deliverable: "Architecture Spec & Milestone Plan",
    duration: "Week 2–3",
    icon: Compass,
  },
  {
    step: "03",
    phase: "Agile Execution",
    title: "Iterative Engineering & QA Testing",
    description:
      "Our engineers ship production-ready code in weekly sprints with automated testing, security checks, and staging previews you can test in real time.",
    deliverable: "Weekly Builds & Staging Demos",
    duration: "Iterative Sprints",
    icon: Code2,
  },
  {
    step: "04",
    phase: "Deployment & SLA",
    title: "Zero-Downtime Launch & 24/7 Support",
    description:
      "We handle cloud deployment, monitoring setup, and documentation—followed by proactive SLA-backed maintenance so your systems stay fast and secure.",
    deliverable: "Production Release & SLA Care",
    duration: "Ongoing",
    icon: Headset,
  },
];

const ease = [0.22, 1, 0.36, 1];

const MachwaresProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* Subtle Top Border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[var(--primary)]/20 bg-[var(--light)] px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                How We Deliver
              </span>
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
              Clear engineering ownership from{" "}
              <span className="text-[var(--primary)]">audit to deployment.</span>
            </h2>
          </div>

          <p className="max-w-md font-[var(--font-body)] text-sm leading-relaxed text-[var(--text)] sm:text-base lg:pb-1">
            No black-box timelines or surprise handoffs. Every Machwares
            engagement follows a structured four-stage delivery framework built
            for transparency and reliability.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN SPLIT LAYOUT
        ===================================================== */}
        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT COLUMN: Visual & Standard Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="lg:sticky lg:top-28 lg:col-span-5"
          >
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[#F8F9FA] p-3">
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#1A1D1F]">
                <img
                  src="/HeroBg/Howweproceed.jpg"
                  alt="Machwares software engineering team reviewing system architecture"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D1F]/80 via-[#1A1D1F]/15 to-transparent" />

                {/* Floating Active Stage Pill */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-[#1A1D1F]/90 px-4 py-3 text-white backdrop-blur-md">
                  <div>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                      Active Phase • {processSteps[activeStep].step}
                    </span>
                    <span className="font-[var(--font-display)] text-sm font-bold text-white">
                      {processSteps[activeStep].phase}
                    </span>
                  </div>

                  <span className="rounded-lg bg-white/10 px-2.5 py-1 font-mono text-xs font-semibold text-white/90">
                    {processSteps[activeStep].duration}
                  </span>
                </div>
              </div>

              {/* Engineering Standards Strip */}
              <div className="mt-3 rounded-2xl bg-white p-5">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={17} className="text-[var(--primary)]" />
                    <span className="font-[var(--font-display)] text-sm font-bold text-[var(--dark)]">
                      The Machwares Standard
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-[var(--text)]">
                    Digitally Yours!
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    "100% IP & Code Ownership",
                    "Weekly Staging Previews",
                    "Dedicated Tech Lead",
                    "SLA-Backed Maintenance",
                  ].map((guarantee) => (
                    <div key={guarantee} className="flex items-start gap-2">
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-[var(--primary)]"
                      />
                      <span className="font-[var(--font-body)] text-xs font-medium leading-snug text-[var(--dark)]/85">
                        {guarantee}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-[var(--border)] pt-4">
                  <Link
                    to="/contact"
                    className="group flex w-full items-center justify-between rounded-xl bg-[var(--dark)] px-5 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[var(--primary)]"
                  >
                    <span>Start With a Technical Audit</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Clean Accordion / Editorial List (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {processSteps.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeStep === index;

                return (
                  <div
                    key={item.step}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    className="group cursor-pointer py-7 transition-colors sm:py-8"
                  >
                    {/* Header Row (Always visible, uncluttered) */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span
                          className={`font-mono text-sm font-bold transition-colors ${
                            isActive
                              ? "text-[var(--primary)]"
                              : "text-gray-400 group-hover:text-[var(--dark)]"
                          }`}
                        >
                          {item.step}
                        </span>

                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                            isActive
                              ? "bg-[var(--primary)] text-white"
                              : "bg-[#F4F5F7] text-[var(--dark)] group-hover:bg-[var(--light)] group-hover:text-[var(--primary)]"
                          }`}
                        >
                          <Icon size={20} strokeWidth={1.8} />
                        </div>

                        <div>
                          <span className="block font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text)]">
                            {item.phase}
                          </span>
                          <h3
                            className={`mt-0.5 font-[var(--font-display)] text-xl font-bold tracking-[-0.02em] transition-colors sm:text-2xl ${
                              isActive
                                ? "text-[var(--dark)]"
                                : "text-[var(--dark)]/75 group-hover:text-[var(--dark)]"
                            }`}
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <span
                        className={`hidden shrink-0 rounded-full px-3 py-1 font-mono text-xs font-medium sm:inline-block ${
                          isActive
                            ? "bg-[var(--light)] text-[var(--primary)]"
                            : "bg-[#F4F5F7] text-[var(--text)]"
                        }`}
                      >
                        {item.duration}
                      </span>
                    </div>

                    {/* Expandable Description (Only open for active step) */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pl-0 sm:pl-[104px]">
                            <p className="max-w-xl font-[var(--font-body)] text-sm leading-relaxed text-[var(--text)] sm:text-[15px]">
                              {item.description}
                            </p>

                            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[var(--dark)]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                              <span>Deliverable: {item.deliverable}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachwaresProcess;