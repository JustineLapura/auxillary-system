import React from "react";
import { FaSearch } from "react-icons/fa";

const TopHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center text-lg mb-8">
        <h1 className="text-gray-900 text-2xl md:text-5xl font-bold">
          Inquiries
        </h1>
        <div className="hidden sm:flex items-center gap-2">
          <h1 className="text-gray-900 font-bold">Search</h1>
          <input
            className="border-2 border-gray-300 py-1 ps-8 sm:ps-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="relative sm:hidden">
          <input
            className="border-2 border-gray-300 py-1 lg:py-2.5 ps-4 lg:ps-9 w-[150px] rounded"
            type="text"
            name=""
            id=""
            placeholder="Search..."
          />
          <FaSearch
            className="hidden absolute top-2 left-2 text-gray-500"
            size={25}
          />
        </div>
      </div>
    </>
  );
};

export default TopHeader;
