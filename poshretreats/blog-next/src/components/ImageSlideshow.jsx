"use client";

import Image from "next/image";

export default function ImageLayout({ images = [] }) {
  // Helper function to safely get the image URL
  const getImageUrl = (image) => image?.asset?.url || "/placeholder-image.png";

  // Handle the case of exactly 2 images
  if (images.length === 2) {
    return (
      <div className="w-full md:h-full h-[250px] gap-4 flex">
        {/* Left Image - rounded left corners */}
        <div className="relative w-1/2 h-full overflow-hidden rounded-l-xl">
          <Image
            src={getImageUrl(images[0])}
            alt={`Image 1`}
            fill
            className="object-cover"
          />
        </div>
        {/* Right Image - rounded right corners */}
        <div className="relative w-1/2 h-full overflow-hidden rounded-r-xl">
          <Image
            src={getImageUrl(images[1])}
            alt={`Image 2`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  // Handle the case of exactly 4 images (2x2)
  if (images.length === 4) {
    return (
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        {/* Top-left - rounded top-left corner */}
        <div className="relative overflow-hidden rounded-tl-xl">
          <Image
            src={getImageUrl(images[0])}
            alt={`Image 1`}
            fill
            className="object-cover"
          />
        </div>
        {/* Top-right - rounded top-right corner */}
        <div className="relative overflow-hidden rounded-tr-xl">
          <Image
            src={getImageUrl(images[1])}
            alt={`Image 2`}
            fill
            className="object-cover"
          />
        </div>
        {/* Bottom-left - rounded bottom-left corner */}
        <div className="relative overflow-hidden rounded-bl-xl">
          <Image
            src={getImageUrl(images[2])}
            alt={`Image 3`}
            fill
            className="object-cover"
          />
        </div>
        {/* Bottom-right - rounded bottom-right corner */}
        <div className="relative overflow-hidden rounded-br-xl">
          <Image
            src={getImageUrl(images[3])}
            alt={`Image 4`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  // If it's neither 2 nor 4 images, you can return null or handle another way
  return null;
}
