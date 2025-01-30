import React, { useEffect, useState } from "react";
import ReviewsSection from "../Components/PageyComponents/ReviewsSection";
import FAQs from "../Components/PageyComponents/FAQs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const PastTrips = () => {
  const trips = [
    {
      id: 1,
      title: "Perfectly Curated",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737456276/c7eaa10b-f4d8-4e80-b19c-5826f86976d6_fr0o5k.jpg",
      style:
        "md:top-[120px] sm:top-[100px] top-[80px] sm:left-[-50px] md:left-[70px] left-[50px] md:rotate-[12deg] sm:rotate-[20deg] rotate-[-12deg]",
    },
    {
      id: 2,
      title: "Explore Cultures",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737456282/20240611_191633_1_gwcmb7.jpg",
      style:
        "md:top-[290px] top-[40px] md:left-[-70px]  sm:left-[240px] sm:top-[20px] left-[170px] mt-16 md:rotate-[-8.46deg] rotate-[-5.46deg]",
    },
    {
      id: 3,
      title: "Island Hopping ",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737455337/IMG_7738_1_bcwvq9.png",
      style:
        "md:top-[500px] top-[450px] md:left-[150px] sm:left-[-50px] left-[160px] md:rotate-[-50.41deg] rotate-[-20.41deg]",
    },
    {
      id: 4,
      title: "ATV Tour",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1732285992/IMG_0829_1_qyoyzy.jpg",
      style:
        "top-[130px] md:right-[70px] sm:top-[90px] sm:right-[-60px] right-[150px] md:rotate-[-12.85deg] sm:rotate-[-28.85deg] rotate-[8.85deg]",
    },
    {
      id: 5,
      title: "Souk Stroll ",
      image:
        "/Jacknb.jpeg",
      style:
        "md:top-[290px] top-[410px] md:right-[-70px] sm:top-[380px] sm:right-[-60px] right-[50px] mt-16 rotate-[8.46deg]",
    },
    {
      id: 6,
      title: "Cultural Excursions",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737455336/IMG_7736_qarknl.jpg",
      style:
        "md:top-[500px] top-[450px] sm:top-[480px] sm:left-[240px] md:right-[150px] right-[180px] md:rotate-[50.41deg] sm:rotate-[20.41deg] rotate-[-5.41deg] ",
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // SECOND SECTION DATA
  const secondSectionData = [
    {
      id: 1,
      date: "20/09/2024",
      title: "Albania 2024",
      // Instead of a static "photos" field, we can dynamically compute it from images.length
      images: [
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737456291/IMG_3201_bs4bys.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737455005/IMG_2903_wktrah.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737455005/56a7ad4d-5062-4ab9-aaf5-32c964d5d3fc_1_h4hffu.jpg",
        // You can add more than 3 if you wish:
        // "https://some-other-image.jpg",
      ],
    },
    {
      id: 2,
      date: "08/06/2024",
      title: "Marrakesh 2.0",
      images: [
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737459018/20240612_093815_1_shsrfl.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737456282/20240611_191633_1_gwcmb7.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737459490/20240612_093655_e7zfcr.jpg",
      ],
    },
    {
      id: 3,
      date: "26/12/2023",
      title: "P. Trip - Bali",
      images: [
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737459700/7414a882-414e-4598-968e-14d3225f7f02_icaqd6.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737459701/542581b8-9bd9-438f-ab3b-465a97c210d4_y0bpzs.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737459700/ef1786f7-7bdb-49e5-852f-23986cd49c2c_tzorhj.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737456277/c7eaa10b-f4d8-4e80-b19c-5826f86976d6_s2njvu.jpg ",
      ],
    },
    {
      id: 4,
      date: "02/09/2023",
      title: "Marrakesh 1.0",
      images: [
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1732201829/IMG_2973_rkten7.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737460288/IMG_3025_vgeavm.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737460280/EA7D3105-24AE-41B0-8242-5A112DD11D30_vmgmjb.jpg",
      ],
    },
    {
      id: 5,
      date: "30/12/2019",
      title: "Thailand Trip",
      images: [
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737455335/IMG_7741_ioivmr.png",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737455336/IMG_7747_nlfqvn.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737455336/IMG_7735_1_gib0et.jpg",
      ],
    },
    {
      id: 6,
      date: "30/12/2019",
      title: "P. Trip- Morocco",
      images: [
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737461900/FDBBA81A-7002-42B1-9B25-AF9C861F39BD_oxc09w.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737461900/E85D1646-BCCD-4F8A-915E-180D354B8F5A_arvxur.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737460276/91ABA9F9-C3E1-4293-9055-3BEFA5ED18B8_gq9gms.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737460277/356BC115-2924-43B1-8440-95298992EE58_pt57ii.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737461900/6924F634-A3A0-4C77-A52B-CB4D9B498CDB_jgqhb7.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737461900/DE8EA6B5-B188-406C-A4CA-7DCA975F8277_pcup4e.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737461900/E85D1646-BCCD-4F8A-915E-180D354B8F5A_arvxur.jpg",
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737461900/48F57B05-BAFB-4311-85C3-926AA1D10FC1_qyqdnf.jpg",
      ],
    },
    // "Empty" slot
    {
      id: 7,
      isEmpty: true,
      spotText: "We saved a spot for you",
      buttonText: "Book a Trip",
    },
  ];

  // ================
  // Modal state
  // ================
  const [openModal, setOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // When a user clicks the card
  const handleCardClick = (item) => {
    // Open modal with the entire item
    setSelectedCard(item);
    setSelectedImageIndex(0); // Start from the first image
    setOpenModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCard(null);
    setSelectedImageIndex(0);
  };

  // Go to the next image
  const handleNextImage = () => {
    if (selectedCard && selectedImageIndex < selectedCard.images.length - 1) {
      setSelectedImageIndex((prev) => prev + 1);
    }
  };
  // Go to the previous image
  const handlePrevImage = () => {
    if (selectedCard && selectedImageIndex > 0) {
      setSelectedImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      {/* ----------------------------------
          FIRST SECTION (Polaroids flying out)
      ---------------------------------- */}
      <section
        className="relative z-30 md:py-72 py-60 sm:py-72 md:pb-96 sm:pb-80 bg-customBg   overflow-hidden"
        style={{
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        {/* Heading */}
        <div className="flex justify-center md:px-[330px] px-4 sm:px-24 text-center">
          <h1 className="font-raleway font-bold md:text-5xl mt-12 md:mt-0 translate-y-4 text-4xl text-black">
            Explore <span className="text-customGreen">Past Adventures</span>{" "}
            and Traveller Stories
          </h1>
        </div>

        {/* Images Positioned Around Text */}
        <div className="relative  -translate-y-96">
          {trips.map((trip, index) => (
            <div
              key={trip.id}
              style={{
                // Add stagger: each subsequent image delays 150ms more
                transitionDelay: `${index * 150}ms`,
              }}
              className={`absolute px-32
                transition-all 
                duration-700 
                ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
                ${
                  animate
                    ? // Final position: your custom style + scale-100
                      `${trip.style} scale-100`
                    : // Initial position: center + scale-0
                      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
                }
              `}
            >
              {/* Polaroid Container */}
              <div className="bg-white shadow-2xl  overflow-hidden md:w-40 w-24 sm:w-36 md:h-56 h-28 sm:h-44 flex flex-col md:border-8 border-4 border-white">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full md:h-44 sm:h-36 h-20 object-cover"
                />
                <p className="font-pacifico text-xs text-black md:text-base ml-2 mt-2">
                  {trip.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------
          SECOND SECTION (Grid of cards)
      -------------------------------- */}
      <section className="md:pb-20 pb-24 md:py-4 py-8 bg-customBg">
        <div className="md:flex md:flex-col md:space-y-6 md:items-center space-y-3 text-center md:mt-8 md:justify-center">
          <h2 className="mt-12 font-roboto text-gray-600 font-light md:text-lg">
            PAST TRIPS
          </h2>
          <h1 className="font-raleway md:mt-4 font-semibold text-3xl md:text-5xl">
            Create <span className="text-customGreen">Memories</span> With Us!
          </h1>
          <div className="md:px-[400px] px-4">
            <p className="text-center text-gray-700 font-roboto text-base  md:text-sm">
              Explore highlights from our unforgettable journeys and see how
              Posh Retreats transforms travel into cherished memories. Join us
              on the next adventure and create your own story!
            </p>
          </div>
        </div>

        {/* 2x3 grid of cards */}
        <div className="mt-12 mx-auto max-w-6xl px-4 sm:px-4 grid sm:grid-cols-3 grid-cols-2 md:grid-cols-3 md:gap-8 sm:gap-4 gap-2">
          {secondSectionData.map((item) => {
            // If "empty" container
            if (item.isEmpty) {
              return (
                <div
                  key={item.id}
                  className="border-2 border-dashed border-gray-300 rounded-lg
                     flex flex-col items-center text-center translate-y-5 md:ml-14 sm:w-[230px]  sm:ml-4 md:w-[235px] w-full justify-center p-6 h-[280px]"
                >
                  <span className="text-4xl mb-2">🤗</span>
                  <p className="text-lg font-semibold mb-4">{item.spotText}</p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://app.tern.travel/public/forms/6OZArpyESYkxT9vf8rDf0g/responses/new",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="bg-customGreen text-white px-4 py-2 rounded"
                  >
                    {item.buttonText}
                  </button>
                </div>
              );
            }

            // For normal cards:
            const { images, date, title } = item;
            // Actual # of photos is images.length
            const photoCount = images.length;

            // We'll only show up to 3 images in the polaroid stack
            // (If there's more than 3, the extras won't show in the stack but are still in the modal)
            const frontImg = images[0];
            const secondImg = images[1];
            const thirdImg = images[2];

            return (
              <div
                key={item.id}
                // Clicking the entire card container opens the modal
                onClick={() => handleCardClick(item)}
                className="relative w-full h-[320px] flex items-center justify-center
                   group cursor-pointer"
              >
                {/* Polaroid #1 (behind-left), only if there's at least 2 images */}
                {secondImg && (
                  <div
                    className="
                      absolute w-[220px] h-[280px] bg-white border-8 border-white shadow-xl
                      top-5 left-18
                      transform rotate-0 scale-100
                      transition-all duration-300 ease-in-out
                      z-10
                      hidden md:block
                      group-hover:translate-x-[-60px]
                      group-hover:rotate-[-40deg]
                      group-hover:top-10
                    "
                  >
                    <img
                      src={secondImg}
                      alt="behind-1"
                      className="w-full h-[80%] object-cover"
                    />
                  </div>
                )}

                {/* Polaroid #2 (behind-right), only if there's at least 3 images */}
                {thirdImg && (
                  <div
                    className="
                      absolute w-[220px] h-[280px] bg-white border-8 border-white shadow-xl
                      top-5 left-18
                      transform rotate-0 scale-100
                      transition-all duration-300 ease-in-out
                      z-20
                      hidden md:block
                      group-hover:translate-x-[60px]
                      group-hover:top-10
                      group-hover:left-24
                      group-hover:rotate-[40deg]
                    "
                  >
                    <img
                      src={thirdImg}
                      alt="behind-2"
                      className="w-full h-[80%] object-cover "
                    />
                  </div>
                )}

                {/* Polaroid #3 (front) */}
                <div
                  className="
                    relative w-[220px] h-[280px] bg-white border-8 border-white shadow-2xl
                    z-30 overflow-hidden 
                    transition-all duration-300 ease-in-out
                    group-hover:scale-[1.05]
                  "
                >
                  {/* Photos badge (show total # of images) */}
                  <div
                    className="absolute top-2 left-2 
                      bg-white bg-opacity-30 backdrop-blur-sm
                      text-white text-xs px-3 py-1 
                      rounded-full shadow-md
                    "
                  >
                    {photoCount} photos
                  </div>

                  {/* Front image */}
                  <img
                    src={frontImg}
                    alt={title}
                    className="w-full h-[80%] object-cover "
                  />

                  {/* Trip info */}
                  <div className="p-2 mt-auto text-left">
                    <p className="text-xs font-roboto text-gray-800">{date}</p>
                    <p className="font-pacifico text-base md:text-lg text-gray-800 mt-1">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------
          REVIEWS / FAQs (unchanged)
      ---------------------------------------- */}
      <section
        className="relative z-30 md:pb-16 pb-12 bg-customGreen"
        style={{
          backgroundImage: "url('/flowerpage.svg')",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <ReviewsSection />
      </section>
      <FAQs />

      {/* ----------------------------------------
          MODAL (Lightbox) for viewing all images
      ---------------------------------------- */}
      {openModal && selectedCard && (
        <div
          className="fixed inset-0 z-[999] bg-black bg-opacity-70 
               flex flex-col items-center justify-center md:p-2 px-4"
          // Clicking the dark backdrop closes the modal
          onClick={handleCloseModal}
        >
          {/* The white "card" (fixed size). 
        Stop event propagation so clicks inside don’t close the modal. */}
          <div
            className="relative w-full max-w-[400px] h-[500px] p-4 pb-24 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Current Image (fills the card area) */}
            <img
              src={selectedCard.images[selectedImageIndex]}
              alt="Selected"
              className="w-full h-full object-cover"
            />

            {/* Previous Button */}
            {selectedImageIndex > 0 && (
              <button
                className="
      absolute top-1/2 left-0 -translate-y-1/2 md:-translate-x-32 translate-x-4 sm:-translate-x-36
      flex items-center justify-center
      w-12 h-12 
      text-white 
      bg-white/30 backdrop-blur-sm
      rounded-full 
      m-2
      hover:bg-black/50 transition
    "
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
              >
                <GoChevronLeft size={28} />
              </button>
            )}

            {selectedImageIndex < selectedCard.images.length - 1 && (
              <button
                className="
      absolute top-1/2 right-0 -translate-y-1/2 md:translate-x-32 -translate-x-4 sm:translate-x-36
      flex items-center justify-center
      w-12 h-12
      text-white 
      bg-white/30 backdrop-blur-sm
      rounded-full 
      m-2
      hover:bg-black/50 transition
    "
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
              >
                <GoChevronRight size={28} />
              </button>
            )}
          </div>

          {/* Trip Title and Date (in the black area, using Raleway) */}
          <div className="mt-4 text-xl text-white font-medium font-raleway text-center">
            {selectedCard.title} - {selectedCard.date}
          </div>
        </div>
      )}
    </>
  );
};

export default PastTrips;
