import React from 'react';
import contact from "../assets/contact.png";

export default function BookService() {
  return (
    <section className="bg-blue-100 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
         
        <div className="mb-10">
          <h2 className="font text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-8 text-left">
            Book a Service
          </h2>
          <p className="text-gray-600 playfair text-lg text-left max-w-2xl">
            Have a repair or project in mind? Fill out the form and our expert handyman will get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <form className="bg-blue-50 p-10 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 font">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              
              <label className="block text-gray-700 mb-2 font">Full Name</label>
              <input
                type="text"
                placeholder="Divine Dilibe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font">Home Address</label>
              <input
                type="text"
                placeholder="123 Main Street"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font">Select Service Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 playfair">
                <option>Select Service Type</option>
                <option>Electrical Repairs</option>
                <option>Plumbing</option>
                <option>Furniture Assembly</option>
                <option>Painting & Patching</option>
                <option>Appliance Installation</option>
                <option>Cleaning</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font">Pick a Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 playfair"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font">Pick a Time</label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 playfair"
              />
            </div>
          </div>

        
          <div className="mt-10 flex flex-col md:flex-row gap-6">
             
            <div className="flex-1">
              <label className="block text-gray-700 mb-2 playfair">Describe the issue or service needed</label>
              <textarea
                rows="6"
                placeholder="Please provide details about the work you need done..."
                className="md:w-150 w-70 sm:w-130 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            
            <div className="md:w-1/4 mr-20">
              <img
                src={contact}
                alt="Handyman"
                className="w-full object-cover "
              />
            </div>
          </div>
 
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-gradient-to-r from-gray-900 to-blue-500 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold   transition"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
