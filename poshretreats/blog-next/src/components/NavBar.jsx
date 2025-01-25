"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const BASE_URL = "https://poshretreats.vercel.app"; // Replace with your React app's domain

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => {
    const mobileMenu = document.querySelector("#mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.add("translate-x-full");
    }
  };

  const isActiveLink = (path) => pathname === path;

  return (
    <nav className="bg-customBg border-b md:border-b fixed w-full z-50">
      <div className="mx-auto px-4 md:px-16 md:py-5 py-5 flex items-center justify-between">
        {/* Logo Section */}
        <Link href={`${BASE_URL}`}>
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={100}
            height={40}
            className="md:h-10 md:w-auto h-6 cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href={`${BASE_URL}/`}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={`${BASE_URL}/trips`}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/trips") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              Trips
            </Link>
          </li>
          <li>
            <Link
              href={`${BASE_URL}/past-trips`}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/past-trips")
                  ? "text-customGreen"
                  : "text-gray-800"
              } hover:text-customGreen`}
            >
              Past Trips and Reviews
            </Link>
          </li>
          <li>
            <Link
              href={`${BASE_URL}/deals`}
              className={`relative text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/deals") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              Deals
              <span className="absolute -top-4 -right-6 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                10+
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/blogs") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href={`${BASE_URL}/about`}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/about") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={`${BASE_URL}/faqs`}
              className={`text-base font-roboto cursor-pointer font-semibold ${
                isActiveLink("/faqs") ? "text-customGreen" : "text-gray-800"
              } hover:text-customGreen`}
            >
              FAQs
            </Link>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div>
          <Link
            href={`${BASE_URL}/contact-poshretreats`}
            className="relative md:block hidden bg-customGreen text-sm font-roboto cursor-pointer font-medium text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen group hover:bg- transition-colors duration-300 ease-in-out"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>

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
          <Link
            href={`${BASE_URL}/`}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/") ? "text-customGreen" : "text-gray-700"
            }`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href={`${BASE_URL}/trips`}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/trips") ? "text-customGreen" : "text-gray-700"
            }`}
            onClick={closeMobileMenu}
          >
            Trips
          </Link>
          <Link
            href={`${BASE_URL}/deals`}
            className={`relative text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/deals") ? "text-customGreen" : "text-gray-700"
            }`}
            onClick={closeMobileMenu}
          >
            Deals
            <span className="absolute -top-1 left-10 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
              10+
            </span>
          </Link>
          <Link
            href="/"
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/blogs") ? "text-customGreen" : "text-gray-700"
            }`}
            onClick={closeMobileMenu}
          >
            Blogs
          </Link>
          <Link
            href={`${BASE_URL}/about`}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/about") ? "text-customGreen" : "text-gray-700"
            }`}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            href={`${BASE_URL}/faqs`}
            className={`text-base font-roboto font-medium w-full py-3 border-b flex items-center ${
              isActiveLink("/faqs") ? "text-customGreen" : "text-gray-700"
            }`}
            onClick={closeMobileMenu}
          >
            FAQs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
