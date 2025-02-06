import client from "@/sanityClient";
import ImageSlideshow from "@/components/ImageSlideshow";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoMdRemove } from "react-icons/io";
import Link from "next/link";
// NO "use client" here so that we stay a Server Component
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

// Configure the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
function urlFor(source) {
  return builder.image(source);
}

// Generate Metadata for Crawlers
export async function generateMetadata({ params }) {
  const { slug } = params;

  const deal = await client.fetch(
    `*[_type == "deal" && slug.current == $slug][0]{
      title,
      price,
      notableInclusions,
      mainImage {
        asset-> {
          url
        }
      }
    }`,
    { slug }
  );

  if (!deal) {
    return {
      title: "Deal not found",
    };
  }

  // Build the URL for the image
  const image = urlFor(deal.mainImage?.asset?.url)
    .width(1200)
    .height(630)
    .url();

  const url = `https://explore.poshretreats.co.uk/deals/${slug}`;
  const notableInclusions = deal.notableInclusions
    ? deal.notableInclusions.join(", ")
    : "";

  return {
    title: `${deal.title} - Only ${deal.price}`,
    description: `Discover the exclusive deal: ${deal.title}. Highlights include ${notableInclusions}.`,
    openGraph: {
      title: `${deal.title} - Only ${deal.price}`,
      description: `Discover the exclusive deal: ${deal.title}. Highlights include ${notableInclusions}.`,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: deal.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${deal.title} - Only ${deal.price}`,
      description: `Discover the exclusive deal: ${deal.title}. Highlights include ${notableInclusions}.`,
      images: [image],
    },
  };
}
export const revalidate = 0;
export default async function DealPage({ params }) {
  const { slug } = params;

  const query = `*[_type == "deal" && slug.current == $slug][0]{
    title,
    coverImages[] {
      asset-> {
        url
      }
    },
    mainImage {
      asset-> {
        url
      }
    },
    location,
    price,
    validUntil,
    notableInclusions,
    notableExclusions,
    included,
    excluded,
     pricePerPerson,
    innerDescription,
    dealTag,
    rating,
    note,
    dealLink
  }`;
  const moreDealsQuery = `*[_type == "deal" && slug.current != $slug]{
    title,
    slug,
    mainImage {
      asset-> {
        url
      }
    },
    price,
    location,
    validUntil,
    dealTag,
    notableInclusions
  } | order(validUntil desc)[0...9]`;
  const moreDeals = await client.fetch(moreDealsQuery, { slug });
  const deal = await client.fetch(query, { slug });

  if (!deal) {
    return (
      <div className="text-center mt-32">
        <h1 className="text-3xl font-semibold">Deal not found</h1>
      </div>
    );
  }

  const starRating = Math.floor(deal.rating || 0);

  return (
    <div className="bg-customBg min-h-screen md:px-8 px-4 py-32 md:py-40">
      {/* Overview Section */}
      <h1 className="md:text-4xl text-2xl font-bold font-raleway text-gray-900 text-center mb-8">
        {deal.title}
      </h1>

      {/* Slideshow Section */}
      <div className="relative w-full md:h-[500px] mb-12 md:mb-32 overflow-hidden">
        {deal.coverImages?.length > 0 ? (
          <ImageSlideshow images={deal.coverImages} />
        ) : (
          <p className="text-center text-gray-700">No images available</p>
        )}
      </div>

      {/* Content Section */}
      <h1 className="md:text-2xl text-xl font-semibold text-gray-800  font-raleway col-span-3 md:col-span-1 mb-3  md:mb-6">
        Overview
      </h1>
      <div className="grid md:grid-cols-3 gap-14">
        {/* Left Content */}
        <div className="md:col-span-2">
          {/* Main Image */}
          {deal.mainImage?.asset?.url && (
            <div className="w-full sm:w-[480px] h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
              <Image
                src={deal.mainImage.asset.url}
                alt="Main Image"
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {/* Description */}
          {deal.innerDescription && (
            <div className="md:text-base text-sm sm:w-[480px] font-roboto text-gray-700 mb-6">
              <PortableText
                value={deal.innerDescription}
                components={{
                  marks: {
                    link: ({ children, value }) => (
                      <a
                        href={value.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {children}
                      </a>
                    ),
                  },
                  // Optional: custom block styles
                  block: {
                    h1: ({ children }) => (
                      <h1 className="text-4xl font-extrabold text-black my-6">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-3xl font-bold text-black my-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-2xl font-semibold text-black my-4">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-xl font-medium text-black my-4">
                        {children}
                      </h4>
                    ),
                    h5: ({ children }) => (
                      <h5 className="text-lg font-medium text-black my-4">
                        {children}
                      </h5>
                    ),
                    h6: ({ children }) => (
                      <h6 className="text-sm font-normal text-black my-4">
                        {children}
                      </h6>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="pl-4 border-l-4 border-gray-300 italic text-gray-600 my-4">
                        {children}
                      </blockquote>
                    ),
                  },
                }}
              />
            </div>
          )}

          {/* Included Section */}
          {deal.included?.length > 0 && (
            <div className="mb-10">
              <h2 className="md:text-2xl text-gray-800 text-xl font-semibold font-raleway mb-4">
                Included
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                {(deal.included || []).map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center md:text-base text-sm space-x-2 text-gray-800"
                  >
                    <TiTick className="text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Excluded Section */}
          {deal.excluded?.length > 0 && (
            <div className="md:mb-10 mb-2">
              <h2 className="md:text-2xl text-xl text-gray-800 font-semibold font-raleway mb-4">
                Excluded
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  ...(deal.excluded || []),
                  ...(deal.notableExclusions || []),
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center md:text-base text-sm space-x-2 text-gray-800"
                  >
                    <IoMdRemove className="text-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="bg-white sm:w-[400px] border border-gray-200 rounded-lg shadow-lg p-6 self-start">
          {/* Price */}
          <div className="flex items-center justify-between">
            {/* Price */}
            <p className="text-2xl font-bold font-roboto text-gray-900">
              From {deal.price}{" "}
              {deal.pricePerPerson && (
                <span className="text-sm text-gray-600 font-normal">
                  per person
                </span>
              )}
            </p>

            {/* Tag */}
            {deal.dealTag && (
              <p className="text-green-700 bg-green-100 -translate-y-2 py-2 px-3 font-semibold text-xs text-center rounded-full">
                {deal.dealTag}
              </p>
            )}
          </div>
          {deal.note && (
            <div className="mt-2 rounded-md">
              <p className="text-xs text-gray-700 font-roboto">{deal.note}</p>
            </div>
          )}
          {/* Star Rating */}
          <div className="flex space-x-1 items-center mt-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <FaStar
                key={idx}
                className={`${
                  idx < starRating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Exclusive Additions */}
          {deal.notableInclusions?.length > 0 && (
            <div className="mt-6">
              <h2 className="text-sm font-roboto font-semibold mb-2">
                Exclusive Additions
              </h2>
              <ul className="text-sm text-gray-700 font-roboto space-y-2">
                {deal.notableInclusions.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Book Link */}
          {deal.dealLink && (
            <a
              href={deal.dealLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center bg-customGreen text-white text-base font-medium rounded-md py-3 mt-6 hover:bg-customDarkGreen transition"
            >
              Book this Trip
            </a>
          )}

          {/* Valid Until */}
          {deal.validUntil && (
            <p className="text-xs text-gray-700 text-center mt-2">
              Trip starts {new Date(deal.validUntil).toLocaleDateString()}.
            </p>
          )}
        </div>
      </div>
      {moreDeals.length > 0 && (
        <section className="mt-32">
          <h2 className="text-3xl font-semibold font-raleway text-black mb-8 text-center">
            More Deals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {moreDeals.map((deal) => (
              <Link
                key={deal.slug?.current || deal.title} // Use slug or title as key
                href={`/deals/${deal.slug.current}`} // Correct navigation
                className="overflow-hidden cursor-pointer flex flex-col transform transition-transform duration-300 hover:scale-105"
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
                    <span className="absolute top-2 left-2 bg-white text-green-700 text-xs font-bold px-4 py-2 rounded-full shadow-md">
                      {deal.dealTag}
                    </span>
                  )}
                </div>

                <div className="py-4 bg-white flex flex-col justify-between flex-grow shadow-lg rounded-b-lg">
                  {/* Title and Location */}
                  <div>
                    <h3 className="text-lg font-semibold font-raleway text-gray-900 md:mb-0">
                      {deal.title}
                    </h3>

                    <p className="text-sm text-gray-600 font-roboto mb-2">
                      {deal.location}
                    </p>

                    {/* Notable Inclusions */}
                    {deal.notableInclusions?.length > 0 && (
                      <ul className="text-sm text-black space-y-2.5">
                        {deal.notableInclusions
                          .slice(0, 2)
                          .map((inclusion, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-1"
                            >
                              <TiTick className="text-customGreen" />
                              <span>{inclusion}</span>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>

                  {/* Price Section */}
                  <div className="text-right mt-auto">
                    <p className="text-xl font-bold font-roboto text-gray-900">
                      {deal.price}{" "}
                      <span className="text-sm font-normal text-gray-800">
                        per person
                      </span>
                    </p>
                    {deal.validUntil && (
                      <p className="text-xs text-gray-700 font-roboto mt-2">
                        Trip starts:{" "}
                        {new Date(deal.validUntil).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
