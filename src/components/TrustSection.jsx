import React from "react";
import wordClassSupport from "../assets/images/world-class-support.webp"
import documentation from "../assets/images/documentation.webp"
import builtInHouse from "../assets/images/built-in-house.webp"
import freeUpdates from "../assets/images/free-updates.webp"

const trustData = [
  {
    img: wordClassSupport,
    title: "World-Class Support",
    description:
      "We build long-term professional relationships with our customers that you can rely on & trust.",
  },
  {
    img: documentation,
    title: "Documentation & Tutorials",
    description:
      "Over 550 help files & 200 tutorial videos will make building websites with Avada even easier.",
  },
  {
    img: builtInHouse,
    title: "100% Built In-House",
    description:
      "Avada is not reliant on 3rd party tools to deliver a reliable & stable website building experience.",
  },
  {
    img: freeUpdates,
    title: "Free Lifetime Updates",
    description:
      "Your website will receive free & regular updates, compatible with industry standards & trends, for life.",
  },
];

const TrustSection = () => {
  return (
    <section className="text-center py-32 px-6 border-t">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-gray-900">
        1,011,443 Website Owners <br />
        Trust Avada
      </h2>
      <p className="text-gray-500 text-lg mt-7">
        The #1 selling Website Builder on Themeforest for 12+ years.
      </p>

      {/* Features Grid */}
      <div className="mt-20 flex flex-wrap justify-center gap-20 max-w-7xl mx-auto">
        {trustData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center w-[250px]">
            <img src={item.img} alt={item.title} className="w-20 h-20 mb-8" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
