import React, { useState, useEffect } from "react";
import { FaDesktop, FaTooth } from "react-icons/fa";
import { FaBed, FaBedPulse } from "react-icons/fa6";
import { BsDoorOpenFill, BsHouseDoorFill } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

const Dormitories = () => {
  const [dorms, setDorms] = useState([]);
  const occupiedRooms = dorms.filter((dorm) => dorm.status === "occupied");
  const availableRooms = dorms.filter((dorm) => dorm.status === "vacant");

  console.log("Dorms from Dashboard: ", dorms);
  console.log(occupiedRooms);

  useEffect(() => {
    const fetchDorms = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/dormManagement`
        );
        setDorms(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchDorms();
  }, []);

  return (
    <div className="w-full h-1/2 lg:h-full pb-5">
      <h1 className="gap-4 text-lg text-center lg:text-left lg:text-2xl font-bold text-gray-600 my-3">
        Dormitories
      </h1>
      <div className="w-full grid lg:grid-cols-3 place-items-center gap-4 lg:gap-10">
        {/* card1 */}
        <Link
          className="w-full max-w-[400px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200"
          to="/admin/manage-dorm"
        >
          <div className="w-full h-full flex justify-between items-center">
            <FaBed className="w-1/4 h-1/2 lg:h-full" size={25} />
            <div className="">
              <h1 className="text-lg md:text-xl font-bold">Total Dorms</h1>
              <p className="text-right lg:text-center font-semibold">
                {dorms.length > 0 && dorms.length}
              </p>
            </div>
          </div>
        </Link>
        {/* card2 */}
        <div className="w-full max-w-[400px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <BsDoorOpenFill className="w-1/4 h-1/2 lg:h-full" size={25} />
          <div className="">
            <h1 className="text-lg md:text-xl font-bold">Occupied Rooms</h1>
            <p className="text-right lg:text-center font-semibold">
              {occupiedRooms.length > 0 && occupiedRooms.length}
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="w-full max-w-[400px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <BsHouseDoorFill className="w-1/4 h-1/2 lg:h-full" size={25} />
          <div className="">
            <h1 className="text-lg md:text-xl font-bold">Available Rooms</h1>
            <p className="text-right lg:text-center font-semibold">
              {availableRooms.length > 0 && availableRooms.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dormitories;
