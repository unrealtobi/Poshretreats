import React from "react";
import { PiHandshake } from "react-icons/pi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { PiAirplaneTiltBold } from "react-icons/pi";

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      icon: <PiHandshake size={36} className="text-white" />,
      title: "Connect",
      description:
        "Start by sharing your travel vision through our easy form. Whether you’re after relaxation, culture, thrills, or something else entirely, consider it done. Your desires set the stage.",
    },
    {
      id: 2,
      icon: <RiCalendarScheduleLine size={36} className="text-white" />,
      title: "Schedule",
      description:
        "Our expert team takes your input and creates a personalized itinerary that's a perfect fit. Activities, accommodations, and local gems – we’re weaving your dream adventure.",
    },
    {
      id: 3,
      icon: <BiWallet size={36} className="text-white" />,
      title: "Pay",
      description:
        "Budgeting is no sweat with our convenient payment plan. You're in for an experience that's as seamless as your journey. Our predefined installment structure ensures a stress-free approach to securing your adventure.",
    },
    {
      id: 4,
      icon: <PiAirplaneTiltBold size={36} className="text-white" />,
      title: "Travel",
      description:
        "As your adventure takes flight, your role is simple – embrace every moment. Let the landscapes, cultures, and experiences envelop you while we handle the behind-the-scenes magic.",
    },
  ];

  return (
    <div className="bg-transparent md:pb-16 sm:pb-10 pb-8">
      {/* Header Section */}
      <div className="text-center md:px-96 sm:px-40 px-16 pt-2 md:pt-8">
        <h2 className="mt-12 font-roboto text-gray-200 font-light md:text-lg">
          How We Work
        </h2>
        <h1 className="md:text-3xl text-white font-raleway mt-2 text-2xl font-semibold">
          Our <span className="text-customPink">Process</span>: Crafting
          Exceptional Journeys for You
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:mt-20  md:gap-8 gap-16 mt-16 px-4 sm:px-6 md:px-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative  border-white border-2  rounded-lg p-6 bg-customGreen text-white text-center"
          >
            {/* Top Border with Icon */}
            <div className="relative w-full ">
              <div className="absolute -top-5 left-1/2 transform -translate-y-8 -translate-x-1/2 bg-customGreen">
                <div className="bg-customGreen p-2  flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-raleway font-medium ">{step.title}</h2>

            {/* Description */}
            <p className="text-sm leading-relaxed ">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
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
      </div>
    </div>
  );
};

export default HowWeWork;
