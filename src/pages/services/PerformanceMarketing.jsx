
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import PerformanceMarketingHero from "../../sections/services/performance-marketing/PerformanceMarketingHero";
import WhatIsPerformanceMarketing from "../../sections/services/performance-marketing/WhatIsPerformanceMarketing";
import PerformanceMarketingCTA from "../../sections/services/performance-marketing/PerformanceMarketingCTA";

import StackSection from "../../components/StackSection";

const PerformanceMarketing = () => {
  return (
    <>
      <SEO
        title="Performance Marketing Services | Machwares"
        description="Grow with performance marketing by Machwares. Reach the right audiences through strategic campaigns, data-led decisions, and continuous optimization."
        path="/services/performance-marketing"
      />

      <Navbar forceScrolled={true} />

      <main>
        <StackSection zIndex={1}>
          <PerformanceMarketingHero />
        </StackSection>

        <StackSection zIndex={2}>
          <WhatIsPerformanceMarketing />
        </StackSection>

        <StackSection zIndex={3} sticky={false}>
          <PerformanceMarketingCTA />
        </StackSection>
      </main>

      <Footer />
    </>
  );
};

export default PerformanceMarketing;
