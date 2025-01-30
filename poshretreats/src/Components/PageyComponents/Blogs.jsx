import React, { useEffect, useState } from "react";
import ReusableButton from "../FlowerButton";

// Import your Sanity client (adjust the path as needed)
import client from "../../../sanityClient";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from Sanity on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Adjust this query to match the fields in your "post" schema
        const query = `
          *[_type == "post"] | order(publishedAt desc){
            _id,
            title,
            description,
            readTime,
            publishedAt,
            mainImage {
              asset-> {
                url
              }
            },
            slug,
            tag
          }
        `;
        const results = await client.fetch(query);
        setBlogs(results);
      } catch (error) {
        console.error("Error fetching blogs from Sanity:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Helper function to format date as "1 Jan 2025"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Navigate to the Next.js blog detail page
  const handleLearnMore = (slug) => {
    window.location.href = `https://explore.poshretreats.co.uk/blog/${slug}`;
  };

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

      {/* Blogs Section (horizontal scroll) */}
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
            key={blog._id}
            className="rounded-xl flex flex-col group overflow-hidden min-w-[300px] sm:max-w-[390px] md:max-w-[390px]"
          >
            {/* Image Container */}
            <div className="relative w-full h-60 rounded-xl overflow-hidden bg-transparent">
              <div className="w-full h-full md:transform scale-[1.09] md:transition-transform duration-300 ease-in-out md:group-hover:scale-100">
                <img
                  src={blog.mainImage?.asset?.url}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Tag (optional) */}
              {blog.tag && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 w-[90%]">
                  <span className="md:px-3 md:py-1.5 px-4 py-2 font-roboto bg-white bg-opacity-15 text-white md:text-xs text-sm rounded-full backdrop-blur-md shadow-md flex justify-center items-center">
                    {blog.tag}
                  </span>
                </div>
              )}

              {/* (Optional) "Read More" Overlay Button */}
              <button
                onClick={() => handleLearnMore(blog.slug.current)}
                className="absolute top-1/2 left-1/2 transform
                           -translate-x-1/2 -translate-y-1/2
                           bg-white text-customGreen
                           font-roboto font-medium text-sm
                           px-8 py-2 rounded-md opacity-0
                           md:group-hover:opacity-100
                           transition-opacity md:duration-300
                           ease-in-out shadow-md"
              >
                Read More
              </button>
            </div>

            {/* Blog Details */}
            <div className="md:mt-4 mt-4 text-start md:px-0">
              <p className="md:text-sm text-gray-600 font-roboto">
                {formatDate(blog.publishedAt)} • {blog.readTime}
              </p>
              <h2 className="font-raleway text-lg font-semibold mt-1 truncate">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 font-roboto mt-2">
                {blog.description.length > 120
                  ? `${blog.description.slice(0, 120)}...`
                  : blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Blogs Button */}
      <ReusableButton label="View More Blogs" route="https://explore.poshretreats.co.uk/" />
    </div>
  );
};

export default Blogs;
