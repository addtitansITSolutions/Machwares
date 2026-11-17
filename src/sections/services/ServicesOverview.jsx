
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Network,
  Megaphone,
  Smartphone,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Performance Marketing",
    description:
      "Turn marketing investment into measurable outcomes. We focus on reaching the right audiences, driving meaningful actions, and continuously improving campaign performance.",
    features: ["Audience Targeting", "Campaign Optimization", "Performance Tracking"],
    icon: Target,
    theme: "dark",
    link: "/services/performance-marketing",
  },
  {
    number: "02",
    title: "Affiliate Marketing",
    description:
      "Build partnerships that create mutual value. We help brands expand their reach through relevant affiliate relationships and performance-driven collaborations.",
    features: ["Partner Acquisition", "Affiliate Campaigns", "Growth Partnerships"],
    icon: Network,
    theme: "light",
    link: "/services/affiliate-marketing",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Build a stronger digital presence and connect with your audience across relevant channels through thoughtful strategies and coordinated marketing initiatives.",
    features: ["Digital Campaigns", "Audience Engagement", "Brand Visibility"],
    icon: Megaphone,
    theme: "light",
    link: "/services/digital-marketing",
  },
  {
    number: "04",
    title: "Mobile Performance Marketing",
    description:
      "Connect with mobile audiences through targeted acquisition and engagement campaigns designed to drive app installs, user actions, and measurable growth.",
    features: ["Mobile User Acquisition", "App Campaigns", "Action-Based Growth"],
    icon: Smartphone,
    theme: "accent",
    link: "/services/mobile-performance-marketing",
  },
];

const ServicesOverview = () => {
  return (
    <section
      id="our-services"
      className="relative overflow-hidden bg-[var(--secondary)] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-xl font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              The right strategy for{" "}
              <span className="text-[var(--primary)]">every opportunity.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-base leading-8 text-[var(--text)] lg:ml-auto lg:text-lg"
          >
            Every brand has a different path to growth. Our services bring
            together focused strategies, meaningful partnerships, and
            performance-led execution to help you move forward.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDark = service.theme === "dark";
            const isAccent = service.theme === "accent";

            return (
              <motion.a
                key={service.number}
                href={service.link}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-9 lg:min-h-[420px] ${
                  isDark
                    ? "border-[var(--dark)] bg-[var(--dark)] text-white"
                    : isAccent
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-gray-200 bg-white text-[var(--dark)] hover:border-[var(--primary)]/40"
                }`}
              >
                {/* Background decoration */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border ${
                    isDark || isAccent
                      ? "border-white/10"
                      : "border-[var(--primary)]/10"
                  }`}
                />
                <div
                  className={`pointer-events-none absolute -right-5 -top-5 h-44 w-44 rounded-full border ${
                    isDark || isAccent
                      ? "border-white/10"
                      : "border-[var(--primary)]/10"
                  }`}
                />

                {/* Card top */}
                <div className="relative z-10 flex items-start justify-between">
                  <span
                    className={`font-[var(--font-display)] text-sm font-bold tracking-widest ${
                      isDark || isAccent
                        ? "text-white/50"
                        : "text-[var(--primary)]"
                    }`}
                  >
                    / {service.number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 ${
                      isDark || isAccent
                        ? "bg-white/10 text-white"
                        : "bg-red-50 text-[var(--primary)]"
                    }`}
                  >
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Card content */}
                <div className="relative z-10 mt-auto pt-16">
                  <h3 className="max-w-md font-[var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>

                  <p
                    className={`mt-4 max-w-lg text-sm leading-7 sm:text-base ${
                      isDark || isAccent
                        ? "text-white/70"
                        : "text-[var(--text)]"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={`rounded-full border px-3 py-2 text-[10px] font-semibold sm:text-xs ${
                          isDark || isAccent
                            ? "border-white/15 bg-white/5 text-white/80"
                            : "border-gray-200 bg-gray-50 text-[var(--text)]"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`mt-8 flex items-center justify-between border-t pt-5 ${
                      isDark || isAccent
                        ? "border-white/15"
                        : "border-gray-200"
                    }`}
                  >
                    <span className="text-sm font-bold">
                      Explore Service
                    </span>

                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 ${
                        isDark || isAccent
                          ? "bg-white text-[var(--dark)]"
                          : "bg-[var(--primary)] text-white"
                      }`}
                    >
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
