'use client';
import { FaHome, FaBusinessTime, FaPiggyBank, FaFileContract, FaHandshake, FaUniversity, FaChartLine, FaCar, FaUserShield } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome size={24} />,
    title: 'Home Loans',
    description: 'At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey. Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.',
  },
  {
    icon: <FaBusinessTime size={24} />,
    title: 'Business Loans',
    description: 'Empowering businesses with the right financing options. Whether you are expanding, investing in new technology, or starting up, we provide tailored financial solutions to help your business thrive.',
  },
  {
    icon: <FaPiggyBank size={24} />,
    title: 'Savings Plans',
    description: 'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance.',
  },
  {
    icon: <FaFileContract size={24} />,
    title: 'Mortgage Solutions',
    description: 'An investment property is a real estate asset purchased with the intention of generating income or profit, rather than being used as a primary residence. These properties can include residential homes, apartment buildings, commercial spaces, or land. Investors typically buy these properties to earn rental income, benefit from property appreciation over time.',
  },
  {
    icon: <FaHandshake size={24} />,
    title: 'Personal Loans',
    description: 'At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.',
  },
  {
    icon: <FaUniversity size={24} />,
    title: 'Education Loans',
    description: 'At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.',
  },
  {
    icon: <FaChartLine size={24} />,
    title: 'Investment Advice',
    description: 'At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.',
  },
  {
    icon: <FaCar size={24} />,
    title: 'Auto Loans',
    description: 'At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.',
  },
  {
    icon: <FaUserShield size={24} />,
    title: 'Insurance Solutions',
    description: 'At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.',
  },
];

const carouselItems = [
  {
    image: '/family1.jpg',
    text: 'Empowering Financial Freedom'
  },
  {
    image: '/family2.jpg',
    text: 'Achieve Your Dreams with Us'
  },
  {
    image: '/family3.jpg',
    text: 'Customized Financial Solutions'
  },
 
];

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
     
      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Left Side - Cards (Taking more space) */}
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border-b-4 border-orange-500 hover:border-orange-600 p-10 rounded-lg shadow-md transition-all duration-300">
              <div className="flex items-center mb-4 border-b-2 border-black pb-2 text-center">
                <div className="mr-2 text-orange-500">{service.icon}</div>
                <h3 className="text-xl m-auto font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Carousel (Taking less space) */}
        <div className="relative col-span-1 md:col-span-1 lg:col-span-1">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white text-center px-4">
                <h2 className="text-3xl font-bold">{item.text}</h2>
              </div>
            </div>
          ))}

         
        </div>
      </div>
    </div>
  );
};

export default OurServices;
