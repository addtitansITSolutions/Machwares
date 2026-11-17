
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

import Hero from "../sections/home/Hero";
import WhatWeDo from "../sections/home/WhatWeDo";
import MachwaresProcess from "../sections/home/MachwaresProcess";
import WhyChooseMachwares from "../sections/home/WhyChooseMachwares";
import GrowthPhilosophy from "../sections/home/GrowthPhilosophy";

import useFullPageScroll from "../hooks/useFullPageScroll";


const SectionReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    {children}
  </motion.div>
);


const Home = () => {
  useFullPageScroll({
    duration: 1.3,
    offset: 0,
  });

  return (
    <>
      <SEO
        title="Machwares | Performance, Affiliate & Mobile Performance Marketing"
        description="Machwares helps brands grow through performance marketing, affiliate partnerships, digital marketing, and mobile performance marketing."
        path="/"
      />

      <Navbar />

      <main>
        <div data-section className="snap-section">
          <Hero />
        </div>

        <div data-section className="snap-section">
          <SectionReveal>
            <WhatWeDo />
          </SectionReveal>
        </div>

        <div data-section className="snap-section">
          <SectionReveal>
            <MachwaresProcess />
          </SectionReveal>
        </div>

        <div data-section className="snap-section">
          <SectionReveal>
            <WhyChooseMachwares />
          </SectionReveal>
        </div>

        <div data-section className="snap-section">
          <SectionReveal>
            <GrowthPhilosophy />
          </SectionReveal>
        </div>
      </main>

      <div data-section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
