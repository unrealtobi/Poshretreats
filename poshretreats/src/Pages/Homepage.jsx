import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardStack from "../Components/cardStack";
import RightCardStack from "../Components/rightCardStack";
import FeaturedTrips from "../Components/PageyComponents/FeaturedTrips";
import HowWeWork from "../Components/PageyComponents/HowWeWork";
import PinterestLayout from "../Components/PageyComponents/PinterestLayout";
import ReviewsSection from "../Components/PageyComponents/ReviewsSection";
import FAQs from "../Components/PageyComponents/FAQs";
import Blogs from "../Components/PageyComponents/Blogs";

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
      countUp(39, setReviews);
    }
  }, [statsInView, countsStarted]);

  const slides = [
    {
      id: 1,
      title: "POSH RETREATS",
      subtitle: "Travel Beyond Limits, Embrace the Extraordinary.",
      date: "September 2023",
      description: "Morocco: A Timeless Fusion of Tradition and Adventure",
      categories: ["Historical & Heritage", "City Escapes", "Adventures"],
      image: "/morrocogroup.jpeg",
    },
    {
      id: 2,
      title: "POSH RETREATS",
      subtitle: "Escape to Serenity and Elegance.",
      date: "Sun, Dec 15, 2024 - Sun, Dec 29, 2024",
      description: "Cancún: The Jewel of the Caribbean",
      categories: ["Private", "Relaxation", "Cultural"],
      image: "/20241222_113651.jpg",
    },
    {
      id: 3,
      title: "POSH RETREATS",
      subtitle: "Experience the Essence of Tranquility. ",
      date: "Wed, Dec 30, 2020 - Wed, Jan 5, 2020",
      description: "Thailand  Retreat ",
      categories: ["Wellness", " Friend Group", "Beach"],
      image: "/Thailand.jpeg",
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
            className="w-full h-[595px] rounded-xl animate-smoothOpening  object-cover "
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
                className="text-white font-bold order-1 md:order-2 leading-tight -translate-x-2 
             text-[50px] sm:text-[73px] md:text-[clamp(80px,11vw,160px)] 
             font-raleway relative"
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
                <button
                  onClick={() =>
                    window.open(
                      "https://app.tern.travel/public/forms/6OZArpyESYkxT9vf8rDf0g/responses/new",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="bg-white text-xs md:text-sm  text-customGreen px-6 md:px-6 py-2.5 md:py-2.5 rounded-lg font-medium"
                >
                  Book a Trip
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
          <div className="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-8 md:gap-16  border-gray-300">
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
          <h1 className="font-raleway md:text-4xl px-8 mt-2 md:font-semibold md:px-28 font-semibold  text-2xl">
            Empowering Explorers to Journey{" "}
            <span className="text-customGreen">Without Limits</span>
          </h1>
          <p className="font-roboto text-gray-700 md:text-base px-8 md:px-16 tablet:px-20 text-sm mt-4 md:mt-8">
            <span className="text-customGreen font-medium ">
              Book with Confidence.
            </span>{" "}
            {/* As ABTA members, you benefit from ABTA’s assistance and
            <a
              href="http://abta.com/go-travel/before-you-travel/travel-tips/financial-protection-4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline ml-0.5"
            >
              financial protection.
            </a>{" "}
            Many flights and flight-inclusive holidays on this website are
            protected by the ATOL scheme. However, ATOL protection does not
            cover all bookings—please check what applies to yours. If you
            receive an ATOL Certificate, ensure all trip components are listed;
            otherwise, those parts won’t be protected. Learn more at
            <a
              href="https://www.atol.org/about-atol/atol-certificates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 ml-0.5 underline"
            >
              www.atol.org.uk/ATOLCertificate
            </a> */}
            We are a Member of ABTA which means you have the benefit of ABTA’s assistance and Code of Conduct. All the package and Flight-Plus holidays we sell are covered by a scheme protecting your money if the supplier fails. Other services such as hotels or flights on their own may not be protected and you should ask us what protection is available.
          </p>

          <a
            href="/contact-poshretreats"
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
        <HowWeWork />
      </section>
      <div className="relative w-full overflow-hidden">
        <FeaturedTrips />
      </div>
      <div className="relative w-full overflow-hidden">
        <Blogs />
      </div>
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
        <ReviewsSection />
      </section>
      <PinterestLayout />
      <FAQs />
    </>
  );
};

export default HomePage;
