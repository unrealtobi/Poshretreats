import React, { useState, useEffect } from "react";

const CardStack = () => {
  const images = [
    "https://res.cloudinary.com/dtaqusjav/image/upload/v1732201828/IMG_9760_gv6bih.jpg",
    "https://res.cloudinary.com/dtaqusjav/image/upload/v1732201821/IMG_2462_htwhop.jpg", 
    "https://res.cloudinary.com/dtaqusjav/image/upload/v1732201825/IMG_0829_pvd6rw.jpg",
  ];

  const [animate, setAnimate] = useState([false, false, false]);
  const [inView, setInView] = useState(false);

  // Intersection Observer to trigger animations when in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const cardStack = document.getElementById("cardStack");
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
        setTimeout(() => setAnimate((prev) => [false, false, true]), 0), 
        setTimeout(() => setAnimate((prev) => [false, true, true]), 500), 
        setTimeout(() => setAnimate((prev) => [true, true, true]), 1000), 
      ];
      return () => timers.forEach((timer) => clearTimeout(timer));
    }
  }, [inView]);

  return (
    <div id="cardStack" className="relative flex justify-center items-center">
      {images.map((image, index) => {
        // Card styles
        const styles = [
          // Bottom card: Rotated and farther back
          "z-10 transform scale-90 md:rotate-[-20deg] rotate-[-20deg] md:h-[400px] h-[200px] md:w-[300px] w-[130px] md:translate-x-[-80px] translate-x-[-50px] md:-translate-y-6  -translate-y-[10px]",
          // Middle card: Less rotated
          "z-20 transform scale-90 md:rotate-[-19deg] md:-translate-y-7 rotate-[-10deg] md:h-[350px] md:w-[250px] h-[250px] w-[120px] md:translate-x-[-50px] translate-x-[-40px] -translate-y-[10px]",
          // Top card: No rotation (first to pop out)
          "z-30 transform scale-100 rotate-0 -translate-x-8 md:w-[250px]  w-[100px] translate-y-0",
        ];

       
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
            className={`absolute md:w-[200px] sm:w-[180px] md:h-[290px] sm:h-[200px] h-[150px] w-[100px]  bg-white border-white border-4 md:border-8 shadow-2xl overflow-hidden ${styles[index]} ${animations[index]}`}
          >
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="w-full h-full object-cover sm:-translate-y-1 -translate-y-4"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardStack;
