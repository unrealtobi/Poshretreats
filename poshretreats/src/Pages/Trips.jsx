import React from "react";
import { useEffect, useState, useRef } from "react";
import HowWeWork from "../Components/PageyComponents/HowWeWork";
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
const Trips = () => {
  const [animateText, setAnimateText] = useState(false);
  const [countsStarted, setCountsStarted] = useState(false);
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const [satisfaction, setSatisfaction] = useState(0);
  const [guidedTours, setGuidedTours] = useState(0);
  const [destinations, setDestinations] = useState(0);
  const [reviews, setReviews] = useState(0);
  useEffect(() => {
    if (statsInView && !countsStarted) {
      setCountsStarted(true);
      countUp(98, setSatisfaction);
      countUp(30, setGuidedTours);
      countUp(35, setDestinations);
      countUp(39, setReviews);
    }
  }, [statsInView, countsStarted]);
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
      <div className="px-2 md:px-0">
        <section
          className="relative rounded-xl  bg-cover bg-center translate-y-20 md:translate-y-0 bg-no-repeat h-[471px] md:h-screen"
          style={{
            backgroundImage:
              "url('/tripbg.png')",
          }}
        >
          <div className="relative flex items-center justify-center h-full text-white text-center">
            {/* Text Content (Immediately animates in) */}
            <h1
              className="
            z-10
            text-5xl md:text-[180px] sm:text-[100px]  /* 10xl on larger screens, 6xl on smaller */
            font-roboto mb-14 md:mb-0
            font-bold
            animate-fade-in-up     /* starts immediately, no delay */
          "
            >
              PRIVATE TRIPS
            </h1>

            {/* Image (starts animation 2s later) */}
            <img
              src="/pirls.png"
              alt="Human Silhouette"
              className="
            absolute
            bottom-[0px] md:bottom-[0px]
            z-20
            w-[340px] sm:w-[370px] md:w-[500px]
            md:delay-[2s]             /* waits 2 seconds before animating */
            md:animate-bounce-up      /* bounce-up animation from below */
          "
            />
          </div>
        </section>
      </div>

      <section className="pb-12 md:py-2  py-36 bg-customBg">
        {/* Text section */}
        <div className="flex flex-col md:mt-24 justify-center items-center text-center md:space-y-4 space-y-2 md:px-[360px] sm:px-12 px-3">
          <h1 className="md:text-4xl  text-3xl font-raleway text-black font-semibold">
            Your Trip, Your Way
          </h1>
          <h2 className="font-roboto text-gray-700">
            Experience the freedom of a fully personalized trip. Whether you're
            traveling solo or with family, we take care of all the planning and
            bookings to match your vision. Say goodbye to the hassle and enjoy a
            stress-free, tailor-made adventure.
          </h2>
        </div>

        {/* Image layout */}
        <div className="max-w-screen-xl px-2 mx-auto mt-8 md:px-2 md:mt-12">
          {/* Grid wrapper */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
            {/* Small Images (4 Equal-Sized Images) */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 order-1 sm:order-1 md:order-2">
              <div className=" overflow-hidden">
                <img
                  className="w-full h-48 rounded-tl-xl md:rounded-t-none object-cover"
                  src="https://res.cloudinary.com/dtaqusjav/image/upload/v1737486382/photo_2025-01-21_20-05-06_l2qvr5.jpg"
                  alt="Placeholder 1"
                />
              </div>

              <div className=" overflow-hidden">
                <img
                  className="w-full h-48 md:rounded-tr-lg sm:rounded-tr-none rounded-tr-lg md:rounded-t-none object-cover"
                  src="https://res.cloudinary.com/dtaqusjav/image/upload/v1737459700/ef1786f7-7bdb-49e5-852f-23986cd49c2c_tzorhj.jpg"
                  alt="Placeholder 2"
                />
              </div>

              <div className=" overflow-hidden">
                <img
                  className="w-full h-48 sm:rounded-bl-xl object-cover"
                  src="https://res.cloudinary.com/dtaqusjav/image/upload/v1737459700/7414a882-414e-4598-968e-14d3225f7f02_icaqd6.jpg"
                  alt="Placeholder 3"
                />
              </div>

              <div className="bg-gray-200 md:rounded-r-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://res.cloudinary.com/dtaqusjav/image/upload/v1737461900/48F57B05-BAFB-4311-85C3-926AA1D10FC1_qyqdnf.jpg"
                  alt="Placeholder 4"
                />
              </div>
            </div>

            {/* Tall Image (Bottom on Mobile, Right on Small Screens, Left on Desktop) */}
            <div className="bg-yellow-200 md:rounded-tl-xl md:rounded-bl-xl rounded-b-lg md:rounded-b-none sm:rounded-b-none overflow-hidden sm:rounded-r-xl order-2 sm:order-2 md:order-1">
              <img
                className="w-full h-[399px] object-cover"
                src="https://res.cloudinary.com/dtaqusjav/image/upload/v1737459490/20240612_093655_e7zfcr.jpg"
                alt="Placeholder tall"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        ref={statsRef}
        className="bg-customBg md:py-12 md:w-full z-10 md:mt-0 sm:mt-0    pb-12 sm:pb-16 relative"
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
        <div className="flex justify-center mt-8 md:mt-16">
          <button
            onClick={() =>
              window.open(
                "https://app.tern.travel/public/forms/6OZArpyESYkxT9vf8rDf0g/responses/new",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="relative bg-customGreen text-sm font-roboto cursor-pointer font-medium text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg overflow-hidden hover:bg-customDarkGreen group hover:bg- transition-colors duration-300 ease-in-out"
          >
            <span className="relative z-10">Request a Trip</span>
            {/* Left Flower */}
            <div className="absolute top-1 -left-10 w-16 h-16 bg-[url('/flowerright.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
            {/* Right Flower */}
            <div className="absolute top-1 -right-10 w-16 h-16 bg-[url('/flowerleft.svg')] bg-contain bg-no-repeat opacity-0 transform group-hover:-translate-x-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>
          </button>
        </div>
      </section>
      <section className="relative z-30 md:pb-0">
        <div
          className=" bg-customGreen"
          style={{
            backgroundImage: "url('/flowerpage.svg')", // Adjust the image path if needed
            //   backgroundSize: "cover",
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <HowWeWork />
        </div>

        <ReviewsSection />
        <FAQs />
      </section>
    </>
  );
};

export default Trips;
