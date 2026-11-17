import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const Hero = () => {
  const sectionRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Spring-smoothed progress for fluid bidirectional scroll motion
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
    restDelta: 0.0005,
  });

  // 1. Image frame expands from a rounded card to full-bleed (0% -> 82% scroll)
  const insetTop = useTransform(progress, [0, 0.82], [14, 0]);
  const insetBottom = useTransform(progress, [0, 0.82], [5, 0]);
  const insetSide = useTransform(progress, [0, 0.82], [5, 0]);
  const radius = useTransform(progress, [0, 0.82], [28, 0]);
  const imageScale = useTransform(progress, [0, 0.82], [1.1, 1]);

  const clipPath = useMotionTemplate`inset(${insetTop}% ${insetSide}% ${insetBottom}% ${insetSide}% round ${radius}px)`;

  // 2. Overall content container slowly enlarges with the expanding frame
  const contentScale = useTransform(progress, [0, 0.82], [0.8, 1]);
  const contentY = useTransform(progress, [0, 0.82], ["4.5%", "0%"]);

  // 3. Staggered scroll-driven show/hide & individual enlargement
  // Eyebrow & Heading start visible and steadily enlarge; remaining blocks reveal sequentially
  const subtextOpacity = useTransform(progress, [0.06, 0.26], [0, 1]);
  const subtextY = useTransform(progress, [0.06, 0.26], [24, 0]);
  const subtextScale = useTransform(progress, [0.06, 0.55], [0.88, 1]);

  const buttonsOpacity = useTransform(progress, [0.24, 0.44], [0, 1]);
  const buttonsY = useTransform(progress, [0.24, 0.44], [24, 0]);
  const buttonsScale = useTransform(progress, [0.24, 0.7], [0.88, 1]);
  const buttonsPointerEvents = useTransform(buttonsOpacity, (v) =>
    v > 0.5 ? "auto" : "none"
  );

  const indicatorsOpacity = useTransform(progress, [0.42, 0.62], [0, 1]);
  const indicatorsY = useTransform(progress, [0.42, 0.62], [18, 0]);
  const indicatorsScale = useTransform(progress, [0.42, 0.82], [0.88, 1]);

  // Initial scroll prompt fades out as content starts revealing
  const scrollHintOpacity = useTransform(progress, [0, 0.14], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[260vh] bg-[#F6F7F9] text-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ===== EXPANDING IMAGE & INNER CONTENT WRAPPER ===== */}
        <motion.div
          style={{ clipPath, WebkitClipPath: clipPath }}
          className="absolute inset-0 flex items-center justify-center will-change-[clip-path]"
        >
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-[#1E2228]" />
          )}

          {/* Background Image */}
          <motion.img
            src="/HeroBg/herocenterimg.jpg"
            alt="Machwares software engineering and IT infrastructure"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            style={{ scale: imageScale }}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />

          
          {/* ===== HERO CONTENT (Progressively Reveals & Enlarges) ===== */}
          <motion.div
            style={{ scale: contentScale, y: contentY }}
            className="relative z-10 mx-auto flex max-w-[960px] flex-col items-center px-6 text-center will-change-transform sm:px-10"
          >

            {/* Stage 0 (Visible on Load): Heading */}
            <h1 className="font-[var(--font-display)] text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4rem]">
              Connecting brands with{" "}
              <span className="text-[var(--primary)]">Performance-First</span>{" "}
              Opportunities
            </h1>

            {/* Stage 1 (6% -> 26% scroll): Subtext */}
            <motion.p
              style={{
                opacity: subtextOpacity,
                y: subtextY,
                scale: subtextScale,
              }}
              className="mt-5 max-w-[620px] font-[var(--font-body)] text-sm leading-relaxed text-white/80 will-change-transform sm:text-lg"
            >
              Machwares helps brands grow through strategic digital marketing, performance campaigns, affiliate partnerships, and mobile performance marketing, connecting your business with the right customers across the United States.
            </motion.p>

            {/* Stage 2 (24% -> 44% scroll): Buttons */}
            <motion.div
              style={{
                opacity: buttonsOpacity,
                y: buttonsY,
                scale: buttonsScale,
                pointerEvents: buttonsPointerEvents,
              }}
              className="mt-7 flex flex-wrap items-center justify-center gap-4 will-change-transform"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-[var(--primary)] px-7 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-[#b81b21]"
              >
                <span>Grow Your Brand</span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.2}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center gap-2.5 rounded-lg border border-white/25 bg-white/10 px-7 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-colors duration-200 hover:border-white/45 hover:bg-white/20"
              >
                <span>Explore Our Services</span>
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Stage 3 (42% -> 62% scroll): Indicators */}
            <motion.div
              style={{
                opacity: indicatorsOpacity,
                y: indicatorsY,
                scale: indicatorsScale,
              }}
              className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 will-change-transform"
            >
              {[
                "Performance Marketing",
                "Affiliate Partnerships",
                "Digital Marketing",
                "Mobile Performance Marketing"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check
                    size={15}
                    strokeWidth={2.5}
                    className="shrink-0 text-[var(--primary)]"
                  />
                  <span className="font-[var(--font-body)] text-xs font-medium text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>


          {/* Subtle Scroll Cue (Fades out as user begins scrolling) */}
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="pointer-events-none absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Scroll to explore
            </span>
            <span className="h-6 w-[1px] bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;