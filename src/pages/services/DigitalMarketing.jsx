
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import DigitalMarketingHero from "../../sections/services/digital-marketing/DigitalMarketingHero";
import WhatIsDigitalMarketing from "../../sections/services/digital-marketing/WhatIsDigitalMarketing";
import DigitalMarketingCTA from "../../sections/services/digital-marketing/DigitalMarketingCTA";

import StackSection from "../../components/StackSection";

const DigitalMarketing = () => {
  return (
    <>
      <SEO
        title="Digital Marketing Services | Machwares"
        description="Strengthen your online presence with digital marketing by Machwares. Connect with relevant audiences through strategic digital initiatives and meaningful brand experiences."
        path="/services/digital-marketing"
      />

      <Navbar forceScrolled={true} />

      <main>
        <StackSection zIndex={1}>
          <DigitalMarketingHero />
        </StackSection>

        <StackSection zIndex={2}>
          <WhatIsDigitalMarketing />
        </StackSection>

        <StackSection zIndex={3} sticky={false}>
          <DigitalMarketingCTA />
        </StackSection>
      </main>

      <Footer />
    </>
  );
};

export default DigitalMarketing;
