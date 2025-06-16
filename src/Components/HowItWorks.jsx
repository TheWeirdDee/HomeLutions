import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaTools, FaClipboardList } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-white text-2xl" />,
    title: "Find Your Service",
    description:
      "Browse our list of professional handyman services that fits your needs.",
    bgColor: "bg-purple-500",
  },
  {
    icon: <FaTools className="text-white text-2xl" />,
    title: "Book an Appointment",
    description:
      "Choose a convenient time and let our experts handle the rest.",
    bgColor: "bg-cyan-400",
  },
  {
    icon: <FaClipboardList className="text-white text-2xl" />,
    title: "Track Your Job",
    description:
      "Stay informed with real-time updates until the work is complete.",
    bgColor: "bg-pink-400",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-blue-100 py-20 px-4">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font">
          How it works?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md ${step.bgColor}`}
            >
              {step.icon}
            </div>
            <h3 className="text-md font-semibold text-gray-800 mb-2 font">
              {step.title}
            </h3>
            <p className="text-gray-600 text-md playfair">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
