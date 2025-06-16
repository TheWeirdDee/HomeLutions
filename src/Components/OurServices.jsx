import React from "react";
import handymanImg from "../assets/electric.png";

const OurServices = () => {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <p className="text-2xl text-blue-950 font-semibold mb-2 frunchy">
            WE CAN HELP YOU
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 font">
            We’re Experts In <br /> The Handyman Business!
          </h2>
          <p className="text-gray-600 mb-6 max-w-md text-md playfair">
            From fixing leaky faucets to full home repairs, our skilled team
            ensures reliable, efficient, and affordable service for all your
            handyman needs.
          </p>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 font">
                Job Success Rate
              </span>
              <span className="text-lg font-medium text-gray-700 chloe">
                92%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 font">
                Customer Satisfaction
              </span>
              <span className="text-lg chloe font-medium text-gray-700">
                98%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: "98%" }}
              ></div>
            </div>
          </div>

          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-gray-900 to-blue-500 hover:from-blue-800 hover:to-blue-900 text-white rounded-md font-semibold shadow-md transition duration-300">
            Hire Us Now
          </button>
        </div>

        <div className="flex-1 relative flex items-center justify-center">
          <div className="absolute w-[350px] h-[350px] md:w-[400px] md:h-[400px] bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse z-0" />

          <img
            src={handymanImg}
            alt="Handyman"
            className="relative z-10 w-[250px] md:w-[320px] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
