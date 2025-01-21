import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const FAQs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Do you book flights?",
      answer:
        "No, we do not book flights. However, upon signing up for a trip, you will be added to a dedicated WhatsApp group where we regularly share valuable travel tips and alert you to the best flight deals as we come across them.",
    },
    {
      id: 2,
      question: "Are pets allowed on your trips?",
      answer:
        "At Posh Retreats, we strive to create an inclusive and enjoyable experience for every traveler in our groups. To ensure the comfort and well-being of all participants, we do not permit pets on our trips.",
    },
    {
      id: 3,
      question: "Are couples welcome on your trips?",
      answer:
        "Absolutely, we extend a warm welcome to couples on all our trips! Additionally, we are delighted to offer customized private trips designed exclusively for couples.",
    },
    {
      id: 4,
      question: "Do you offer Single Occupancy?",
      answer:
        "Certainly! We offer both single and double occupancy options for our trips, ensuring you can enjoy your journey the way you prefer.",
    },
    {
      id: 5,
      question: "Do you process visa applications?",
      answer:
        "No, we do not process visas directly. However, we provide guidance on the visa application process once you sign up for a trip.",
    },
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="bg-customBg py-40">
      <div className="text-center md:px-48 px-8 mb-12">
        <h1 className="font-raleway md:text-5xl text-3xl text-black mt-2 font-bold">
        Frequently Asked Questions
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
                <FaMinus className="text-black text-lg" />
              ) : (
                <FaPlus className="text-black text-lg" />
              )}
            </div>
            {activeFaq === faq.id && (
              <p className="mt-4 text-gray-800 text-base font-roboto">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
