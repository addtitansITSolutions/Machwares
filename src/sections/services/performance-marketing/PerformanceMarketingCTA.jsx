
import { motion } from "framer-motion";
import { ArrowUpRight, Target, TrendingUp } from "lucide-react";

const PerformanceMarketingCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--dark)] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[var(--primary)] blur-[130px]"
      />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-red-900/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid items-end gap-12 lg:grid-cols-[1fr_auto]"
        >
          {/* Main Content */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                Let’s Move Forward
              </span>
            </div>

            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Ready to make your marketing{" "}
              <span className="text-red-400">work harder?</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
              Let’s talk about your goals, understand your audience, and explore
              how a focused performance marketing strategy can help your brand
              move forward.
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:admin@machwares.com?subject=Performance%20Marketing%20Inquiry"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--primary)] px-8 py-5 text-sm font-bold text-white shadow-lg shadow-red-950/20 transition-colors hover:bg-red-700 sm:w-fit"
          >
            Discuss Your Goals
            <ArrowUpRight size={19} />
          </motion.a>
        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-20 h-px origin-left bg-white/15"
        />

        {/* Bottom Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3 text-white/70">
            <Target size={19} className="text-red-400" />
            <span className="text-sm font-medium">
              Focused on your audience
            </span>
          </div>

          <div className="flex items-center gap-3 text-white/70">
            <TrendingUp size={19} className="text-red-400" />
            <span className="text-sm font-medium">
              Driven by meaningful outcomes
            </span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
            Machwares · Performance Marketing
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMarketingCTA;
