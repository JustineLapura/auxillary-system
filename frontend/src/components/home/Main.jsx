import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryModal from "./CategoryModal";

const Main = () => {
  const [openModal, setIsOpenModal] = useState(false);
  //   const handleCheckAvailability = () => {
  //     if (isLoggedin) {
  //       router.push("/rentals")
  //     } else {
  //       router.push("/login")
  //     }
  //   }

  return (
    <div className='relative h-screen w-full bg-[url("/SSU.jpg")] bg-no-repeat bg-cover bg-center'>
      <div className="absolute top-0 left-0 h-full w-full bg-blue-500/50" />
      <div className="relative px-4 h-full w-full flex flex-col gap-8 items-center justify-center text-white font-bold">
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

      {/*image slider  */}
      <div className="absolute bottom-0 h-20 w-full flex justify-center items-center bg-blue-900 blur" />
      <div
        onClick={() => setIsOpenModal(false)}
        className={
          openModal ? ` fixed w-full h-screen bg-black/70 top-0 left-0` : ""
        }
      />
      {openModal && (
        <CategoryModal openModal={openModal} setIsOpenModal={setIsOpenModal} />
      )}
    </div>
  );
};

export default Main;
