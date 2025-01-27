import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import ReusableButton from "../FlowerButton";

const FAQs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Do you book flights?",
      answer:
        "No, we do not book flights. However, upon signing up for a trip, you will be added to a dedicated WhatsApp group where we regularly share valuable travel tips and alert you to the best flight deals as we come across them. Our experience has shown that Tuesdays and Wednesdays typically offer the most budget-friendly flight options for your convenience.",
    },
    {
      id: 2,
      question: "Are pets allowed on your trips?",
      answer:
        "At Posh Retreats, we strive to create an inclusive and enjoyable experience for every traveler in our groups. To ensure the comfort and well-being of all participants, we do not permit pets on our trips. This policy helps maintain a comfortable and considerate environment for everyone to fully enjoy their travel adventures.",
    },
    {
      id: 3,
      question: "Are couples welcome on your trips?",
      answer:
        "Absolutely, we extend a warm welcome to couples on all our trips! Additionally, we are delighted to offer customized private trips designed exclusively for couples, ensuring a tailored and intimate experience.",
    },
    {
      id: 4,
      question: "Do you offer Single Occupancy?",
      answer:
        "Certainly! We understand that some of our clients may prefer to enjoy their own space and privacy. To accommodate individual preferences, we offer both single and double occupancy options for our trips. Whether you're seeking solitude or sharing the adventure with a companion, we have you covered.",
    },
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="bg-customBg -translate-y-10 py-12 pt-16">
      <div className="text-center md:px-48 px-6 mb-12">
        <h2 className="font-roboto text-gray-500 text-lg">FAQs</h2>
        <h1 className="font-raleway text-3xl text-black mt-2 font-semibold">
          Your Travel Questions,{" "}
          <span className="text-customGreen">Answered</span>
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-4 px-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`pb-4 ${
              activeFaq === faq.id
                ? "border-b-2 border-gray-400"
                : "border-b-2 border-gray-200"
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(faq.id)}
            >
              <h3 className="font-raleway text-lg text-black font-semibold">
                {faq.question}
              </h3>
              {activeFaq === faq.id ? (
                <LiaTimesSolid className="text-black text-lg" />
              ) : (
                <FaPlus className="text-black text-lg" />
              )}
            </div>
            {activeFaq === faq.id && (
              <p className="mt-4 text-gray-600 text-sm font-roboto">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="md:flex md:flex-row flex sm:flex-col flex-col justify-center items-center md:gap-4">
        {/* Reusable Button */}
        <a
          href="mailto:help@poshretreats.co.uk?subject=Question%20about%20Posh%20Retreats&body=Hi%20Posh%20Retreats%2C%0A%0AI%20have%20a%20question%20regarding%20your%20services%20and%20trips.%20Could%20you%20please%20help%20me%20with%20the%20following%3A%0A%0A[Write%20your%20question%20here]%0A%0AThank%20you!%0A%0ABest%20regards%2C%0A[Your%20Name]"
          className="relative sm:px-12 sm:py-4 md:px-8 md:mt-12 mt-6  bg-customGreen md:text-sm text-sm font-roboto font-medium text-white px-8 md:py-3 py-3 rounded-md shadow-md hover:shadow-lg overflow-hidden group transition-colors duration-300 ease-in-out"
        >
          <span className="relative z-10 whitespace-nowrap">
            Ask a Question
          </span>
        </a>

        {/* Styled "See All FAQs" Button */}
        <a
          href="/faqs"
          className="relative sm:px-12 sm:py-4 md:px-8 md:mt-12 mt-6 border-2 border-customGreen bg-transparent md:text-sm text-sm font-roboto font-medium text-customGreen px-10 md:py-2.5 py-2 rounded-md shadow-md hover:shadow-lg overflow-hidden hover:bg-gray-200 group transition-colors duration-300 ease-in-out"
        >
          <span className="relative z-10 whitespace-nowrap">See All FAQs</span>
        </a>
      </div>
    </div>
  );
};

export default FAQs;
