import React from "react";
import testiMonialImg from "../assets/images/testimonial.jpg"

const Testimonial = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-yellow-200 h-[90vh]">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center h-full">
        <img
          src={testiMonialImg}
          alt="Team"
          className="w-full h-auto shadow-lg object-cover"
        />
      </div>

      {/* Right Section - Testimonial */}
      <div className="w-full md:w-1/2 p-6 md:p-10">
        <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
          “We choose to specialise in Avada because it is both functional and practical, and
          our clients simply love it! It has stood the test of time and continues to evolve - an 
          excellent solution for our talented design team, who continue to push the boundaries.”
        </p>

        {/* Company Info */}
        <div className="flex items-center gap-3 mt-6">
          <img
            src="https://avada.com/wp-content/uploads/2021/08/squarebird-logo.png"
            alt="Squarebird Logo"
            className="w-10 h-10"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Squarebird</h3>
            <a
              href="https://www.squarebird.co.uk"
              className="underline text-sm"
            >
              https://www.squarebird.co.uk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
