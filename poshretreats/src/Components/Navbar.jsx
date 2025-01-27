import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";
import client from "../../sanityClient";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dealCount, setDealCount] = useState(0);
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
  useEffect(() => {
    const fetchDealCount = async () => {
      try {
        const query = `count(*[_type == "deal"])`;
        const count = await client.fetch(query);
        setDealCount(count);
      } catch (error) {
        console.error("Error fetching deal count:", error);
      }
    };

    fetchDealCount();
  }, []);
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
              href="https://poshretreatsuk.vercel.app/deals" // Update to match the domain and route for deals
              target="_self" // Opens in the same tab
              className={`relative text-base font-roboto cursor-pointer font-semibold flex items-center text-gray-800 hover:text-customGreen ${
                location.pathname.includes("/deals") ? "text-customGreen" : ""
              }`}
            >
              Deals
              {dealCount > 0 && (
                <span className="absolute -top-2 -right-6 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {dealCount}
                </span>
              )}
            </a>
          </li>

          <li>
            <a
              href="https://poshretreatsuk.vercel.app"
              target="_self" // Opens in the same tab
              className={`text-base font-roboto cursor-pointer font-semibold ${
                location.pathname.includes("/blog")
                  ? "text-customGreen"
                  : "text-gray-800"
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
            href="https://poshretreatsuk.vercel.app/deals" // Update to match the domain and route for deals
            target="_self" // Opens in the same tab
            className={`relative text-base font-roboto font-medium w-full py-3 border-b flex items-center animate-bounce ${
              location.pathname.includes("/deals") ? "text-customGreen" : ""
            }`}
          >
            Deals
            {/* Badge */}
            {dealCount > 0 && (
              <span className="absolute -top-2 left-9 bg-red-500 text-white text-xs font-medium rounded-full px-2 py-1">
                {dealCount}
              </span>
            )}
          </a>

          <a
            href="https://poshretreatsuk.vercel.app" // Link to Next.js blog
            target="_self" // Open in the same tab
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              location.pathname.includes("/blog")
                ? "text-customGreen"
                : "text-gray-700"
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
