import React from "react";

const RentedFacilityGridCard = ({ facility, name, date, time }) => {
  return (
    <div className="w-[90%] p-5 bg-gray-100 border-gray-200 font-semibold text-gray-500 rounded-lg space-y-2 hover:scale-105 duration-200 cursor-pointer">
      <div className="flex justify-between items-center ">
        <h1 className="text-gray-900 font-bold">{name}</h1>
        <p>{date}</p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-blue-500 font-bold">{facility}</h1>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default RentedFacilityGridCard;
