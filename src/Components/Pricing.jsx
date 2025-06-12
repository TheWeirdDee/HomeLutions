import React from "react";

const pricing = [
  {
    title: 'Electrical Repairs',
    price: '$50 - $450 +',
    description: 'From fixing broken sockets and switches to rewiring faulty connections and lighting fixtures. Price varies by urgency and complexity. From fixing broken sockets and switches. Price varies by urgency and complexity.',
  },
  {
    title: 'Plumbing Fixes',
    price: '$50 - $450 +',
    description: 'Includes fixing leaky taps, blocked drains, and minor pipe repairs. Emergency jobs may cost more. Includes fixing leaky taps, blocked drains, and minor pipe repairs. Emergency jobs may cost more.',
  },
  {
    title: 'Furniture Assembly',
    price: '$80 - $450 +',
    description: 'Assembly of flat-pack furniture like IKEA sets, beds, shelves, and wardrobes. Pricing depends on size and type. Assembly of flat-pack furniture like IKEA sets, beds, shelves, and wardrobes. Pricing depends on size and type.',
  },
  {
    title: 'Painting & Patching',
    price: '$60 - $450 +',
    description: 'Interior wall and ceiling touch-ups, hole patching, and repainting. Bigger areas may incur higher charges. Interior wall and ceiling touch-ups, hole patching, and repainting. Bigger areas may incur higher charges.',
  },
  {
    title: 'Appliance Installation',
    price: '$50 - $450 +',
    description: 'Installation of gas cookers, washing machines, fridges, etc. Includes setup, testing, and minor adjustments. Installation of gas cookers, washing machines, fridges, etc. Includes setup, testing, and minor adjustments.',
  },
  {
    title: 'Door/Lock Repairs',
    price: '$40 - $450 +',
    description: 'Repair or replacement of locks, hinges, and door alignment. Emergency lockouts may cost more. Repair or replacement of locks, hinges, and door alignment. Emergency lockouts may cost more.',
  },
  {
    title: 'TV Mounting & Wall Hanging',
    price: '$40 - $450 +',
    description: 'Mounting of TVs, frames, and wall shelves. Price depends on wall type and bracket complexity. Mounting of TVs, frames, and wall shelves. Price depends on wall type and bracket complexity.',
  },
  {
    title: 'Cleaning Services',
    price: '$50 - $450 +',
    description: 'Includes deep cleaning, after-party cleaning, and office setups. Pricing depends on scope and space size. Includes deep cleaning, after-party cleaning, and office setups. Pricing depends on scope and space size.',
  },
];

const PricingGuide = () => {
  return (
    <section className="py-20 bg-blue-50">
       
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .hover\\:breathe:hover {
          animation: breathe 2.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-5 text-blue-950 font">
          Pricing Guide
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg playfair">
          Our service-based pricing ensures you pay only after completion. Fees vary depending on the location, urgency, and task complexity. Here’s a general pricing overview:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricing.map((item, index) => (
            <div
              key={index}
              className="bg-white h-[280px] shadow-[0_10px_25px_rgba(0,0,0,0.5)] rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:breathe"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 font">
                {item.title}
                <p className="text-blue-600 font-bold mt-2 playfair">{item.price}</p>
              </h3>
              <p className="playfair text-base text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGuide;
