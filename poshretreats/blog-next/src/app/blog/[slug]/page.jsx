import client from "@/sanityClient";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

// Configure the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
function urlFor(source) {
  return builder.image(source);
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  // Fetch the blog post data based on the slug
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    body,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    readTime,
    tag
  }`;

  const blogPost = await client.fetch(query, { slug });

  // Handle the case where the slug does not match any post
  if (!blogPost) {
    return (
      <div className="px-8 md:py-20 sm:px-20 bg-customBg min-h-screen">
        <h1 className="text-4xl text-center mt-20">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="px-12 sm:px-20 md:py-32 bg-customBg min-h-screen">
      {/* Blog Header */}
      <div className="mb-12 flex items-center">
        {blogPost.mainImage?.asset && (
          <div className="relative w-[700px]">
            <Image
              src={urlFor(blogPost.mainImage.asset).url()}
              alt={blogPost.title}
              width={1200}
              height={600}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        )}
        <div className="px-12 flex-1">
          <p className="text-sm text-gray-600 font-roboto mt-2">
            {new Date(blogPost.publishedAt).toLocaleDateString()} • {blogPost.readTime}
          </p>
          <h1 className="text-5xl font-semibold font-raleway mt-6">
            {blogPost.title}
          </h1>
          <p className="text-gray-700 text-md font-roboto mt-4">
            {blogPost.description}
          </p>
        </div>
      </div>

      {/* Blog Body */}
      <div>

      <div className="prose w-[890px]   text-gray-800">
        <PortableText
          value={blogPost.body}
          components={{
            // Custom rendering for images
            types: {
              image: ({ value }) => {
                if (!value?.asset) return null; // Avoid rendering if no asset exists

                return (
                  <div className="my-6">
                    <Image
                      src={urlFor(value.asset).url()}
                      alt={value.alt || "Image"}
                      width={550}
                      height={500}
                      className="w-[890px] object-cover  rounded-xl h-[600px] "
                    />
                  </div>
                );
              },
            },
            // Custom rendering for marks (e.g., links)
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
            // Optional: Handle custom block styles
            block: {
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold my-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-semibold my-4">{children}</h2>
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
      <div>
        
      </div>
      </div>
    </div>
  );
}
