import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6 text-blue-600" />,
    title: "Skilled Professionals",
    description: "Experienced handymen for every task, big or small.",
  },
  {
    icon: <CurrencyDollarIcon className="h-6 w-6 text-blue-600" />,
    title: "Upfront Pricing",
    description: "Clear, honest pricing with no surprise charges.",
  },
  {
    icon: <ClockIcon className="h-6 w-6 text-blue-600" />,
    title: "On-Demand Service",
    description: "Book appointments when it’s most convenient for you.",
  },
  {
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-blue-600" />,
    title: "Wide Range of Services",
    description: "From plumbing to carpentry, painting, repairs and more.",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div data-aos="fade-right">
          <p className="text-3xl font-semibold text-blue-800 uppercase font">Why Choose Us?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 playfair">
            Choose Us For Reliable Handyman Services
          </h2>
          <p className="text-gray-600 text-lg mt-4 playfair">
            From minor fixes to major repairs, our team ensures your home and workspace stay in top shape quickly, professionally, and affordably.
          </p>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-blue-100 p-2 rounded-md">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-md text-gray-600 mt-1 playfair">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
