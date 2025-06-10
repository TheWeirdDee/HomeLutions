import React from 'react'
import Hero from "../../Components/Hero";
import WhoWeAre from "../../Components/WhoWeAre";
import CoreValues from '../../Components/CoreValues';
import CompanyStory from '../../Components/CompanyStory';
import StatsSection from '../../Components/StatsSection';
import WhyChooseUs from '../../Components/WhyChooseUs'
const Home = () => {
  return (
    <div>

  <Hero />
  <StatsSection />
  <WhyChooseUs />
   <CoreValues />
   <CompanyStory />
  <WhoWeAre />
    </div>
  )
}

export default Home