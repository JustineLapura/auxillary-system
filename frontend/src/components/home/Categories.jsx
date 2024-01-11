import React from "react";
import { FaBuilding } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="w-full md:h-[380px] md:flex justify-around items-center gap-10 px-[200px] py-20">
      <div className="text-center flex flex-col items-center mt-20">
        <FaBuilding size={100} className="text-blue-800 mb-6" />
        <p className="text-blue-800 text-3xl font-black tracking-wider uppercase">Facilities</p>
      </div>
      <div className="text-center flex flex-col items-center mt-20">
        <FaBed size={100} className="text-blue-800 mb-6" />
        <p className="text-blue-800 text-3xl font-black tracking-wider uppercase">
          Dormitories
        </p>
      </div>
    </div>
  );
};

export default Categories;
