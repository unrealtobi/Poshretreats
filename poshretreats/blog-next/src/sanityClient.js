import { createClient } from '@sanity/client';


const client = createClient({
  projectId: "hh4lwx39", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name (usually 'production')
  useCdn: false, // Enable CDN for faster, cached responses
  apiVersion: "2023-01-01", // Use the latest Sanity API version
});

export default client;
