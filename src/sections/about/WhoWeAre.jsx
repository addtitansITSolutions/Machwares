
const WhoWeAre = () => {
  const focusAreas = [
    {
      number: "01",
      title: "Performance Marketing",
      description:
        "Paid campaigns managed against your cost per acquisition and return on ad spend targets.",
    },
    {
      number: "02",
      title: "Affiliate Marketing",
      description:
        "Performance-based publisher and affiliate programs that extend your reach among audiences.",
    },
    {
      number: "03",
      title: "Digital Marketing",
      description:
        "Search, social media, and content programs that strengthen your online presence.",
    },
    {
      number: "04",
      title: "Mobile Performance Marketing",
      description:
        "User acquisition and in-app optimization for iOS and Android apps.",
    },
    {
      number: "05",
      title: "Influencer Marketing",
      description:
        "Creator campaigns that connect your brand with audiences through voices they trust.",
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
            Who Are We
          </p>

          <h2 className="max-w-xl font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--dark)] sm:text-3xl lg:text-5xl">
            Each of our connected verticals follow the same discipline: define
            the audience, set a measurable goal, launch, and optimize against
            real data.
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-[var(--text)]">
            We work with brands that expect accountability from their marketing
            partner. The goal may be a lower cost per acquisition, more
            high-quality app installs, a stronger affiliate program, or greater
            visibility. In every case, we report on outcomes that affect your
            business, not on activity alone.
          </p>
        </div>

        {/* Right Column */}
        <div className="border-t border-[var(--border)]">
          <h3 className="border-b border-[var(--border)] py-6 font-[var(--font-display)] text-2xl font-semibold text-[var(--dark)] sm:text-3xl">
            What We Do
          </h3>

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
