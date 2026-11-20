
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Network,
  Megaphone,
  Smartphone,
  Users,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Performance Marketing",
    description:
      "Paid campaigns managed against your cost per acquisition and return on ad spend targets.",
    features: [],
    icon: Target,
    theme: "dark",
    link: "/services/performance-marketing",
  },
  {
    number: "02",
    title: "Affiliate Marketing",
    description:
      "Pay-for-results programs with publishers and affiliates who reach new audiences.",
    features: [],
    icon: Network,
    theme: "light",
    link: "/services/affiliate-marketing",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Search, social media, and content programs that build lasting online visibility.",
    features: [],
    icon: Megaphone,
    theme: "light",
    link: "/services/digital-marketing",
  },
  {
    number: "04",
    title: "Mobile Performance Marketing",
    description:
      "App user acquisition and in-app optimization across iOS and Android.",
    features: [],
    icon: Smartphone,
    theme: "accent",
    link: "/services/mobile-performance-marketing",
  },
  {
    number: "05",
    title: "Influencer Marketing",
    description:
      "Creator campaigns that put your brand in front of familiar audiences through voices they already follow.",
    features: [],
    icon: Users,
    theme: "light",
    link: "/services/influencer-marketing",
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
              Our{" "}
              <span className="text-[var(--primary)]">Services.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-base leading-8 text-[var(--text)] lg:ml-auto lg:text-lg"
          >
            Explore our services and discover how each one can help your brand
            reach the right audience and achieve meaningful growth.
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
                  index === 4 ? "md:col-span-2" : ""
                } ${
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

                  <div
                    className={`mt-8 flex items-center justify-between border-t pt-5 ${
                      isDark || isAccent
                        ? "border-white/15"
                        : "border-gray-200"
                    }`}
                  >
                    <span className="text-sm font-bold">
                      Learn More
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

        {/* Better Together */}
        <div className="mt-20 grid gap-7 rounded-2xl bg-[var(--dark)] p-8 text-white sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16 lg:p-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Better Together
            </p>

            <h3 className="font-[var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              One program.
              <span className="text-[var(--primary)]">
                {" "}Connected growth.
              </span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm leading-8 text-white/70 sm:text-base"
          >
            Our services are designed to work as one program. For example, an
            app publisher might use mobile performance campaigns to drive
            installs, affiliate partners to add reach, influencer partnerships
            to build trust, and digital marketing to build search and social
            visibility. Results from each channel are reported in one place,
            so budget decisions rest on a single set of numbers.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
