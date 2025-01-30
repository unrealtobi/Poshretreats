import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
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
        {/* <p className="text-center px-8 md:px-0 text-gray-200 text-sm md:text-sm mt-2">
          Have questions or ready to book? Reach out to plan your next
          unforgettable adventure. Posh Retreats is a member of Experience It
          Now Travel who are an Accredited Body Member of Hays Travel
          Limited, ATOL 5534
        </p> */}

        {/* Button */}
        {/* <button
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
        </button> */}

        {/* Footer Text */}
        <h1 className="md:absolute md:bottom-52 md:left-0 md:right-0 absolute bottom-72 left-0 right-0 text-center font-bold text-6xl sm:text-7xl md:text-9xl text-white font-raleway tracking-widest">
          POSH RETREATS
        </h1>

        {/* Social Icons */}
        <div className="md:absolute md:bottom-0 bottom-6 absolute flex  items-center gap-4">
          <a
            href="https://www.tiktok.com/@posh.retreats?_t=8jfaklTKkdc&_r=1"
            aria-label="TikTok"
            className="text-white text-xl"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/poshretreats?igsh=MWx4YW1tdHJhM2F2cA%3D%3D&utm_source=qr"
            aria-label="Instagram"
            className="text-white text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/posh_retreats?s=21&t=X9eCifkrm07k0kzt6mXLUA"
            aria-label="X"
            className="text-white text-xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.facebook.com/poshretreats"
            aria-label="Facebook"
            className="text-white text-xl"
          >
            <RiFacebookFill />
          </a>
          <a
            href="https://chat.whatsapp.com/L6CSZncHQeZ5qo6FTp3r3l"
            aria-label="WhatsApp"
            className="text-white text-xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/+4oQ_bukN3r8wNjRk"
            aria-label="Telegram"
            className="text-white text-xl"
          >
            <FaTelegram />
          </a>
        </div>
        <p className=" absolute md:flex text-center px-8 md:px-0 text-gray-200 text-sm md:text-sm sm:bottom-36  md:bottom-24 bottom-28 font-roboto">
          Have questions or ready to book? Reach out to plan your next
          unforgettable adventure.
          <br /> Posh Retreats is a member of Experience It Now Travel who are
          an Accredited Body Member of Hays Travel Limited, ATOL 5534
        </p>
        <div className="absolute flex  md:bottom-10  bottom-16  gap-x-6">
          <img
            src="/abta.png"
            alt="ABTA Travel Logo"
            className="h-10 md:h-12  bg-customBg py-2 px-2  md:w-24 rounded-md cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.abta.com/abta-member-search/results?search=P7133",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <img
            src="/atol.png"
            alt="ATOL Protection Logo"
            className="h-10 md:h-12  bg-customBg py-2  md:w-20  px-4 rounded-md cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.caa.co.uk/atol-protection/check-an-atol/search-atol-holders/#",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>

        <div className="mt-7 text-sm md:translate-y-44 translate-y-36 sm:translate-y-28 text-gray-300">
          <a
            href="/termsandconditions"
            className="underline hover:text-white transition duration-300"
          >
            Terms & Conditions
          </a>
          <span className="mx-2">|</span>
          <a
            href="/privacy-policy"
            className="underline hover:text-white transition duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
