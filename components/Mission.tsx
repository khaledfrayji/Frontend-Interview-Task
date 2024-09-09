'use client';
import { useEffect, useRef, useState } from 'react';
import { FaHome } from 'react-icons/fa';

const OurStoryAndMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
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
    <>
    <div
      ref={sectionRef}
      className={`bg-gray-800 py-10 px-4 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md p-6 relative">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500 rounded-b-lg"></div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h3>
          <p className="text-gray-700 mb-6">
            Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.
          </p>
          <a href="#" className="text-gray-900 font-bold hover:underline">KNOW MORE</a>
        </div>

        {/* Our Mission */}
        <div className="bg-white rounded-lg shadow-md p-6 relative">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500 rounded-b-lg"></div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.
          </p>
          <a href="#" className="text-gray-900 font-bold hover:underline">KNOW MORE</a>
        </div>
      </div>
      
    </div>
     {/* Title */}
     <div className='pt-10'>
     <FaHome size={34} className=' text-orange-500  m-auto' />,
     <h1 className="text-4xl text-gray-800 font-bold   text-center mb-8">Our Services</h1>
     </div>
 
      </>
  );
};

export default OurStoryAndMission;
