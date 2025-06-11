// src/components/HeroSection.jsx
import React from 'react';
import HeroImage from '../assets/heroimg.png';  
 

const Hero = () => {
  return (
    <section className="bg-blue-950 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
     
      <div className="md:w-1/2 mb-10 md:mb-0">
      <p className="uppercase text-sm font-medium text-gray-500 mt-20 playfair">
          Book A Handyman!
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 playfair">
          Reliable Hanyman Services <br /> Right When You Need Them
        </h1>
        <p className="text-gray-300 mb-6 font text-sm">
          From plumbing and electrical repairs to furniture assembly, cleaning & more - Homelutions connects you with trusted professionals for every fix and clean around your home.
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

export default Hero;