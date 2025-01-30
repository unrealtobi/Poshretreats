import { useState, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";
import client from "../../sanityClient";

// The domain for your Next.js app
const NEXT_DOMAIN = "https://explore.poshretreats.co.uk";

const Navbar = () => {
  const [dealCount, setDealCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    const mobileMenu = document.querySelector("#mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.add("translate-x-full");
    }
  };

  // Fetch the number of deals from Sanity
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

  // Check if the current path is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="bg-customBg border-b fixed w-full z-50">
      <div className="mx-auto px-4 md:px-16 md:py-5 py-5 flex items-center justify-between">
        {/* Logo Section */}
        <img
          src="/Logo.svg"
          alt="Logo"
          onClick={() => navigate("/")} // Navigate to the homepage
          className="md:h-10 md:w-auto h-6 cursor-pointer"
        />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <span
              onClick={() => navigate("/")}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              Home
            </span>
          </li>
          <li>
            <span
              onClick={() => navigate("/trips")}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/trips") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              Trips
            </span>
          </li>
          <li>
            <span
              onClick={() => navigate("/past-trips")}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/past-trips")
                  ? "text-customGreen"
                  : "text-gray-800"
              } hover:text-customGreen`}
            >
              Past Trips & Reviews
            </span>
          </li>
          <li className="relative">
            {/* External link to Next.js domain for /deals */}
            <a
              href={`${NEXT_DOMAIN}/deals`}
              target="_self"
              className={`relative text-base font-roboto cursor-pointer font-semibold flex items-center ${
                // We usually cannot "isActiveLink" an external domain
                // but if you have a subpath check, you can do so if needed
                location.pathname.includes("/deals")
                  ? "text-customGreen"
                  : "text-gray-800"
              } hover:text-customGreen`}
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
            {/* External link to Next.js domain for /blogs */}
            <a
              href={`${NEXT_DOMAIN}/`}
              target="_self"
              className={`text-base font-roboto cursor-pointer font-semibold ${
                location.pathname.includes("/blogs")
                  ? "text-customGreen"
                  : "text-gray-800"
              } hover:text-customGreen`}
            >
              Blogs
            </a>
          </li>
          <li>
            <span
              onClick={() => navigate("/about")}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/about") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              About Us
            </span>
          </li>
          <li>
            <span
              onClick={() => navigate("/faqs")}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/faqs") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              FAQs
            </span>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div>
          <button
            onClick={() => navigate("/contact-poshretreats")}
            className="relative md:block hidden bg-customGreen text-sm font-roboto cursor-pointer font-medium text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen transition-colors duration-300 ease-in-out"
          >
            <span className="relative z-10">Contact Us</span>
            {/* Optional Decorative Flowers */}
            <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
            <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:-translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
          </button>

          {/* Mobile Menu Toggle */}
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
          <span
            onClick={() => {
              navigate("/");
              closeMobileMenu();
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            Home
          </span>
          <span
            onClick={() => {
              navigate("/trips");
              closeMobileMenu();
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/trips") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            Trips
          </span>
          <span
            onClick={() => {
              navigate("/past-trips");
              closeMobileMenu();
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/past-trips") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            Past Trips & Reviews
          </span>

          {/* External link to Next.js domain for /deals */}
          <a
            href={`${NEXT_DOMAIN}/deals`}
            target="_self"
            className={`relative text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              location.pathname.includes("/deals") ? "text-customGreen" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Deals
            {dealCount > 0 && (
              <span className="absolute -top-2 left-9 bg-red-500 text-white text-xs font-medium rounded-full px-2 py-1">
                {dealCount}
              </span>
            )}
          </a>

          {/* External link to Next.js domain for /blogs */}
          <a
            href={`${NEXT_DOMAIN}/`}
            target="_self"
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              location.pathname.includes("/blogs")
                ? "text-customGreen"
                : "text-gray-700"
            }`}
            onClick={closeMobileMenu}
          >
            Blogs
          </a>

          <span
            onClick={() => {
              navigate("/about");
              closeMobileMenu();
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/about") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            About Us
          </span>

          <span
            onClick={() => {
              navigate("/faqs");
              closeMobileMenu();
            }}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/faqs") ? "text-customGreen" : "text-gray-700"
            }`}
          >
            FAQs
          </span>

          <span
            onClick={() => {
              navigate("/contact-poshretreats");
              closeMobileMenu();
            }}
            className="bg-customGreen text-white text-center px-6 py-3 rounded-md w-full hover:bg-green-600 mt-4 cursor-pointer"
          >
            Contact Us
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
