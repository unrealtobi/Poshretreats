import client from "@/sanityClient";
import DealsContent from "./DealsContent"; // Import the DealsContent component
export const revalidate = 0;

export default async function Deals() {
  // Fetch deals from Sanity
  const query = `*[_type == "deal"]{
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    location,
    price,
    validUntil,
    dealTag,
    notableInclusions,
    notableExclusions,
    rating
  }`;

  const deals = await client.fetch(query);

  // Extract unique tags from deals
  const uniqueTags = [
    "All", // Add an "All" filter
    ...new Set(deals.map((deal) => deal.dealTag).filter(Boolean)),
  ];

  return <DealsContent deals={deals} uniqueTags={uniqueTags} />;
}
