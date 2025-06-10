import React from "react";
import { WrenchScrewdriverIcon, CurrencyDollarIcon, ClockIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6 text-blue-600" />,
    title: "Skilled Professionals",
    description: "Experienced handymen for every task, big or small."
  },
  {
    icon: <CurrencyDollarIcon className="h-6 w-6 text-blue-600" />,
    title: "Upfront Pricing",
    description: "Clear, honest pricing with no surprise charges."
  },
  {
    icon: <ClockIcon className="h-6 w-6 text-blue-600" />,
    title: "On-Demand Service",
    description: "Book appointments when it’s most convenient for you."
  },
  {
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-blue-600" />,
    title: "Wide Range of Services",
    description: "From plumbing to carpentry, painting, repairs and more."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left content */}
        <div>
          <p className="text-2xl font-semibold text-blue-800 uppercase">Why Choose Us?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Choose Us For Reliable Handyman Services
          </h2>
          <p className="text-gray-600 mt-4">
            From minor fixes to major repairs, our team ensures your home and workspace stay in top shape quickly, professionally, and affordably.
          </p>
        </div>

        {/* Right content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-md">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;