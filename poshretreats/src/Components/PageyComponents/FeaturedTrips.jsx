import React, { useEffect, useState } from "react";
import ReusableButton from "../FlowerButton";
// If you're using the react-icons library:
import { TiTick } from "react-icons/ti";

// Import your Sanity client (adjust path as needed)
import client from "../../../sanityClient";

const FeaturedTrips = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        // Adjust this query to match the fields in your "deal" schema
        const query = `*[_type == "deal"]{
          _id,
          title,
          slug,
          dealTag,
          mainImage {
            asset-> {
              url
            }
          },
          location,
          notableInclusions,
           pricePerPerson,
          price

        }`;

        const results = await client.fetch(query);
        setDeals(results);
      } catch (error) {
        console.error("Error fetching deals from Sanity:", error);
      }
    };

    fetchDeals();
  }, []);

  // A helper function to handle the click
  const handleLearnMore = (slug) => {
    // Navigate to your Next.js deals detail page
    window.location.href = `https://explore.poshretreats.co.uk/deals/${slug}`;
  };

  return (
    <div className="bg-customBg flex flex-col justify-center items-center pb-12">
      {/* Header Section */}
      <div className="md:flex md:flex-col md:items-center items-center flex flex-col text-center md:mt-16 mb-4 md:justify-center">
        <h2 className="mt-12 font-roboto text-gray-600 text-xl font-normal  md:font-light md:text-lg">
          Deals
        </h2>
        <h1 className="font-raleway md:mt-4 mt-4 font-semibold text-3xl md:text-4xl">
          Exclusive <span className="text-customGreen">Travel Deals</span> Await
          You!
        </h1>
      </div>

      {/* Trips Section */}
      <div
        className="w-full overflow-x-auto scrollbar-hide"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: "2rem",
          padding: "1rem",
        }}
      >
        {deals.map((deal) => (
          <div
            key={deal._id}
            className="rounded-xl flex flex-col group overflow-hidden min-w-[300px] sm:max-w-[390px] md:max-w-[390px]"
          >
            {/* Image Container */}
            <div className="relative w-full h-60 rounded-xl overflow-hidden bg-transparent">
              {/* Image with shrink effect */}
              <div className="w-full h-full md:transform scale-[1.09] md:transition-transform duration-300 ease-in-out md:group-hover:scale-100">
                <img
                  src={deal.mainImage?.asset?.url}
                  alt={deal.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-35 rounded-xl md:transition-opacity duration-300 ease-in-out md:group-hover:opacity-0"></div>

              {/* Deal Tag (replaces "Save XX%") */}
              {deal.dealTag && (
                <div className="absolute top-4 left-4 bg-white text-customGreen px-4 py-2 text-xs font-medium rounded-full">
                  {deal.dealTag}
                </div>
              )}

              {/* Learn More Button */}
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-customGreen font-roboto font-medium text-sm px-8 py-2 rounded-md opacity-0 md:group-hover:opacity-100 transition-opacity md:duration-300 ease-in-out shadow-md"
                onClick={() => handleLearnMore(deal.slug.current)}
              >
                Learn More
              </button>
            </div>

            {/* Trip Details */}
            <div className="md:mt-4 mt-4 md:px-0">
              <h2 className="font-raleway text-xl font-semibold mt-1 truncate">
                {deal.title}
              </h2>
              <p className="md:text-sm text-gray-700 font-roboto">
                {deal.location}
              </p>
              {/* Notable Inclusions with Tick Prefix */}
              <ul className="text-sm text-gray-600 mt-4 space-y-1">
                {deal.notableInclusions?.map((inclusion, index) => (
                  <li key={index} className="flex items-center">
                    {/* Tick icon (optional) */}
                    <TiTick className="text-customGreen mr-1" />
                    {inclusion}
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-4 items-center">
                <p className="font-semibold text-2xl ">From {deal.price}</p>
                {deal.pricePerPerson && (
                  <span className="text-gray-500 font-medium text-xs ml-1 font-roboto">
                    pp
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ReusableButton
        label="Explore More Deals"
        route="https://explore.poshretreats.co.uk/deals"
      />
    </div>
  );
};

export default FeaturedTrips;
