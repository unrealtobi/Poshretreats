import React, { useEffect, useState } from "react";
import client from "../../../sanityClient"; // Make sure the path is correct

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Query Sanity for blog posts
    const fetchPosts = async () => {
      try {
        console.log("Fetching posts from Sanity...");
        const query = `*[_type == "post"]{
          title,
          slug,
          description,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`;
        const data = await client.fetch(query);
        console.log("Fetched posts:", data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length === 0 && <p>No posts found or still loading...</p>}
      {posts.map((post, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{post.title}</h2>
          {post.mainImage?.asset?.url && (
            <img src={post.mainImage.asset.url} alt={post.title} width="300" />
          )}
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
