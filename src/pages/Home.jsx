import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MachwaresProcess from "../sections/home/MachwaresProcess";
import Hero from "../sections/home/Hero";
import WhatWeDo from "../sections/home/WhatWeDo";
import ServicesPreview from "../sections/home/ServicesPreview";
import FeaturedWork from "../sections/home/FeaturedWork";
import Testimonials from "../sections/home/Testimonials";
import SEO from "../components/SEO";
import useFullPageScroll from "../hooks/useFullPageScroll";

const SectionReveal = ({ children }) => (
  <motion.section
    data-section
    className="snap-section"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{
      duration: 1,
      delay: 0.15, // lets the scroll glide settle before content appears
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    {children}
  </motion.section>
);

const Home = () => {
  useFullPageScroll({ duration: 1.3, offset: 0 }); // set offset to Navbar height if fixed

  return (
    <>
      <SEO
        title="Machwares | Enterprise IT Services & Software Solutions"
        description="Machwares delivers scalable IT services, custom software development, cloud infrastructure, cybersecurity, and managed IT solutions for modern businesses."
        path="/"
      />
      <Navbar />
      <main>
        <div data-section className="snap-section">
          <Hero />
        </div>

        <SectionReveal>
          <WhatWeDo />
        </SectionReveal>

        <SectionReveal>
          <MachwaresProcess />
        </SectionReveal>

        <SectionReveal>
          <ServicesPreview />
        </SectionReveal>

        {/* <SectionReveal>
          <FeaturedWork />
        </SectionReveal> */}

        <SectionReveal>
          <Testimonials />
        </SectionReveal>
      </main>

      <div data-section>
        <Footer />
      </div>
    </>
  );
};

export default Home;