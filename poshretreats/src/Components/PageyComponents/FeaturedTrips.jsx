import React from "react";
import ReusableButton from "../FlowerButton";

const trips = [
  {
    id: 1,
    date: "20/02/2025",
    title: "Sharm El Sheikh All-Inclusive Getaway",
    location: "Egypt",
    image:
      "https://wanderingzone.com/wp-content/uploads/2021/11/10-Best-places-to-visit-in-Morocco-Beautiful-places-Chefchaouen-Travel-Solo-Family-Friends-Couple-Wandering-Zone-scaled.jpg",
    save: "40%",
    deals: ["⭐4-Star Hotel Accommodation", "✈️Airport Transfers"],
    price: "$499",
  },
  {
    id: 2,
    date: "24/08/2025",
    title: "Smy Puerto De La Cruz Tenerife",
    location: "Spain",
    image:
      "https://static1.squarespace.com/static/5f1ab4309bd4b45e29ec3e4b/t/5fb725d9f36a8448ed4ecad8/1605838539508/aerial+view+of+windhoek+colourful+houses+and+clear+streets+and+cars.jpg?format=1500w",
    save: "70%",
    deals: ["🏨4-Star Hotel Accommodation", "✈️Airport Transfers"],
    price: "$399",
  },
  {
    id: 3,
    date: "23/05/2025",
    title: "Valentine's Day Deals in Italy",
    location: "Italy",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i91a473b0ffb90c03/version/1696146475/best-places-to-visit-in-greece-santorini.jpg",
    save: "60%",
    deals: ["🏨4-Star Hotel Accommodation", "Airport Transfers"],
    price: "$389 ",
  },
  {
    id: 4,
    date: "12/12/2025",
    title: "Valentine's Day Panoramic View",
    location: "Czech Republic",
    image:
      "https://cdn.pixabay.com/photo/2021/09/13/17/47/sunset-6623694_960_720.jpg",
    save: "50%",
    deals: ["4-Star Hotel Accommodation", "Airport Transfers"],
    price: "$419 ",
  },
  {
    id: 5,
    date: "05/11/2025",
    title: "Luxury Retreat in Bali",
    location: "Indonesia",
    image:
      "https://cdn.pixabay.com/photo/2018/03/25/11/02/swimming-pool-3254841_960_720.jpg",
    save: "55%",
    deals: [
      "🧡5-Star Hotel Accommodation",
      "Airport Transfers",
      "Breakfast Included",
    ],
    price: "$699 ",
  },
];

const FeaturedTrips = () => {
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
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="rounded-xl flex flex-col group overflow-hidden min-w-[300px] md:min-w-[350px]"
          >
            {/* Image Container */}
            <div className="relative w-full h-60 rounded-xl overflow-hidden bg-transparent">
              {/* Image with shrink effect */}
              <div className="w-full h-full md:transform scale-[1.09] md:transition-transform duration-300 ease-in-out md:group-hover:scale-100">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-35 rounded-xl md:transition-opacity duration-300 ease-in-out md:group-hover:opacity-0"></div>

              {/* Save Percentage */}
              <div className="absolute top-4 left-4 bg-white text-customGreen px-4 py-2 text-xs font-medium rounded-full">
                Save {trip.save}
              </div>

              {/* Learn More Button */}
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-customGreen font-roboto font-medium text-sm px-8 py-2 rounded-md opacity-0 md:group-hover:opacity-100 transition-opacity md:duration-300 ease-in-out shadow-md">
                Learn More
              </button>
            </div>

            {/* Trip Details */}
            <div className="md:mt-4 mt-4 md:px-0">
              <h2 className="font-raleway text-lg font-semibold mt-1 truncate">
                {trip.title}
              </h2>
              <p className="md:text-sm text-gray-700 font-roboto">
                {trip.location}
              </p>
              <ul className="text-sm text-gray-600 mt-4 space-y-1">
                {trip.deals.map((deal, index) => (
                  <li key={index} className="flex items-center">
                    {deal}
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-4 items-center">
                <p className="font-semibold text-2xl ">{trip.price}</p>
                <span className="text-gray-500 font-medium text-xs ml-1 font-roboto">
                  {" "}
                  pp
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ReusableButton label="Explore More Deals" route="/deals" />
    </div>
  );
};

export default FeaturedTrips;
