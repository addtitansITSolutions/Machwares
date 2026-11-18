
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import AffiliateMarketingHero from "../../sections/services/affiliate-marketing/AffiliateMarketingHero";
import WhatIsAffiliateMarketing from "../../sections/services/affiliate-marketing/WhatIsAffiliateMarketing";
import AffiliateMarketingCTA from "../../sections/services/affiliate-marketing/AffiliateMarketingCTA";

import StackSection from "../../components/StackSection";

const AffiliateMarketing = () => {
  return (
    <>
      <SEO
        title="Affiliate Marketing Services | Machwares"
        description="Grow your brand through strategic affiliate marketing. Machwares helps businesses build valuable partnerships, expand their reach, and drive performance-focused growth."
        path="/services/affiliate-marketing"
      />

      <Navbar forceScrolled={true} />

      <main>
        <StackSection zIndex={1}>
          <AffiliateMarketingHero />
        </StackSection>

        <StackSection zIndex={2}>
          <WhatIsAffiliateMarketing />
        </StackSection>

        <StackSection zIndex={3} sticky={false}>
          <AffiliateMarketingCTA />
        </StackSection>
      </main>

      <Footer />
    </>
  );
};

export default AffiliateMarketing;
