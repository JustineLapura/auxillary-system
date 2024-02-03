import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaDesktop, FaTooth } from "react-icons/fa";
import { FaBuildingColumns, FaUserGroup } from "react-icons/fa6";

const Facilities = () => {
  const [users, setUsers] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [reservations, setReservations] = useState([]);

  console.log("Users fr Dashboard: ", users);
  console.log("Facilities fr Dashboard: ", facilities);
  console.log("Reservations fr Dashboard: ", reservations);

  // get Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/user`
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchUsers();
  }, []);

  // get Facilities
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/facility`
        );
        setFacilities(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchFacilities();
  }, []);

  // get Reservations
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/booking`
        );
        setReservations(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="w-full h-full pb-5 px-5">
      <h1 className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-600 my-3">
        Facilities
      </h1>
      <div className="w-full grid md:grid-cols-3 place-items-center gap-4 lg:gap-10">
        {/* card1 */}
        <div className="w-[300px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
          <FaUserGroup className="w-1/4 h-1/2 lg:h-full" size={25} />
          <div className="">
            <h1 className="text-lg md:text-xl text-white font-bold">
              Total Users
            </h1>
            <p className="text-right lg:text-center font-semibold">
              {users.length}
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="w-[300px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
          <FaBuildingColumns className="w-1/4 h-1/2 lg:h-full" size={25} />
          <div className="">
            <h1 className="text-lg md:text-xl text-white font-bold">
              Total Facilities
            </h1>
            <p className="text-right lg:text-center font-semibold">
              {facilities.length}
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="w-[300px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
          <FaCalendarAlt className="w-1/4 h-1/2 lg:h-full" size={25} />
          <div className="">
            <h1 className="text-lg md:text-xl text-white font-bold">
              Total Reservations
            </h1>
            <p className="text-right lg:text-center font-semibold">
              {reservations.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
