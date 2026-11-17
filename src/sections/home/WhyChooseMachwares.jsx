
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Handshake,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Audience-First Approach",
    description:
      "We start by understanding your audience, including their interests, behaviors, and needs, so your brand connects with consumers who matter most.",
    icon: Target,
  },
  {
    number: "02",
    title: "Performance-Focused Thinking",
    description:
      "Every campaign begins with a clear purpose. We focus on measurable outcomes, campaign performance, and opportunities for improvement.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Strategic Partnerships",
    description:
      "We believe in the power of collaboration, building valuable relationships between brands, publishers, and audiences.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Insight-Led Growth",
    description:
      "We use campaign insights and performance data to identify opportunities, refine strategies, and drive growth across mobile and digital channels.",
    icon: Lightbulb,
  },
];

const ease = [0.22, 1, 0.36, 1];

const WhyChooseMachwares = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--secondary)] py-20 sm:py-24 lg:py-28">
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-white/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                The Machwares Difference
              </span>
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
              Why brands choose{" "}
              <span className="text-[var(--primary)]">Machwares.</span>
            </h2>
          </div>

          <p className="max-w-md font-[var(--font-body)] text-sm leading-7 text-[var(--text)] sm:text-base lg:pb-1">
            Impressions don’t pay the bills. We build campaigns around audience data, measurable results, and partnerships that deliver, so every dollar of ad spend pays off.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease,
                }}
                className="group relative flex min-h-[285px] flex-col rounded-2xl border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-xl hover:shadow-black/[0.05] sm:p-8"
              >
                {/* Number and Icon */}
                <div className="mb-9 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-gray-300 transition-colors group-hover:text-[var(--primary)]">
                    / {reason.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--light)] text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-display)] text-lg font-bold leading-snug text-[var(--dark)] sm:text-xl">
                  {reason.title}
                </h3>

                <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                  {reason.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-7 h-[3px] w-0 rounded-full bg-[var(--primary)] transition-all duration-500 group-hover:w-16 sm:left-8" />
              </motion.article>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-2xl font-[var(--font-display)] text-lg font-semibold leading-relaxed text-[var(--dark)] sm:text-xl">
            The right connections can make all the difference.{" "}
            <span className="text-[var(--primary)]">
              Let's make them count.
            </span>
          </p>

          <a
            href="mailto:admin@machwares.com?subject=Marketing%20Inquiry"
            className="group inline-flex shrink-0 items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[var(--dark)] transition-colors hover:text-[var(--primary)]"
          >
            Start a Conversation
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMachwares;
