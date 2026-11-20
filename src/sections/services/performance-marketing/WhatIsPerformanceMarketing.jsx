
import { motion } from "framer-motion";
import {
  MousePointerClick,
  Target,
  ChartNoAxesCombined,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Target,
    title: "Reach the right audience",
    description:
      "Connect your brand with audiences whose interests, needs, and behaviors align with what you offer.",
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Focus on meaningful actions",
    description:
      "Build campaigns around valuable actions such as leads, purchases, and sign-ups, measured from the first click.",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Optimize for better outcomes",
    description:
      "Use campaign data to see what works, then move budget toward the audiences, ads, and channels that perform.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhatIsPerformanceMarketing = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--secondary)] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Understanding Performance Marketing
              </span>
            </div>

            <h2 className="max-w-xl font-[var(--font-display)] text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Marketing with a{" "}
              <span className="text-[var(--primary)]">purpose.</span>
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="text-base leading-8 text-[var(--text)] sm:text-lg sm:leading-9">
              Performance marketing is an approach built around measurable
              campaign outcomes. Instead of focusing only on exposure, it
              puts attention on the actions that move a business forward.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--text)] sm:text-lg sm:leading-9">
              At Machwares, we pair strategy with hands-on campaign management.
              Every campaign starts with a defined target, runs with conversion
              tracking in place, and is adjusted as results come in.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -7 }}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-7 transition-shadow duration-300 hover:shadow-xl sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <span className="font-[var(--font-display)] text-sm font-bold tracking-wider text-gray-300">
                    {feature.number}
                  </span>
                </div>

                <div className="mt-auto pt-12">
                  <h3 className="max-w-[260px] font-[var(--font-display)] text-xl font-semibold tracking-tight text-[var(--dark)] sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--text)]">
                    {feature.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="absolute bottom-8 right-7 text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)] sm:bottom-9 sm:right-9"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIsPerformanceMarketing;