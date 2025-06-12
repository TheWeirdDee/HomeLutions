import React from 'react';
import paint from "../assets/paint.png";
const AboutUsPage = () => {
  return (
    <section className="bg-blue-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div>
        <h2 className="text-blue-800 text-2xl uppercase font-semibold mb-2 font">About Us</h2>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-snug playfair">
            We’re Your Trusted Local Handyman Experts
          </h2>
          <p className="text-gray-700 mt-4 text-lg playfair">
          At Homelutions, we’re more than just a service provider, we’re partners in creating exceptional spaces and experiences. Our journey began with a simple belief: that quality craftsmanship, thoughtful design, and genuine human connection can transform any vision into reality.

          </p>
          <p className="text-gray-600 mt-4 text-lg playfair">
          With a team of skilled professionals, designers, and problem-solvers, we bring decades of combined expertise to every project. Whether it’s planning, material selection, installation, or ongoing support. our approach is always hands-on, transparent, and tailored to your needs.
          </p>
          <p className="text-gray-600 mt-4 text-lg playfair">
          We don’t just deliver solutions; we craft environments that inspire, last, and speak for themselves.
          </p>

          <div className="bg-yellow-100 border-l-4 border-blue-500 p-4 rounded mt-5">
            <p className="text-blue-800 font-semibold">
              "Your home is your biggest investment—let us help you take care of it."
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Blue Background */}
          <div className="absolute -top-10 -right-5 w-100 h-100 md:w-[400px] md:h-[400px] bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse z-0" />
        
          <img
            src= {paint}
            alt="Handyman working"
            className="w-full h-100 rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;