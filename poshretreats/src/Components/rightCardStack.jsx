import React, { useState, useEffect } from "react";

const RightCardStack = () => {
  const images = [
    "https://res.cloudinary.com/dtaqusjav/image/upload/v1732201821/IMG_2462_htwhop.jpg", // Bottom card
    "https://res.cloudinary.com/dtaqusjav/image/upload/v1732202076/IMG_0718_jnceq5.jpg", // Middle card
    "https://res.cloudinary.com/dtaqusjav/image/upload/v1732201826/IMG_2976_zvzk90.jpg", // Top card (first to animate, no rotation)
  ];

  const [animate, setAnimate] = useState([false, false, false]);
  const [inView, setInView] = useState(false);

  // Intersection Observer to trigger animations when in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const cardStack = document.getElementById("rightCardStack");
      const rect = cardStack.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      // Sequential animation triggers
      const timers = [
        setTimeout(() => setAnimate((prev) => [false, false, true]), 0), // Top card (pops out first)
        setTimeout(() => setAnimate((prev) => [false, true, true]), 500), // Middle card (animates to its degree)
        setTimeout(() => setAnimate((prev) => [true, true, true]), 1000), // Bottom card (animates to its degree)
      ];
      return () => timers.forEach((timer) => clearTimeout(timer));
    }
  }, [inView]);

  return (
    <div
      id="rightCardStack"
      className="relative flex justify-center items-center"
    >
      {images.map((image, index) => {
        // Card styles for the right-side stack
        const styles = [
          // Bottom card: Rotated and farther back
          "z-10 transform scale-90 md:rotate-[20deg] rotate-[20deg] md:-translate-y-6 md:h-[400px] h-[200px] md:w-[300px] w-[130px] md:translate-x-[80px] translate-x-[50px] -translate-y-[10px]",
          // Middle card: Less rotated
          "z-20 transform scale-90 md:rotate-[19deg] rotate-[10deg] md:h-[350px] h-[250px] w-[120px] md:translate-x-[50px]  md:w-[250px] md:-translate-y-7 translate-x-[40px] -translate-y-[10px]",
          // Top card: No rotation (first to pop out)
          "z-30 transform scale-100 rotate-0 translate-x-8 md:w-[250px] w-[100px] translate-y-0",
        ];

        // Animation classes
        const animations = [
          animate[0] // Bottom card
            ? "transition-transform duration-[1.2s] ease-in-out"
            : "translate-y-[100%] opacity-0", // Starts hidden off-screen

          animate[1] // Middle card
            ? "transition-transform duration-[1.2s] ease-in-out"
            : "translate-y-[100%] opacity-0", // Starts hidden off-screen

          animate[2] // Top card (pop out first)
            ? "transition-transform duration-[1.2s] ease-in-out translate-y-0 opacity-100"
            : "translate-y-[100%] opacity-0", // Starts hidden off-screen
        ];

        return (
          <div
            key={index}
            className={`absolute md:w-[200px] sm:w-[180px]  sm:h-[200px] md:h-[290px] h-[150px] w-[100px] bg-white border-white border-4 md:border-8 shadow-2xl overflow-hidden ${styles[index]} ${animations[index]}`}
          >
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="w-full h-full object-cover md:-translate-y-20 -translate-y-16"
            />
          </div>
        );
      })}
    </div>
  );
};

export default RightCardStack;
