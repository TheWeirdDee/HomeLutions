import React from 'react';
import { FaSearch, FaTools, FaClipboardList } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch className="text-white text-2xl" />,
    title: "Find Your Service",
    description: "Browse our list of professional handyman services tailored to your needs.",
    bgColor: "bg-purple-500",
  },
  {
    icon: <FaTools className="text-white text-2xl" />,
    title: "Book an Appointment",
    description: "Choose a convenient time and let our experts handle the rest.",
    bgColor: "bg-cyan-400",
  },
  {
    icon: <FaClipboardList className="text-white text-2xl" />,
    title: "Track Your Job",
    description: "Stay informed with real-time updates until the work is complete.",
    bgColor: "bg-pink-400",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-blue-100 py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How it works?</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md ${step.bgColor}`}>
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;