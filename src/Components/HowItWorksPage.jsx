import React from 'react';
import electric from '../assets/electric.png';

const steps = [
  {
    title: 'Find Your Service',
    description:
      'Browse through a wide range of handyman services to find exactly what you need – from electrical fixes to furniture assembly and more.',
    image: electric,
    reverse: false,
  },
  {
    title: 'Book an Appointment',
    description:
      'Choose a time that works for you. Our handymen arrive on time, fully equipped to handle your tasks efficiently and professionally.',
    image: electric,
    reverse: true,
  },
  {
    title: 'Track Your Job',
    description:
      'Stay updated with real-time tracking and job progress. We’ll notify you once the task is completed and get your feedback.',
    image: electric,
    reverse: false,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-blue-100 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        How It Works
      </h2>

      <div className="relative before:absolute before:left-[50%] before:top-10 before:bottom-10 before:w-1 before:bg-gradient-to-b from-[#f0f0f0] to-[#d1d1d1] before:rounded-full before:translate-x-[-50%]">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-24 gap-10 ${
              step.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Container with Blue Pulsing Background */}
            <div className="relative w-full md:w-1/3 flex items-center justify-center">
              <div className="absolute w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse z-0" />
              <img
                src={step.image}
                alt={step.title}
                className="relative z-10 w-full max-w-sm drop-shadow-xl"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <div className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </div>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
