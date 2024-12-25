import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-white border-b md:border-b  fixed w-full z-50">
      <div className=" mx-auto px-4 md:px-16 md:py-5 py-5 flex items-center justify-between">
        {/* Logo Section */}
        <img
          src="/Logo.svg"
          alt="Logo"
          href="/"
          className="md:h-10 md:w-auto h-6 "
        />

        {/* Burger Button */}

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="/"
              className="text-gray-700 text-base font-roboto font-medium hover:text-customGreen"
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <a
              href="/trips"
              className="text-gray-700 text-base font-roboto font-medium hover:text-customGreen flex items-center"
            >
              Trips <FaChevronDown className="ml-1 text-xs" />
            </a>
            {/* Dropdown for Trips */}
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-b-3xl w-52 h-40">
              <a
                href="/trips/group"
                className="block px-4 py-2  text-gray-700 text-base font-roboto font-medium hover:text-customGreen  mt-12"
              >
                Group Trips
              </a>
              <a
                href="/trips/private"
                className="block px-4 py-2  text-gray-700 text-base font-roboto font-medium hover:text-customGreen hover:bg-gray-100"
              >
                Private Trips
              </a>
            </div>
          </li>
          <li>
            <a
              href="/past-trips"
              className="text-gray-700 text-base font-roboto font-medium hover:text-customGreen"
            >
              Past Trips and Reviews
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-700 text-base font-roboto font-medium hover:text-customGreen"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/faqs"
              className="text-gray-700 text-base font-roboto font-medium hover:text-customGreen"
            >
              FAQs
            </a>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div>
          <button
            onClick={() => navigate("/contact-poshretreats")}
            className="relative md:block hidden bg-customGreen text-sm font-roboto font-medium text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen group hover:bg- transition-colors duration-300 ease-in-out"
          >
            <span className="relative z-10">Contact Us</span>
            {/* Left Flower */}
            <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
            {/* Right Flower */}
            <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:-translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
          </button>

          <button
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() =>
              document
                .querySelector("#mobile-menu")
                .classList.toggle("translate-x-full")
            }
          >
            <LuMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="fixed top-18 right-0 border-t h-full w-full sm:w-80 bg-white shadow-md transform translate-x-full transition-transform duration-300 ease-in-out md:hidden"
      >
        <div className="flex flex-col items-start mt-4 px-4 space-y-4">
          {/* Home Link */}
          <a
            href="/"
            className="text-gray-700 text-base font-roboto font-medium hover:text-customGreen w-full py-3 border-b flex items-center"
          >
            Home
          </a>

          {/* Trips with Dropdown */}
          <div className="relative w-full border-b">
            <button
              className="flex items-center justify-between w-full py-3 text-gray-700 text-base font-roboto font-medium hover:text-customGreen"
              onClick={toggleDropdown}
            >
              Trips <FaChevronDown className="text-gray-700" />
            </button>
            {/* Dropdown for Trips */}
            {isDropdownOpen && (
              <div className="mt-2 space-y-2">
                <a
                  href="/trips/group"
                  className=" py-3 ml-4 text-gray-700 text-base font-roboto font-medium hover:text-customGreen flex items-center"
                >
                  Group Trips
                </a>
                <div className="border-b"></div>
                <a
                  href="/trips/private"
                  className=" text-gray-700 ml-4 text-base font-roboto font-medium hover:text-customGreen py-3 flex items-center"
                >
                  Private Trips
                </a>
              </div>
            )}
          </div>

          {/* Past Trips */}
          <a
            href="/past-trips"
            className="text-gray-700 text-base font-roboto font-medium hover:text-customGreen w-full py-3 border-b flex items-center"
          >
            Past Trips and Reviews
          </a>

          {/* About Us */}
          <a
            href="/about"
            className="text-gray-700 text-base font-roboto font-medium hover:text-customGreen w-full py-3 border-b flex items-center"
          >
            About Us
          </a>

          {/* FAQs */}
          <a
            href="/faqs"
            className="text-gray-700 text-base font-roboto font-medium hover:text-customGreen w-full py-3 border-b flex items-center "
          >
            FAQs
          </a>

          {/* Contact Us Button */}
          <a
            href="/contact-poshretreats"
            className="bg-customGreen text-white text-center px-6 py-3 rounded-md w-full hover:bg-green-600 mt-4"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
