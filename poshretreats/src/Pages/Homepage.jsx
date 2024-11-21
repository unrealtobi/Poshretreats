import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardStack from "../Components/cardStack";
import RightCardStack from "../Components/rightCardStack";

const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isInView];
};
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [countsStarted, setCountsStarted] = useState(false);

  const [satisfaction, setSatisfaction] = useState(0);
  const [guidedTours, setGuidedTours] = useState(0);
  const [destinations, setDestinations] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (statsInView && !countsStarted) {
      setCountsStarted(true);
      countUp(98, setSatisfaction);
      countUp(30, setGuidedTours);
      countUp(35, setDestinations);
      countUp(120, setReviews);
    }
  }, [statsInView, countsStarted]);

  const slides = [
    {
      id: 1,
      title: "POSH RETREATS",
      subtitle: "Travel Beyond Limits, Embrace the Extraordinary.",
      date: "Sun, Aug 24, 2025 - Thu, Aug 28, 2025",
      description: "Italy 2025",
      categories: ["Historical & Heritage", "City Escapes", "Adventures"],
      image:
        "https://www.travelandleisure.com/thmb/ZRRd3HEHr_QVT2i8Oa25p8MLUws=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/northeast-aegean-islands-samos-greece-GREEKISLES1216-eb7d5f258927481da453ceda6e9afcce.jpg",
    },
    {
      id: 2,
      title: "POSH RETREATS",
      subtitle: "Escape to Serenity and Elegance.",
      date: "Fri, Sep 15, 2025 - Tue, Sep 19, 2025",
      description: "Santorini: The Jewel of the Aegean Sea",
      categories: ["Food & Gastronomy", "Relaxation", "Cultural"],
      image:
        "https://www.travelandleisure.com/thmb/9PKMMxIL9W7tzjJiyIrFJY5rwNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/london-uk-townhomes-lead-LONDONTG0521-81fb4f991a1e4d0d9153d89444838094.jpg",
    },
    {
      id: 3,
      title: "POSH RETREATS",
      subtitle: "Experience the Essence of Tranquility. ",
      date: "Mon, Oct 1, 2025 - Fri, Oct 5, 2025",
      description: "Bali Bliss Retreat ",
      categories: ["Wellness", "Adventure", "Cultural", "Food & Gastronomy"],
      image:
        "https://images.goway.com/production/styles/hero_s1_3xl/s3/hero_image/A%C3%AFt%20Ben%20Haddou_Morocco_iStock-502546130%20%281%29.jpg?VersionId=rPGLfk7LO_RjIE3t_Vu.ifpSHjR8HAS0&h=1a7fbb6b&itok=e2nJEZUQ",
    },
  ];

  const SLIDE_DURATION = 5000; // 5 seconds

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [slides.length]);
  useEffect(() => {
    // Trigger text animation after 2 seconds
    const textAnimationTimeout = setTimeout(() => {
      setAnimateText(true);
    }, 2000);

    return () => clearTimeout(textAnimationTimeout);
  }, []);
  const countUp = (target, setValue) => {
    const duration = 3000; // 5 seconds
    const intervalTime = 30; // Update every 30ms
    const steps = Math.ceil(duration / intervalTime);
    let current = 0;

    const step = target / steps;

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.ceil(current));
      }
    }, intervalTime);
  };

  return (
    <>
      {" "}
      <section className="relative bg-white w-full h-full sm:translate-y-[74px] md:translate-y-[85px] translate-y-[71px] md:px-4 px-1 overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={slides[currentSlide].image}
            alt="Slide Background"
            className="w-full h-[595px] rounded-xl animate-smoothOpening object-cover "
          />
          <div className="absolute inset-0 animate-smoothOpening bg-black bg-opacity-40 rounded-xl"></div>

          {/* Content Overlay Section */}
          <div
            className={`absolute inset-0 flex flex-col justify-between px-4 md:px-12 sm:px-6 pb-4 md:pb-0 text-white transition-opacity duration-1000 ${
              animateText ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Text Overlay */}
            <div className="flex flex-col md:items-start sm:items-start text-center mt-16 md:mt-24 sm:mt-20 z-10">
              <h2 className="text-xs md:text-sm md:px-0 order-2 md:order-1 sm:order-1 sm:px-0 px-8 font-medium">
                {slides[currentSlide].subtitle}
              </h2>
              <h1
                className="text-white font-bold text-[50px] order-1 md:order-2 leading-tight -translate-x-2 md:text-[138px] sm:text-[73px]  font-raleway relative"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 100%)",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 100%)",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                }}
              >
                {slides[currentSlide].title}
              </h1>
            </div>

            {/* Slide Info Section */}
            <div className="md:flex md:flex-col flex flex-col mb-10 md:mb-5 sm:mb-24 space-y-2 md:space-y-2">
              <p className="text-sm md:text-lg font-medium md:font-medium">
                {slides[currentSlide].date}
              </p>
              <p className="text-base md:text-2xl sm:text-xl leading-tight font-semibold">
                {slides[currentSlide].description}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap md:max-w-96  gap-2">
                {slides[currentSlide].categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1 bg-gray-200 sm:font-medium md:font-medium font-medium bg-opacity-30 backdrop-filter backdrop-blur-sm md:backdrop-blur-sm rounded-full text-xs md:text-sm text-white"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="md:flex md:items-center justify-between mt-4">
                {/* Join Button */}
                <button className="bg-white text-xs md:text-sm  text-customGreen px-6 md:px-6 py-2.5 md:py-2.5 rounded-lg font-medium">
                  Join this Trip
                </button>

                {/* Arrows and Progress Bar */}
                <div className="flex items-center translate-y-6  md:translate-y-0 sm:translate-y-12 space-x-3  md:space-x-4">
                  <button
                    onClick={prevSlide}
                    className="hover:bg-opacity-20 rounded-full md:p-3 p-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white transition"
                  >
                    <FaChevronLeft className="md:text-lg text-sm text-gray-100" />
                  </button>
                  <div className="flex items-center space-x-2">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        className="md:h-1 h-1 md:w-8 sm:w-8 sm:h-1 w-5 bg-gray-200 bg-opacity-55 rounded-full overflow-hidden"
                      >
                        <div
                          className={`h-1 bg-white rounded-full ${
                            index === currentSlide ? "animate-progress" : ""
                          }`}
                          style={{
                            width: index === currentSlide ? "100%" : "0%",
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="hover:bg-opacity-20 rounded-full md:p-3 p-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white transition"
                  >
                    <FaChevronRight className="md:text-lg text-sm text-gray-100" />
                  </button>
                </div>
              </div>
            </div>

            {/* Button and Arrows Section */}
          </div>
        </div>
      </section>
      {/* stats section  */}
      <section
        ref={statsRef}
        className="bg-white md:py-16 z-10 md:mt-24 sm:mt-16 mt-20  pb-32 sm:pb-36 relative"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-8 md:gap-4 md:border-t sm:border-t border-gray-300">
            {/* Statistic Item 1 */}
            <div className="flex flex-col items-center text-center border-r border-gray-300 last:border-r-0 ">
              <h3 className="md:text-6xl sm:text-4xl text-3xl font-bold  font-raleway">
                {satisfaction}
                <span className="md:text-5xl sm:text-4xl text-3xl">%</span>
              </h3>
              <p className="text-gray-700 text-xs md:text-sm sm:text-sm font-roboto mt-2">
                Satisfaction Rate
              </p>
            </div>

            {/* Statistic Item 2 */}
            <div className="flex flex-col items-center text-center border-r border-gray-300 last:border-r-0">
              <h3 className="md:text-6xl sm:text-4xl text-3xl font-bold font-raleway">
                {guidedTours}
                <span className="md:text-5xl sm:text-4xl text-3xl">+</span>
              </h3>
              <p className="text-gray-700 text-xs md:text-sm sm:text-sm font-roboto mt-2">
                Guided Tours
              </p>
            </div>

            {/* Statistic Item 3 */}
            <div className="flex flex-col items-center text-center border-r border-gray-300 last:border-r-0">
              <h3 className="md:text-6xl sm:text-4xl text-3xl font-bold font-raleway">
                {destinations}
                <span className="md:text-5xl sm:text-4xl text-3xl">+</span>
              </h3>
              <p className="text-gray-700 text-xs md:text-sm sm:text-sm font-roboto mt-2">
                Destinations
              </p>
            </div>

            {/* Statistic Item 4 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="md:text-6xl sm:text-4xl text-3xl font-bold font-raleway">
                {reviews}
                <span className="md:text-5xl sm:text-4xl text-3xl">+</span>
              </h3>
              <p className="text-gray-700 text-xs md:text-sm sm:text-sm font-roboto mt-2">
                Positive Reviews
              </p>
            </div>
          </div>
        </div>

        {/* CardStack Component */}
        <div className="md:absolute md:bottom-0 -bottom-8 left-32 sm:left-48 absolute md:left-72 mb-6 ">
          <CardStack />
        </div>
        <div className="md:absolute md:bottom-0 -bottom-8 right-32 sm:right-48 absolute md:right-72 mb-6 ml-4">
          <RightCardStack />
        </div>

        {/* About Us Section */}
        <div className="text-center flex flex-col justify-center items-center md:px-[300px] md:py-5">
          <h2 className="md:text-base text-xs mt-8 font-roboto text-gray-500">
            ABOUT US
          </h2>
          <h1 className="font-raleway md:text-4xl mt-2 md:font-semibold text-xl">
            Empowering Explorers to Journey{" "}
            <span className="text-customGreen">Without Limits</span>
          </h1>
          <p className="font-roboto text-gray-700 md:text-base px-4 md:px-0 sm:px-20 text-xs mt-4 ">
            Posh Retreats emerged from a profound passion for exploring the
            world, transcending the barriers of passport privilege. Our
            philosophy rejects the limitations of waiting for travel companions
            and instead champions the spirit of action.
          </p>
          <a
            href="/contact-us"
            className="relative  w-32 md:mt-8 mt-3 bg-customGreen md:text-sm  text-xs font-roboto font-medium text-white px-6 md:py-3 py-2.5 rounded-md shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen group hover:bg- transition-colors duration-300 ease-in-out"
          >
            <span className="relative z-10">Learn More</span>
            {/* Left Flower */}
            <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
            {/* Right Flower */}
            <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:-translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
          </a>
        </div>
      </section>
      <section
        className="relative z-30 pb-96 bg-customGreen"
        style={{
          backgroundImage: "url('/flowerpage.svg')", // Adjust the image path if needed
          //   backgroundSize: "cover",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="">
          <div className="pt-16">
            <h2 className="text-white text-center  font-roboto font-light text-lg">
              TRIPS
            </h2>
            <h1 className="text-4xl">
                Your Way to Explore: Solo Trips or Shared Experiences
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
