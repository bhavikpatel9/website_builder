import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WebsiteBuilder from "./components/WebSiteBuilder";
import TrustSection from "./components/TrustSection";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <CardSection />
      <WebsiteBuilder />
      <TrustSection />
      <Testimonial />
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default App;
