
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Smartphone,
  Target,
  TrendingUp,
} from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile-First Reach",
  },
  {
    icon: Target,
    title: "Focused User Acquisition",
  },
  {
    icon: TrendingUp,
    title: "Performance-Led Growth",
  },
];

const MobilePerformanceMarketingCTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--dark)] py-24 sm:py-28 lg:py-32">
      {/* Background Accent */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--primary)] opacity-[0.12] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Let's Move Your Mobile Growth Forward
          </p>

          <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-[1.15] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
            Ready to reach more{" "}
            <span className="text-red-400">
              mobile users?
            </span>
          </h2>

          {/* Description + CTA Button */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end">
            <p className="max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Let's explore how focused mobile campaigns can help your
              business connect with relevant audiences, attract valuable
              users, and work towards measurable marketing objectives.
            </p>

            <a
              href="mailto:admin@machwares.com?subject=Mobile%20Performance%20Marketing%20Inquiry"
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
          className="mt-20 border-t border-white/10 pt-9"
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-red-400">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-medium text-gray-300">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MobilePerformanceMarketingCTA;
