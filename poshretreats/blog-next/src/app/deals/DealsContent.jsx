"use client";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import { useState, useEffect } from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

function highlightText(text = "", query = "") {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, idx) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={idx} className="bg-yellow-200">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function DealsContent({ deals, uniqueTags }) {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDeals, setFilteredDeals] = useState(deals);
  const [sortOption, setSortOption] = useState("newest"); // Sorting state
  const router = useRouter(); // Correct useRouter import

  // Handle sorting
  const sortDeals = (deals, option) => {
    if (option === "cheapest") {
      return [...deals].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    }
    if (option === "newest") {
      return [...deals].sort(
        (a, b) => new Date(b.validUntil) - new Date(a.validUntil)
      );
    }
    return deals;
  };

  useEffect(() => {
    const queryLower = searchQuery.toLowerCase();

    const newFiltered = deals.filter((deal) => {
      const matchesTag = activeTag === "All" || deal.dealTag === activeTag;

      const inTitle = deal.title.toLowerCase().includes(queryLower);
      const inLocation = deal.location?.toLowerCase().includes(queryLower);
      const inTag = deal.dealTag?.toLowerCase().includes(queryLower);

      return matchesTag && (inTitle || inLocation || inTag || !searchQuery);
    });

    setFilteredDeals(sortDeals(newFiltered, sortOption));
  }, [activeTag, searchQuery, deals, sortOption]);

  return (
    <div className="px-4 md:py-40 py-32 md:px-8 sm:px-8 bg-customBg min-h-screen">
      {/* Page Header */}
      <header className="text-center md:px-96 md:mb-40">
        <h1 className="md:text-4xl text-3xl font-raleway font-bold text-black mb-4">
          Unbeatable Travel Deals Just For You
        </h1>
        <p className="text-gray-600 px-6 md:px-0 font-roboto text-xs md:text-base">
          Discover incredible destinations at unbeatable prices. Explore our
          curated deals and start planning your dream trip today!
        </p>
      </header>

      {/* Filter and Sort */}
      <div className="flex items-center mt-12 md:mt-0 justify-between mb-8">
        <h1 className="font-raleway text-xl font-semibold text-black md:text-2xl">
          Hot Deals
        </h1>
        <div className="flex items-center space-x-2">
          <span className="md:text-base text-xs font-roboto text-gray-600">
            Sort by:
          </span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 bg-customBg rounded-md md:px-2 px-1 py-1 md:py-3 text-xs font-roboto"
          >
            <option value="newest">Newest</option>
            <option value="cheapest">Cheapest</option>
          </select>
        </div>
      </div>

      {/* Deals Grid */}
      {filteredDeals.length > 0 ? (
        <div className="grid px-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDeals.map((deal) => (
            <div
              key={deal.slug?.current || deal.title} // Use title as a fallback if slug is missing
              className="overflow-hidden cursor-pointer flex flex-col transform transition-transform duration-300 hover:scale-105" // Hover zoom effect
              onClick={() => router.push(`/deals/${deal.slug.current}`)} // Correct client-side navigation
            >
              <div className="relative">
                {deal.mainImage?.asset?.url && (
                  <Image
                    src={deal.mainImage.asset.url}
                    alt={deal.title}
                    width={400}
                    height={250}
                    className="w-full h-[280px] rounded-xl object-cover"
                  />
                )}
                {/* Tag */}
                {deal.dealTag && (
                  <span className="absolute top-2 left-2 bg-white text-green-700 text-xs font-bold md:px-4 md:py-2  px-2 py-1 rounded-full shadow-md">
                    {deal.dealTag}
                  </span>
                )}
              </div>

              <div className="py-4  flex flex-col justify-between flex-grow">
                {/* Title and Location */}
                <div>
                  <h3 className="text-xl font-semibold font-raleway text-gray-900 md:mb-0">
                    {highlightText(deal.title, searchQuery)}
                  </h3>

                  <p className="text-xs text-gray-800 font-roboto mb-2">
                    {highlightText(deal.location, searchQuery)}
                  </p>

                  {/* Notable Inclusions */}
                  {deal.notableInclusions?.length > 0 && (
                    <ul className="text-sm text-black space-y-2.5">
                      {deal.notableInclusions
                        .slice(0, 2)
                        .map((inclusion, idx) => (
                          <li key={idx} className="flex items-center space-x-1">
                            <TiTick className="text-customGreen" />
                            <span>{inclusion}</span>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>

                {/* Price Section */}
                <div className="text-right mt-auto">
                  <p className="text-2xl font-bold font-roboto text-gray-900">
                    From {deal.price}{" "}
                    {deal.pricePerPerson && (
                      <span className="text-sm text-gray-600 font-normal">
                        per person
                      </span>
                    )}
                  </p>
                  {deal.validUntil && (
                    <p className="text-xs  text-gray-700 font-roboto mt-2">
                      Trip starts:{" "}
                      {new Date(deal.validUntil).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-32">
          <h2 className="text-3xl font-semibold font-raleway text-gray-700">
            No deals available. Check back later!
          </h2>
        </div>
      )}
    </div>
  );
}
