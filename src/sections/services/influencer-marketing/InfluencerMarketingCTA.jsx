
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  Handshake,
  TrendingUp,
} from "lucide-react";

const highlights = [
  {
    icon: Users,
    label: "Vetted Creators",
  },
  {
    icon: Handshake,
    label: "Transparent Disclosure",
  },
  {
    icon: TrendingUp,
    label: "Audience Trust",
  },
];

const InfluencerMarketingCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--dark)] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">

      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--primary)]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Let’s Introduce Your Brand
          </p>

          <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Ready to work with creators{" "}
            <span className="text-[var(--primary)]">
              your customers trust?
            </span>
          </h2>

          {/* Description and CTA Button */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end">
            <p className="max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Let’s explore how the right creator collaborations can
              introduce your brand to new audiences, build credibility,
              and turn attention into interest in what you offer.
            </p>

            <a
              href="mailto:admin@machwares.com?subject=Influencer%20Marketing%20Inquiry"
              className="group mt-2 inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[var(--primary)] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl hover:shadow-red-900/20 sm:ml-auto"
            >
              Discuss Your Growth Goals
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>

        {/* Bottom Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[var(--primary)]">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                <span className="text-sm font-semibold text-white/80">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default InfluencerMarketingCTA;
