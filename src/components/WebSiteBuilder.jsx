import React from "react";
import preBuiltImg from "../assets/images/prebuilt-website.jpg"
import designElementsImg from "../assets/images/design-elements.webp"
import performanceImg from "../assets/images/performance.jpg"
import mobileFriendlyImg from "../assets/images/mobile-friendly.webp"
import dynamicContentImg from "../assets/images/dynamic-content.webp"
import wooImg from "../assets/images/woo.jpg"

const websiteData = [
  {
    img: preBuiltImg,
    title: "110 Prebuilt Websites",
    description:
      "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.",
  },
  {
    img: designElementsImg,
    title: "120+ Design Elements",
    description:
      "Packed with options, they are highly flexible for any design & for any purpose. The only limit is your imagination.",
  },
  {
    img: performanceImg,
    title: "Built For Performance",
    description:
      "Experience total control of your website’s features that will empower you to make superior performance-related decisions.",
  },
  {
    img: mobileFriendlyImg,
    title: "Mobile Friendly",
    description: "Avada is 100% fluid & responsive across all device types, from mobile to desktop & tablets, with no compromise.",
  },
  {
    img: dynamicContentImg,
    title: "Dynamic Content",
    description: "Build unique pages & post layouts for your website by harnessing the power of Avada’s dynamic content functionality.",
  },
  {
    img: wooImg,
    title: "Online Store Builder",
    description: "Avada is integrated with WooCommerce, allowing you to build successful online stores to sell anything online.",
  },
];

const WebsiteBuilder = () => {
  return (
    <section className="text-center py-24 px-6">
      <h2 className="text-5xl font-bold mb-8">All-In-One Website Builder</h2>
      <p className="text-gray-600 mb-20 text-xl">
        Experience total control over your website creation process.
      </p>

      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-20">
        {websiteData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-sm">
            <img src={item.img} alt={item.title} className="w-96 mb-4" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-base">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Discover More Button */}
      <button className="mt-8 px-6 py-3 bg-[#282828] hover:bg-black text-white text-lg font-semibold rounded transition-all duration-300">
        Discover More →
      </button>
    </section>
  );
};

export default WebsiteBuilder;
