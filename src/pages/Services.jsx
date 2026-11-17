import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import ServicesHero from "../sections/services/ServicesHero";
import ServicesOverview from "../sections/services/ServicesOverview";
import ServicesApproach from "../sections/services/ServicesApproach";
import StackSection from "../components/StackSection";

const Services = () => {
  return (
    <>
      <SEO
        title="Our Services | Machwares"
        description="Explore Machwares services, including performance marketing, affiliate marketing, digital marketing, and mobile performance marketing."
        path="/services"
      />

      <Navbar forceScrolled={true} />

      <main>
        <StackSection zIndex={1}>
          <ServicesHero />
        </StackSection>
        <StackSection zIndex={2}>
          <ServicesOverview />
        </StackSection>
        <StackSection zIndex={3} sticky={false}>
          <ServicesApproach />
        </StackSection>
      </main>
      <Footer />
    </>
  );
};

export default Services;