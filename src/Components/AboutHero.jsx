// src/components/HeroSection.jsx
import React from 'react';
import HeroImage from '../assets/heroimg.png';  
 

const AboutHero = () => {
  return (
    <section className="bg-blue-950 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
     
      <div className="md:w-1/2 mb-10 md:mb-0">
      <p className="uppercase text-sm font-medium text-gray-500 mt-20 playfair">
          Book A Handyman!
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 playfair">
          WHO WE ARE?
        </h1>
        <p className="text-gray-300 mb-6 chloe tracking-wider text-lg">
        Homelutions was born out of a simple need, making home repairs easy, reliable, and stress-free. We connect busy homeowners with skilled professionals who take pride in quality work and exceptional service.
        </p>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-gray-900 to-blue-500 hover:from-blue-800 hover:to-blue-900 text-white py-2 px-5 rounded font-semibold Bona">
            Need A Service
          </button>
          <button className="border border-white font-semibold hover:bg-blue-200 hover:text-black py-2 px-5 rounded playfair">
            Discover More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImage}
          alt="Cleaning Lady"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default AboutHero;