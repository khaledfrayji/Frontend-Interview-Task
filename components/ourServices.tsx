import { FaChevronDown } from "react-icons/fa";

const ServicesHeader = () => {
  return (
    <main  className="bg-[#f2f2f2]">
     <h1 className="font-bold text-[3rem] text-gray-800 pl-10 ml-10 p-8">Services</h1>
      <section
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/services.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Services</h1>
          <FaChevronDown className="mt-4 mx-auto text-orange-500 text-3xl md:text-4xl animate-bounce" />
        </div>
      </section>

      <div className="flex flex-col items-center text-center py-10 px-4 md:px-20 bg-white">
        <div className="flex justify-center items-center w-12 h-12 bg-orange-500 rounded-full mb-4">
          <FaChevronDown className="text-white text-lg" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-800 text-[2rem] font-bold mt-2 max-w-2xl">
          Find The Right Home For Your Budget
        </p>
      </div>
    </main>
  );
};

export default ServicesHeader;
