'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Assuming you are using Next.js for optimized images

const ExpertiseComponent = () => {
  const images = [
    '/family1.jpg', // Replace with actual image paths
    '/family2.jpg',
    '/family4.jpg'
  ];

  // State to manage the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Effect to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="w-full bg-[#22232D] mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
      {/* Left Side: Image Slider */}
      <div className="w-full h-[300px] md:h-[500px] md:w-1/2 relative flex-shrink-0">
        <Image
          src={images[currentImage]} // Show current image
          alt="Rotating expertise images"
          layout="fill"
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 border-b-8 border-l-8 border-orange-500 rounded-lg"></div>
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h3 className="text-orange-500 text-xl font-bold">
          Why Choose Us
        </h3>
        <h2 className="text-3xl md:text-4xl text-white font-bold">
          Our Expertise
        </h2>

        {/* Expertise and Experience */}
        <p className="text-white text-base md:text-lg">
          <span className="font-semibold">Expertise and Experience:</span> With over 20 years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table.
        </p>

        {/* Customer-Centric Approach */}
        <p className="text-white text-base md:text-lg">
          <span className="font-semibold">Customer-Centric Approach:</span> We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.
        </p>

        {/* Innovative Solutions */}
        <p className="text-white text-base md:text-lg">
          <span className="font-semibold">Innovative Solutions:</span> We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients.
        </p>

        {/* Transparency and Integrity */}
        <p className="text-white text-base md:text-lg">
          <span className="font-semibold">Transparency and Integrity:</span> We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.
        </p>
      </div>
    </div>
  );
};

export default ExpertiseComponent;
