import React from 'react';
import Marquee from 'react-fast-marquee';

const pricingData = [
  {
    title: 'Electrical Repairs',
    price: '$50 - $450 +',
    description: 'From fixing broken sockets and switches to rewiring faulty connections and lighting fixtures. Price varies by urgency and complexity.',
  },
  {
    title: 'Plumbing Fixes',
    price: '$50 - $450 +',
    description: 'Includes fixing leaky taps, blocked drains, and minor pipe repairs. Emergency jobs may cost more.',
  },
  {
    title: 'Furniture Assembly',
    price: '$80 - $450 +',
    description: 'Assembly of flat-pack furniture like IKEA sets, beds, shelves, and wardrobes. Pricing depends on size and type.',
  },
  {
    title: 'Painting & Patching',
    price: '$60 - $450 +',
    description: 'Interior wall and ceiling touch-ups, hole patching, and repainting. Bigger areas may incur higher charges.',
  },
  {
    title: 'Appliance Installation',
    price: '$50 - $450 +',
    description: 'Installation of gas cookers, washing machines, fridges, etc. Includes setup, testing, and minor adjustments.',
  },
  {
    title: 'Door/Lock Repairs',
    price: '$40 - $450 +',
    description: 'Repair or replacement of locks, hinges, and door alignment. Emergency lockouts may cost more.',
  },
  {
    title: 'TV Mounting & Wall Hanging',
    price: '$40 - $450 +',
    description: 'Mounting of TVs, frames, and wall shelves. Price depends on wall type and bracket complexity.',
  },
  {
    title: 'Cleaning Services',
    price: '$50 - $450 +',
    description: 'Includes deep cleaning, after-party cleaning, and office setups. Pricing depends on scope and space size.',
  },
];

export default function Pricing() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Pricing Guide</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Prices vary depending on location, scope of work, and urgency. All payments are made after the service is completed.
        </p>
      </div>

      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover
        className="space-x-8"
      >
        {pricingData.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[320px] h-50 mx-4 bg-white shadow-xl rounded-lg p-6 flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-indigo-600 font-bold mb-2">{item.price}</p>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}