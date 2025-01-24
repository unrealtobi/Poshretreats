import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "hh4lwx39", // Replace with your Sanity project ID
  dataset: "production", // Or your dataset name
  useCdn: true, // `true` for faster, cached responses in production
  apiVersion: "2023-01-01", // Use a recent API version
});

export default client;
