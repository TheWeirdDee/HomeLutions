import React from 'react'
import AboutHero from "../../Components/AboutHero";
import AboutUsPage from "../../Components/AboutUsPage";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Cards from "../../Components/Cards";
import StatsSection from "../../Components/StatsSection";
import HowItWorks from "../../Components/HowItWorks";
import Testimonials from '../../Components/Testimonials';
import ContactSection from '../../Components/ContactSection';
import FAQ from '../../Components/FAQ';

const About = () => {
  return (
 
 
    <div>

  <AboutHero />
  <StatsSection />
  <AboutUsPage />
  <WhyChooseUs />
  <Cards />
  <HowItWorks />
  <Testimonials />
  <FAQ />
  <ContactSection />
    </div>
  )
}

export default About