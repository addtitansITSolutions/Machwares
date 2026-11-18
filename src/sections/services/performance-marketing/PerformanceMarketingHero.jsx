
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Target,
  TrendingUp,
  ChartNoAxesCombined,
} from "lucide-react";
import PerformanceMarketingVisual from "../../../components/servicesvisuls/PerformanceMarketingVisual";

const highlights = [
  {
    icon: Target,
    title: "Audience-focused",
    description: "Reach the people who matter.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data-driven",
    description: "Make informed campaign decisions.",
  },
  {
    icon: TrendingUp,
    title: "Growth-oriented",
    description: "Improve performance continuously.",
  },
];

const PerformanceMarketingHero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-28 lg:pt-36">
      <div className="mx-auto max-w-7xl">

        {/* Main Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Animation */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center"
          >
            <PerformanceMarketingVisual />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 lg:pl-2"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Performance Marketing
              </span>
            </div>

            <h1 className="font-[var(--font-display)] text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[var(--dark)]">
              Make every marketing effort{" "}
              <span className="text-[var(--primary)]">
                count.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--text)] sm:text-lg sm:leading-9">
              Your marketing should do more than create visibility.
              It should create opportunities for growth. We bring
              together audience insights, focused campaign strategies,
              and ongoing optimization to help your brand achieve
              meaningful results.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#performance-capabilities"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 sm:w-auto"
              >
                Explore Capabilities
                <ArrowDownRight size={18} />
              </a>

              <a
                href="mailto:admin@machwares.com?subject=Performance%20Marketing%20Inquiry"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-transparent px-7 py-4 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto"
              >
                Let's Talk
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Highlights */}
        {/* <div className="mt-20 grid gap-8 border-t border-[var(--border)] pt-9 sm:grid-cols-3 sm:gap-6 lg:mt-24">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.35 + index * 0.12,
                }}
                className="flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--primary)]">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[var(--dark)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--text)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div> */}

      </div>
    </section>
  );
};

export default PerformanceMarketingHero;
