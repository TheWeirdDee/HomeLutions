import React from 'react'
import Hero from "../../Components/Hero";
import Cards from '../../Components/Cards'
// import CoreValues from '../../Components/CoreValues';
import StatsSection from '../../Components/StatsSection';
import WhyChooseUs from '../../Components/WhyChooseUs';
import AboutUs from '../../Components/AboutUs';
import Testimonials from '../../Components/Testimonials';
import ContactSection from '../../Components/ContactSection';
import FAQ from '../../Components/FAQ';
const Home = () => {
  return (
    <div>

  <Hero />
  <StatsSection />
  <WhyChooseUs />
  <AboutUs />
  <Cards />
  <Testimonials />
   {/* <CoreValues /> */}
   <FAQ />
   <ContactSection />
    
   
    </div>
  )
}

export default Home