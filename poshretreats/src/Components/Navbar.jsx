import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // Function to close the mobile menu
  const closeMobileMenu = () => {
    const mobileMenu = document.querySelector("#mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.add("translate-x-full");
    }
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="bg-customBg border-b md:border-b fixed w-full z-50">
      <div className="mx-auto px-4 md:px-16 md:py-5 py-5 flex items-center justify-between">
        {/* Logo Section */}
        <img
          src="/Logo.svg"
          alt="Logo"
          onClick={() => navigate("/")} // Navigate to the homepage
          className="md:h-10 md:w-auto h-6 cursor-pointer"
        />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex  space-x-8">
          <li>
            <a
              onClick={() => navigate("/")}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <a
              onClick={() => navigate("/trips")}
              className={`text-base font-roboto font-semibold cursor-pointer flex items-center ${
                isActiveLink("/trips") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              Trips
            </a>
            {/* Dropdown for Trips
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-b-3xl w-52 h-40">
              <a
                onClick={() => navigate("/trips/group")}
                className="block px-4 py-2 text-gray-700 text-base font-roboto cursor-pointer font-medium hover:text-customGreen mt-12"
              >
                Group Trips
              </a>
              <a
                onClick={() => navigate("/trips/private")}
                className="block px-4 py-2 cursor-pointer text-gray-700 text-base font-roboto font-medium hover:text-customGreen hover:bg-gray-100"
              >
                Private Trips
              </a>
            </div> */}
          </li>
          <li>
            <a
              onClick={() => navigate("/past-trips")}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/past-trips")
                  ? "text-customGreen"
                  : "text-gray-800"
              } hover:text-customGreen`}
            >
              Past Trips and Reviews
            </a>
          </li>
          <li className="relative">
            <a
              onClick={() => navigate("/deals")}
              className={`relative text-base font-roboto cursor-pointer font-semibold flex items-center text-gray-800 hover:text-customGreen animate-bounce ${
                isActiveLink("/deals")
                  ? "text-customGreen animate-text-glow"
                  : "hover:animate-text-glow"
              }`}
            >
              Deals
              {/* Badge */}
              <span className="absolute -top-4 -right-6 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                10+
              </span>
            </a>
          </li>

          <li>
            <a
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                window.location.href = "http://localhost:3000"; // Redirect to Next.js app
              }}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/blogs") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              Blogs
            </a>
          </li>

          <li>
            <a
              onClick={() => navigate("/about")}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/about") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/faqs")}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/faqs") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              FAQs
            </a>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div>
          <button
            onClick={() => navigate("/contact-poshretreats")}
            className="relative md:block hidden bg-customGreen text-sm font-roboto cursor-pointer font-medium text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen group hover:bg- transition-colors duration-300 ease-in-out"
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
            onClick={() => {
              navigate("/");
              closeMobileMenu(); // Close mobile menu
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            Home
          </a>

          {/* Trips Link */}
          <a
            onClick={() => {
              navigate("/trips");
              closeMobileMenu(); // Close mobile menu
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/trips") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            Trips
          </a>
          <a
            onClick={() => {
              navigate("/deals");
              closeMobileMenu(); // Close mobile menu
            }}
            className={`relative text-base font-roboto font-medium w-full py-3 border-b flex items-center animate-bounce ${
              isActiveLink("/deals") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            Deals
            {/* Badge */}
            <span className="absolute -top-1 left-10 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
              10+
            </span>
          </a>

          <a
            onClick={() => {
              navigate("/blogs");
              closeMobileMenu(); // Close mobile menu
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/blogs") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            Blogs
          </a>

          {/* Other Links */}
          <a
            onClick={() => {
              navigate("/past-trips");
              closeMobileMenu(); // Close mobile menu
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/past-trips") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            Past Trips and Reviews
          </a>
          <a
            onClick={() => {
              navigate("/about");
              closeMobileMenu(); // Close mobile menu
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/about") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            About Us
          </a>
          <a
            onClick={() => {
              navigate("/faqs");
              closeMobileMenu(); // Close mobile menu
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/faqs") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            FAQs
          </a>
          <a
            onClick={() => {
              navigate("/contact-poshretreats");
              closeMobileMenu(); // Close mobile menu
            }}
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
