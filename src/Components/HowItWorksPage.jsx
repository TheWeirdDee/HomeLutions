import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import electric from '../assets/Support.png';
import Search from '../assets/Searchimg.png';
import Appointment from '../assets/Appointment.png';
import Track from '../assets/Trackk.png';
import Rate from '../assets/Rate.png';

const steps = [
  {
    title: 'Find Your Service',
    description:
      'Browse our catalog of handyman services to find exactly what you need. Whether it’s fixing an electrical issue, hanging a TV, or deep cleaning your space, we’ve got you covered with a wide array of reliable solutions at your fingertips.',
    image: Search,
    reverse: false,
  },
  {
    title: 'Book an Appointment',
    description:
      'Choose a convenient time that fits your schedule. Our platform lets you easily pick a day and time slot. Once confirmed, a qualified handyman will be assigned and briefed to ensure smooth and timely service delivery.',
    image: Appointment,
    reverse: true,
  },
  {
    title: 'Track Your Job in Real-Time',
    description:
      'From the moment your appointment is confirmed, you can track the handyman’s progress in real-time. Get notifications when they’re on the way, when the work begins, and when it’s completed — so you’re never left guessing.',
    image: Track,
    reverse: false,
  },
  {
    title: 'Rate and Review Your Experience',
    description:
      'After the job is complete, we ask for your feedback. Your rating helps maintain our high standards and ensures that only the best professionals stay in our network. It’s a quick way to share your satisfaction or raise concerns.',
    image: Rate,
    reverse: true,
  },
  {
    title: 'Get Ongoing Support',
    description:
      'Need another service later? No problem. With your profile, booking history, and preferences saved, hiring again is fast and hassle-free. Plus, our support team is always available to answer questions or handle follow-ups.',
    image: electric,
    reverse: false,
  },
];

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative py-20 px-6 md:px-20 bg-blue-100 overflow-hidden">
      <h2
        className="text-4xl md:text-5xl font-semibold text-center tracking-widest mb-16 chloe"
        data-aos="fade-down"
      >
        How It Works?
      </h2>

      <div className="relative before:absolute before:left-[50%] before:top-10 before:bottom-10 before:w-1 before:bg-gradient-to-b from-[#f0f0f0] to-[#d1d1d1] before:rounded-full before:translate-x-[-50%]">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-16 md:mb-12 gap-10 ${
              step.reverse ? 'md:flex-row-reverse' : ''
            }`}
            data-aos={step.reverse ? 'fade-left' : 'fade-right'}
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <div className="relative md:w-1/5 w-1/3 flex items-center justify-center">
              <div className="absolute w-34 h-34 bg-blue-800 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse z-0" />
              <img
                src={step.image}
                alt={step.title}
                className="relative z-10 w-full max-w-sm drop-shadow-xl"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <div className="text-2xl font-bold text-gray-800 mb-3 font">
                {step.title}
              </div>
              <p className="text-gray-700 text-left md:text-left text-lg leading-relaxed playfair">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-5 text-center" data-aos="zoom-in-up">
        <button className="font tracking-wider px-8 py-3 text-white font-semibold rounded-md shadow-md bg-gradient-to-r from-gray-900 to-blue-500 hover:from-blue-800 hover:to-blue-900 transition duration-300">
          Hire a Service
        </button>
      </div>
    </section>
  );
}
