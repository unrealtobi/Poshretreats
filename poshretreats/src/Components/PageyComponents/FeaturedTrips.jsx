import React from "react";

const trips = [
  {
    id: 1,
    date: "20/02/2025",
    title: "Marrakesh 3.0: A Journey of Adventure and Elegance",
    description: "5 days guided trip, accommodation and more",
    image:
      "https://wanderingzone.com/wp-content/uploads/2021/11/10-Best-places-to-visit-in-Morocco-Beautiful-places-Chefchaouen-Travel-Solo-Family-Friends-Couple-Wandering-Zone-scaled.jpg",
    tags: ["Historical & Heritage", "Cultural", "Relaxation"],
    capacity: 70, // in percentage
  },
  {
    id: 2,
    date: "24/08/2025",
    title: "Italy 2025",
    description: "3 days guided trip, accommodation and more",
    image:
      "https://static1.squarespace.com/static/5f1ab4309bd4b45e29ec3e4b/t/5fb725d9f36a8448ed4ecad8/1605838539508/aerial+view+of+windhoek+colourful+houses+and+clear+streets+and+cars.jpg?format=1500w",
    tags: ["Food & Gastronomy", "Adventure", "City Escapes"],
    capacity: 60, // in percentage
  },
  {
    id: 3,
    date: "23/05/2025",
    title: "Montenegro 2025",
    description: "A week-long guided trip, accommodation and more",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i91a473b0ffb90c03/version/1696146475/best-places-to-visit-in-greece-santorini.jpg",
    tags: ["Luxury", "Beach & Relaxation", "Scenic & Landscapes", "Retreats"],
    capacity: 23, // in percentage
  },
];

const FeaturedTrips = () => {
  return (
    <div className="bg-customBg flex flex-col justify-center items-center pb-12">
      {/* Header Section */}
      <div className="md:flex md:flex-col md:items-center md:mt-16 md:justify-center">
        <h2 className="font-roboto md:block hidden text-customGreen md:font-normal bg-gray-100 rounded-full md:px-4 md:py-3 md:w-80 text-xs text-center">
          Discover Group Unforgettable Adventures Together
        </h2>
        <h1 className="font-raleway md:mt-4 mt-10 font-semibold text-3xl">
          Featured Group Trips
        </h1>
      </div>

      {/* Trips Section */}
      <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-6 md:px-16 mt-12">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="rounded-xl flex flex-col group overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden bg-transparent">
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

              {/* Learn More Button */}
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-customGreen font-roboto font-medium text-sm px-8 py-2 rounded-md opacity-0 md:group-hover:opacity-100 transition-opacity md:duration-300 ease-in-out shadow-md">
                Learn More
              </button>

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 w-[90%] md:transition-opacity md:duration-300 md:ease-in-out md:group-hover:opacity-0">
                {trip.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="md:px-3 md:py-1.5 px-4 py-2 font-roboto  bg-white md:bg-opacity-15 bg-opacity-35 text-white md:text-xs text-sm rounded-full backdrop-blur-md shadow-md flex justify-center items-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Trip Details */}
            <div className="md:mt-4 mt-4 md:px-0">
              <p className="md:text-sm text-gray-700 font-roboto">
                {trip.date}
              </p>
              <h2 className="font-raleway text-lg font-semibold mt-1 truncate">
                {trip.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 truncate">
                {trip.description}
              </p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="relative w-full sm:h-8 h-8 bg-gray-100 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-8 sm:h-8 bg-customPink rounded-l-full"
                    style={{ width: `${trip.capacity}%` }}
                  ></div>
                  <p className="absolute inset-0 flex items-center justify-center text-xs text-customGreen font-raleway font-semibold">
                    {trip.capacity}% capacity
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="/contact-us"
        className="relative sm:px-12 sm:py-4  md:px-8 md:mt-12 mt-12 bg-customGreen md:text-sm text-sm  font-roboto font-medium text-white px-10 md:py-3 py-3 rounded-md shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen group hover:bg- transition-colors duration-300 ease-in-out"
      >
        <span className="relative z-10 whitespace-nowrap">View More Trips</span>
        {/* Left Flower */}
        <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
        {/* Right Flower */}
        <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:-translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
      </a>
    </div>
  );
};

export default FeaturedTrips;
