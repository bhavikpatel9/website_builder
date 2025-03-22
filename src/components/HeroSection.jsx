import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/images/homepage-hero.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10 h-auto md:h-[90vh]">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          The Ultimate
        </h1>

        <TypeAnimation
          sequence={[
            "Creative", 2000,
            "Portfolio", 2000,
            "Online Store", 2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
          Website Builder
        </h1>

        <p className="text-lg sm:text-xl text-gray-600">
          Trusted by beginners, marketers & professionals;
          <br className="hidden md:block" />
          Built with usability and performance in mind.
        </p>

        <button className="bg-[#282828] hover:bg-black text-white px-6 py-3 rounded-md text-lg font-medium">
          Start Designing →
        </button>

        <hr className="w-3/4 mx-auto md:mx-0"/>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">1,000,000+</h2>
            <p className="text-md sm:text-lg text-gray-600">People Trust Avada</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">26k+</h2>
            <p className="text-md sm:text-lg text-gray-600">Average 5-Star Reviews</p>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <img 
          src={heroImg} 
          alt="Hero Image" 
          className="w-full h-auto max-h-[500px] md:max-h-[80vh] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
