import React from "react";

const Terms = () => {
  return (
    <div className="bg-customBg py-20 md:py-32 px-4 sm:px-8 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-raleway font-bold text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-4">
          Welcome to Posh Retreats Ltd’s Terms and Conditions. Please read these
          carefully as they outline the terms under which we provide our travel
          services. By booking with us, you agree to these terms.
        </p>
      </div>

      {/* General Information */}
      <div className=" p-6 md:p-10 rounded-lg ">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          1. General Information
        </h2>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          1.1 Posh Retreats Ltd is a trading name of Experience It Now Travel
          and sells travel services on behalf of Hays Travel Limited. We benefit
          from Hays Travel’s membership of ABTA with membership number P7133.
        </p>

        {/* ABTA Protection */}
        <div className="mt-6">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            1.2 ABTA Protection
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            Book with Confidence. We are Members of ABTA, meaning you will
            benefit from ABTA’s assistance and Code of Conduct. All the packages
            and Flight-Plus holidays we sell are covered by a scheme that
            protects your money if the supplier fails. Other services, such as
            hotels or flights alone, may not be protected, and you should ask us
            what protection is available.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            <strong>For further information:</strong>
            <br />
            📍 <span className="font-medium">Address:</span> 30 Park Street,
            London SE1 9EQ <br />
            📞 <span className="font-medium">Phone:</span> 020 3117 0500 <br />
            🌐 <span className="font-medium">Website:</span>{" "}
            <a
              href="https://www.abta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customGreen underline"
            >
              www.abta.com
            </a>
          </p>
        </div>

        {/* ATOL Protection */}
        <div className="mt-6">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            1.3 ATOL Protection
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            Many of the flights and flight-inclusive holidays on this website
            are financially protected by the ATOL scheme. However, ATOL
            protection does not apply to all holiday and travel services listed.
            Please confirm the applicable protection with us at the time of
            booking.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            🔗{" "}
            <a
              href="https://www.caa.co.uk/atol-protection/check-an-atol/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customGreen underline"
            >
              Learn More about ATOL
            </a>
          </p>
        </div>

        {/* ATOL Number */}
        <div className="mt-6">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            1.4 Our ATOL Number
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            <strong>ATOL Number: 5534</strong> <br />
            Verify our ATOL membership via the CAA Check an ATOL page.
          </p>
        </div>
      </div>

      {/* Booking and Payment */}
      <div className=" p-6 md:p-10 rounded-lg  mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          2. Booking and Payment
        </h2>

        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          2.1 Booking:
        </h3>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Depending on the specific travel service, we require a deposit or full
          payment to confirm your booking.
        </p>
        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-2 ">
          2.2 Payment by Instalment:
        </h3>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Posh Retreats Ltd provides a payment-by-instalment option where
          allowed by the supplier. If you choose this option, you agree to a
          direct debit arrangement and take full responsibility for completing
          payments.
        </p>
        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-2">
          2.3 Payment Terms:
        </h3>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Full payment must be completed at least 6 to 8 weeks before departure,
          depending on the agreement made during booking.
        </p>
      </div>

      {/* Changes and Cancellations */}
      <div className=" p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          3. Changes and Cancellations
        </h2>
        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          3.1 Changes:
        </h3>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Changes to your booking may be subject to fees imposed by suppliers or
          us.
        </p>
        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          3.1 Cancellations:
        </h3>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Cancellations will be subject to the terms outlined by the relevant
          travel supplier, which may include non-refundable deposits.
        </p>
      </div>

      {/* Responsibilities */}
      <div className=" p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          4. Your Responsibilities
        </h2>
        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          4.1 Accuracy:
        </h3>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          It is your responsibility to ensure the accuracy of all information
          provided during booking.
        </p>
        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          4.2 Travel Documents:
        </h3>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Passports, visas, and travel insurance are mandatory.
        </p>
      </div>

      {/* Complaints */}
      <div className="p-6 md:p-10 rounded-lg  mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          5. Complaints
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          If you have issues during your trip, contact us immediately. If
          unresolved, you may refer it to ABTA for arbitration.
        </p>
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="text-gray-600 text-sm md:text-base">
          If you have any questions about these terms, please contact us
          directly. <br />
          <strong>Posh Retreats Ltd - ABTA Member | ATOL Bonded (5534)</strong>
        </p>
      </div>
    </div>
  );
};

export default Terms;
