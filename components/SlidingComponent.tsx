'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization

const ImageWithSlidingHouse = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 flex justify-center items-center gap-8">
      {/* Left Div */}
      <div className="relative w-1/2 h-[300px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        {/* Main Image */}
        <Image
          src="/family4.jpg"
          alt="Family"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        {/* House Image */}
        <img
          src="/home.png" // Path to the house image
          alt="House"
          className={`absolute bottom-0 left-0 w-48 transition-transform duration-1000 ${isScrolled ? 'translate-x-0' : '-translate-x-full'}`}
        />
      </div>

      {/* Right Div */}
      <div className="w-1/2 h-[300px] bg-gray-400 rounded-lg"></div>
    </div>
  );
};

export default ImageWithSlidingHouse;
