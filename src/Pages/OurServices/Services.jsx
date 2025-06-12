import React from 'react'
import ServicesPage from "../../Components/ServicesPage";
import OurServices from "../../Components/OurServices";
import StatsSection from "../../Components/StatsSection";
import OurServicesGrid from "../../Components/OurServicesGrid"
const Services = () => {
  return (
    <div>
      <ServicesPage />
      <StatsSection />
      <OurServices />
      <OurServicesGrid />
    </div>
  )
}

export default Services