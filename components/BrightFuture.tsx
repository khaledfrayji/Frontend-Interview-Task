'use client';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';

const WeBelieveComponent = () => {
  return (
    <div className="relative bg-[#f2f2f2] py-8 md:py-16">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#2A2C38]"></div>

      <div className="relative bg-[#22232D] z-10 flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl rounded-md overflow-hidden">
        
        <div className="md:w-1/2 p-6 text-white text-center md:text-left flex flex-col justify-center">
          <FaHome className="text-orange-500 mb-4 mx-auto md:mx-0" size={48} />
          <h2 className="text-4xl md:text-6xl font-bold mb-4">We Believe You're Bright</h2>
        </div>

        <div className="md:w-1/2 relative flex flex-col items-center md:items-end">
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src="/family5.jpeg"
              alt="Family"
              layout="responsive"
              width={700}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 w-full flex flex-col md:flex-row justify-between gap-4 px-4 pb-4 md:px-8 md:pb-8">
            <div className="bg-white text-black text-center py-4 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 border-b-4 border-orange-500">
              <div className="text-2xl md:text-3xl font-bold">320+</div>
              <div className="text-sm md:text-lg">Lenders</div>
            </div>

            <div className="bg-white text-black text-center py-4 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 border-b-4 border-orange-500">
              <div className="text-2xl md:text-3xl font-bold">20+</div>
              <div className="text-sm md:text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBelieveComponent;
