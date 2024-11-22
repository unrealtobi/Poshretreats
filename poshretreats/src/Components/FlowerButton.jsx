import React from "react";
import PropTypes from "prop-types";

const ReusableButton = ({ label, route }) => {
  return (
    <a
      href={route}
      className="relative sm:px-12 sm:py-4 md:px-8 md:mt-12 mt-12 bg-customGreen md:text-sm text-sm font-roboto font-medium text-white px-10 md:py-3 py-3 rounded-md shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen group transition-colors duration-300 ease-in-out"
    >
      <span className="relative z-10 whitespace-nowrap">{label}</span>
      {/* Left Flower */}
      <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
      {/* Right Flower */}
      <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:-translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
    </a>
  );
};

ReusableButton.propTypes = {
  label: PropTypes.string.isRequired, 
  route: PropTypes.string.isRequired, 
};

export default ReusableButton;
