import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import BookTable from "../../../components/profile/BookTable";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center px-2 lg:px-4 mt-20">
          <h1 className="text-2xl lg:text-5xl text-gray-800 font-bold">
            My Reservations
          </h1>
          <Link
            className="hidden lg:block px-5 py-3 bg-blue-600 rounded-lg text-white font-bold hover:scale-105 duration-200 hover:bg-blue-700"
            to="/rentals"
          >
            <button>Try Booking+</button>
          </Link>
          <Link
            className="lg:hidden text-xs px-3 py-2 bg-blue-600 rounded-lg text-white font-bold hover:scale-105 duration-200 hover:bg-blue-700"
            to="/rentals"
          >
            <button>Try Booking+</button>
          </Link>
        </div>
        <BookTable />
      </div>
    </>
  );
};

export default Profile;
