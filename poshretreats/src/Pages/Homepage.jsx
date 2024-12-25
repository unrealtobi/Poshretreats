import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardStack from "../Components/cardStack";
import RightCardStack from "../Components/rightCardStack";
import FeaturedTrips from "../Components/PageyComponents/FeaturedTrips";
import HowWeWork from "../Components/PageyComponents/HowWeWork";
import PinterestLayout from "../Components/PageyComponents/PinterestLayout";
import ReviewsSection from "../Components/PageyComponents/ReviewsSection";
import FAQs from "../Components/PageyComponents/FAQs";

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
      <section className="relative bg-white w-full h-full sm:translate-y-[74px]  md:translate-y-[85px] translate-y-[71px] md:px-4 px-1 overflow-hidden">
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
            className={`absolute inset-0 flex flex-col justify-between px-4 md:px-12 sm:px-6  pb-4 md:pb-0 text-white transition-opacity duration-1000 ${
              animateText ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Text Overlay */}
            <div className="flex flex-col md:items-start sm:items-start  text-center mt-16 md:mt-24 sm:mt-20  z-10">
              <h2 className="text-xs md:text-sm md:px-0 order-2 md:order-1 sm:order-1 sm:px-0  px-8 font-medium">
                {slides[currentSlide].subtitle}
              </h2>
              <h1
                className="text-white font-bold text-[50px] order-1 md:order-2 leading-tight -translate-x-2 md:text-9xl sm:text-[73px]  font-raleway relative"
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
            <div className="md:flex md:flex-col flex flex-col mb-10 md:mb-10 sm:mb-24 space-y-2 md:space-y-2">
              <p className="text-sm md:text-lg font-medium md:font-medium">
                {slides[currentSlide].date}
              </p>
              <p className="text-base md:text-2xl sm:text-xl  leading-tight font-semibold">
                {slides[currentSlide].description}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap md:max-w-96  gap-2">
                {slides[currentSlide].categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1 bg-gray-200 sm:font-medium  md:font-medium font-medium bg-opacity-30 backdrop-filter backdrop-blur-sm md:backdrop-blur-sm rounded-full text-xs md:text-sm text-white"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="md:flex md:items-center tablet:justify-between   justify-between mt-4">
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
        className="bg-customBg md:py-16 md:w-full z-10 md:mt-24 sm:mt-28 mt-24  pb-32 sm:pb-36 relative"
      >
        <div className="md:w-full w-auto">
          <div className="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-8 md:gap-16 md:border-t sm:border-t border-t border-gray-300">
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
        <div className="md:absolute md:bottom-0 -bottom-8 left-36 sm:left-48 absolute md:left-72 mb-6 ">
          <CardStack />
        </div>
        <div className="md:absolute md:bottom-0 -bottom-8 right-36 tablet:right-48 absolute md:right-72 mb-6 ml-4">
          <RightCardStack />
        </div>

        {/* About Us Section */}
        <div className="text-center  flex flex-col justify-center items-center md:px-[300px] md:py-5">
          <h2 className="md:text-base text-xs mt-8 font-roboto text-gray-500">
            ABOUT US
          </h2>
          <h1 className="font-raleway md:text-4xl px-8 mt-2 md:font-semibold md:px-20 font-semibold  text-2xl">
            Empowering Explorers to Journey{" "}
            <span className="text-customGreen">Without Limits</span>
          </h1>
          <p className="font-roboto text-gray-700 md:text-base px-8 md:px-0 tablet:px-20 text-sm mt-4 ">
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
        className="relative z-30 md:pb-16 pb-12 bg-customGreen"
        style={{
          backgroundImage: "url('/flowerpage.svg')", // Adjust the image path if needed
          //   backgroundSize: "cover",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="">
          <div className="md:pt-16 pt-12 md:px-80 sm:px-40  px-10 text-white text-center">
            <h2 className="  font-roboto md:font-light text-gray-200 font-light  md:text-lg">
              TRIPS
            </h2>
            <h1 className="md:text-4xl font-raleway mt-2 text-2xl  font-semibold  md:font-medium">
              Your Way to <span className="text-customPink">Explore</span>: Solo
              Retreats or Shared Experiences
            </h1>
          </div>
          <div className="md:justify-between md:px-20 px-4 sm:px-10 mt-10   md:mt-14 md:flex">
            
            {/* Private Trips Card */}
            <div className="bg-white md:w-[510px] md:block hidden sm:hidden rounded-xl md:h-72 md:flex relative overflow-hidden group">
              <div className="flex-1 flex flex-col justify-between p-6">
                <div className="">
                  <h3 className="text-2xl font-roboto font-medium">
                    Private Trips
                  </h3>
                  <p className="text-gray-600 px-5 font-robot text-sm -translate-x-5">
                    Let our expert trip planners craft your mind-blowing private
                    getaway.
                  </p>
                </div>

                <a
                  href="/contact-us"
                  className="relative bg-customGreen text-white md:px-8 md:py-3 font-roboto text-xs rounded-lg mt-4 self-start md:mt-8 font-medium px-6 py-2.5 shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen transition-colors duration-300 ease-in-out group/button"
                >
                  <span className="relative z-10 whitespace-nowrap">
                    Start Exploring
                  </span>
                  {/* Left Flower */}
                  <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover/button:translate-x-10 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
                  {/* Right Flower */}
                  <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover/button:-translate-x-10 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
                </a>
              </div>

              {/* Image Section */}
              <div className="flex-1 relative overflow-hidden z-10 transition-transform duration-300 ease-in-out group-hover:scale-125">
                <img
                  src="https://res.cloudinary.com/dtaqusjav/image/upload/v1732268332/side-view-woman-wearing-vacation-outfit_dlrmqm.png"
                  alt="Private Trips"
                  className="absolute bottom-0 right-8 w-auto h-full object-cover transition-transform duration-400 ease-[cubic-bezier(0.3, 1.1, 0.6, 1.0)]"
                />
              </div>

              {/* Pink Section */}
              <div
                className="absolute top-0 right-0 bg-customPink h-2/3 w-1/3 z-0 transition-all duration-400 ease-[cubic-bezier(0.3, 1.1, 0.6, 1.0)] group-hover:h-[90%] group-hover:w-[55%]"
                style={{ clipPath: "polygon(0 0, 100% 0, 140% 100%)" }}
              ></div>
            </div>

            {/* Group Trips Card */}
            <div className="bg-white md:w-[510px] md:block hidden rounded-xl md:h-72 md:flex sm:hidden relative overflow-hidden group">
              <div className="flex-1 flex flex-col justify-between p-6">
                <div className="">
                  <h3 className="text-2xl font-roboto font-medium">
                    Group Trips
                  </h3>
                  <p className="text-gray-600 px-5 font-robot text-sm -translate-x-5">
                    Join our immersive group trips and explore with like-minded
                    travelers.
                  </p>
                </div>

                <a
                  href="/contact-us"
                  className="relative bg-customGreen text-white md:px-8 md:py-3 font-roboto text-xs rounded-lg mt-4 self-start md:mt-8 font-medium px-6 py-2.5 shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen transition-colors duration-300 ease-in-out group/button"
                >
                  <span className="relative z-10 whitespace-nowrap">
                    Start Exploring
                  </span>
                  {/* Left Flower */}
                  <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover/button:translate-x-10 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
                  {/* Right Flower */}
                  <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover/button:-translate-x-10 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
                </a>
              </div>

              {/* Image Section */}
              <div className="flex-1 relative overflow-hidden z-10 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="https://res.cloudinary.com/dtaqusjav/image/upload/v1732268328/side-view-smiley-people-taking-selfie_drrst0.png"
                  alt="Group Trips"
                  className="absolute -bottom-4 right-0 w-auto h-full object-cover transition-transform duration-400 ease-[cubic-bezier(0.3, 1.1, 0.6, 1.0)]"
                />
              </div>

              {/* Pink Section */}
              <div
                className="absolute top-0 right-0 bg-customPink h-2/3 w-1/3 z-0 transition-all duration-400 ease-[cubic-bezier(0.3, 1.1, 0.6, 1.0)] group-hover:h-[90%] group-hover:w-[55%]"
                style={{ clipPath: "polygon(0 0, 100% 0, 140% 100%)" }}
              ></div>
            </div>
            <div className="flex sm:flex sm:flex-row flex-col gap-8">
              {/* mobile view card */}
              <div className="bg-white md:w-[510px] md:hidden block h-96 md:rounded-xl rounded-xl  md:h-72 md:flex flex flex-col md:relative relative overflow-hidden group">
                <div className="md:flex-1 flex-1 flex flex-col md:flex md:flex-col md:justify-between md:p-6 p-4">
                  <div className="z-50">
                    <h3 className="text-2xl font-roboto font-medium">
                      Private Trips
                    </h3>
                    <p className="text-gray-600 md:px-5 font-roboto text-sm  md:-translate-x-5">
                      Let our expert trip planners craft your mind-blowing
                      private getaway.
                    </p>
                  </div>

                  <a
                    href="/contact-us"
                    className="relative bg-customGreen text-white md:px-8 md:py-3  font-roboto text-sm rounded-lg mt-4 self-start md:mt-8 font-medium px-10 py-3 shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen "
                  >
                    <span className="relative z-10 whitespace-nowrap">
                      Start Exploring
                    </span>
                    {/* Left Flower */}
                    <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover/button:translate-x-10 group-hover/button:opacity-100 group-hover/button:scale-110 "></div>
                    {/* Right Flower */}
                    <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover/button:-translate-x-10 group-hover/button:opacity-100 group-hover/button:scale-110 "></div>
                  </a>
                </div>

                {/* Image Section */}
                <div className="md:flex-1 flex-1 md:relative relative md:overflow-hidden md:z-10 ">
                  <img
                    src="https://res.cloudinary.com/dtaqusjav/image/upload/v1732268332/side-view-woman-wearing-vacation-outfit_dlrmqm.png"
                    alt="Private Trips"
                    className="md:absolute absolute md:bottom-0 bottom-0 md:right-8 right-1/2 object-cover translate-x-1/2 md:w-auto w-72 md:h-full h-full md:object-cover "
                  />
                </div>

                {/* Pink Section */}
                <div
                  className="absolute top-0 right-0 bg-customPink md:h-2/3 h-2/3 md:w-1/3 w-1/2 z-0"
                  style={{ clipPath: "polygon(0 0, 100% 0, 140% 100%)" }}
                ></div>
              </div>
              {/* mobile group trip  */}
              <div className="bg-white md:w-[510px] md:hidden block h-96 md:rounded-xl rounded-xl  md:h-72 md:flex flex flex-col md:relative relative overflow-hidden group">
                <div className="md:flex-1 flex-1 flex flex-col md:flex md:flex-col md:justify-between md:p-6 p-4">
                  <div className="z-50">
                    <h3 className="text-2xl font-roboto font-medium">
                      Group Trips
                    </h3>
                    <p className="text-gray-600 md:px-5 font-roboto text-sm  md:-translate-x-5">
                      Join our immersive group trips and explore with
                      like-minded travelers.
                    </p>
                  </div>

                  <a
                    href="/contact-us"
                    className="relative bg-customGreen text-white md:px-8 md:py-3  font-roboto text-sm rounded-lg mt-4 self-start md:mt-8 font-medium px-10 py-3 shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen "
                  >
                    <span className="relative z-10 whitespace-nowrap">
                      Start Exploring
                    </span>
                    {/* Left Flower */}
                    <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover/button:translate-x-10 group-hover/button:opacity-100 group-hover/button:scale-110 "></div>
                    {/* Right Flower */}
                    <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover/button:-translate-x-10 group-hover/button:opacity-100 group-hover/button:scale-110 "></div>
                  </a>
                </div>

                {/* Image Section */}
                <div className="md:flex-1 flex-1 md:relative relative md:overflow-hidden md:z-10 ">
                  <img
                    src="https://res.cloudinary.com/dtaqusjav/image/upload/v1732268328/side-view-smiley-people-taking-selfie_drrst0.png"
                    alt="Group Trips"
                    className="md:absolute absolute md:bottom-0 bottom-0 md:right-8 right-1/2 object-cover translate-x-1/2 md:w-auto w-80 md:h-full h-full md:object-cover"
                  />
                </div>

                {/* Pink Section */}
                <div
                  className="absolute top-0 right-0 bg-customPink md:h-2/3 h-2/3 md:w-1/3 w-1/2 z-0"
                  style={{ clipPath: "polygon(0 0, 100% 0, 140% 100%)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedTrips/>
      <HowWeWork/>
      <PinterestLayout/>
      <ReviewsSection/>
      <FAQs/>
    </>
  );
};

export default HomePage;
