import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import BookTable from "../../../components/profile/BookTable";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
        <Link to="/rentals">
          <button className="absolute px-5 py-3 bg-blue-600 rounded-lg text-white font-bold top-[130px] right-[50px] hover:scale-105 duration-200 hover:bg-blue-700">
            Try Booking +
          </button>
        </Link>
        <h1 className="text-5xl text-gray-800 font-bold mt-20">
          My Booking Details
        </h1>
        <BookTable />
      </div>
    </>
  );
};

export default Profile;
