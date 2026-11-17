
import {
  Users,
  Lightbulb,
  TrendingUp,
  Handshake,
} from "lucide-react";

const WhatDrivesUs = () => {
  const values = [
    {
      number: "01",
      icon: Users,
      title: "People First",
      description:
        "We believe meaningful growth begins with understanding people, their needs, interests, and behaviour.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategic Thinking",
      description:
        "Every campaign starts with a clear direction, thoughtful planning, and an understanding of the bigger picture.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Performance Matters",
      description:
        "We focus on meaningful outcomes, using insights and continuous optimization to improve campaign performance.",
    },
    {
      number: "04",
      icon: Handshake,
      title: "Stronger Partnerships",
      description:
        "We value collaboration and believe the right partnerships create opportunities for shared, lasting growth.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              What Drives Us
            </p>

            <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              The principles behind{" "}
              <span className="text-[var(--primary)]">our approach.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[var(--text)]">
            Our work is guided by a few simple principles that shape how we
            think, collaborate, and create opportunities for brands.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group rounded-2xl border border-[var(--border)] bg-white p-7 transition-colors duration-300 hover:border-[var(--primary)]/40 sm:p-8"
              >
                <div className="mb-12 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--light)] text-[var(--primary)]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-semibold tracking-wider text-gray-400">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--dark)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--text)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
