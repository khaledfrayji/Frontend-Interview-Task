'use client';
import { useEffect, useRef, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Importing an icon for the top

const ContactPawan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust the threshold as needed
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
      className="bg-cover bg-center text-black py-12 px-4 md:px-8 flex flex-col items-center text-center"
      style={{ backgroundImage: "url('/orange.avif')" }}
    >
      {/* Icon at the top */}
      <FaPhoneAlt
        className={`mb-4 transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
        size={48}
      />

      {/* Heading */}
      <h2
        className={`text-4xl font-bold mb-4 transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        Talk To PAWAN Now!
      </h2>

      {/* Contact Us Button */}
      <a
        href="#contact"
        className={`inline-block bg-white text-black text-lg font-semibold p-6 px-10 my-5 rounded-md transition-transform transform hover:scale-105 duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        Contact Us
      </a>

      {/* Additional Text */}
      <p
        className={`text-lg mt-6 transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        Feel Free to Get in Touch for a No Obligations{' '}
        <a href="tel:+1234567890" className="text-black font-semibold underline">
          Call PAWAN !!!
        </a>
      </p>
    </div>
  );
};

export default ContactPawan;
