import React from "react";
import handymanImg from "../assets/Dashimgg.png";

const WhyHireUs = () => {
  return (
    <section className="py-20 bg-blue-100 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-blue-800 text-3xl uppercase font-semibold mb-2 font">
            About Us
          </h2>
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 leading-tight playfair">
            Driven by purpose. Built on trust. <br />
            <span className="text-black"> Focused on excellence. </span>
          </h2>
          <p className="text-gray-700 mt-4 text-lg playfair">
            At Homelutions, we’re more than just a service provider, we’re
            partners in creating exceptional spaces and experiences. Our journey
            began with a simple belief: that quality craftsmanship, thoughtful
            design, and genuine human connection can transform any vision into
            reality.
          </p>
          <p className="text-gray-600 mt-4 text-lg playfair">
            With a team of skilled professionals, designers, and
            problem-solvers, we bring decades of combined expertise to every
            project. Whether it’s planning, material selection, installation, or
            ongoing support. our approach is always hands-on, transparent, and
            tailored to your needs.
          </p>
          <p className="text-gray-600 mt-4 text-lg playfair">
            We don’t just deliver solutions; we craft environments that inspire,
            last, and speak for themselves.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-gradient-to-r from-gray-900 to-blue-500 hover:from-blue-800 hover:to-blue-900 text-white px-6 py-3 rounded transition playfair text-lg">
              Read More
            </button>
            <button className="playfair text-lg font-bold border border-blue-950 text-gray-950 px-6 py-3 rounded hover:bg-blue-200 transition">
              Request Service
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Blue Background */}
          <div className="absolute -top-10 -right-5 w-100 h-100 md:w-[400px] md:h-[400px] bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse z-0" />

          <img
            src={handymanImg}
            alt="Handyman"
            className="relative z-10 w-84 md:w-100"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;
