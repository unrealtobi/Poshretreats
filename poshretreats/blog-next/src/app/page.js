import client from "@/sanityClient";
import HomeContent from "./blog/HomeContent"; // <-- import the Client Component
import Head from "next/head";
export default async function Home() {
  // 1. Fetch blog posts from Sanity on the server
  const query = `*[_type == "post"]{
    title,
    slug,
    description,
    mainImage {
      asset->{
        url
      }
    },
    publishedAt,
    readTime,
    tag
  }`;
  const posts = await client.fetch(query);

  // 2. Extract unique tags from the posts
  const uniqueTags = [
    "All", // Add an "All" filter at the start
    ...new Set(posts.map((post) => post.tag).filter(Boolean)),
  ];

  // 3. Pass data to the client component
  return (
    <>
      <Head>
        <title>Posh Retreats Blogs</title>
        <meta
          name="description"
          content="Explore inspiring travel stories, tips, and more on Posh Retreats Blogs."
        />
        <meta property="og:title" content="Posh Retreats Blogs" />
        <meta
          property="og:description"
          content="Explore inspiring travel stories, tips, and more on Posh Retreats Blogs."
        />
        <meta property="og:image" content="/default-blog-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Posh Retreats Blogs" />
        <meta
          name="twitter:description"
          content="Explore inspiring travel stories, tips, and more on Posh Retreats Blogs."
        />
        <meta name="twitter:image" content="/default-blog-image.jpg" />
      </Head>
      <HomeContent posts={posts} uniqueTags={uniqueTags} />
    </>
  );
}
