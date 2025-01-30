import React from "react";
import { useState, useRef, useEffect } from "react";
const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dtaqusjav/image/upload/v1732285988/20240612_093815_wf1xgd.jpg",
    alt: "Image 1",
    tags: ["Hot Air Balooning"],
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dtaqusjav/image/upload/v1732285992/IMG_0829_1_qyoyzy.jpg",
    alt: "Image 2",
    tags: ["ATV Tour"],
  },
  {
    id: 3,
    src: "/Jacknb.jpeg",
    alt: "Image 3",
    tags: ["Souk Stroll"],
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dtaqusjav/image/upload/v1732285976/dd04f197-0bff-475a-b4c9-0a0f5fa66e8d_w9j5th.jpg",
    alt: "Image 4",
    tags: ["Jungle Swing"],
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dtaqusjav/image/upload/v1732285987/20240611_191633_xmqm9a.jpg",
    alt: "Image 5",
    tags: ["and many more..."],
  },
];

const PinterestLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.scrollTo({
      left: index * 300, // Adjust based on the image width
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    const index = Math.round(slider.scrollLeft / 300); // Calculate the current slide
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-customBg md:block hidden sm:hidden  md:pt-20">
        <div
          className="grid grid-cols-3 gap-6 px-4 md:px-12"
          style={{ gridAutoRows: "minmax(150px, auto)" }}
        >
          {/* First Image */}
          <div className="relative rounded-lg h-96 overflow-hidden bg-gray-200">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {images[0].tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full backdrop-blur-md shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Second Image */}
          <div className="relative rounded-xl overflow-hidden bg-gray-200">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {images[1].tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full backdrop-blur-md shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Third Image */}
          <div className="relative rounded-xl overflow-hidden bg-gray-200">
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {images[2].tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full backdrop-blur-md shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Fourth Image */}
          <div className="relative rounded-xl h-[529px] -translate-y-32 overflow-hidden bg-gray-200">
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {images[3].tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1  bg-opacity-20 text-white text-xs rounded-full backdrop-blur-md shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Fifth Image */}
          <div className="relative rounded-xl h-[400px] overflow-hidden bg-gray-200 col-span-2 row-span-1">
            <img
              src={images[4].src}
              alt={images[4].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {images[4].tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full backdrop-blur-md shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-customBg md:hidden mb-14  block sm:block py-20 sm:py-16 px-4 relative">
        <div
          ref={sliderRef}
          className="relative w-full overflow-x-auto scrollbar-hide flex gap-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
        >
          {/* Image Slider */}
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`w-[290px] sm:w-[420px] h-96 sm:h-[500px] flex-shrink-0 relative ${
                currentSlide === index ? "scale-100" : "scale-95"
              } transition-transform duration-300 ease-in-out`}
              style={{ scrollSnapAlign: "center" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {image.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 sm:py-2 py-1.5 bg-white font-roboto bg-opacity-20 text-white text-xs sm:text-base rounded-full backdrop-blur-md shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute -bottom-3  left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-customGreen" : "bg-gray-100"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PinterestLayout;
