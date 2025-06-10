// src/components/CompanyStory.jsx
import React from "react";
import handyman from "../assets/Dashimgg.png"; 

const CompanyStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* TEXT SECTION */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-black text-lg mb-6">
            We are a passionate team dedicated to providing reliable, top-quality
            home services that make your life easier.
          </p>
          <p className="text-black mb-6">
            With a focus on professionalism, trust, and customer satisfaction, we
            connect you with skilled experts to get the job done right — every
            time.
          </p>
          <p className="text-black mb-6">
            With a focus on professionalism, trust, and customer satisfaction, we
            connect you with skilled experts to get the job done right — every
            time.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <img src="/icons/heart.png" alt="icon" className="w-4 h-4" />
              Clean Homes, Happy Hearts
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/shiny.png" alt="icon" className="w-4 h-4" />
              Sparkle Every Space
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/refresh.png" alt="icon" className="w-4 h-4" />
              Purify. Refresh. Revitalize.
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/standard.png" alt="icon" className="w-4 h-4" />
              Cleanliness Standards
            </li>
          </ul>
        </div>

        {/* IMAGE SECTION */}
        <div className="md:w-1/2 flex flex-col md:flex-row gap-4 justify-center items-center">
          <img
            src={handyman}
            alt="Team 1"
            className="rounded-lg shadow-md w-64 object-cover"
          />
          <img
            src={handyman}
            alt="Team 2"
            className="rounded-lg shadow-md w-48 object-cover -mt-10 md:mt-0 md:-ml-10"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;