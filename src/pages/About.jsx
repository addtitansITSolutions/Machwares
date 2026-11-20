import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import StackSection from "../components/StackSection";

import AboutHero from "../sections/about/AboutHero";
import MissionVision from "../sections/about/MissionVision";
import WhoWeAre from "../sections/about/WhoWeAre";
import WhatDrivesUs from "../sections/about/WhatDrivesUs";
import HowWeCreateImpact from "../sections/about/HowWeCreateImpact";

const About = () => {
  return (
    <>
      <SEO
        title="About Machwares | Performance, Affiliate, Digital and Influencer Marketing"
        description="Machwares is a marketing company built around five verticals: performance marketing, affiliate marketing, digital marketing, mobile performance marketing, and influencer marketing."
        path="/about"
      />

      <Navbar forceScrolled={true} />

      <main>
        <StackSection zIndex={1}>
          <AboutHero />
        </StackSection>

        <StackSection zIndex={2}>
          <WhoWeAre />
        </StackSection>

        <StackSection zIndex={3}>
          <HowWeCreateImpact />
        </StackSection>

        <StackSection zIndex={4}>
          <WhatDrivesUs />
        </StackSection>

        {/* last one doesn't need to pin; it scrolls away normally into the footer */}
        <StackSection zIndex={5} sticky={false}>
          <MissionVision />
        </StackSection>
      </main>

      <Footer />
    </>
  );
};

export default About;
