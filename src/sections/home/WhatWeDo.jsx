import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Headset,
  Layers,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] py-24 sm:py-28 lg:py-32">
      {/* Subtle Top & Bottom Architectural Dividers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[var(--primary)]/20 bg-[var(--light)] px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                What We Do
              </span>
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
              End-to-end IT capabilities engineered to{" "}
              <span className="text-[var(--primary)]">power your growth.</span>
            </h2>
          </div>

          <p className="max-w-md font-[var(--font-body)] text-sm leading-relaxed text-[var(--text)] sm:text-base lg:pb-1">
            Each discipline works in sync—from custom application architecture
            to cloud reliability and ongoing security—so your technology never
            slows your business down.
          </p>
        </motion.div>

        {/* =====================================================
            ASYMMETRIC BENTO GRID (Each Card Unique)
        ===================================================== */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          {/* ---------------------------------------------------
              CARD 1: CUSTOM SOFTWARE (Cols 1–7 | Bold Crimson)
          --------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <Link
              to="/services/custom-software"
              className="group relative flex h-full min-h-[390px] flex-col justify-between overflow-hidden rounded-3xl bg-[var(--primary)] p-7 text-white shadow-[0_20px_50px_-15px_rgba(212,32,39,0.35)] sm:p-10"
            >
              {/* Angled Geometric Stripe Echoing Machwares Logo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-[140%] w-44 -skew-x-12 bg-white/[0.06] transition-transform duration-700 group-hover:translate-x-4"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-28 -top-12 h-[140%] w-16 -skew-x-12 bg-black/[0.08]"
              />

              {/* Top Row */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-xl bg-white/15 px-3.5 py-2 backdrop-blur-sm">
                  <Code2 size={18} className="text-white" />
                  <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white">
                    01 • Application Engineering
                  </span>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-md transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={19} strokeWidth={2.2} />
                </span>
              </div>

              {/* Middle Interactive Visual Illustration + Copy */}
              <div className="relative z-10 mt-8 grid grid-cols-1 items-end gap-8 sm:grid-cols-12">
                <div className="sm:col-span-7">
                  <h3 className="font-[var(--font-display)] text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl">
                    Custom Software Development
                  </h3>

                  <p className="mt-4 font-[var(--font-body)] text-sm leading-relaxed text-white/85 sm:text-[15px]">
                    Web platforms, mobile apps, and bespoke internal tools
                    built around your exact workflows—cleanly architected to
                    scale with your users.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Web & Mobile Apps", "API Integrations", "SaaS Platforms"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-black/20 px-3 py-1 font-[var(--font-body)] text-xs font-medium text-white/95"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Animated Layered Architecture Stack */}
                <div className="hidden sm:col-span-5 sm:flex sm:flex-col sm:gap-2.5">
                  <motion.div
                    variants={{
                      hover: { y: -6, x: -4 },
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-center justify-between rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <Layers size={16} className="text-white" />
                      <span className="text-xs font-semibold text-white">
                        Frontend Experience
                      </span>
                    </div>
                    <CheckCircle2 size={15} className="text-emerald-300" />
                  </motion.div>

                  <motion.div
                    variants={{
                      hover: { y: -2, x: 4 },
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-center justify-between rounded-xl border border-white/20 bg-black/25 px-4 py-3 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <GitBranch size={16} className="text-amber-300" />
                      <span className="text-xs font-semibold text-white">
                        Core Business Logic
                      </span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                  </motion.div>

                  <motion.div
                    variants={{
                      hover: { y: 2, x: -2 },
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-center justify-between rounded-xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <Database size={16} className="text-sky-300" />
                      <span className="text-xs font-semibold text-white">
                        Scalable Data Layer
                      </span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-sky-300" />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ---------------------------------------------------
              CARD 2: CLOUD & DEVOPS (Cols 8–12 | Deep Charcoal)
          --------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <Link
              to="/services/cloud-devops"
              className="group relative flex h-full min-h-[390px] flex-col justify-between overflow-hidden rounded-3xl bg-[var(--dark)] p-7 text-white shadow-xl sm:p-10"
            >
              {/* Subtle Blueprint Grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:32px_32px]"
              />

              {/* Top Row */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2">
                  <Cloud size={18} className="text-[var(--primary)]" />
                  <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white/85">
                    02 • Infrastructure
                  </span>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]">
                  <ArrowUpRight size={19} strokeWidth={2.2} />
                </span>
              </div>

              {/* Animated Cloud Node Cluster */}
              <div className="relative z-10 my-7 flex items-center justify-center gap-3">
                <motion.div
                  variants={{ hover: { y: -4 } }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sky-400"
                >
                  <Server size={20} />
                </motion.div>

                <div className="h-[2px] w-8 bg-gradient-to-r from-sky-400/50 to-[var(--primary)]" />

                <motion.div
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--primary)]/50 bg-[var(--primary)]/15 text-[var(--primary)] shadow-[0_0_30px_rgba(212,32,39,0.25)]"
                >
                  <Cloud size={28} />
                </motion.div>

                <div className="h-[2px] w-8 bg-gradient-to-r from-[var(--primary)] to-emerald-400/50" />

                <motion.div
                  variants={{ hover: { rotate: 180 } }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-400"
                >
                  <RefreshCw size={20} />
                </motion.div>
              </div>

              {/* Bottom Copy */}
              <div className="relative z-10">
                <h3 className="font-[var(--font-display)] text-2xl font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-3xl">
                  Cloud & DevOps Engineering
                </h3>

                <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-white/65">
                  Zero-downtime cloud migrations, automated CI/CD deployment
                  pipelines, and resilient multi-region hosting.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* ---------------------------------------------------
              CARD 3: CYBERSECURITY (Cols 1–5 | Warm Crimson Tint)
          --------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <Link
              to="/services/cybersecurity"
              className="group relative flex h-full min-h-[370px] flex-col justify-between overflow-hidden rounded-3xl border border-[var(--primary)]/20 bg-[var(--light)] p-7 transition-shadow duration-300 hover:shadow-[0_20px_45px_-15px_rgba(212,32,39,0.16)] sm:p-10"
            >
              {/* Top Row */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2 shadow-xs">
                  <Lock size={16} className="text-[var(--primary)]" />
                  <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--dark)]">
                    03 • Security & Risk
                  </span>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--dark)] shadow-xs transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <ArrowUpRight size={19} strokeWidth={2.2} />
                </span>
              </div>

              {/* Concentric Animated Shield Emblem */}
              <div className="relative my-6 flex items-center justify-center">
                <motion.div
                  variants={{ hover: { scale: 1.18, opacity: 0.5 } }}
                  transition={{ duration: 0.5 }}
                  className="absolute h-32 w-32 rounded-full border border-[var(--primary)]/25"
                />
                <motion.div
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.4 }}
                  className="absolute h-24 w-24 rounded-full border border-[var(--primary)]/35 bg-white/60"
                />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25">
                  <ShieldCheck size={30} strokeWidth={2} />
                </div>
              </div>

              {/* Bottom Copy */}
              <div className="relative z-10">
                <h3 className="font-[var(--font-display)] text-2xl font-bold leading-[1.15] tracking-[-0.03em] text-[var(--dark)] sm:text-3xl">
                  Cybersecurity & Compliance
                </h3>

                <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-[var(--text)]">
                  End-to-end encryption, vulnerability assessments, and
                  compliance-ready controls that safeguard sensitive business
                  data.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* ---------------------------------------------------
              CARD 4: MANAGED IT & TEAMS (Cols 6–12 | Crisp White + Slate Panel)
          --------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <Link
              to="/services/managed-it"
              className="group relative flex h-full min-h-[370px] flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:border-gray-300 hover:shadow-[0_20px_50px_-15px_rgba(26,29,31,0.1)] sm:p-10"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-xl bg-[var(--secondary)] px-3.5 py-2">
                  <Users size={17} className="text-[var(--primary)]" />
                  <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--dark)]">
                    04 • Dedicated Operations
                  </span>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[#F8F9FA] text-[var(--dark)] transition-all duration-300 group-hover:rotate-45 group-hover:border-[var(--dark)] group-hover:bg-[var(--dark)] group-hover:text-white">
                  <ArrowUpRight size={19} strokeWidth={2.2} />
                </span>
              </div>

              {/* Split Content: Left Text + Right Interactive Support Pillars */}
              <div className="mt-8 grid grid-cols-1 items-end gap-8 sm:grid-cols-12">
                <div className="sm:col-span-6">
                  <h3 className="font-[var(--font-display)] text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-[var(--dark)] sm:text-4xl">
                    Managed IT & Dedicated Teams
                  </h3>

                  <p className="mt-4 font-[var(--font-body)] text-sm leading-relaxed text-[var(--text)] sm:text-[15px]">
                    Extend your in-house capacity with vetted Machwares
                    engineers and proactive 24/7 infrastructure management.
                  </p>
                </div>

                {/* Staggered Interactive Service Strips */}
                <div className="rounded-2xl bg-[var(--secondary)]/75 p-4 sm:col-span-6">
                  <div className="space-y-2.5">
                    <motion.div
                      variants={{ hover: { x: 5 } }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                      className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-2xs"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--light)] text-[var(--primary)]">
                        <Headset size={17} />
                      </div>
                      <div>
                        <p className="font-[var(--font-display)] text-xs font-bold text-[var(--dark)]">
                          24/7 Proactive Monitoring
                        </p>
                        <p className="text-[11px] text-[var(--text)]">
                          Rapid incident response & maintenance
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{ hover: { x: 5 } }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 22,
                        delay: 0.04,
                      }}
                      className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-2xs"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <Users size={17} />
                      </div>
                      <div>
                        <p className="font-[var(--font-display)] text-xs font-bold text-[var(--dark)]">
                          Embedded Engineering Pods
                        </p>
                        <p className="text-[11px] text-[var(--text)]">
                          Full-stack developers aligned to your roadmap
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM ACTION STRIP
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col justify-between gap-6 rounded-3xl border border-[var(--border)] bg-white p-7 shadow-xs sm:p-9 lg:flex-row lg:items-center"
        >
          <div className="flex items-start gap-4 sm:items-center">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--light)] text-[var(--primary)] sm:flex">
              <Code2 size={22} />
            </div>
            <div>
              <p className="font-[var(--font-display)] text-lg font-bold text-[var(--dark)] sm:text-xl">
                Have a complex technical challenge?
              </p>
              <p className="mt-1 font-[var(--font-body)] text-sm text-[var(--text)]">
                Let’s review your architecture and build a clear roadmap tailored
                to your business goals.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3.5">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-[#F8F9FA] px-5 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--dark)] transition-colors duration-200 hover:border-gray-300 hover:bg-gray-100"
            >
              <span>All Capabilities</span>
              <ArrowRight
                size={15}
                className="text-[var(--primary)] transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-[var(--primary)]/20 transition-all duration-200 hover:bg-[#b81b21]"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;