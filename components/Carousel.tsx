'use client'
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
  const slides = [
    {
      image: '/family1.jpg', // Path to your images
      heading: 'Empowering Financial Security for Everyone',
      caption: 'We are committed to providing accessible and reliable financial services to help individuals and families.'
    },
    {
      image: '/family2.jpg',
      heading: 'Your Trusted Partner in Financial Solutions',
      caption: 'Offering a wide range of financial services tailored to your needs.'
    },
    {
      image: '/family3.jpg',
      heading: 'Achieve Your Dreams with Expert Financial Guidance',
      caption: 'Our team is dedicated to helping you achieve financial success and security.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch to the next slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); // Change image every 7 seconds
    return () => clearInterval(interval); 
  }, [slides.length]);

  // Manually go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Manually go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-full overflow-hidden">
            <img
              src={slide.image}
              alt={slide.heading}
              className={`w-full h-full object-cover transform transition-transform duration-[7000ms] ease-in-out ${
                index === currentSlide ? 'scale-100' : 'scale-105'
              }`} // This creates the zoom-out effect
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.heading}</h2>
            <p className="text-lg md:text-xl">{slide.caption}</p>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
