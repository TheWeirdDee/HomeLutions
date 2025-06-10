import React from 'react'
import Hero from "../../Components/Hero";
import WhoWeAre from "../../Components/WhoWeAre";
import CoreValues from '../../Components/CoreValues';
import CompanyStory from '../../Components/CompanyStory';
const Home = () => {
  return (
    <div>

  <Hero />
   <CoreValues />
   <CompanyStory />
  <WhoWeAre />
    </div>
  )
}

export default Home