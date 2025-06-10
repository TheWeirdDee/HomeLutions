import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
 

const Navbar = () => {
     
        const [isOpen, setIsOpen] = useState(false);
      
        const handleNavLinkClick = () => {
          setIsOpen(false);
        };
      
  return (
    <div>       
    <nav className="fixed top-0 left-0 right-0 w-full bg-blue-950/90 backdrop-blur-lg z-50 shadow-sm">
        <div className="flex justify-between items-center px-4 py-4">

        
      <div className="text-xl font-semibold text-white pl-3 md:pl-5 sm:pl-7">
        <span className="font-bold">Home</span>Lutions
        
      </div>
      <ul className="hidden md:flex space-x-6 ml-5 font-medium text-white">
        <li> 
        <NavLink 
            exact to="/" 
            className={({ isActive }) => 
              `navLink hover:text-blue-400 ${isActive ? "border-b-2 border-blue-100" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li> <NavLink 
            exact to="/about" 
            className={({ isActive }) => 
              `navLink hover:text-blue-400 ${isActive ? "border-b-2 border-blue-100" : ""}`
            }
          >
            About Us
          </NavLink></li>

        <li> <NavLink 
            exact to="/howitworks" 
            className={({ isActive }) => 
              `navLink hover:text-blue-400 ${isActive ? "border-b-2 border-blue-100" : ""}`
            }
          >
             How it works
          </NavLink></li>
          <li>
            <NavLink 
            exact to="/Services" 
            className={({ isActive }) => 
              `navLink hover:text-blue-400 ${isActive ? "border-b-2 border-blue-100" : ""}`
            }
          >
            Services
          </NavLink></li>

        <li>
            <NavLink 
            exact to="/Contact" 
            className={({ isActive }) => 
              `navLink hover:text-blue-400 ${isActive ? "border-b-2 border-blue-100" : ""}`
            }
          >
            Contact Us
          </NavLink></li>
      </ul>

      <div className="flex justify-between items-center space-x-4 mr-0 md:mr-5">
        <button className="px-4 py-2 border border-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-900 transition">Log In</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition">Sign Up</button>
      </div>


      {/* Mobile Menu Button */}
      <button className="md:hidden z-20 right-5  text-gray-900 relative text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      </div>
      
      {/* Mobile Menu */}
      <ul
        className={`fixed z-10 top-0 left-0 w-full pt-20 h-screen bg-blue-950 text-white font-bold text-center text-lg   transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <li className="py-3">
          <NavLink 
            exact to="/" 
            className={({ isActive }) => 
              `navLink hover:text-blue-500 ${isActive ? "border-b-2 border-blue-700" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            Home
          </NavLink>
        </li>
         
        <li className="py-3">
          <NavLink 
            exact to="/about" 
            className={({ isActive }) => 
              `navLink hover:text-blue-500 ${isActive ? "border-b-2 border-blue-500" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            About Us
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink 
            exact to="/howitworks" 
            className={({ isActive }) => 
              `navLink hover:text-blue-500 ${isActive ? "border-b-2 border-blue-500" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            How it works
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink 
            exact to="/services" 
            className={({ isActive }) => 
              `navLink hover:text-blue-500 ${isActive ? "border-b-2 border-blue-500" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            Services
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink 
            exact to="/contact" 
            className={({ isActive }) => 
              `navLink hover:text-blue-500 ${isActive ? "border-b-2 border-blue-500" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            Contact Us
          </NavLink>
        </li>
      </ul> 
    </nav></div>
  )
}

export default Navbar