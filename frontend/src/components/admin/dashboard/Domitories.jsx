import React from "react";
import { FaDesktop, FaTooth } from "react-icons/fa";

const Dormitories = () => {
  return (
    <div className="w-full h-full pb-5 px-5">
      <h1 className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-600 my-3">
        Dormitories
      </h1>
      <div className="w-full grid md:grid-cols-3 place-items-center gap-4 lg:gap-10">
        {/* card1 */}
        <div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <FaDesktop className="w-1/4 h-full" size={25} />
          <h1 className="text-lg md:text-xl text-gray-900 font-bold">
            Total User
          </h1>
        </div>
        {/* card2 */}
        <div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <FaTooth className="w-1/4 h-full" size={25} />
          <h1 className="text-lg md:text-xl text-gray-900 font-bold">
            Total Facilities
          </h1>
        </div>
        {/* card3 */}
        <div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <FaDesktop className="w-1/4 h-full" size={25} />
          <h1 className="text-lg md:text-xl text-gray-900 font-bold">
            Total Reservations
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dormitories;
