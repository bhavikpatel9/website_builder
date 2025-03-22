import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white relative">
      {/* Logo */}
      <img src={logo} alt="Avada Logo" className="h-8 cursor-pointer" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li><a href="#" className="hover:bg-slate-200 rounded px-3 py-2 font-semibold text-lg">Avada</a></li>
        <li><a href="#" className="hover:bg-slate-200 rounded px-3 py-2 font-semibold text-lg">Hosting</a></li>
        <li><a href="#" className="hover:bg-slate-200 rounded px-3 py-2 font-semibold text-lg">Customization</a></li>
        <li><a href="#" className="hover:bg-slate-200 rounded px-3 py-2 font-semibold text-lg">Resources</a></li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-white hover:bg-black hover:text-white px-4 py-2 rounded-lg border border-black font-semibold text-lg">
        My Avada
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700 text-2xl" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden transition-all duration-300 z-10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#" className="hover:bg-slate-200 rounded px-6 py-2 text-lg font-semibold">Avada</a>
        <a href="#" className="hover:bg-slate-200 rounded px-6 py-2 text-lg font-semibold">Hosting</a>
        <a href="#" className="hover:bg-slate-200 rounded px-6 py-2 text-lg font-semibold">Customization</a>
        <a href="#" className="hover:bg-slate-200 rounded px-6 py-2 text-lg font-semibold">Resources</a>

        {/* Mobile Button */}
        <button className="bg-white hover:bg-black hover:text-white px-6 py-2 rounded-lg border border-black font-semibold text-lg">
          My Avada
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
