import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerLogo from "../assets/images/footer-logo.svg"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Info */}
        <div>
          <img
            src={footerLogo}
            alt="Avada Logo"
            className="h-8"
          />
          <p className="mt-3 bg-green-500 text-black px-4 py-1 inline-block rounded">
            1,000,000 <br /> Professionally Designed Websites
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-5 text-lg">
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  Avada Studio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  Prebuilt Websites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  Submit A Ticket
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  Support Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg">Sign up to our newsletter</h3>
          <p className="text-base mt-2">Get all the latest news and updates.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email *"
              className="px-4 py-2 w-full text-black rounded-l-md"
            />
            <button className="bg-green-500 px-4 py-2 rounded-r-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap border-t border-gray-700 mt-10 pt-10 text-sm">
        <p className="flex items-center flex-wrap">
          &copy; Copyright 2012 - 2025 | Avada Website Builder by
          <a href="#" className="text-green-500"> ThemeFusion</a> | All rights reserved | Powered by
          <a href="#" className="text-green-500"> WordPress</a>
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-md flex justify-center items-center hover:bg-green-500 transition-all duration-300"
          >
            <FaFacebookF className="text-white" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-md flex justify-center items-center hover:bg-green-500 transition-all duration-300"
          >
            <FaXTwitter className="text-white" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-md flex justify-center items-center hover:bg-green-500 transition-all duration-300"
          >
            <FaInstagram className="text-white" />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-md flex justify-center items-center hover:bg-green-500 transition-all duration-300"
          >
            <FaYoutube className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
