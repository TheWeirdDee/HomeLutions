import React from 'react'
import HowItWorksHero from '../../Components/HowItWorksHero';
import StatsSection from '../../Components/StatsSection';
import HowItWorksPage from '../../Components/HowItWorksPage';
import Pricing from '../../Components/Pricing';
import Testimonials from '../../Components/Testimonials';
import ContactSection from '../../Components/ContactPage';
import FAQ from '../../Components/FAQ';
const Howitworks = () => {
  return (
    <div>
      <HowItWorksHero />
      <StatsSection />
      <HowItWorksPage />
      <Pricing />
            <Testimonials />
         <FAQ />
         <ContactSection />
    </div>
  )
}

export default Howitworks