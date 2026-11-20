
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Smartphone,
  Target,
  TrendingUp,
} from "lucide-react";
import MobileMarketingVisual from "../../../components/servicesvisuls/MobileMarketingVisual";

const MobilePerformanceMarketingHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-40">
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
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
            <MobileMarketingVisual />
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
            <div className="mb-6 inline-flex items-center gap-2 py-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                Mobile Performance Marketing
              </span>
            </div>

            <h1 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-[1.15] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Grow your app with{" "}
              <span className="text-[var(--primary)]">
                users who take action.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--text)] sm:text-lg">
              Connect your brand with mobile-first audiences through focused
              advertising and user acquisition campaigns. We help businesses
              reach relevant users on iOS and Android, encourage valuable
              in-app actions, and optimize campaigns around measurable
              outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#mobile-performance-capabilities"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                Explore Capabilities
                <ArrowDownRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="mailto:admin@machwares.com?subject=Mobile%20Performance%20Marketing%20Inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] px-6 py-4 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Let’s Talk
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Focus Points */}
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[var(--border)] pt-7">
              <div className="flex items-center gap-2">
                <Smartphone size={17} className="text-[var(--primary)]" />
                <span className="text-xs font-semibold text-[var(--dark)]">
                  Mobile-First Reach
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Target size={17} className="text-[var(--primary)]" />
                <span className="text-xs font-semibold text-[var(--dark)]">
                  Targeted Acquisition
                </span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp size={17} className="text-[var(--primary)]" />
                <span className="text-xs font-semibold text-[var(--dark)]">
                  Measurable Growth
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobilePerformanceMarketingHero;
