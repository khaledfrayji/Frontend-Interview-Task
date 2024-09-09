"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
  FaHome,
  FaInfoCircle,
  FaTools,
  FaQuestionCircle,
} from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the dropdown when hovered
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#2A2C38] text-white flex flex-col md:flex-row justify-end items-center md:space-x-8 px-10 py-5">
        <div className="flex items-center mb-2 md:mb-0">
          <FaMapMarkerAlt className="mr-2 text-[#ff9021]" />
          <span>Sydney, Australia</span>
        </div>
        <div className="flex items-center mb-2 md:mb-0">
          <FaPhone className="mr-2 text-[#ff9021]" />
          <span>0468328227</span>
        </div>
        <div className="flex items-center mb-2 md:mb-0">
          <FaClock className="mr-2 text-[#ff9021]" />
          <span>Mon - Fri: 9:00am - 5:00pm</span>
        </div>
        <div className="flex items-center">
          <FaClock className="mr-2 text-[#ff9021]" />
          <span>Weekends Appointments Only</span>
        </div>
      </div>

      {/* Bottom bar */}
      <nav className="bg-white flex justify-between items-center py-4 px-4 md:px-12 shadow-md relative">
        {/* Logo */}
        <div className="flex items-center px-4">
          <img src="/alpha.png" alt="Logo" width={150} height={150} />
        </div>

        {/* Links for larger screens */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-bold">
          <li className="flex items-center hover:bg-[#2A2C38] hover:text-white p-3 rounded-md">
            <FaHome className="mr-2" />
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center hover:bg-[#2A2C38] hover:text-white p-3 rounded-md">
            <FaInfoCircle className="mr-2" />
            <Link href="/about">About Us</Link>
          </li>

          {/* Services dropdown */}
          <li
            className="relative z-10 flex items-center p-3 rounded-md hover:bg-[#2A2C38] hover:text-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaTools className="mr-2" />
            <a href="/services" className="flex items-center cursor-pointer">
              Services <AiOutlineDown className="ml-1" />
            </a>
            {/* Dropdown menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md transition-transform duration-300 ease-in-out ${
                dropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <ul className="text-gray-800">
                <li className="px-4 py-2 hover:bg-[#2A2C38] hover:text-white">
                  <Link href="/services/home-loan">Home Loan</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#2A2C38] hover:text-white">
                  <Link href="/services/first-home-buyer">First Home Buyer</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#2A2C38] hover:text-white">
                  <Link href="/services/refinancing">Refinancing</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#2A2C38] hover:text-white">
                  <Link href="/services/commercial-loan">Commercial Loan</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#2A2C38] hover:text-white">
                  <Link href="/services/asset-finance">Asset Finance</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#2A2C38] hover:text-white">
                  <Link href="/services/smsf-lending">Self-Managed Super Fund (SMSF) Lending</Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="flex items-center hover:bg-[#2A2C38] hover:text-white p-3 rounded-md">
            <FaQuestionCircle className="mr-2" />
            <Link href="/faq">FAQ's</Link>
          </li>
        </ul>

        {/* Call to Action for larger screens */}
        <a href="tel:123456789" className="hidden md:block bg-[#2A2C38] text-white p-4 rounded-md transform transition-transform duration-300 hover:scale-105">
          Call Us Anytime
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="bg-[#2A2C38] p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-20 flex justify-end">
          <div className="bg-white w-4/5 sm:w-3/5 lg:w-2/5 p-6 rounded-md overflow-y-auto">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-3 right-3 text-gray-800 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="space-y-4 text-gray-800 font-bold">
              <li className="hover:bg-[#2A2C38] hover:text-white p-5 rounded-md">
                <FaHome className="mr-2 inline-block" />
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className="hover:bg-[#2A2C38] hover:text-white p-5 rounded-md">
                <FaInfoCircle className="mr-2 inline-block" />
                <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              </li>
              <li className="hover:bg-[#2A2C38] hover:text-white p-5 rounded-md">
                <FaTools className="mr-2 inline-block" />
                <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
              </li>
              <li className="hover:bg-[#2A2C38] hover:text-white p-5 rounded-md">
                <FaQuestionCircle className="mr-2 inline-block" />
                <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ's</Link>
              </li>
              <li className="bg-[#2A2C38] text-white p-4 rounded-md hover:bg-black hover:scale-105 transition-transform">
                <a href="tel:123456789" onClick={() => setMenuOpen(false)}>Call Us Anytime</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
