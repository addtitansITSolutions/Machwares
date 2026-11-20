import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Target, TrendingUp, Network } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/[0.045] blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 pb-20 sm:px-10 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-16 lg:pb-28 xl:px-20">

        {/* Left Content */}
        <div className="relative z-10">
          <h1 className="max-w-[850px] font-[var(--font-display)] text-[clamp(3.2rem,6.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[var(--dark)]">
             Five verticals{" "}
            <span className="text-[var(--primary)]">One standard</span>{" "}
            measurable results.
          </h1>

          <p className="mt-8 max-w-[590px] text-base leading-8 text-[var(--text)] sm:text-lg">
           Machwares helps brands acquire customers, grow mobile app users, and build a stronger online presence through performance marketing, affiliate marketing, digital marketing, mobile performance marketing, and influencer marketing.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#who-we-are"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-red-700 sm:w-auto"
            >
              Discover Machwares
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#how-we-create-impact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-transparent px-6 py-4 text-sm font-bold text-[var(--dark)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto"
            >
              How we create impact
              <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        
        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[600px] lg:ml-auto"
        >

          {/* bg-[#F0F1F2] */}
          <div className="relative aspect-[1/1] overflow-hidden rounded-[2rem] ">

            {/* Background SVG Pattern */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="aboutGrid"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M32 0H0V32"
                    stroke="#1A1D1F"
                    strokeOpacity=".055"
                  />
                </pattern>

                <radialGradient id="aboutGlow">
                  <stop stopColor="#D42027" stopOpacity=".16" />
                  <stop offset="1" stopColor="#D42027" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="platformGradient" x1="130" y1="180" x2="450" y2="470">
                  <stop stopColor="#34393C" />
                  <stop offset="1" stopColor="#111416" />
                </linearGradient>

                <linearGradient id="redGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#FA5157" />
                  <stop offset="1" stopColor="#A90F17" />
                </linearGradient>

                <linearGradient id="glassGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#FFFFFF" stopOpacity=".98" />
                  <stop offset="1" stopColor="#E9ECEE" stopOpacity=".92" />
                </linearGradient>

                <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="12" />
                </filter>
              </defs>

              <rect width="600" height="600" fill="url(#aboutGrid)" />

              <circle cx="420" cy="170" r="210" fill="url(#aboutGlow)" />

              {/* Background decorative curves */}
              <path
                d="M-20 420C100 330 145 490 260 400C370 315 450 380 630 230"
                stroke="#D42027"
                strokeOpacity=".12"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              <path
                d="M-20 450C100 360 145 520 260 430C370 345 450 410 630 260"
                stroke="#1A1D1F"
                strokeOpacity=".07"
              />

              <circle cx="95" cy="130" r="3" fill="#D42027" />
              <circle cx="500" cy="420" r="4" fill="#D42027" />
              <circle cx="450" cy="90" r="2" fill="#1A1D1F" />
            </svg>

            {/* Decorative 3D composition */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ perspective: "1100px" }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-[76%] w-[84%]"
                style={{
                  transform: "rotateX(53deg) rotateZ(-35deg)",
                  transformStyle: "preserve-3d",
                }}
              >

                {/* Platform Shadow */}
                <div
                  className="absolute inset-[8%] rounded-[30px] bg-black/20 blur-2xl"
                  style={{ transform: "translateZ(-70px) translateY(30px)" }}
                />

                {/* Platform Bottom Layer */}
                <div
                  className="absolute inset-[8%] rounded-[30px] border border-white/10 bg-[#171B1E]"
                  style={{
                    transform: "translateZ(-45px)",
                    boxShadow: "0 30px 40px rgba(0,0,0,.2)",
                  }}
                />

                {/* Platform Top */}
                <div
                  className="absolute inset-[8%] overflow-hidden rounded-[30px] border border-white/10"
                  style={{
                    transform: "translateZ(-15px)",
                    background: "linear-gradient(145deg,#343A3E,#171B1E)",
                  }}
                >
                  <svg
                    viewBox="0 0 400 400"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                  >
                    {Array.from({ length: 9 }).map((_, i) => (
                      <g key={i}>
                        <path
                          d={`M${i * 50} 0V400`}
                          stroke="white"
                          strokeOpacity=".07"
                        />
                        <path
                          d={`M0 ${i * 50}H400`}
                          stroke="white"
                          strokeOpacity=".07"
                        />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Main Red 3D Block */}
                <div
                  className="absolute left-[36%] top-[30%] h-[34%] w-[34%] rounded-[22px]"
                  style={{
                    transform: "translateZ(55px)",
                    background: "linear-gradient(145deg,#F23B43,#B60D17)",
                    boxShadow:
                      "12px 18px 0 #8F1017, 22px 30px 35px rgba(0,0,0,.35)",
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-center text-white">
                    <span className="text-5xl font-bold tracking-[-0.09em]">
                      M<span className="text-white/55">.</span>
                    </span>
                    <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.25em]">
                      Machwares
                    </span>
                  </div>

                  <div className="absolute -right-2 -top-2 h-5 w-5 rounded-full border-4 border-[#F0F1F2] bg-[#D42027]" />
                </div>

                {/* Small red dimensional element */}
                <div
                  className="absolute bottom-[13%] left-[12%] h-[13%] w-[13%] rounded-lg"
                  style={{
                    transform: "translateZ(65px)",
                    background: "linear-gradient(145deg,#FA5157,#B90E19)",
                    boxShadow: "5px 7px 0 #870D14, 8px 12px 20px rgba(0,0,0,.2)",
                  }}
                />
              </motion.div>
            </div>

          </div>

          <p className="mt-5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
            Bringing brands and opportunities together
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;