import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-customBg py-20 md:py-32 px-4 sm:px-8 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-raleway font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-4">
          Effective Date: 30/01/2025 <br />
        </p>
      </div>

      {/* Introduction */}
      <div className="p-6 md:p-10 rounded-lg">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          1. Introduction
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          At Posh Retreats Ltd, we are committed to protecting and respecting
          your privacy. This Privacy Policy explains how we collect, use, store,
          and safeguard your personal information when you use our website and
          services. By accessing or using our website, you agree to the
          collection and use of your information in accordance with this policy.
        </p>
      </div>

      {/* Information We Collect */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          2. Information We Collect
        </h2>

        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          2.1 Information You Provide to Us
        </h3>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc pl-6">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            date of birth, postal address.
          </li>
          <li>
            <strong>Payment Information:</strong> Securely processed
            credit/debit card details.
          </li>
          <li>
            <strong>Travel Preferences:</strong> Destination, accommodation,
            additional services.
          </li>
          <li>
            <strong>Identification Documents:</strong> Passport or visa details
            for travel bookings.
          </li>
          <li>
            <strong>Communication Data:</strong> Correspondence via email, chat,
            or social media.
          </li>
        </ul>

        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          2.2 Information We Collect Automatically
        </h3>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc pl-6">
          <li>
            <strong>Cookies & Tracking:</strong> Used to enhance user experience
            and track site activity.
          </li>
          <li>
            <strong>Device & Log Data:</strong> IP address, browser type, time
            zone, visited pages.
          </li>
        </ul>
      </div>

      {/* How We Use Your Information */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          3. How We Use Your Information
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          We process your data to:
        </p>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc pl-6">
          <li>Fulfil and manage travel bookings.</li>
          <li>Provide customer support and trip updates.</li>
          <li>Send promotional offers and newsletters (with consent).</li>
          <li>Improve our website and services.</li>
          <li>Comply with legal requirements and fraud prevention.</li>
        </ul>
      </div>

      {/* Third-Party Processing */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          4. Processing Data with Third-Party Suppliers
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          When booking through Posh Retreats Ltd, your data may be processed on
          supplier platforms (airlines, hotels, tour operators, etc.).
          <br />
          <br />
          Each supplier has its own privacy policy, and once your data is
          processed on their platform, it falls under their terms.
        </p>
      </div>

      {/* Payment & Financial Protection */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          5. Payment & Financial Protection
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Posh Retreats Ltd offers payment in instalments, where permitted by
          the supplier. Failure to complete payments at least 6-8 weeks before
          departure may result in cancellation and legal action.
        </p>
        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          ABTA & ATOL Protection
        </h3>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          As an ABTA Member, we adhere to ABTA’s Code of Conduct, ensuring
          financial protection for package and Flight-Plus holidays.
        </p>
      </div>

      {/* Your Rights */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          6. Your Rights
        </h2>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc pl-6">
          <li>Access, correct, or delete personal data.</li>
          <li>Withdraw consent for marketing.</li>
          <li>Request a copy of data in a portable format.</li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Contact us at{" "}
          <a
            href="mailto:letstalk@poshretreats.co.uk"
            className="text-customGreen underline"
          >
            letstalk@poshretreats.co.uk
          </a>{" "}
          to exercise your rights.
        </p>
      </div>

      {/* Security & Retention */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          7. Data Security & Retention
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          We implement strict security measures to protect your data. However,
          no system is 100% secure.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Booking details may be kept for up to 7 years for compliance.
        </p>
      </div>

      {/* Cookies Policy */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          8. Cookies Policy
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          We use cookies to enhance user experience. You can manage cookie
          settings in your browser.
        </p>
      </div>

      {/* Contact Information */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          9. Contact Information
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          📍 128 City Road, London, EC1V 2NX <br />
          📞 +44 7838 298201 <br />
          📧{" "}
          <a
            href="mailto:letstalk@poshretreats.co.uk"
            className="text-customGreen underline"
          >
            letstalk@poshretreats.co.uk
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
