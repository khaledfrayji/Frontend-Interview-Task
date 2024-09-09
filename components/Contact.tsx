'use client';
import { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjusts how much of the component must be visible before triggering
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`max-w-7xl mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Left Section: Contact Info */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-700 text-lg">Please feel free to ask if you have any further questions.</p>

        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-center text-lg">
            <FaMapMarkerAlt className="text-orange-500 mr-3" size={24} />
            <p>Sydney, Australia</p>
          </div>

          {/* Phone */}
          <div className="flex items-center text-lg">
            <FaPhoneAlt className="text-orange-500 mr-3" size={24} />
            <p>0468328227</p>
          </div>

          {/* Working Hours */}
          <div className="flex items-center text-lg">
            <FaClock className="text-orange-500 mr-3" size={24} />
            <p>Mon - Fri: 9:00am - 5:00pm</p>
          </div>
          <div className="flex items-center text-lg">
            <FaClock className="text-orange-500 mr-3" size={24} />
            <p>Weekend Appointments Only</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-2 my-5">
              <FaFacebook className="text-black" size={32} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-2 my-5">
              <FaTwitter className="text-black" size={32} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-2 my-5">
              <FaLinkedin className="text-black" size={32} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-2 my-5">
              <FaInstagram className="text-black" size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/alpha2.jpg" // Path to your image
          alt="Office or Contact Image"
          width={600}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
    
  );
};

export default ContactUs;
