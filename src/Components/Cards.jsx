import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import handyman from "../assets/Dashimgg.png";  

const steps = [
  {
    title: "Free Inspection & Estimate",
    description:
      "We visit your site, assess the work needed, and give you a detailed cost estimate.",
    image: handyman,
  },
  {
    title: "Material Selection",
    description:
      "We help you choose the right materials for quality and budget.",
    image: handyman,
  },
  {
    title: "Skilled Execution",
    description:
      "Our professional team executes the work with attention to detail and safety.",
    image: handyman,
  },
  {
    title: "Quality Check & Cleanup",
    description:
      "We inspect all work done and clean up the site before handover.",
    image: handyman,
  },
  {
    title: "After-Support & Maintenance",
    description:
      "We stay in touch for post-service support, repairs, and adjustments.",
    image: handyman,
  },
];

const Cards = () => {
    return (
      <div className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16">
          How We <span className="text-yellow-600">Simplify</span> Your Home Repairs
        </h2>
  
        <div className="relative max-w-4xl mx-auto h-[400px]">
          {steps.map((step, index) => (
            <StackedCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    );
  };
  
  const StackedCard = ({ step, index }) => {
    const zIndex = 100 - index; // topmost card has highest z-index
    const offset = index * -20; // each card peeks from the top
  
    return (
      <motion.div
        className="absolute w-full left-0 right-0"
        style={{
          top: 0,
          transform: `translateY(${offset}px)`,
          zIndex,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 h-[280px]">
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-4xl font-light text-gray-300 mb-1">{index + 1}</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
          <div className="h-full">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    );
  };
  
  

export default Cards;
