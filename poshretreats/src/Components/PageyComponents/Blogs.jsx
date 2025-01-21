import React from "react";
import ReusableButton from "../FlowerButton";

const blogs = [
  {
    id: 1,
    date: "11 Jan 2025",
    time: "10 mins read",
    title: "Top 5 Underrated Destinations for Your Next Adventure",
    description:
      "Discover hidden gems around the world that offer unique experiences, stunning scenery, and fewer crowds.",
    tags: ["Historical & Heritage"],
    image:
      "https://wanderingzone.com/wp-content/uploads/2021/11/10-Best-places-to-visit-in-Morocco-Beautiful-places-Chefchaouen-Travel-Solo-Family-Friends-Couple-Wandering-Zone-scaled.jpg",
  },
  {
    id: 2,
    date: "08 Jan 2025",
    time: "10 mins read",
    title: "How to Pack Like a Pro for Any Trip",
    description:
      "Say goodbye to overpacking! Learn smart packing tips and tricks to travel light while having everything you need.",
    tags: ["Food & Gastronomy"],
    image:
      "https://static1.squarespace.com/static/5f1ab4309bd4b45e29ec3e4b/t/5fb725d9f36a8448ed4ecad8/1605838539508/aerial+view+of+windhoek+colourful+houses+and+clear+streets+and+cars.jpg?format=1500w",
  },
  {
    id: 3,
    date: "01 Jan 2025",
    time: "10 mins read",
    title: "The Ultimate Guide to Solo Travel: Tips for First-Time Explorers",
    description:
      "Nervous about traveling alone? This guide covers everything from safety tips to making the most of your trip.",
    tags: ["Luxury"],
    image:
      "https://cdn.pixabay.com/photo/2018/03/25/11/02/swimming-pool-3254841_960_720.jpg",
  },
  {
    id: 4,
    date: "28 Dec 2024",
    time: "8 mins read",
    title: "5 Essential Travel Apps You Should Download Now",
    description:
      "These apps will make your travel smoother and stress-free, from navigation to expense tracking.",
    tags: ["Tech & Travel"],
    image:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i91a473b0ffb90c03/version/1696146475/best-places-to-visit-in-greece-santorini.jpg",
  },
  {
    id: 5,
    date: "15 Dec 2024",
    time: "12 mins read",
    title: "How to Save Money on Flights Without Sacrificing Comfort",
    description:
      "Learn expert tips on finding affordable flights while still enjoying a comfortable journey.",
    tags: ["Travel Hacks"],
    image:
      "https://cdn.pixabay.com/photo/2021/09/13/17/47/sunset-6623694_960_720.jpg",
  },
  {
    id: 6,
    date: "05 Dec 2024",
    time: "7 mins read",
    title: "10 Must-Try Street Foods Around the World",
    description:
      "A delicious journey through some of the most iconic street foods that you need to try.",
    tags: ["Food & Gastronomy"],
    image:
      "https://cdn.pixabay.com/photo/2017/03/20/20/57/venice-2161602_960_720.jpg",
  },
  {
    id: 7,
    date: "22 Nov 2024",
    time: "9 mins read",
    title: "Tips for Capturing Stunning Travel Photos",
    description:
      "Master the art of travel photography with these simple tips for beginners and pros alike.",
    tags: ["Photography"],
    image:
      "https://cdn.pixabay.com/photo/2020/10/18/15/26/city-5666178_960_720.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="bg-customBg flex flex-col justify-center text-center items-center pb-24 md:pb-12">
      {/* Header Section */}
      <div className="md:flex md:flex-col md:items-center md:mt-16 mb-4 md:justify-center">
        <h2 className="mt-12 font-roboto text-gray-600 text-xl font-normal md:font-light md:text-lg">
          Blogs
        </h2>
        <h1 className="font-raleway md:mt-4 mt-4 font-semibold text-3xl md:text-4xl">
          Latest Blogs
        </h1>
      </div>

      {/* Blogs Section */}
      <div
        className="w-full overflow-x-auto scrollbar-hide"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: "2rem",
          padding: "1rem",
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-xl flex flex-col group overflow-hidden min-w-[300px] md:min-w-[350px]"
          >
            {/* Image Container */}
            <div className="relative w-full h-60 rounded-xl overflow-hidden bg-transparent">
              <div className="w-full h-full md:transform scale-[1.09] md:transition-transform duration-300 ease-in-out md:group-hover:scale-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 w-[90%]">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="md:px-3 md:py-1.5 px-4 py-2 font-roboto bg-white bg-opacity-15 text-white md:text-xs text-sm rounded-full backdrop-blur-md shadow-md flex justify-center items-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Blog Details */}
            <div className="md:mt-4 mt-4 text-start md:px-0">
              <p className="md:text-sm text-gray-600 font-roboto">
                {blog.date} • {blog.time}
              </p>
              <h2 className="font-raleway text-lg font-semibold mt-1 truncate">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 font-roboto mt-2">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

     <ReusableButton label="View More Blogs" route="/blogs" />
    </div>
  );
};

export default Blogs;
