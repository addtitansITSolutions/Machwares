
import {
  Target,
  Network,
  BarChart3,
  RefreshCw,
} from "lucide-react";

const impactAreas = [
  {
    number: "01",
    title: "Relevant Reach",
    description:
      "Connecting brands with audiences that align with their goals, interests, and market opportunities.",
    icon: Target,
    visual: "reach",
  },
  {
    number: "02",
    title: "Meaningful Relationships",
    description:
      "Creating valuable connections between brands, partners, and people through collaboration.",
    icon: Network,
    visual: "connections",
  },
  {
    number: "03",
    title: "Measurable Progress",
    description:
      "Keeping business objectives at the centre and using meaningful insights to understand progress.",
    icon: BarChart3,
    visual: "progress",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "Learning from performance, adapting to change, and finding better ways to move forward.",
    icon: RefreshCw,
    visual: "improvement",
  },
];

const ImpactIllustration = ({ type }) => {
  if (type === "reach") {
    return (
      <svg viewBox="0 0 320 190" fill="none" className="h-full w-full">
        <circle cx="160" cy="95" r="73" fill="#FECACA" opacity=".5" />
        <circle cx="160" cy="95" r="51" stroke="#D42027" strokeWidth="1.5" strokeDasharray="4 5" />
        <circle cx="160" cy="95" r="29" fill="white" />
        <circle cx="160" cy="95" r="12" fill="#D42027" />
        <path d="M160 95L111 49M160 95L210 47M160 95L226 113M160 95L108 143" stroke="#D42027" strokeWidth="2" strokeLinecap="round" />
        <circle cx="111" cy="49" r="10" fill="white" stroke="#D42027" strokeWidth="2" />
        <circle cx="210" cy="47" r="10" fill="white" stroke="#D42027" strokeWidth="2" />
        <circle cx="226" cy="113" r="10" fill="white" stroke="#D42027" strokeWidth="2" />
        <circle cx="108" cy="143" r="10" fill="white" stroke="#D42027" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "connections") {
    return (
      <svg viewBox="0 0 320 190" fill="none" className="h-full w-full">
        <circle cx="160" cy="95" r="72" fill="#FFEDD5" />
        <path d="M104 67L160 95L216 67M104 123L160 95L216 123" stroke="#D97706" strokeWidth="2.5" />
        <path d="M104 67L104 123M216 67L216 123" stroke="#D97706" strokeWidth="2" strokeDasharray="4 5" />
        <circle cx="160" cy="95" r="25" fill="white" />
        <circle cx="104" cy="67" r="17" fill="white" />
        <circle cx="216" cy="67" r="17" fill="white" />
        <circle cx="104" cy="123" r="17" fill="white" />
        <circle cx="216" cy="123" r="17" fill="white" />
        <circle cx="160" cy="95" r="9" fill="#D97706" />
        <circle cx="104" cy="67" r="6" fill="#FDBA74" />
        <circle cx="216" cy="67" r="6" fill="#FDBA74" />
        <circle cx="104" cy="123" r="6" fill="#FDBA74" />
        <circle cx="216" cy="123" r="6" fill="#FDBA74" />
      </svg>
    );
  }

  if (type === "progress") {
    return (
      <svg viewBox="0 0 320 190" fill="none" className="h-full w-full">
        <circle cx="160" cy="95" r="73" fill="#DBEAFE" />
        <rect x="85" y="42" width="150" height="108" rx="12" fill="white" />
        <path d="M104 125L131 104L153 113L180 82L207 91" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M195 91H207V79" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M104 132H216" stroke="#BFDBFE" strokeWidth="2" />
        <rect x="105" y="56" width="43" height="5" rx="2.5" fill="#BFDBFE" />
        <circle cx="131" cy="104" r="4" fill="#2563EB" />
        <circle cx="180" cy="82" r="4" fill="#2563EB" />
        <circle cx="207" cy="91" r="4" fill="#2563EB" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 190" fill="none" className="h-full w-full">
      <circle cx="160" cy="95" r="73" fill="#EDE9FE" />
      <path d="M160 43A52 52 0 0 1 211 95" stroke="#8B5CF6" strokeWidth="9" strokeLinecap="round" />
      <path d="M211 95A52 52 0 0 1 160 147" stroke="#C4B5FD" strokeWidth="9" strokeLinecap="round" />
      <path d="M160 147A52 52 0 0 1 109 95" stroke="#8B5CF6" strokeWidth="9" strokeLinecap="round" />
      <path d="M109 95A52 52 0 0 1 160 43" stroke="#C4B5FD" strokeWidth="9" strokeLinecap="round" />
      <path d="M144 95L155 106L178 81" stroke="#6D28D9" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="43" r="7" fill="#6D28D9" />
      <circle cx="211" cy="95" r="7" fill="#6D28D9" />
      <circle cx="160" cy="147" r="7" fill="#6D28D9" />
      <circle cx="109" cy="95" r="7" fill="#6D28D9" />
    </svg>
  );
};

const HowWeCreateImpact = () => {
  return (
    <section className="bg-[var(--light)] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-7xl">
          <div className="mb-6 flex w-full items-end justify-between gap-10">
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                How We Create Impact
              </p>

              <p className="text-base leading-8 text-[var(--text)]">
                We believe effective marketing is about more than visibility.
                It's about creating connections that lead to valuable
                opportunities and meaningful progress.
              </p>
            </div>

            <h2 className="max-w-2xl text-right font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Turning the right connections into{" "}
              <span className="text-[var(--primary)]">real opportunities.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
              >
                <div className="relative h-48 bg-white sm:h-52">
                  <span className="absolute left-6 top-5 text-xs font-bold tracking-widest text-gray-400">
                    {item.number}
                  </span>

                  <div className="h-full px-3 pt-3">
                    <ImpactIllustration type={item.visual} />
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--light)] text-[var(--primary)]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--dark)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeCreateImpact;
