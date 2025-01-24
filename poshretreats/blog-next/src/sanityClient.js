import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "hh4lwx39", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name (usually 'production')
  useCdn: true, // Enable CDN for faster, cached responses
  apiVersion: "2023-01-01", // Use the latest Sanity API version
});

export default client;
