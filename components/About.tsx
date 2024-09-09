"use client";
import { FaRegSmile } from "react-icons/fa";
import Image from "next/image";

const AboutComponent = () => {
  return (
    <div className="w-full mx-auto py-12 px-4 md:px-8 bg-[#f2f2f2]">
      <h1 className="font-bold text-[3rem] text-gray-800 ml-10 pb-20 slide-in">About Us</h1>
      <div className="text-center mb-8">
        <FaRegSmile className="text-orange-500 mx-auto" size={40} />
        <h2 className="text-4xl font-bold mt-2 slide-in">We Believe You're Bright</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <div className="relative w-full h-auto">
            <Image
              src="/family1.jpg"
              alt="Family"
              width={700}
              height={200}
              className="rounded-lg object-cover"
            />
            <div className="absolute inset-0 border-r-8 border-b-8 border-orange-500 rounded-lg"></div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-black slide-in">Our Mission</h3>
            <p className="text-gray-700 mt-2 slide-in">
              Our mission is to provide our clients with tailored financial
              solutions that cater to their unique needs. We strive to make the
              process of securing a mortgage as straightforward and stress-free
              as possible, guiding you through every step with transparency and
              integrity.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          {/* Welcome Section */}
          <div>
            <h3 className="text-2xl font-semibold text-black slide-in">
              Welcome To Alphaa Financial Solutions
            </h3>
            <p className="text-gray-700 mt-2 slide-in">
              At Alphaa Financial Solutions, we believe in empowering your
              property dreams with our premium financial services. Established
              with a vision to provide seamless loan processing and financial
              advisory, we have grown to become a trusted name in the Australian
              mortgage industry.
            </p>
          </div>

          {/* Our Story Section */}
          <div>
            <h3 className="text-2xl pt-20 font-semibold text-black slide-in">
              Our Story <FaRegSmile className="inline text-orange-500" />
            </h3>
            <p className="text-gray-700 mt-2 slide-in">
              Alphaa Financial Solutions was born out of a desire to simplify
              the complexities of property financing. Our founder, Mr. Pawan
              Punjabi, envisioned a company where customer-centricity and
              financial expertise go hand in hand. Over the years, we have
              helped thousands of Australians achieve their dream of owning a
              home, thanks to our unwavering commitment to excellence and
              innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
