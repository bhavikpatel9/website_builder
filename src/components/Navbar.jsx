import React from "react";
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white">
      <img
        src={logo}
        alt="Avada Logo"
        className="h-8 cursor-pointer"
      />
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li><a href="#" className="hover:bg-slate-200 rounded px-3 py-2 font-semibold text-lg">Avada</a></li>
        <li><a href="#" className="hover:bg-slate-200 rounded px-3 py-2 font-semibold text-lg">Hosting</a></li>
        <li><a href="#" className="hover:bg-slate-200 rounded px-3 py-2 font-semibold text-lg">Customization</a></li>
        <li><a href="#" className="hover:bg-slate-200 rounded px-3 py-2 font-semibold text-lg">Resources</a></li>
      </ul>
      <button className="bg-white hover:bg-black hover:text-white px-4 py-2 rounded-lg border border-black font-semibold text-lg">My Avada</button>
    </nav>
  );
};

export default Navbar;
