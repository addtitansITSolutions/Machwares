
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Target,
  Globe,
  TrendingUp,
} from "lucide-react";
import DigitalMarketingVisual from "../../../components/servicesvisuls/DigitalMarketingVisual";

const DigitalMarketingHero = () => {
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
            <DigitalMarketingVisual />
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-[var(--light)] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                Digital Marketing
              </span>
            </div>

            <h1 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-[1.15] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              A stronger presence wherever your customers search and scroll.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--text)] sm:text-lg">
              Machwares builds search visibility, social media presence,
              and content programs that help customers across the country
              find, trust, and choose your brand.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#digital-capabilities"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                Explore Capabilities
                <ArrowDownRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="mailto:admin@machwares.com?subject=Digital%20Marketing%20Inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] px-6 py-4 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Let's Talk
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Focus Points */}
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[var(--border)] pt-7">
              <div className="flex items-center gap-2">
                <Target size={17} className="text-[var(--primary)]" />
                <span className="text-xs font-semibold text-[var(--dark)]">
                  Strategic Reach
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Globe size={17} className="text-[var(--primary)]" />
                <span className="text-xs font-semibold text-[var(--dark)]">
                  Digital Presence
                </span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp size={17} className="text-[var(--primary)]" />
                <span className="text-xs font-semibold text-[var(--dark)]">
                  Meaningful Growth
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingHero;