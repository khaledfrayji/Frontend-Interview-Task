"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// QuickContact Component
const QuickContact = () => {
  return (
    <div className="bg-[#2A2C38] text-white py-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Section: Contact Info */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl text-orange-500 font-bold mb-4">
          Quick Contact
        </h2>
        <p className="mb-4">
          At Alphaa Financial Solutions, we believe in empowering your property
          dreams with our premium financial services.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-orange-500" />
            <span>Sydney, Australia</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 text-orange-500" />
            <span>0468328227</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-orange-500" />
            <span>khaledfrayji007@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Right Section: Opening Hours */}
      <div className="w-full md:w-1/2 flex flex-col items-start bg-gray-800 border border-gray-700 p-6 rounded-md">
        <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
        <div className="space-y-2 text-left">
          <p>
            Mon to Fri
            ..............................................................9:00am
            | 5:00pm
          </p>
          <p>
            Sat to Sun
            ................................................................Appointments
            Only
          </p>
        </div>
        <a
          href="#schedule"
          className="w-full text-center bg-orange-400 text-black text-lg font-semibold p-4 rounded-lg mt-6 transition-colors duration-300 hover:bg-white"
        >
          Schedule A Visit
        </a>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <div className="bg-[#2A2C38] text-white border-t-2 border-[#000000] py-6 px-4 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side: Social Media Icons */}
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400 text-black p-2 hover:bg-black hover:text-white transition-colors duration-300"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400 text-black p-2 hover:bg-black hover:text-white transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400 text-black p-2 hover:bg-black hover:text-white transition-colors duration-300"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400 text-black p-2 hover:bg-black hover:text-white transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Right Side: Footer Text */}
      <div className="mt-4 md:mt-0">
        <p className="text-center text-md">
          2024 © All Rights Reserved | Developed with ❤️ by{" "}
          <span className="text-orange-500 font-bold">KHALED FRAYJI</span>
        </p>
      </div>
    </div>
  );
};

// Main Component to display QuickContact and Footer
const MainComponent = () => {
  return (
    <div>
      <QuickContact />
      <Footer />
    </div>
  );
};

export default MainComponent;
