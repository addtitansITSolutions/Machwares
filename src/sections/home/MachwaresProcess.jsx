
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Compass,
  Target,
  Megaphone,
  ChartNoAxesCombined,
  Users,
  Lightbulb,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    phase: "Discover & Understand",
    title: "Getting to Know Your Brand",
    description:
      "We start by understanding your business, audience, market position and growth objectives. This helps us identify the right opportunities, challenges and channels for your brand.",
    deliverable: "Brand & Audience Insights",
    timeframe: "The Starting Point",
    icon: Compass,
  },
  {
    step: "02",
    phase: "Strategize & Plan",
    title: "Building the Right Marketing Strategy",
    description:
      "With clear goals in place, we develop a focused marketing approach. From audience targeting and channel selection to campaign planning, every activity aligns with your business objectives.",
    deliverable: "Campaign Strategy & Action Plan",
    timeframe: "The Roadmap",
    icon: ClipboardList,
  },
  {
    step: "03",
    phase: "Execute & Activate",
    title: "Bringing Campaigns to Life",
    description:
      "We put the strategy into action through performance campaigns, affiliate partnerships, digital marketing and influencer collaborations—connecting your brand with the audiences that matter.",
    deliverable: "Campaign Execution & Activation",
    timeframe: "Going Live",
    icon: Megaphone,
  },
  {
    step: "04",
    phase: " Measuring, Optimizing & Scaling",
    title: "Learning, Improving & Growing",
    description:
      "We monitor campaign activity, evaluate performance and identify opportunities to improve. By learning from the data, we help refine marketing efforts and support sustainable brand growth.",
    deliverable: "Performance Insights & Optimization",
    timeframe: "Ongoing Growth",
    icon: ChartNoAxesCombined,
  },
];

const ease = [0.22, 1, 0.36, 1];

const MachwaresProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const active = processSteps[activeStep];

  return (
    <section
      id="our-process"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Subtle Top Border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* SECTION HEADER */}
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
                How We Work
              </span>
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
              A thoughtful approach to
              <span className="text-[var(--primary)]">
                {" "}meaningful brand growth.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-[var(--font-body)] text-sm leading-relaxed text-[var(--text)] sm:text-base lg:pb-1">
            Four steps, one goal: measurable growth. We move from audience research to launch to optimization, tracking every campaign against the numbers that matter to your business.
          </p>
        </motion.div>

        {/* MAIN SPLIT LAYOUT */}
        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT COLUMN: CAMPAIGN VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="lg:sticky lg:top-28 lg:col-span-5"
          >
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[#F8F9FA] p-3">

              {/* Marketing Visual Panel */}
              <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl bg-[var(--dark)] p-6 sm:p-8">

                {/* Background Decoration */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.07]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/[0.08]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[var(--primary)]/15 blur-3xl"
                />

                {/* Campaign Journey */}
                <div className="relative z-10 my-0">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-[var(--font-body)] text-xs font-semibold text-white/65">
                      Our growth journey
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[var(--primary)]">
                      0{activeStep + 1} / 04
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {processSteps.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = activeStep === index;
                      const isComplete = index < activeStep;

                      return (
                        <motion.div
                          key={item.step}
                          animate={{
                            opacity: isActive ? 1 : 0.55,
                            x: isActive ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 transition-colors duration-300 ${
                            isActive
                              ? "border-[var(--primary)]/60 bg-[var(--primary)]/15"
                              : "border-white/10 bg-white/[0.04]"
                          }`}
                        >
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                              isActive
                                ? "bg-[var(--primary)] text-white"
                                : "bg-white/10 text-white/65"
                            }`}
                          >
                            <Icon size={17} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="font-mono text-[9px] font-semibold tracking-wider text-white/45">
                              STEP {item.step}
                            </p>
                            <p className="truncate font-[var(--font-display)] text-xs font-bold text-white sm:text-sm">
                              {item.phase}
                            </p>
                          </div>

                          {isActive ? (
                            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--primary)] shadow-[0_0_12px_rgba(212,32,39,0.8)]" />
                          ) : isComplete ? (
                            <CheckCircle2
                              size={16}
                              className="shrink-0 text-emerald-400"
                            />
                          ) : null}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Active Stage */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <span className="block font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                      Current Focus
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={active.step}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="mt-1 block font-[var(--font-display)] text-sm font-bold text-white"
                      >
                        {active.phase}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <span className="rounded-lg bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/80">
                    {active.timeframe}
                  </span>
                </div>
              </div>

              {/* MACHWARES APPROACH STRIP */}
              <div className="mt-3 rounded-2xl bg-white p-5">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3.5">
                  <div className="flex items-center gap-2">
                    <TrendingUp
                      size={17}
                      className="text-[var(--primary)]"
                    />
                    <span className="font-[var(--font-display)] text-sm font-bold text-[var(--dark)]">
                      The Machwares Approach
                    </span>
                  </div>

                  <span className="font-mono text-[11px] font-semibold text-[var(--text)]">
                    Digitally Yours!
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    "Audience-First Thinking",
                    "Strategy-Led Campaigns",
                    "Mobile-First Execution",
                    "Continuous Improvement",
                  ].map((value) => (
                    <div key={value} className="flex items-start gap-2">
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-[var(--primary)]"
                      />
                      <span className="font-[var(--font-body)] text-xs font-medium leading-snug text-[var(--dark)]/85">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-[var(--border)] pt-4">
                  <a
                    href="mailto:info@machwares.com?subject=Marketing%20Inquiry"
                    className="group flex w-full items-center justify-between rounded-xl bg-[var(--dark)] px-5 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[var(--primary)]"
                  >
                    <span>Discuss Your Growth Goals</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: PROCESS ACCORDION */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">

              {processSteps.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeStep === index;

                return (
                  <div
                    key={item.step}
                    className="group py-7 transition-colors sm:py-8"
                  >
                    {/* STEP HEADER */}
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={`process-panel-${item.step}`}
                      onMouseEnter={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <div className="flex min-w-0 items-center gap-4 sm:gap-6">
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

                        <div className="min-w-0">
                          <span className="block font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text)]">
                            {item.phase}
                          </span>

                          <h3
                            className={`mt-0.5 font-[var(--font-display)] text-lg font-bold tracking-[-0.02em] transition-colors sm:text-2xl ${
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
                        {item.timeframe}
                      </span>
                    </button>

                    {/* EXPANDABLE DESCRIPTION */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          id={`process-panel-${item.step}`}
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
                              <span>
                                Focus: {item.deliverable}
                              </span>
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
