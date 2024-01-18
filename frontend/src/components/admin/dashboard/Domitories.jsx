import React from "react";
import { FaDesktop, FaTooth } from "react-icons/fa";
import { FaBed, FaBedPulse } from "react-icons/fa6";
import { BsDoorOpenFill, BsHouseDoorFill } from "react-icons/bs";

const Dormitories = () => {
  return (
    <div className="w-full h-full pb-5 px-5">
      <h1 className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-600 my-3">
        Dormitories
      </h1>
      <div className="w-full grid md:grid-cols-3 place-items-center gap-4 lg:gap-10">
        {/* card1 */}
        <div className="relative w-[300px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <FaBed className="w-1/4 h-full" size={25} />
          <h1 className="text-lg text-gray-900 font-bold">
            Total Dorms
          </h1>
        </div>
        {/* card2 */}
        <div className="relative w-[300px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <BsDoorOpenFill className="w-1/4 h-full" size={25} />
          <h1 className="text-lg text-gray-900 font-bold">
            Occupied Rooms
          </h1>
        </div>
        {/* card3 */}
        <div className="relative w-[300px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <BsHouseDoorFill className="w-1/4 h-full" size={25} />
          <h1 className="text-lg text-gray-900 font-bold">
            Available Rooms
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dormitories;
