
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Handshake,
  Users,
  TrendingUp,
} from "lucide-react";
import AffiliateMarketingVisual from "../../../components/servicesvisuls/AffiliateMarketingVisual";

const AffiliateMarketingHero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-28 lg:pt-36">
      <div className="mx-auto max-w-7xl">
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
            <AffiliateMarketingVisual />
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
                Affiliate Marketing
              </span>
            </div>

            <h1 className="font-[var(--font-display)] text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[var(--dark)]">
              Growth is better{" "}
              <span className="text-[var(--primary)]">
                together.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--text)] sm:text-lg sm:leading-9">
              Turn valuable partnerships into meaningful business
              opportunities. Machwares designs and manages affiliate
              programs that connect your brand with relevant publishers,
              expand your reach, and pay partners only for approved results.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#affiliate-capabilities"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 sm:w-auto"
              >
                Explore Capabilities
                <ArrowDownRight size={18} />
              </a>

              <a
                href="mailto:admin@machwares.com?subject=Affiliate%20Marketing%20Inquiry"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-transparent px-7 py-4 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto"
              >
                Let’s Talk
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Key Focus Areas */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-[var(--border)] pt-7">
              {[
                "Strategic partnerships",
                "Audience expansion",
                "Performance-driven growth",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  <span className="text-xs font-semibold text-[var(--dark)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateMarketingHero;