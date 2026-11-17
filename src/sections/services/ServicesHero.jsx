
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Target,
  Network,
  TrendingUp,
  Smartphone,
} from "lucide-react";

const serviceHighlights = [
  {
    icon: Target,
    title: "Performance",
    subtitle: "Results that matter",
    className: "left-0 top-0",
  },
  {
    icon: Network,
    title: "Partnerships",
    subtitle: "Connections that count",
    className: "right-0 top-12",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    subtitle: "Built around your goals",
    className: "bottom-12 left-0",
  },
  {
    icon: Smartphone,
    title: "Mobile Reach",
    subtitle: "Reach users everywhere",
    className: "bottom-0 right-0",
  },
];

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 sm:px-10 sm:pb-24 sm:pt-36 lg:px-16 lg:pb-28 lg:pt-40">
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-red-50/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-gray-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10"
        >
          <h1 className="max-w-[760px] font-[var(--font-display)] text-[clamp(2.8rem,5.5vw,4.2rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[var(--dark)]">
            Marketing built to {" "}
            <span className="relative inline-block text-[var(--primary)]">
             create meaningful growth.
            </span>
          </h1>

          <p className="mt-7 max-w-[590px] text-base leading-8 text-[var(--text)] sm:text-lg sm:leading-9">
            From reaching the right audience to building valuable
            partnerships, we bring strategy and performance together
            to help brands create stronger connections and lasting
            opportunities.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#our-services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 sm:w-auto"
            >
              Explore Our Services
              <ArrowDownRight size={18} />
            </a>

            <a
              href="mailto:admin@machwares.com?subject=Marketing%20Inquiry"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-transparent px-7 py-4 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto flex w-full max-w-[570px] items-center justify-center py-8 sm:py-12"
        >
          <div className="relative aspect-square w-full max-w-[510px]">
            {/* Decorative circles */}
            <div className="absolute inset-[8%] rounded-full border border-dashed border-gray-300/80" />
            <div className="absolute inset-[19%] rounded-full border border-gray-200" />
            <div className="absolute inset-[30%] rounded-full bg-red-50/70" />

            {/* Center */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] bg-[var(--dark)] shadow-[0_25px_60px_rgba(26,29,31,0.2)] sm:h-44 sm:w-44"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-2xl font-bold text-white sm:h-16 sm:w-16">
                M
              </div>
              <span className="mt-3 text-xs font-bold tracking-[0.2em] text-white">
                MACHWARES
              </span>
              <span className="mt-1 text-[10px] text-gray-400">
                Growth through connection
              </span>
            </motion.div>

            {/* Connection lines */}
            <svg
              viewBox="0 0 510 510"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                d="M255 255 L95 90 M255 255 L415 115 M255 255 L90 405 M255 255 L420 395"
                stroke="#D42027"
                strokeOpacity="0.25"
                strokeWidth="1.5"
                strokeDasharray="5 7"
              />
              <circle cx="95" cy="90" r="5" fill="#D42027" />
              <circle cx="415" cy="115" r="5" fill="#D42027" />
              <circle cx="90" cy="405" r="5" fill="#D42027" />
              <circle cx="420" cy="395" r="5" fill="#D42027" />
            </svg>

            {/* Floating service cards */}
            {serviceHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35 + index * 0.12,
                  }}
                  className={`absolute z-20 flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white p-3 shadow-[0_12px_35px_rgba(26,29,31,0.07)] sm:gap-4 sm:p-4 ${item.className}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[var(--primary)] sm:h-12 sm:w-12">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[var(--dark)] sm:text-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[10px] text-[var(--text)] sm:text-xs">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
