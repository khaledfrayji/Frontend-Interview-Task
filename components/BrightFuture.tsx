'use client';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';

const WeBelieveComponent = () => {
  return (
    <div className="relative h-[700px] bg-[#f2f2f2]">
      <div className="absolute w-full h-1/2 bg-[#2A2C38]"></div>

      <div className="relative bg-[#22232D] z-10 flex flex-col md:flex-row justify-between items-center h-full w-full max-w-6xl mx-auto rounded-md">
        
        <div className="md:w-1/2 p-6 text-white flex flex-col justify-center">
          <FaHome className="text-orange-500 mb-4" size={48} />
          <h2 className="text-6xl font-bold mb-4">We Believe You're Bright</h2>
        </div>

        <div className="md:w-1/2 relative h-full flex flex-col items-end ">
          <div className="relative h-full w-full">
            <Image
              src="/family5.jpeg"
              alt="Family"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="absolute bottom-0 w-full flex justify-between gap-4 px-4 pb-4">
            <div className="bg-white text-black text-center py-4 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:border-none border-b-4 border-orange-500">
              <div className="text-3xl font-bold">320+</div>
              <div className="text-lg">Lenders</div>
            </div>

            <div className="bg-white text-black text-center py-4 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:border-none hover:-translate-y-2 border-b-4 border-orange-500">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBelieveComponent;
