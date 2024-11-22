import React from "react";

const reviews = [
  {
    id: 1,
    text: "Absolutely incredible experience! Every detail was thoughtfully planned, making it easy to relax and enjoy each destination. I can't wait to book my next trip!",
    name: "Amara Johnson",
    role: "Graphic Designer",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    text: "Posh Retreats took care of everything, from accommodations to local recommendations. I felt safe and pampered the whole time. Highly recommended!",
    name: "Leo Martinez",
    role: "Marketing Specialist",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    text: "Booking with Posh Retreats made my dream vacation stress-free. The local guides were knowledgeable, and the itinerary was perfect. Five stars!",
    name: "Jason Patel",
    role: "Financial Analyst",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    text: "As a solo traveler, I loved the group trip option. I made amazing friends and had experiences I'd never have found on my own!",
    name: "Grace Kim",
    role: "Photographer",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    text: "I've traveled a lot, but this was by far my best experience. Luxury and adventure combined seamlessly – I felt like a VIP!",
    name: "Aisha Thompson",
    role: "Event Planner",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 6,
    text: "Traveling with Posh Retreats felt like a personal journey. The guides understood our interests and tailored each experience for us.",
    name: "Sophia Lopez",
    role: "Architect",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 7,
    text: "Every destination was carefully curated and the accommodations were amazing. Posh Retreats truly delivers on quality and comfort.",
    name: "Liam Hughes",
    role: "Chef",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 8,
    text: "I was hesitant about group travel, but this was different. The group dynamic was wonderful, and we all left with beautiful memories.",
    name: "Olivia Chen",
    role: "Software Engineer",
    image: "https://via.placeholder.com/50",
  },
];

const ReviewsSection = () => {
  return (
    <>
      <div className="border-t border-b md:block sm:hidden hidden  border-black -translate-y-10 bg-customBg pt-16">
        {/* Header Section */}
        <div className="text-center md:px-48 px-8 mb-12">
          <h2 className="font-roboto text-gray-500 text-lg">REVIEWS</h2>
          <h1 className="font-raleway text-3xl text-black mt-2 font-semibold">
            See What Our Customers Say
          </h1>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-8 gap-6 px-8 md:px-12">
          {/* Render each review separately */}

          <div
            key={reviews[0].id}
            className="bg-customWhite border h-[290px] rounded-xl  p-6 flex flex-col justify-between col-span-2"
          >
            <p className="text-gray-800 font-roboto  text-base mb-6">
              "{reviews[0].text}"
            </p>
            <div className="flex items-center">
              <img
                src={reviews[0].image}
                alt={reviews[0].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-normal font-roboto text-sm text-gray-900">
                  {reviews[0].name}
                </h3>
                <p className="text-sm text-gray-600">{reviews[0].role}</p>
              </div>
            </div>
          </div>

          <div
            key={reviews[1].id}
            className="bg-white border h-[320px] rounded-xl  p-6 flex flex-col justify-between col-span-2"
          >
            <p className="text-gray-800 font-roboto  text-base mb-6">
              "{reviews[1].text}"
            </p>
            <div className="flex items-center">
              <img
                src={reviews[1].image}
                alt={reviews[1].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-normal font-roboto text-sm text-gray-900">
                  {reviews[1].name}
                </h3>
                <p className="text-sm text-gray-600">{reviews[1].role}</p>
              </div>
            </div>
          </div>

          <div
            key={reviews[2].id}
            className="bg-white border h-[260px] rounded-xl  p-6 flex flex-col justify-between col-span-2"
          >
            <p className="text-gray-800 font-roboto  text-base mb-6">
              "{reviews[2].text}"
            </p>
            <div className="flex items-center">
              <img
                src={reviews[2].image}
                alt={reviews[2].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-normal font-roboto text-sm text-gray-900">
                  {reviews[2].name}
                </h3>
                <p className="text-sm text-gray-600">{reviews[2].role}</p>
              </div>
            </div>
          </div>

          <div
            key={reviews[3].id}
            className="bg-white border h-[320px] rounded-xl  p-6 flex flex-col justify-between col-span-2"
          >
            <p className="text-gray-800 font-roboto  text-base mb-6">
              "{reviews[3].text}"
            </p>
            <div className="flex items-center">
              <img
                src={reviews[3].image}
                alt={reviews[3].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-normal font-roboto text-sm text-gray-900">
                  {reviews[3].name}
                </h3>
                <p className="text-sm text-gray-600">{reviews[3].role}</p>
              </div>
            </div>
          </div>
          <div
            key={reviews[4].id}
            className="bg-white h-[290px] -translate-y-7 border rounded-xl p-6 flex flex-col justify-between col-span-2"
          >
            <p className="text-gray-800 font-roboto  text-base mb-6">
              "{reviews[4].text}"
            </p>
            <div className="flex items-center">
              <img
                src={reviews[4].image}
                alt={reviews[4].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-normal font-roboto text-sm text-gray-900">
                  "{reviews[4].name}"
                </h3>
                <p className="text-sm text-gray-600">{reviews[4].role}</p>
              </div>
            </div>
          </div>
          <div
            key={reviews[5].id}
            className="bg-white border h-[261px] translate-y-0 rounded-xl p-6 flex flex-col justify-between col-span-2"
          >
            <p className="text-gray-800 font-roboto  text-base mb-6">
              "{reviews[5].text}"
            </p>
            <div className="flex items-center">
              <img
                src={reviews[5].image}
                alt={reviews[5].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-normal font-roboto text-sm text-gray-900">
                  {reviews[5].name}
                </h3>
                <p className="text-sm text-gray-600">{reviews[5].role}</p>
              </div>
            </div>
          </div>
          <div
            key={reviews[6].id}
            className="bg-white border rounded-xl -translate-y-16 h-[325px]  p-6 flex flex-col justify-between col-span-2"
          >
            <p className="text-gray-800 font-roboto  text-base mb-6">
              "{reviews[6].text}"
            </p>
            <div className="flex items-center">
              <img
                src={reviews[6].image}
                alt={reviews[6].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-normal font-roboto text-sm text-gray-900">
                  {reviews[6].name}
                </h3>
                <p className="text-sm text-gray-600">{reviews[6].role}</p>
              </div>
            </div>
          </div>
          <div
            key={reviews[7].id}
            className="bg-white border h-[261px] translate-y-0 rounded-xl  p-6 flex flex-col justify-between col-span-2"
          >
            <p className="text-gray-800 font-roboto  text-base mb-6">
              "{reviews[7].text}"
            </p>
            <div className="flex items-center">
              <img
                src={reviews[7].image}
                alt={reviews[7].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-normal font-roboto text-sm text-gray-900">
                  {reviews[7].name}
                </h3>
                <p className="text-sm text-gray-600">{reviews[7].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-customBg md:hidden border-b border-black -my-16 block pb-12 sm:block pt-24">
        {/* Header Section */}
        <div className=" border-t -translate-y-8"></div>
        <div className="text-center md:px-48 px-8 mb-12">
          <h2 className="font-roboto text-gray-500 text-lg">REVIEWS</h2>
          <h1 className="font-raleway text-3xl text-black mt-2 font-semibold">
            See What Our Customers Say
          </h1>
        </div>

        {/* Reviews Grid */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-8 gap-6 px-4 md:px-12 min-w-[1024px]">
            {/* Render each review separately */}

            <div
              key={reviews[0].id}
              className="bg-customWhite border h-[290px] rounded-xl  p-6 flex flex-col justify-between col-span-2"
            >
              <p className="text-gray-800 font-roboto  text-base mb-6">
                "{reviews[0].text}"
              </p>
              <div className="flex items-center">
                <img
                  src={reviews[0].image}
                  alt={reviews[0].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-normal font-roboto text-sm text-gray-900">
                    {reviews[0].name}
                  </h3>
                  <p className="text-sm text-gray-600">{reviews[0].role}</p>
                </div>
              </div>
            </div>

            <div
              key={reviews[1].id}
              className="bg-white border h-[320px] rounded-xl  p-6 flex flex-col justify-between col-span-2"
            >
              <p className="text-gray-800 font-roboto  text-base mb-6">
                "{reviews[1].text}"
              </p>
              <div className="flex items-center">
                <img
                  src={reviews[1].image}
                  alt={reviews[1].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-normal font-roboto text-sm text-gray-900">
                    {reviews[1].name}
                  </h3>
                  <p className="text-sm text-gray-600">{reviews[1].role}</p>
                </div>
              </div>
            </div>

            <div
              key={reviews[2].id}
              className="bg-white border h-[260px] rounded-xl  p-6 flex flex-col justify-between col-span-2"
            >
              <p className="text-gray-800 font-roboto  text-base mb-6">
                "{reviews[2].text}"
              </p>
              <div className="flex items-center">
                <img
                  src={reviews[2].image}
                  alt={reviews[2].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-normal font-roboto text-sm text-gray-900">
                    {reviews[2].name}
                  </h3>
                  <p className="text-sm text-gray-600">{reviews[2].role}</p>
                </div>
              </div>
            </div>

            <div
              key={reviews[3].id}
              className="bg-white border h-[320px] rounded-xl  p-6 flex flex-col justify-between col-span-2"
            >
              <p className="text-gray-800 font-roboto  text-base mb-6">
                "{reviews[3].text}"
              </p>
              <div className="flex items-center">
                <img
                  src={reviews[3].image}
                  alt={reviews[3].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-normal font-roboto text-sm text-gray-900">
                    {reviews[3].name}
                  </h3>
                  <p className="text-sm text-gray-600">{reviews[3].role}</p>
                </div>
              </div>
            </div>
            <div
              key={reviews[4].id}
              className="bg-white h-[290px] -translate-y-7 border rounded-xl p-6 flex flex-col justify-between col-span-2"
            >
              <p className="text-gray-800 font-roboto  text-base mb-6">
                "{reviews[4].text}"
              </p>
              <div className="flex items-center">
                <img
                  src={reviews[4].image}
                  alt={reviews[4].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-normal font-roboto text-sm text-gray-900">
                    {reviews[4].name}
                  </h3>
                  <p className="text-sm text-gray-600">{reviews[4].role}</p>
                </div>
              </div>
            </div>
            <div
              key={reviews[5].id}
              className="bg-white border h-[261px] translate-y-0 rounded-xl p-6 flex flex-col justify-between col-span-2"
            >
              <p className="text-gray-800 font-roboto  text-base mb-6">
                "{reviews[5].text}"
              </p>
              <div className="flex items-center">
                <img
                  src={reviews[5].image}
                  alt={reviews[5].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-normal font-roboto text-sm text-gray-900">
                    {reviews[5].name}
                  </h3>
                  <p className="text-sm text-gray-600">{reviews[5].role}</p>
                </div>
              </div>
            </div>
            <div
              key={reviews[6].id}
              className="bg-white border rounded-xl -translate-y-16 h-[325px]  p-6 flex flex-col justify-between col-span-2"
            >
              <p className="text-gray-800 font-roboto  text-base mb-6">
                "{reviews[6].text}"
              </p>
              <div className="flex items-center">
                <img
                  src={reviews[6].image}
                  alt={reviews[6].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-normal font-roboto text-sm text-gray-900">
                    {reviews[6].name}
                  </h3>
                  <p className="text-sm text-gray-600">{reviews[6].role}</p>
                </div>
              </div>
            </div>
            <div
              key={reviews[7].id}
              className="bg-white border h-[261px] translate-y-0 rounded-xl  p-6 flex flex-col justify-between col-span-2"
            >
              <p className="text-gray-800 font-roboto  text-base mb-6">
                "{reviews[7].text}"
              </p>
              <div className="flex items-center">
                <img
                  src={reviews[7].image}
                  alt={reviews[7].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-normal font-roboto text-sm text-gray-900">
                    {reviews[7].name}
                  </h3>
                  <p className="text-sm text-gray-600">{reviews[7].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
