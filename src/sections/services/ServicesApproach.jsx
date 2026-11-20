
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Rocket,
  ChartNoAxesCombined,
  ArrowUpRight,
  Check,
} from "lucide-react";

const inclusions = [
  "A discovery session to confirm goals, audience, and budget",
  "Tracking and measurement set up before launch",
  "A written campaign plan with defined targets",
  "Regular performance reporting",
  "Ongoing optimization based on results",
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
            <h2 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              What Every Engagement{" "}
              <span className="text-[var(--primary)]">Includes.</span>
            </h2>
          </motion.div>
        </div>

        {/* Engagement inclusions */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inclusions.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--primary)]">
                <Check size={19} strokeWidth={2.5} />
              </span>

              <p className="text-sm leading-7 text-[var(--text)] sm:text-base">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
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
              <p className="max-w-2xl font-[var(--font-display)] text-2xl font-semibold leading-snug text-white sm:text-3xl">
                Not sure which service fits? Tell us your goal, and we will
                recommend where to start.
              </p>
            </div>

            <a
              href="mailto:admin@machwares.com?subject=Marketing%20Inquiry"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-lg bg-[var(--primary)] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 sm:self-center"
            >
              Talk to Our Team
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
