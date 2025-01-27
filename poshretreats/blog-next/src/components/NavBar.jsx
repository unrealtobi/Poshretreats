"use client";

import { useState, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import client from "@/sanityClient"; // Sanity client to fetch the deal count

// Your external React app domain
const EXTERNAL_DOMAIN = "https://poshretreats.vercel.app";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dealCount, setDealCount] = useState(0); // State to store the deal count
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Only highlight internal links (e.g., if your blog route is "/blogs")
  const isActiveLink = (path) => pathname === path;

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

  return (
    <nav className="bg-customBg border-b fixed w-full z-50">
      <div className="mx-auto px-4 md:px-16 md:py-5 py-5 flex items-center justify-between">
        {/* Logo Section */}
        <a href={EXTERNAL_DOMAIN}>
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={100}
            height={40}
            className="md:h-10 md:w-auto h-6 cursor-pointer"
          />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href={`${EXTERNAL_DOMAIN}/`}
              className="text-base font-roboto font-semibold text-gray-800 hover:text-customGreen"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href={`${EXTERNAL_DOMAIN}/trips`}
              className="text-base font-roboto font-semibold text-gray-800 hover:text-customGreen"
            >
              Trips
            </a>
          </li>
          <li>
            <a
              href={`${EXTERNAL_DOMAIN}/past-trips`}
              className="text-base font-roboto font-semibold text-gray-800 hover:text-customGreen"
            >
              Past Trips & Reviews
            </a>
          </li>
          <li className="relative">
            <Link
              href="/deals"
              className={`text-base font-roboto font-semibold hover:text-customGreen  ${
                isActiveLink("/deals") ? "text-customGreen" : "text-gray-800"
              }`}
            >
              Deals
            </Link>
            {dealCount > 0 && (
              <span className="absolute -top-2 -right-6 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {dealCount}
              </span>
            )}
          </li>
          <li>
            <Link
              href="/"
              className={`text-base font-roboto font-semibold hover:text-customGreen ${
                isActiveLink("/") ? "text-customGreen" : "text-gray-800"
              }`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <a
              href={`${EXTERNAL_DOMAIN}/about`}
              className="text-base font-roboto font-semibold text-gray-800 hover:text-customGreen"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href={`${EXTERNAL_DOMAIN}/faqs`}
              className="text-base font-roboto font-semibold text-gray-800 hover:text-customGreen"
            >
              FAQs
            </a>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div>
          <a
            href={`${EXTERNAL_DOMAIN}/contact-poshretreats`}
            className="relative md:block hidden bg-customGreen text-sm font-roboto font-medium text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:bg-customDarkGreen transition-colors duration-300 ease-in-out"
          >
            <span className="relative z-10">Contact Us</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <LuMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-16 right-0 border-t h-full w-full sm:w-80 bg-white shadow-md md:hidden z-50 transition-transform"
        >
          <div className="flex flex-col items-start mt-4 px-4 space-y-4">
            <a
              href={`${EXTERNAL_DOMAIN}/`}
              className="text-base font-roboto font-medium w-full py-3 border-b text-gray-700"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a
              href={`${EXTERNAL_DOMAIN}/trips`}
              className="text-base font-roboto font-medium w-full py-3 border-b text-gray-700"
              onClick={closeMobileMenu}
            >
              Trips
            </a>
            <a
              href={`${EXTERNAL_DOMAIN}/deals`}
              className="relative text-base font-roboto font-medium w-full py-3 border-b text-gray-700"
              onClick={closeMobileMenu}
            >
              Deals
              {dealCount > 0 && (
                <span className="absolute left-10 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {dealCount}
                </span>
              )}
            </a>
            <Link
              href="/blogs"
              className={`text-base font-roboto font-medium w-full py-3 border-b ${
                isActiveLink("/blogs") ? "text-customGreen" : "text-gray-700"
              }`}
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>
            <a
              href={`${EXTERNAL_DOMAIN}/about`}
              className="text-base font-roboto font-medium w-full py-3 border-b text-gray-700"
              onClick={closeMobileMenu}
            >
              About Us
            </a>
            <a
              href={`${EXTERNAL_DOMAIN}/faqs`}
              className="text-base font-roboto font-medium w-full py-3 border-b text-gray-700"
              onClick={closeMobileMenu}
            >
              FAQs
            </a>
            <a
              href={`${EXTERNAL_DOMAIN}/contact-poshretreats`}
              className="text-base font-roboto font-medium w-full py-3 text-gray-700"
              onClick={closeMobileMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
