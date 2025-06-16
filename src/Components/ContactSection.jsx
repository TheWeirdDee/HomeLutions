import React from "react";
import contact from "../assets/contact.png";
const ContactUs = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-10">
        {/* Form */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6 playfair text-lg">
            Have a repair or project in mind? Fill out the form and our expert
            handyman will get back to you promptly.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700 playfair">
                Full Name
              </label>
              <input
                type="text"
                className="playfair text-md w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Divine Dilibe"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 playfair">
                Email
              </label>
              <input
                type="email"
                className="playfair text-md w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="playfair block text-lg font-medium text-gray-900">
                Message
              </label>
              <textarea
                rows="4"
                className="playfair text-xl w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about the help you need..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="playfair bg-gradient-to-r from-gray-900 to-blue-500 hover:from-blue-800 hover:to-blue-900 text-white px-6 py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="md:w-1/5 flex flex-col items-center text-center md:text-left md:items-start playfair text-lg">
          <img
            src={contact}
            alt="Handyman"
            className="w-full rounded-md mb-6 object-cover"
          />
          <div className="space-y-4 text-gray-700 text-left mr-20">
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>support@handymanservice.com</p>
            </div>
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>123 Fix-It Street, Tooltown, TX 78910</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
