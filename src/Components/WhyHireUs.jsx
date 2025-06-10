import React from "react";
import handymanImg from "../assets/Dashimgg.png";  

const WhyHireUs = () => {
  return (
    <section className="py-20 bg-blue-100 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-blue-800 text-2xl uppercase font-semibold mb-2">Why hire us?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Quality Service is <br />
            <span className="text-black">our core</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Many homeowners will say that it is hard to find a reliable,
            professional home repair person. With nearly 200 locations across the
            United States and Canada, you can trust your local “Handyman Home
            Service” team of home improvement professionals to care for your home.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-950 text-white px-6 py-3 rounded hover:bg-gray-900 transition">
              Read more
            </button>
            <button className="border border-blue-950 text-gray-950 px-6 py-3 rounded hover:bg-blue-200 transition">
              Request service
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Animated Background */}
          <div className="absolute -top-10 -right-5 w-100 h-100 md:w-[400px] md:h-[400px] bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse z-0" />

          {/* Handyman Image */}
          <img
            src={handymanImg}
            alt="Handyman"
            className="relative z-10 w-64 md:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;