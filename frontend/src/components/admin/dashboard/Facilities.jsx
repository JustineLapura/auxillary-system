import React from "react";
import { FaCalendarAlt, FaDesktop, FaTooth } from "react-icons/fa";
import { FaBuildingColumns, FaUserGroup } from "react-icons/fa6";

const Facilities = () => {
  return (
    <div className="w-full h-full pb-5 px-5">
      <h1 className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-600 my-3">
        Facilities
      </h1>
      <div className="w-full grid md:grid-cols-3 place-items-center gap-4 lg:gap-10">
        {/* card1 */}
        <div className="w-[300px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
          <FaUserGroup className="w-1/4 h-full" size={25} />
          <h1 className="text-lg md:text-xl text-white font-bold">
            Total User
          </h1>
        </div>
        {/* card2 */}
        <div className="w-[300px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
          <FaBuildingColumns className="w-1/4 h-full" size={25} />
          <h1 className="text-lg md:text-xl text-white font-bold">
            Total Facilities
          </h1>
        </div>
        {/* card3 */}
        <div className="w-[300px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
          <FaCalendarAlt className="w-1/4 h-full" size={25} />
          <h1 className="text-lg md:text-xl text-white font-bold">
            Total Reservations
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
