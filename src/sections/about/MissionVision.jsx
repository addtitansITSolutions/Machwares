
import { Target, Compass } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-[var(--dark)] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Our Purpose
          </p>

          <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Guided by purpose.
            <span className="text-white/45"> Driven by growth.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
            Everything we do is shaped by a clear purpose: helping brands
            build meaningful connections and create opportunities for
            sustainable growth.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Mission */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:p-12">
            <div className="mb-9 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
              <Target size={27} strokeWidth={1.7} />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
              Our Mission
            </p>

            <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Making every connection count.
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Our mission is to help brands reach the right audiences through
              thoughtful marketing strategies, effective campaigns, and
              valuable partnerships. We aim to turn opportunities into
              meaningful and measurable progress.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:p-12">
            <div className="mb-9 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white">
              <Compass size={27} strokeWidth={1.7} />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
              Our Vision
            </p>

            <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Creating a more connected digital world.
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Our vision is to build a future where brands and audiences
              connect more effectively, partnerships create shared value,
              and marketing drives lasting opportunities for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
