
const WhoWeAre = () => {
  const focusAreas = [
    {
      number: "01",
      title: "Understanding Audiences",
      description:
        "We focus on understanding people, their interests, and what influences their decisions.",
    },
    {
      number: "02",
      title: "Creating Connections",
      description:
        "We bring brands and audiences together through relevant campaigns and meaningful partnerships.",
    },
    {
      number: "03",
      title: "Driving Growth",
      description:
        "We focus on strategies that support measurable outcomes and long-term business growth.",
    },
  ];

  return (
    <section
      id="who-we-are"
      className="bg-[var(--secondary)] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Left Column */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Who We Are
          </p>

          <h2 className="max-w-xl font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
            We believe growth starts with{" "}
            <span className="text-[var(--primary)]">connection.</span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-[var(--text)]">
            Machwares is a digital marketing and growth agency focused on
            helping brands connect with the audiences that matter. We bring
            together strategic thinking, performance-driven marketing, and
            valuable partnerships to create opportunities for meaningful
            business growth.
          </p>

          <p className="mt-5 max-w-lg text-base leading-8 text-[var(--text)]">
            From reaching the right people to building stronger digital
            relationships, our approach is centred on understanding goals,
            choosing the right channels, and making every connection count.
          </p>
        </div>

        {/* Right Column */}
        <div className="border-t border-[var(--border)]">
          {focusAreas.map((item) => (
            <div
              key={item.number}
              className="grid gap-4 border-b border-[var(--border)] py-8 sm:grid-cols-[60px_1fr] sm:gap-6"
            >
              <span className="pt-1 text-sm font-semibold text-[var(--primary)]">
                {item.number}
              </span>

              <div>
                <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--dark)] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--text)] sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
