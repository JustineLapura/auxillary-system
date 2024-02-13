import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./Main.css";

const slides = [
  {
    img: "/SSU.jpg",
  },
  {
    img: "/dormitory.jpg",
  },
  {
    img: "/facility.jpg",
  },
  {
    img: "/mens.png",
  },
  {
    img: "/avc.jpg",
  },
];

const Main = () => {
  const [openModal, setIsOpenModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setIsTransitioning(false);
      }, 500); // Adjust timing based on transition duration
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setIsTransitioning(false);
      }, 500); // Adjust timing based on transition duration
    }
  };

  const gotoSlideIndex = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 500); // Adjust timing based on transition duration
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className={`image-container ${
          isTransitioning ? "fade-out" : "fade-in"
        }`}
        style={{
          backgroundImage: `url(${slides[currentIndex].img})`,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500/50" />
      <div className="overlay h-full w-full">
        <div className="relative px-4 h-full w-full flex flex-col justify-center text-white font-bold">
          {/* Main Text */}
          <div className="grid place-items-center gap-2 lg:gap-4 text-center">
            <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl text">
              Book, Create, Celebrate
            </h1>
            <h1 className="text-lg sm:text-2xl lg:text-5xl font-black">
              Unleash the Magic of our Spaces
            </h1>
            {/* Main button  */}
            <button
              onClick={() => setIsOpenModal(true)}
              className="py-3 px-6 rounded-xl mt-4 bg-yellow-300/90 font-bold shadow-xl"
            >
              Check Availability
            </button>
          </div>
        </div>
        {/* <BsChevronCompactLeft
          size={30}
          className="prev-button"
          onClick={prevSlide}
        />
        <BsChevronCompactRight
          size={30}
          className="next-button"
          onClick={nextSlide}
        /> */}
      </div>
      {/*image slider  */}
      {/* <div className="hidden lg:flex justify-between items-center">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.img}
            alt={`slide ${index}`}
            className="w-20 rounded-xl cursor-pointer hover:scale-105 duration-200"
            onClick={() => gotoSlideIndex(index)}
          />
        ))}
      </div> */}
      <div
        className={`modal-background ${openModal ? "visible" : "hidden"}`}
        onClick={() => setIsOpenModal(false)}
      />
      {openModal && <CategoryModal setIsOpenModal={setIsOpenModal} />}
    </div>
  );
};

export default Main;

// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import CategoryModal from "./CategoryModal";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

// const slides = [
//   {
//     img: "/SSU.jpg",
//   },
//   {
//     img: "/dormitory.jpg",
//   },
//   {
//     img: "/facility.jpg",
//   },
// ];

// const Main = () => {
//   const [openModal, setIsOpenModal] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const prevSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//         setIsTransitioning(false);
//       }, 500); // Adjust timing based on transition duration
//     }
//   };

//   const nextSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         const isLastSlide = currentIndex === slides.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//         setIsTransitioning(false);
//       }, 500); // Adjust timing based on transition duration
//     }
//   };

//   const gotoSlideIndex = (index) => {
//     if (!isTransitioning && index !== currentIndex) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentIndex(index);
//         setIsTransitioning(false);
//       }, 500); // Adjust timing based on transition duration
//     }
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [currentIndex]);

//   return (
//     <div
//       className={`relative h-screen w-full image-container ${
//         isTransitioning ? "fade-out" : "fade-in"
//       } bg-[url("${
//         slides[currentIndex].img
//       }")] bg-no-repeat bg-cover bg-center`}
//     >
//       <div className="absolute top-0 left-0 h-full w-full bg-blue-500/50" />
//       <div className="relative px-4 h-full w-full flex flex-col gap-8 items-center justify-center text-white font-bold">
//         {/* Main Text */}
//         <div className="grid place-items-center gap-2 lg:gap-4 text-center">
//           <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl text">
//             Book, Create, Celebrate
//           </h1>
//           <h1 className="text-lg sm:text-2xl lg:text-5xl font-black">
//             Unleash the Magic of our Spaces
//           </h1>
//           {/* Main button  */}
//           <button
//             onClick={() => setIsOpenModal(true)}
//             className="py-3 px-6 rounded-xl mt-4 bg-yellow-300/90 font-bold shadow-xl"
//           >
//             Check Availability
//           </button>
//         </div>
//       </div>

//       <BsChevronCompactLeft
//         size={30}
//         className="hidden md:block w-10 h-10 absolute top-1/2 left-5 text-gray-900 font-black p-2 bg-white rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105 duration-200"
//         onClick={prevSlide}
//       />
//       <BsChevronCompactRight
//         size={30}
//         className="hidden md:block w-10 h-10 absolute top-1/2 right-5 text-gray-900 font-black p-2 bg-white rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105 duration-200"
//         onClick={nextSlide}
//       />

//       {/*image slider  */}
//       <div className="hidden lg:flex justify-between items-center">
//         {slides.map((slide, index) => (
//           <img
//             key={index}
//             src={slide.img}
//             alt={`shoe image ${index + 1}`}
//             className="w-20 rounded-xl cursor-pointer hover:scale-105 duration-200"
//             onClick={() => gotoSlideIndex(index)}
//           />
//         ))}
//       </div>
//       <div className="absolute bottom-0 h-20 w-full flex justify-center items-center bg-blue-900 blur" />
//       <div
//         onClick={() => setIsOpenModal(false)}
//         className={
//           openModal ? ` fixed w-full h-screen bg-black/70 top-0 left-0` : ""
//         }
//       />
//       {openModal && (
//         <CategoryModal openModal={openModal} setIsOpenModal={setIsOpenModal} />
//       )}
//     </div>
//   );
// };

// export default Main;
