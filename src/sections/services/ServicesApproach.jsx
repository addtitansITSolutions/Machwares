
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Rocket,
  ChartNoAxesCombined,
  ArrowUpRight,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Start with the bigger picture.",
    description:
      "We learn about your brand, audience, market, and business objectives to understand what meaningful growth looks like for you.",
    icon: Search,
    points: ["Audience insights", "Market understanding", "Growth objectives"],
  },
  {
    number: "02",
    title: "Strategize",
    subtitle: "Build a focused direction.",
    description:
      "We identify relevant opportunities, select suitable channels, and develop a strategy aligned with your goals.",
    icon: Lightbulb,
    points: ["Channel selection", "Campaign planning", "Growth strategy"],
  },
  {
    number: "03",
    title: "Activate",
    subtitle: "Put the strategy into action.",
    description:
      "We bring campaigns and partnerships to life through focused execution, audience targeting, and coordinated marketing activities.",
    icon: Rocket,
    points: ["Campaign execution", "Audience engagement", "Partner activation"],
  },
  {
    number: "04",
    title: "Optimize",
    subtitle: "Keep moving forward.",
    description:
      "We evaluate campaign performance, learn from insights, and identify opportunities to improve results over time.",
    icon: ChartNoAxesCombined,
    points: ["Performance insights", "Continuous refinement", "Growth opportunities"],
  },
];

const ServicesApproach = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              {/* <span className="h-[2px] w-8 bg-[var(--primary)]" /> */}
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                How We Work
              </span>
            </div>

            <h2 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              A clear approach to{" "}
              <span className="text-[var(--primary)]">meaningful growth.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-8 text-[var(--text)] lg:ml-auto lg:text-lg"
          >
            Effective marketing takes more than choosing a channel. It takes
            understanding the opportunity, making informed decisions, and
            continuously working towards better outcomes.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-[39px] hidden h-px bg-gray-200 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full origin-left bg-[var(--primary)]"
            />
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  {/* Icon marker */}
                  <div className="relative z-10 mb-8 flex h-[78px] w-[78px] items-center justify-center rounded-2xl border border-gray-200 bg-white text-[var(--primary)] shadow-[0_8px_30px_rgba(26,29,31,0.04)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={29} strokeWidth={1.6} />

                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[var(--dark)] text-[9px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Step content */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--primary)]">
                      Step {step.number}
                    </p>

                    <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--dark)]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[var(--dark)]">
                      {step.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[var(--text)]">
                      {step.description}
                    </p>

                    <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2.5 text-xs text-[var(--text)]"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[var(--primary)]">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-2xl bg-[var(--dark)] px-7 py-9 sm:px-10 sm:py-11"
        >
          <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-2 -top-16 h-48 w-48 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                The Machwares Approach
              </p>
              <h3 className="max-w-2xl font-[var(--font-display)] text-2xl font-semibold leading-snug text-white sm:text-3xl">
                Thoughtful strategy. Focused execution.{" "}
                <span className="text-red-300">Continuous progress.</span>
              </h3>
            </div>

            <a
              href="mailto:admin@machwares.com?subject=Marketing%20Inquiry"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-lg bg-[var(--primary)] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 sm:self-center"
            >
              Discuss Your Goals
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesApproach;
