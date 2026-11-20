
import { motion } from "framer-motion";
import {
  Users,
  Handshake,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const capabilities = [
  {
    number: "01",
    icon: Users,
    title: "Choose the right creators",
    description:
      "Match your brand with creators whose audiences, values, and content style fit what you offer, vetted for engagement quality and brand safety.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Tell your story authentically",
    description:
      "Develop creative briefs that give creators room to present your brand in their own voice, with review and approval before anything is published.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Learn from every collaboration",
    description:
      "Track reach, engagement, and clicks through unique links and promo codes, then apply what each creator delivers to the next round.",
  },
];

const WhatIsInfluencerMarketing = () => {
  return (
    <section
      id="influencer-capabilities"
      className="bg-[var(--secondary)] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end lg:gap-12"
        >
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Understanding Influencer Marketing
            </p>

            <p className="mt-7 text-base leading-8 text-[var(--text)] sm:text-lg">
              Influencer marketing places your brand in front of audiences
              through creators they already follow and trust. Instead of
              interrupting people with ads, a creator introduces your product
              within content their audience chooses to watch and read.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--text)] sm:text-lg">
              At Machwares, we choose creators for audience fit rather than
              follower count alone, manage each collaboration from brief to
              publication, and review content before it goes live, including
              clear disclosure of the brand relationship.
            </p>
          </div>

          <h2 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-right lg:text-6xl">
            Turn creator trust into{" "}
            <span className="text-[var(--primary)]">
              brand interest.
            </span>
          </h2>
        </motion.div>

        {/* Capability Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                variants={itemVariants}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-xl hover:shadow-black/5 sm:p-8"
              >
                {/* Number and Icon */}
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-[var(--font-display)] text-sm font-bold tracking-widest text-gray-300">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--light)] text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="max-w-xs font-[var(--font-display)] text-xl font-semibold leading-snug text-[var(--dark)] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text)] sm:text-base">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-9 flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Influencer Marketing
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-[var(--primary)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 flex flex-col gap-5 rounded-2xl bg-[var(--dark)] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-400">
              The Machwares Approach
            </p>

            <h3 className="font-[var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
              Right creators. Authentic content.{" "}
              <span className="text-red-400">
                Genuine connection.
              </span>
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-400">
              We pair careful creator selection with clear briefs and honest
              disclosure, so every collaboration earns attention and protects
              your brand’s credibility.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-white">
            <span>Meaningful Connections</span>
            <ArrowUpRight
              size={19}
              className="text-[var(--primary)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsInfluencerMarketing;
