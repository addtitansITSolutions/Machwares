
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import MobilePerformanceMarketingHero from "../../sections/services/mobile-performance-marketing/MobilePerformanceMarketingHero";
import WhatIsMobilePerformanceMarketing from "../../sections/services/mobile-performance-marketing/WhatIsMobilePerformanceMarketing";
import MobilePerformanceMarketingCTA from "../../sections/services/mobile-performance-marketing/MobilePerformanceMarketingCTA";

import StackSection from "../../components/StackSection";

const MobilePerformanceMarketing = () => {
  return (
    <>
      <SEO
        title="Mobile Performance Marketing Services | Machwares"
        description="Reach and acquire mobile users through targeted campaigns with Machwares. Build mobile audience reach and optimize campaigns around measurable outcomes."
        path="/services/mobile-performance-marketing"
      />

      <Navbar forceScrolled={true} />

      <main>
        <StackSection zIndex={1}>
          <MobilePerformanceMarketingHero />
        </StackSection>

        <StackSection zIndex={2}>
          <WhatIsMobilePerformanceMarketing />
        </StackSection>

        <StackSection zIndex={3} sticky={false}>
          <MobilePerformanceMarketingCTA />
        </StackSection>
      </main>

      <Footer />
    </>
  );
};

export default MobilePerformanceMarketing;
