import React from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

const CategoryModal = ({ openModal, setIsOpenModal }) => {
  return (
    <div
      className={
        openModal
          ? "fixed h-[300px] lg:h-[350px] w-[400px] lg:w-[500px] px-8 flex flex-col gap-6 justify-evenly items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-2xl z-20 ease-in duration-300 pb-20"
          : "fixed h-[300px] lg:h-[350px] w-[400px] lg:w-[500px] flex flex-col gap-6 justify-evenly items-center left-1/2 top-[-100%] transform -translate-x-1/2 -translate-y-1/2 py-10 bg-white rounded-2xl z-20 ease-in duration-300 pb-20"
      }
    >
      <IoIosCloseCircle
        onClick={() => setIsOpenModal(false)}
        size={30}
        className="absolute top-2 right-2 text-gray-500 cursor-pointer"
      />
      <h1 className="text-2xl font-bold text-gray-600">Please Choose</h1>
      <div className="w-full flex items-center gap-4 font-bold">
        <Link to="/dorm" className="w-full h-full">
          <div className="w-full h-full cursor-pointer">
            <img
              src="/mens.png"
              alt=""
              className="w-full h-full object-cover rounded-xl hover:scale-105 duration-200 mb-3"
            />
            <h1 className="text-center text-gray-500 tracking-wider hover:text-blue-900">
              DORMITORIES
            </h1>
          </div>
        </Link>
        <Link to="/rentals" className="w-full h-full">
          <div className="w-full h-full cursor-pointer">
            <img
              src="/faci.jpg"
              alt=""
              className="w-full h-full object-cover rounded-xl hover:scale-105 duration-200 mb-3"
            />
            <h1 className="text-center text-gray-500 tracking-wider hover:text-blue-900">
              FACILITIES
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryModal;
