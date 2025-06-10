import React from 'react'
import Hero from "../../Components/Hero";
 
import CoreValues from '../../Components/CoreValues';
import StatsSection from '../../Components/StatsSection';
import WhyChooseUs from '../../Components/WhyChooseUs';
import WhyHireUs from '../../Components/WhyHireUs';
const Home = () => {
  return (
    <div>

  <Hero />
  <StatsSection />
  <WhyChooseUs />
  <WhyHireUs />
   <CoreValues />
    
   
    </div>
  )
}

export default Home