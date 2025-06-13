import React from 'react'
import ServicesPage from "../../Components/ServicesPage";
import OurServices from "../../Components/OurServices";
import StatsSection from "../../Components/StatsSection";
import OurServicesGrid from "../../Components/OurServicesGrid"
import HowItWorks from '../../Components/HowItWorks';
import Pricing from '../../Components/Pricing';
import Testimonials from '../../Components/Testimonials';
import ContactSection from '../../Components/ContactPage';
import FAQ from '../../Components/FAQ';
const Services = () => {
  return (
    <div>
      <ServicesPage />
      <StatsSection />
      <OurServices />
      <OurServicesGrid />
      <HowItWorks />
      <Pricing />
      <Testimonials />
   <FAQ />
   <ContactSection />
    </div>
  )
}

export default Services