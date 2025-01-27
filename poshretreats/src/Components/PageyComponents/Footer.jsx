import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="relative text-white bg-[url('/footerpic.jpeg')] bg-no-repeat bg-center w-full md:h-[500px] sm:h-[550px] h-[600px] bg-[length:200%_100%] sm:bg-[length:100%_100%] md:bg-[length:100%_auto] pb-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex text-center flex-col items-center  h-full">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl sm:text-4xl mt-16 px-20 sm:px-60 md:px-0 font-raleway font-semibold">
          Start Your Journey with Us
        </h2>
        <p className="text-center px-8 md:px-0 text-gray-200 text-sm md:text-sm mt-2">
          Have questions or ready to book? Reach out to plan your next
          unforgettable adventure. <br />
          We're here to make your dream trip a reality.
        </p>

        {/* Button */}
        <button
          onClick={() =>
            window.open(
              "https://app.tern.travel/public/forms/6OZArpyESYkxT9vf8rDf0g/responses/new",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="mt-6 px-6 py-3 bg-white text-customGreen font-medium text-sm rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Book a Trip
        </button>

        {/* Footer Text */}
        <h1 className="md:absolute md:bottom-8 md:left-0 md:right-0 absolute bottom-12 left-0 right-0 text-center font-bold text-6xl sm:text-7xl md:text-9xl text-white font-raleway tracking-widest">
          POSH RETREATS
        </h1>

        {/* Social Icons */}
        <div className="md:absolute md:bottom-1 bottom-4 absolute flex  items-center gap-4">
          <a href="" aria-label="TikTok" className="text-white text-xl">
            <FaTiktok />
          </a>
          <a href="" aria-label="Instagram" className="text-white text-xl">
            <FaInstagram />
          </a>
          <a href="" aria-label="X" className="text-white text-xl">
            <FaXTwitter />
          </a>
          <a href="" aria-label="Facebook" className="text-white text-xl">
            <RiFacebookFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
