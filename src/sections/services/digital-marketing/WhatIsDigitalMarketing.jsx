
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Target,
  ArrowUpRight,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
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
    icon: Globe,
    title: "Search engine optimization (SEO)",
    description:
      "Technical, on-page, and content SEO.",
  },
  {
    number: "02",
    icon: Users,
    title: "Content marketing",
    description:
      "Blog posts, guides, and landing page copy.",
  },
  {
    number: "03",
    icon: Target,
    title: "Social media management",
    description:
      "Social media strategy, content calendars, and management.",
  },
];

const WhatIsDigitalMarketing = () => {
  return (
    <section
      id="digital-capabilities"
      className="relative overflow-hidden bg-[var(--secondary)] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* What We Measure */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              What We Measure
            </p>

            <p className="text-base leading-8 text-[var(--text)] sm:text-lg">
              Organic traffic, keyword rankings, engagement, and the leads
              or conversions that come from organic and social channels.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Best For
            </p>

            <p className="text-base leading-8 text-[var(--text)] sm:text-lg">
              Brands that want lasting visibility in search and social
              media, beyond paid advertising.
            </p>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            How It Works
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Audit",
                description:
                  "We review your website, search visibility, and social presence.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "We set priorities, topics, and a publishing plan.",
              },
              {
                number: "03",
                title: "Create & Publish",
                description:
                  "We produce and publish content and manage your social channels.",
              },
              {
                number: "04",
                title: "Review & Refine",
                description:
                  "We report monthly and adjust the plan based on results.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-7"
              >
                <span className="font-[var(--font-display)] text-sm font-semibold tracking-wider text-[var(--primary)]">
                  {step.number}
                </span>

                <h3 className="mt-6 font-[var(--font-display)] text-xl font-semibold leading-snug text-[var(--dark)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-2xl bg-[var(--dark)] p-8 sm:p-10 lg:p-12"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            What’s Included
          </p>

          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {[
              "Search engine optimization (SEO): technical, on-page, and content",
              "Content marketing: blog posts, guides, and landing page copy",
              "Social media strategy, content calendars, and management",
              "Website content and messaging",
              "Analytics setup and monthly reporting",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                <p className="text-sm leading-7 text-gray-300 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsDigitalMarketing;
