
import { motion } from "framer-motion";
import {
  Network,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const benefits = [
  {
    number: "01",
    icon: Network,
    title: "Build valuable partnerships",
    description:
      "Connect with relevant publishers, creators, and partners who can introduce your brand to audiences that matter.",
  },
  {
    number: "02",
    icon: Users,
    title: "Expand your audience",
    description:
      "Reach new customer segments through trusted partner networks and relevant promotional opportunities.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Focus on performance",
    description:
      "Build campaigns around measurable actions, track partner contributions, and use insights to improve performance.",
  },
];

const WhatIsAffiliateMarketing = () => {
  return (
    <section
      id="affiliate-capabilities"
      className="relative overflow-hidden bg-[var(--secondary)] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end lg:gap-12"
      >
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Understanding Affiliate Marketing
          </p>

          <p className="mt-7 text-base leading-8 text-[var(--text)] sm:text-lg">
            Affiliate marketing connects brands with partners who promote
            their products or services to relevant audiences. Through
            performance-based partnerships, businesses can expand their
            reach, create new opportunities, and measure the value of
            their marketing efforts.
          </p>
        </div>

        <h2 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-right lg:text-6xl">
          Growth powered by{" "}
          <span className="text-[var(--primary)]">
            the right partnerships
          </span>
        </h2>
      </motion.div>


        {/* Benefit Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.number}
                variants={itemVariants}
                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--light)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  <span className="font-[var(--font-display)] text-sm font-semibold tracking-wider text-gray-300">
                    {benefit.number}
                  </span>
                </div>

                <div className="mt-auto pt-12">
                  <h3 className="max-w-xs font-[var(--font-display)] text-2xl font-semibold leading-snug tracking-tight text-[var(--dark)]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--text)] sm:text-base">
                    {benefit.description}
                  </p>
                </div>

                <div className="absolute bottom-8 right-8 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-[var(--border)] text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 flex flex-col gap-6 rounded-2xl bg-[var(--dark)] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-400">
              The Machwares Approach
            </p>

            <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
              Stronger partnerships. Wider reach.{" "}
              <span className="text-red-400">
                Meaningful growth.
              </span>
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-7 text-gray-400 lg:text-base">
            We focus on creating relevant connections that bring brands
            and partners together around shared opportunities.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatIsAffiliateMarketing;
