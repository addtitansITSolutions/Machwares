
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import StackSection from "../../components/StackSection";

import InfluencerMarketingHero from "../../sections/services/influencer-marketing/InfluencerMarketingHero";
import WhatIsInfluencerMarketing from "../../sections/services/influencer-marketing/WhatIsInfluencerMarketing";
import InfluencerMarketingCTA from "../../sections/services/influencer-marketing/InfluencerMarketingCTA";

const InfluencerMarketing = () => {
  return (
    <>
      <SEO
        title="Influencer Marketing Services | Machwares"
        description="Connect your brand with relevant influencers and creators through Machwares. Build authentic partnerships, expand audience reach, and create meaningful brand engagement."
        path="/services/influencer-marketing"
      />

      <Navbar forceScrolled={true} />

      <main>
        <StackSection zIndex={1}>
          <InfluencerMarketingHero />
        </StackSection>

        <StackSection zIndex={2}>
          <WhatIsInfluencerMarketing />
        </StackSection>

        <StackSection zIndex={3} sticky={false}>
          <InfluencerMarketingCTA />
        </StackSection>
      </main>

      <Footer />
    </>
  );
};

export default InfluencerMarketing;
