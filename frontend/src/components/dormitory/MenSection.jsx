import React from "react";
import { Link } from "react-router-dom";

const MenSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20 px-8">
      <h1 className="text-xl md:text-3xl text-gray-800 font-bold mb-6">
        MEN'S DORMITORY
      </h1>
      <img
        src="/mens.png"
        alt=""
        className="w-full max-w-[800px] lg:h-[450px] rounded-xl object-cover"
      />
      <p className="max-w-[800px] font-semibold text-gray-500 mt-10 text-justify md:text-xl">
        Our men's dormitory is conveniently located near Samar State University
        and within easy reach of local shops, restaurants, and public
        transportation, making it a prime choice for students looking for a
        hassle-free living experience.
      </p>
      <div className="w-full max-w-[800px] flex justify-end mt-12">
        <Link to="/dorm/available-room-men">
          <button className="px-6 py-3 text-white bg-blue-800 rounded-xl text-xl font-semibold">
            Room Availability
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenSection;
