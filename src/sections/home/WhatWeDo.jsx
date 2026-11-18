
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ChartNoAxesCombined,
  Handshake,
  Megaphone,
  MousePointerClick,
  Search,
  Share2,
  Target,
  TrendingUp,
  Users,
  Globe2,
} from "lucide-react";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8F9FA] py-24 sm:py-28 lg:py-32 lg:pb-10"
    >
      {/* Top Divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* SECTION HEADER */}
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
              Marketing that connects.
              <span className="text-[var(--primary)]">
                {" "}Growth that leads.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-[var(--font-body)] text-sm leading-relaxed text-[var(--text)] sm:text-base lg:pb-1">
            From reaching the right audience to driving measurable action, Machwares combines strategic marketing, publisher partnerships, and mobile-first performance campaigns to help brands move forward.
          </p>
        </motion.div>

        {/* SERVICES BENTO GRID */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">

          {/* CARD 1: PERFORMANCE MARKETING */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group relative lg:col-span-7"
          >
            <div className="relative flex h-full min-h-[390px] flex-col justify-between overflow-hidden rounded-3xl bg-[var(--primary)] p-7 text-white shadow-[0_20px_50px_-15px_rgba(212,32,39,0.3)] sm:p-10">

              {/* Decorative Geometry */}
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
                  <Target size={18} />
                  <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em]">
                    01 • Performance & Growth
                  </span>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-md transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={19} strokeWidth={2.2} />
                </span>
              </div>

              {/* Main Content */}
              <div className="relative z-10 mt-8 grid grid-cols-1 items-end gap-8 sm:grid-cols-12">
                <div className="sm:col-span-7">
                  <h3 className="font-[var(--font-display)] text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl">
                    Performance Marketing
                  </h3>

                  <p className="mt-4 font-[var(--font-body)] text-sm leading-relaxed text-white/85 sm:text-[15px]">
                    Turn marketing investment into measurable results through targeted advertising, strategic campaigns, and data-led optimization focused on return on ad spend.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Paid Campaigns",
                      "Audience Targeting",
                      "Conversion Growth",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-black/20 px-3 py-1 font-[var(--font-body)] text-xs font-medium text-white/95"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Campaign Performance Visual */}
                <div className="hidden sm:col-span-5 sm:flex sm:flex-col sm:gap-2.5">
                  <motion.div
                    variants={{ hover: { y: -6, x: -4 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="rounded-xl border border-white/25 bg-white/15 p-4 backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users size={15} />
                        <span className="text-xs font-semibold">
                          Audience Reach
                        </span>
                      </div>
                      <TrendingUp size={16} className="text-emerald-300" />
                    </div>
                    <div className="mt-4 flex h-7 items-end gap-1.5">
                      {[35, 55, 42, 75, 60, 90, 100].map((height, i) => (
                        <div
                          key={i}
                          style={{ height: `${height}%` }}
                          className="flex-1 rounded-t-sm bg-white/75"
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{ hover: { y: -2, x: 4 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-center justify-between rounded-xl border border-white/20 bg-black/25 px-4 py-3 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <MousePointerClick size={16} />
                      <span className="text-xs font-semibold">
                        Campaign Engagement
                      </span>
                    </div>
                    <CheckIcon />
                  </motion.div>

                  <motion.div
                    variants={{ hover: { y: 2, x: -2 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-center justify-between rounded-xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <ChartNoAxesCombined size={16} />
                      <span className="text-xs font-semibold">
                        Performance Insights
                      </span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: AFFILIATE MARKETING */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative lg:col-span-5"
          >
            <div className="relative flex h-full min-h-[390px] flex-col justify-between overflow-hidden rounded-3xl bg-[var(--dark)] p-7 text-white shadow-xl sm:p-10">

              {/* Subtle Background Pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:32px_32px]"
              />

              {/* Top Row */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2">
                  <Handshake size={18} className="text-[var(--primary)]" />
                  <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white/85">
                    02 • Strategic Partnerships
                  </span>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]">
                  <ArrowUpRight size={19} strokeWidth={2.2} />
                </span>
              </div>

              {/* Partnership Network Illustration */}
              <div className="relative z-10 my-7 flex items-center justify-center">
                <div className="absolute h-36 w-36 rounded-full border border-dashed border-white/15" />
                <div className="absolute h-24 w-24 rounded-full border border-white/10" />

                <motion.div
                  variants={{ hover: { scale: 1.08, rotate: -8 } }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_0_35px_rgba(212,32,39,0.3)]"
                >
                  <Handshake size={29} />
                </motion.div>

                <motion.div
                  variants={{ hover: { y: -6 } }}
                  className="absolute left-[17%] top-2 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-rose-300"
                >
                  <Users size={19} />
                </motion.div>

                <motion.div
                  variants={{ hover: { y: 6 } }}
                  className="absolute right-[17%] top-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-amber-300"
                >
                  <Globe2 size={19} />
                </motion.div>

                <motion.div
                  variants={{ hover: { x: -5 } }}
                  className="absolute bottom-0 left-[25%] flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-emerald-300"
                >
                  <TrendingUp size={18} />
                </motion.div>

                <motion.div
                  variants={{ hover: { x: 5 } }}
                  className="absolute bottom-0 right-[25%] flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sky-300"
                >
                  <Share2 size={18} />
                </motion.div>
              </div>

              {/* Bottom Copy */}
              <div className="relative z-10">
                <h3 className="font-[var(--font-display)] text-2xl font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-3xl">
                  Affiliate Marketing
                </h3>

                <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-white/65">
                  Build valuable partnerships with publishers and affiliates who expand your reach and drive performance-based growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: DIGITAL MARKETING */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative lg:col-span-5"
          >
            <div className="relative flex h-full min-h-[370px] flex-col justify-between overflow-hidden rounded-3xl border border-[var(--primary)]/20 bg-[var(--light)] p-7 transition-shadow duration-300 hover:shadow-[0_20px_45px_-15px_rgba(212,32,39,0.16)] sm:p-10">

              {/* Top Row */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2 shadow-sm">
                  <Megaphone size={16} className="text-[var(--primary)]" />
                  <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--dark)]">
                    03 • Digital Presence
                  </span>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--dark)] shadow-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <ArrowUpRight size={19} strokeWidth={2.2} />
                </span>
              </div>

              {/* Digital Ecosystem Illustration */}
              <div className="relative my-6 flex items-center justify-center">
                <motion.div
                  variants={{ hover: { scale: 1.12, rotate: 8 } }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25"
                >
                  <Globe2 size={29} />
                </motion.div>

                <motion.div
                  variants={{ hover: { scale: 1.15, opacity: 0.5 } }}
                  transition={{ duration: 0.5 }}
                  className="absolute h-32 w-32 rounded-full border border-dashed border-[var(--primary)]/35"
                />
                <div className="absolute h-24 w-24 rounded-full border border-[var(--primary)]/20" />

                <motion.div
                  variants={{ hover: { x: -5, y: -5 } }}
                  className="absolute left-[22%] top-0 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--primary)]/15 bg-white text-[var(--primary)] shadow-sm"
                >
                  <Search size={17} />
                </motion.div>

                <motion.div
                  variants={{ hover: { x: 5, y: -5 } }}
                  className="absolute right-[22%] top-0 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--primary)]/15 bg-white text-[var(--primary)] shadow-sm"
                >
                  <Share2 size={17} />
                </motion.div>

                <motion.div
                  variants={{ hover: { y: 5 } }}
                  className="absolute bottom-0 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--primary)]/15 bg-white text-[var(--primary)] shadow-sm"
                >
                  <Megaphone size={17} />
                </motion.div>
              </div>

              {/* Bottom Copy */}
              <div className="relative z-10">
                <h3 className="font-[var(--font-display)] text-2xl font-bold leading-[1.15] tracking-[-0.03em] text-[var(--dark)] sm:text-3xl">
                  Digital Marketing
                </h3>

                <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-[var(--text)]">
                  Strengthen your online presence through a connected digital approach across search visibility, social media, and content marketing. 
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: INFLUENCER MARKETING */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="group relative lg:col-span-7"
          >
            <div className="relative flex h-full min-h-[370px] flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:border-gray-300 hover:shadow-[0_20px_50px_-15px_rgba(26,29,31,0.1)] sm:p-10">

              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-xl bg-[var(--secondary)] px-3.5 py-2">
                  <Users size={17} className="text-[var(--primary)]" />
                  <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--dark)]">
                    04 • Mobile Growth
                  </span>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[#F8F9FA] text-[var(--dark)] transition-all duration-300 group-hover:rotate-45 group-hover:border-[var(--dark)] group-hover:bg-[var(--dark)] group-hover:text-white">
                  <ArrowUpRight size={19} strokeWidth={2.2} />
                </span>
              </div>

              {/* Split Content */}
              <div className="mt-8 grid grid-cols-1 items-end gap-8 sm:grid-cols-12">
                <div className="sm:col-span-6">
                  <h3 className="font-[var(--font-display)] text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-[var(--dark)] sm:text-4xl">
                    Mobile Performance Marketing
                  </h3>

                  <p className="mt-4 font-[var(--font-body)] text-sm leading-relaxed text-[var(--text)] sm:text-[15px]">
                    Reach consumers where they spend most of their time: on their phones. We drive app installs, in-app actions, and long-term mobile growth through data-driven user acquisition across iOS and Android.
                  </p>
                </div>

                {/* Creator Partnership Panels */}
                <div className="rounded-2xl bg-[var(--secondary)]/75 p-4 sm:col-span-6">
                  <div className="space-y-2.5">
                    <motion.div
                      variants={{ hover: { x: 5 } }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                      className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--light)] text-[var(--primary)]">
                        <Users size={17} />
                      </div>
                      <div>
                        <p className="font-[var(--font-display)] text-xs font-bold text-[var(--dark)]">
                          App User Acquisition
                        </p>
                        <p className="text-[11px] text-[var(--text)]">
                          Driving installs from high-intent mobile users
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
                      className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-[var(--primary)]">
                        <Megaphone size={17} />
                      </div>
                      <div>
                        <p className="font-[var(--font-display)] text-xs font-bold text-[var(--dark)]">
                          In-App Performance
                        </p>
                        <p className="text-[11px] text-[var(--text)]">
                          Optimizing for actions that generate revenue
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ACTION STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col justify-between gap-6 rounded-3xl border border-[var(--border)] bg-white p-7 shadow-sm sm:p-9 lg:flex-row lg:items-center"
        >
          <div className="flex items-start gap-4 sm:items-center">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--light)] text-[var(--primary)] sm:flex">
              <TrendingUp size={22} />
            </div>

            <div>
              <p className="font-[var(--font-display)] text-lg font-bold text-[var(--dark)] sm:text-xl">
                Ready to reach the right audience?
              </p>
              <p className="mt-1 font-[var(--font-body)] text-sm text-[var(--text)]">
                Let’s discuss how the right marketing strategy can move your brand forward.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3.5">
            <a
              href="mailto:admin@machwares.com"
              className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-[#F8F9FA] px-5 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--dark)] transition-colors duration-200 hover:border-gray-300 hover:bg-gray-100"
            >
              <span>Talk to Our Team</span>
              <ArrowRight
                size={15}
                className="text-[var(--primary)] transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="mailto:admin@machwares.com?subject=Marketing%20Partnership%20Inquiry"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-[var(--primary)]/20 transition-all duration-200 hover:bg-[#b81b21]"
            >
              <span>Let's Grow Together</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Small decorative status indicator
const CheckIcon = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
  </span>
);

export default WhatWeDo;
