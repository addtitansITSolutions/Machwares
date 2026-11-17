
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Network,
  TrendingUp,
  Quote,
} from "lucide-react";

const growthPillars = [
  {
    icon: Target,
    label: "01 / Accountability",
    title: "Measured Past the Click",
    description:
      "We track installs, in-app actions, and revenue against your target cost per acquisition and return on ad spend, not impressions or reach.",
  },
  {
    icon: Network,
    label: "02 / Allocation",
    title: "Budget Follows Performance",
    description:
      "Performance, affiliate, digital, and mobile campaigns work toward one set of goals, so spend shifts to the channels and partners that deliver.",
  },
];

const ease = [0.22, 1, 0.36, 1];

const GrowthPhilosophy = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--light)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 max-w-3xl lg:mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              The Way We Think
            </span>
          </div>

          <h2 className="font-[var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-[var(--dark)] sm:text-5xl lg:text-6xl">
            We don’t chase traffic.
            <br />
            <span className="text-[var(--primary)]">
               We chase results.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text)] sm:text-lg">
            We evaluate our campaigns by what happens after the click: the install, the sign-up, the purchase. That standard shapes how we plan, partner, and optimize.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-12">

          {/* Featured Card */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease }}
            className="group relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[var(--dark)] p-8 text-white sm:p-10 lg:col-span-7 lg:p-12"
          >
            {/* Decorative Accent */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--primary)]/20 blur-3xl transition-transform duration-700 group-hover:scale-125"
            />

            <div className="relative">
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-white">
                <Quote size={25} />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                Our Perspective
              </span>

              <h3 className="mt-6 max-w-xl font-[var(--font-display)] text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-[2.7rem]">
                Real users.
                <br />
                 Real actions.
                <br />
                <span className="text-[var(--primary)]">
                   Real return.
                </span>
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                Machwares combines paid performance campaigns, affiliate publishers, and mobile user acquisition into one accountable program, with every channel held to the same cost and revenue targets.
              </p>
            </div>

            <div className="relative mt-12 flex items-center justify-between border-t border-white/10 pt-7">
              <div>
                <p className="font-[var(--font-display)] text-lg font-bold">
                  Machwares
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Digital Marketing & Growth
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]">
                <ArrowUpRight size={19} />
              </div>
            </div>
          </motion.article>

          {/* Supporting Cards */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {growthPillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease,
                  }}
                  className="group flex flex-1 flex-col justify-between rounded-[2rem] border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04] sm:p-9"
                >
                  <div>
                    <div className="mb-7 flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.14em] text-[var(--primary)]">
                        {item.label}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--light)] text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </div>

                    <h3 className="font-[var(--font-display)] text-xl font-bold text-[var(--dark)] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--text)]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 h-[3px] w-10 rounded-full bg-[var(--primary)] transition-all duration-500 group-hover:w-20" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <TrendingUp
              size={22}
              className="shrink-0 text-[var(--primary)]"
            />
            <p className="font-[var(--font-display)] text-lg font-semibold text-[var(--dark)] sm:text-xl">
              Let's turn possibilities into opportunities.
            </p>
          </div>

          <a
            href="mailto:info@machwares.com?subject=Marketing%20Inquiry"
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.13em] text-[var(--dark)] transition-colors hover:text-[var(--primary)]"
          >
            Let's Connect
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default GrowthPhilosophy;
