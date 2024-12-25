import { useState } from "react";
import beachpic from "../Images/Beachchair.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdPhone,
} from "react-icons/md";


import { db } from "../firebase.config"; 
import { doc, setDoc } from "firebase/firestore";

// React Spinners
import { Oval } from "react-loader-spinner";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  // Loading state to show spinner
  const [loading, setLoading] = useState(false);

  // Submitted state to show "Thank you" instead of form
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    const updatedForm = { ...formData, [field]: value };
    setFormData(updatedForm);

    // Check if all fields are filled
    const allFieldsFilled = Object.values(updatedForm).every(
      (val) => val.trim() !== ""
    );
    setIsFormValid(allFieldsFilled);
  };

  // Generate a custom ID: "posh-guest-<3 random digits>"
  const generateCustomId = () => {
    const randomNum = Math.floor(100 + Math.random() * 900); // will give 100-999
    return `posh-guest-${randomNum}`;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start loading spinner
    setLoading(true);

    try {
      // Create custom ID
      const docId = generateCustomId();

      // Write to Firestore (contactus collection)
      await setDoc(doc(db, "contactus", docId), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
        createdAt: new Date().toISOString(), // optional metadata
      });

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setIsFormValid(false);

      // Mark submission as successful
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally handle the error or show a user-friendly message
    } finally {
      // Stop loading spinner
      setLoading(false);
    }
  };

  // If loading, show spinner for entire form area
 

  // If form is successfully submitted, show "Thank you" message
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-raleway font-bold text-black mb-4">
          Thank You!
        </h1>
        <p className="text-gray-700 font-roboto text-sm text-center">
          We’ve received your information and will be in touch shortly.
        </p>
      </div>
    );
  }

  // Otherwise, show the form
  return (
    <>
      <section>
        <div className="flex border-b md:h-[150vh]">
          {/* Left Section with Image */}
          <div className="w-1/2 hidden sm:hidden md:block relative">
            {/* Image */}
            <img
              src={beachpic}
              alt="Contact Us"
              className="h-full w-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute md:-top-24 md:right-24 md:w-full h-full flex items-center justify-center text-white">
              <div>
                <h2 className="text-2xl font-medium font-raleway mb-4">
                  Why Contact Us?
                </h2>
                <p className="font-medium mb-2 font-roboto">
                  You can contact us if you:
                </p>
                <ul className="space-y-2 list-disc font-roboto text-sm pl-5 font-light">
                  <li>Need help booking a group trip</li>
                  <li>Would like to partner with us</li>
                  <li>Need help planning your next trip</li>
                  <li>Want more information about a trip</li>
                  <li>Need clarification on any of our offerings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section with Form */}
          <div className="md:w-1/2 w-full bg-white mt-20 flex items-center justify-center md:p-8 px-4 sm:px-8 py-6">
            <div className="w-full">
              <div className="flex justify-center flex-col text-center mb-6">
                <h1 className="md:text-3xl text-2xl font-raleway font-bold mb-2 text-black">
                  Get in Touch with Us
                </h1>
                <p className="text-gray-800 sm:px-48 md:px-28 text-xs">
                  Need help? Contact the Posh Retreats team for personalized
                  assistance and travel inquiries.
                </p>
              </div>
              <form
                className="sm:mt-2 md:px-8 md:mt-16 w-full"
                onSubmit={handleSubmit}
              >
                <div className="md:flex md:gap-4 mb-4">
                  <div className="md:w-1/2 w-full">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-normal text-black"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      aria-label="First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      className="mt-1 w-full border font-roboto text-gray-900 font-normal text-sm border-gray-300 p-3 rounded-md"
                    />
                  </div>
                  <div className="md:w-1/2 w-full mt-4 md:mt-0">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-normal text-black"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      aria-label="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className="mt-1 w-full border font-roboto text-gray-900 font-normal text-sm border-gray-300 p-3 rounded-md"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-normal text-black"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Email Address"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="mt-1 w-full border font-roboto text-gray-900 font-normal text-sm border-gray-300 p-3 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-normal mb-1 text-black"
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    id="phoneNumber"
                    country={"ca"}
                    value={formData.phoneNumber}
                    onChange={(value) => handleChange("phoneNumber", value)}
                    containerClass="phone-input-container w-full"
                    inputClass="phone-input-field w-full border border-gray-300 p-4 rounded-md"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-normal text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Anything extra we should know? Tell us!😊"
                    aria-label="Message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="mt-1 w-full border resize-none font-roboto text-gray-900 font-normal text-sm h-32 border-gray-300 p-3 rounded-md"
                  ></textarea>
                </div>
                <button
  type="submit"
  onClick={handleSubmit} // or within your form's onSubmit
  className={`w-full sm:p-3 p-2 font-roboto rounded-md flex items-center justify-center 
    ${isFormValid && !loading 
      ? "bg-customGreen text-white font-medium text-sm" 
      : "bg-gray-200 text-gray-400 font-semibold text-sm cursor-not-allowed"} 
    ${loading ? "opacity-60" : ""} 
    transition-opacity duration-200
  `}
  disabled={!isFormValid || loading}
>
  {loading ? (
    // Show spinner if loading
    <Oval 
      height={20} 
      width={20} 
      color="#fff"  
      ariaLabel="loading" 
      secondaryColor="#fff"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  ) : (
    // Show button text if not loading
    "Submit Form"
  )}
</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info / cards */}
      <section className="pb-16">
        <div className="mt-16">
          <div className="text-center px-6">
            <h2 className="font-roboto text-base text-gray-500 ">
              REACH OUT TO US
            </h2>
            <h1 className="font-raleway sm:text-3xl text-black md:text-3xl text-2xl mt-2 font-semibold">
              We Would Love To Hear From You
            </h1>
          </div>
          <div className="md:flex sm:px-8 justify-center md:gap-16 md:mt-8 mt-8 px-4">
            {/* Email Card */}
            <div className="flex flex-col items-start px-2.5 mb-4 sm:mb-6 py-5 bg-white border rounded-md md:w-[360px]">
              <MdOutlineEmail className="text-customGreen text-3xl mb-10" />
              <h3 className="text-sm font-semibold font-raleway text-black">
                Chat with us
              </h3>
              <p className="text-gray-800 font-roboto text-xs mt-1">
                Speak to our friendly team.
              </p>
              <a
                href="mailto:letstalk@poshretreats.co.uk"
                className="text-black underline font-roboto text-sm font-medium mt-2"
              >
                letstalk@poshretreats.co.uk
              </a>
            </div>

            {/* Phone Card */}
            <div className="flex flex-col items-start px-2.5 py-5 bg-white border rounded-md md:w-[360px]">
              <MdOutlinePhone className="text-customGreen text-3xl mb-10" />
              <h3 className="text-sm font-semibold font-raleway text-black">
                Call us directly
              </h3>
              <p className="text-gray-800 font-roboto text-xs mt-1">
                We’re here to help.
              </p>
              <p className="text-black font-roboto text-sm font-medium mt-2">
                +1 (647) 555-5678
              </p>
            </div>

            {/* Location Card */}
            <div className="flex flex-col items-start px-2.5 py-5 sm:mt-6 mt-4 bg-white border rounded-md md:w-[360px]">
              <MdOutlineLocationOn className="text-customGreen text-3xl mb-10" />
              <h3 className="text-sm font-semibold font-raleway text-black">
                Visit us
              </h3>
              <p className="text-gray-800 font-roboto text-xs mt-1">
                Visit our Office HQ.
              </p>
              <p className="text-black font-roboto text-sm font-medium mt-2">
                5-4658 Barter Street, Toronto, Canada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
