'use client';
import { FaUserTie } from 'react-icons/fa'; // Icon for the top
import Image from 'next/image'; // Assuming you're using Next.js for image optimization

const FounderCard = () => {
  return (
    <div className="max-w-md mx-auto py-12 flex flex-col items-center">
    
      <div className="text-orange-500 mb-4">
        <FaUserTie size={50} />
      </div>

     
      <h1 className="text-3xl font-bold mb-6">Meet Our Founder</h1>

     
      <div className="border-b-4 border-orange-500 p-10 bg-white rounded-lg shadow-md text-center">
       
        <Image
          src="/founder.jpg" 
          alt="Mr. Pawan Punjabi"
          width={250}
          height={250}
          className="rounded-full mx-auto mb-4"
        />

        
        <h2 className="text-xl font-semibold">Mr. Pawan Punjabi</h2>

       
        <p className="text-gray-600">Founder</p>
      </div>
    </div>
  );
};

export default FounderCard;
