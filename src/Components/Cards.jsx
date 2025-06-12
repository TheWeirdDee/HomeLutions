/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import handyman from "../assets/Dashimgg.png";
import electric from "../assets/electric.png";
import paint from "../assets/paint.png";
import Tvmounting from "../assets/Tvmounting.png";
import Plumbing from "../assets/Plumbing.png";
import Furniture from "../assets/Furniture.png";
import Cleaning from "../assets/Cleaning.png";
import Appliance from "../assets/Appliance.png";
import Lock from "../assets/Lock.png";
const services = [
  {
    title: "Electrical Repairs",
    description:
      "Lights flickering? Socket not working? We’ll get your wiring back in shape, safely and swiftly. No sparks, just solutions.",
    image: electric,
  },
  {
    title: "Plumbing Fixes",
    description:
      "Leaky tap driving you nuts? Drain refusing to drain? We tackle drips, clogs, and splashes like it’s our superpower.",
    image: Plumbing,
  },
  {
    title: "Door & Lock Repairs",
    description:
      "Creaky door? Stubborn lock? Broken handle? We fix it all so your home feels secure, smooth, and quiet again.",
    image: Lock,
  },
  {
    title: "Furniture Assembly",
    description:
      "Just bought a flat-pack furniture and dreading the manual? Skip the stress — we’ll put it together while you relax.",
    image: Furniture,
  },
  {
    title: "Painting & Patching",
    description:
      "Time to freshen up? From bold new colors to covering up those mystery wall dents, we paint and patch with precision.",
    image: paint,
  },
  {
    title: "Appliance Installation",
    description:
      "Need a pro to install your washing machine, fan, or cooker? We hook it up neatly, safely, and ready to roll.",
    image: Appliance,
  },
   
  {
    title: "TV Mounting & Wall Hanging",
    description:
      "TVs, shelves, artwork — we’ll hang it all up straight and strong. No crooked frames or risky DIY moves here.",
    image: Tvmounting,
  },
  {
    title: "Cleaning Services",
    description:
      "Hosting a party? Just had one? Or just too busy to deep clean? We’ll scrub, shine, and refresh every corner.",
    image: Cleaning,
  },
  
];


const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(services.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left max-w-4xl mx-auto font">
        Need a <span className="text-blue-900 chloe">Handyman?</span> <br />
        We’ve Got You Covered!
      </h2>

      <div className="relative max-w-4xl mx-auto z-0" style={{ height: "400px" }}>
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          const stackOffset = (services.length - 1 - index) * 30;

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                y: isActive ? 0 : -stackOffset,
                scale: isActive ? 1 : 0,
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{ duration: 1 }}
              style={{ zIndex: isActive ? 100 : 100 - index }}
              className="absolute top-0 left-0 right-0 px-4"
            >
              <div className="bg-white rounded-xl shadow-xl shadow-black overflow-hidden grid grid-cols-1 md:grid-cols-2 h-[380px]">
                <div className="p-6 flex flex-col justify-center">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-3 font">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-lg playfair">{service.description}</p>
                </div>
                <img
  src={service.image}
  alt={service.title}
  className="w-full h-60 sm:h-80 md:h-80 lg:h-full object-contain"
/>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
