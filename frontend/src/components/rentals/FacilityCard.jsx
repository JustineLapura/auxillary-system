import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const FacilityCard = ({ id, img, name, setIsBooking }) => {
  return (
    <div className="w-full h-ful lg:flex justify-between items-center gap-16">
      <img
        className="w-full h-[360px] md:w-full rounded-lg"
        src={img}
        alt={name}
      />
      <div className=" w-full h-full">
        <div className="w-full flex justify-between items-center my-4">
          <div className="w-[2/3]">
            <h1 className="text-2xl md:text-4xl font-black text-blue-950">
              {name}
            </h1>
          </div>
          <div className="flex md:hidden items-center w-[1/3] space-x-1">
            <button
              onClick={setIsBooking}
              className="py-2 px-4 rounded-full bg-blue-800 text-xs text-white font-semibold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 duration-300"
            >
              Book now
            </button>
          </div>
        </div>
        <div className="text-gray-900 py-5">
          <p className="font-bold md:text-xl text-gray-700">Details</p>
          <ul className="p-5 text-sm md:text-base text-gray-500 font-semibold">
            <li className="flex gap-2 items-center">
              <FaCircle size={5} />
              Government Agencies - ₱8,000/ 8hour
            </li>
            <li className="flex gap-2 items-center">
              <FaCircle size={5} />
              Non-Government Agencies - ₱9,000/ 8hour
            </li>
            <li className="flex gap-2 items-center">
              <FaCircle size={5} />
              Others - ₱10,000/ 8hour
            </li>
          </ul>
        </div>
        <div className="hidden lg:block mb-12">
          <Link to={`/rentals/facility/${name}`}>
            <button
              onClick={setIsBooking}
              className="py-3 px-6 rounded-full bg-blue-800 text-lg text-white font-semibold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 duration-300"
            >
              Book now
            </button>
          </Link>
        </div>
        <div className="w-full max-w-[600px] flex justify-between text-xl md:text-2xl pb-8 md:pb-0">
          <h1 className="text-gray-700 font-bold">How was your Experience?</h1>
          <div className="flex justify-between items-center gap-3 text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
