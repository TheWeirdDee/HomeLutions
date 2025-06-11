import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaToolbox } from 'react-icons/fa';  

const Footer = () => {
  return (
    <footer className="bg-blue-950/90 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <FaToolbox className="text-blue-400 text-3xl" />  
            <span className="text-xl font-bold playfair">HomeLutions</span>
          </div>
          <p className="text-xl mb-6 frunchy leading-5">
            Reliable handyman services for all your home repair and maintenance needs.
          </p>
          <h3 className="text-2xl font-bold mb-2 text-blue-400 font">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#"><FaFacebookF className="hover:text-blue-400" /></a>
            <a href="#"><FaInstagram className="hover:text-blue-400" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-400" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 font">Quick Links</h4>
          <ul className="space-y-2 text-lg playfair">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Why Hire Us?</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xl font-semibold mb-4 font">Company</h4>
          <ul className="space-y-2 text-md playfair">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xl font-semibold mb-4 font">Support</h4>
          <ul className="space-y-2 text-md playfair">
            <li><a href="#" className="hover:text-blue-400">Customer Support</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Live Chat</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-2xl text-gray-400 mt-10 border-t border-gray-600 pt-4 frunchy">
        © {new Date().getFullYear()} HandyPro Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;