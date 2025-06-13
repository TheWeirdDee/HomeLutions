// src/components/HeroSection.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImage from '../assets/HomeHero.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,  
    });
  }, []);

  return (
    <section className="bg-blue-950 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      
      <div className="md:w-1/2 mb-10 md:mb-0">
        <p className="uppercase text-sm font-medium text-gray-500 mt-13 playfair">
          Book A Handyman!
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 playfair">
          Reliable Handyman Services <br /> Right When You Need Them
        </h1>
        <p className="text-gray-300 mb-6 playfair tracking-wider text-md">
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

      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImage}
          alt="HandyMan"
          className="w-full max-w-md"
          data-aos="zoom-in"
          data-aos-easing="ease-out-back"
        />
      </div>
    </section>
  );
};

export default Hero;
