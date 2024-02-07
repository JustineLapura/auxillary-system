import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaDesktop, FaTooth } from "react-icons/fa";
import { FaBuildingColumns, FaUserGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Facilities = () => {
  const [users, setUsers] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [reservations, setReservations] = useState([]);

  const pendingReservations = reservations.filter(
    (reservation) => reservation.status === "pending"
  );

  // console.log("Users fr Dashboard: ", users);
  // console.log("Facilities fr Dashboard: ", facilities);
  // console.log("Reservations fr Dashboard: ", pendingReservations);

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
    <div className="h-full pb-5 px-5">
      <h1 className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-600 my-3">
        Facilities
      </h1>
      <div className="w-full grid md:grid-cols-3 place-items-center gap-4 lg:gap-10">
        {/* card1 */}
        <div className="w-[250px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
          <FaUserGroup className="w-1/4 h-1/2 lg:h-full" size={25} />
          <div className="">
            <h1 className="text-base md:text-lg text-white font-bold">
              Total Users
            </h1>
            <p className="text-right lg:text-center font-semibold">
              {users.length > 0 && users.length}
            </p>
          </div>
        </div>
        {/* card2 */}
        <Link to="/admin/add-facilities">
          <div className="w-[250px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
            <FaBuildingColumns className="w-1/4 h-1/2 lg:h-full" size={25} />
            <div className="">
              <h1 className="text-base md:text-lg text-white font-bold">
                Total Facilities
              </h1>
              <p className="text-right lg:text-center font-semibold">
                {facilities.length > 0 && facilities.length}
              </p>
            </div>
          </div>
        </Link>
        {/* card3 */}
        <Link to="/admin/bookings">
          <div className="w-[250px] h-[100px] flex justify-between items-center cursor-pointer p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
            <FaCalendarAlt className="w-1/4 h-1/2 lg:h-full" size={25} />
            <div className="">
              <h1 className="text-base md:text-lg text-white font-bold">
                Total Reservations
              </h1>
              <p className="text-right lg:text-center font-semibold">
                {pendingReservations.length > 0 && pendingReservations.length}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Facilities;
