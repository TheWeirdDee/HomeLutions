import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaTools,
  FaWater,
  FaCouch,
  FaPaintRoller,
  FaPlug,
  FaLock,
  FaTv,
  FaBroom,
  FaInfoCircle
} from 'react-icons/fa';

const services = [
  {
    title: 'Electrical Repairs',
    description:
      'We handle everything from faulty socket replacements and light fittings to complex wiring issues and panel upgrades. Our certified technicians ensure your home or office stays safe, functional, and up to code.',
    icon: <FaPlug size={30} className="text-indigo-600" />
  },
  {
    title: 'Plumbing Fixes',
    description:
      'Our team tackles leaky taps, burst pipes, clogged drains, and toilet malfunctions with prompt and clean service. We ensure efficient water flow and drainage with durable, lasting solutions for all plumbing needs.',
    icon: <FaWater size={30} className="text-blue-600" />
  },
  {
    title: 'Furniture Assembly',
    description:
      'From IKEA wardrobes and flat-pack shelves to complex bed frames and office desks, we provide careful, precise assembly. We also secure items for stability and can help with disassembly if needed.',
    icon: <FaCouch size={30} className="text-green-600" />
  },
  {
    title: 'Painting & Patching',
    description:
      'We offer interior and exterior painting, wall touch-ups, and ceiling patching. Whether you want to refresh a single room or repaint the entire home, we deliver smooth finishes and clean edges every time.',
    icon: <FaPaintRoller size={30} className="text-yellow-500" />
  },
  {
    title: 'Appliance Installation',
    description:
      'Need help installing your washing machine, dishwasher, oven, or gas cooker? We ensure every unit is connected properly, tested, and safe to use—saving you time and hassle with our expert setup.',
    icon: <FaTools size={30} className="text-red-500" />
  },
  {
    title: 'Door/Lock Repairs',
    description:
      'From squeaky hinges and jammed doors to broken locks and loose handles, we repair or replace door components to restore smooth operation and ensure your home remains secure and accessible.',
    icon: <FaLock size={30} className="text-gray-700" />
  },
  {
    title: 'TV Mounting & Wall Hanging',
    description:
      'We professionally mount TVs, mirrors, shelves, art frames, and décor with precise leveling, strong anchors, and concealed cables where needed. No more guesswork—just perfect placement.',
    icon: <FaTv size={30} className="text-purple-500" />
  },
  {
    title: 'Cleaning Services',
    description:
      'Our team provides thorough residential and commercial cleaning, including post-renovation cleanup, deep cleaning of kitchens and bathrooms, and regular housekeeping with eco-friendly products.',
    icon: <FaBroom size={30} className="text-pink-500" />
  }
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-20" id="services">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Title Section */}
        <div
          className="bg-blue-100 p-6 shadow-md flex flex-col justify-center"
          data-aos="fade-right"
        >
          <p className="text-blue-500 font-semibold mb-2 font md:text-7xl text-6xl leading-17">
            WHAT WE DO
          </p>
          <h2 className="md:text-3xl text-2xl font-bold text-gray-900 frunchy">What Can We Offer</h2>
          <h3 className="md:text-3xl text-2xl font-bold text-gray-900 frunchy">As Your Handyman</h3>
        </div>

        {/* Services Cards */}
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 font">{service.title}</h3>
            <p className="text-gray-600 text-md playfair">{service.description}</p>
            <a
              href="#"
              className="text-indigo-600 text-sm font-medium mt-3 inline-flex items-center hover:underline"
            >
              <FaInfoCircle className="mr-1" /> Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
