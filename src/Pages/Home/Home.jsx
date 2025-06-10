import React from 'react'
import Hero from "../../Components/Hero";
import Cards from '../../Components/Cards'
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
  <Cards />
   <CoreValues />
    
   
    </div>
  )
}

export default Home