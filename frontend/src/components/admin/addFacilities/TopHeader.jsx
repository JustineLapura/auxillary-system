import React from "react";
import { FaSearch } from "react-icons/fa";

const TopHeader = ({ facilitiesCount, setAddModal }) => {
  return (
    <>
      <div className="flex justify-between items-center text-lg font-bold">
        <h1 className="text-gray-900 text-3xl md:text-5xl">Facilities</h1>
        <button
          onClick={() => setAddModal(true)}
          className="flex text-white bg-green-500/90 hover:bg-green-600 py-2 px-3 rounded-lg"
        >
          + Add <span className="hidden sm:block ps-2">Facility</span>
        </button>
      </div>

      <div className="w-full sm:flex justify-between items-center my-6">
        <h1 className=" text-sm lg:text-xl font-semibold text-gray-700">
          Showing{" "}
          <span className="px-3 py-1 rounded bg-gray-300 font-bold text-gray-900">
            {facilitiesCount}
          </span>{" "}
          entries
        </h1>

        <div className="hidden sm:flex items-center gap-2">
          <h1 className="text-gray-900 font-bold">Search</h1>
          <input
            className="border-2 border-gray-300 py-1 ps-8 sm:ps-2"
            type="text"
            name=""
            id=""
            placeholder="Facility name..."
          />
        </div>
        <div className="relative sm:hidden mt-2">
          <input
            className="border border-gray-300 py-1 ps-9 w-[150px] rounded"
            type="text"
            name=""
            id=""
            placeholder="Search..."
          />
          <FaSearch
            className="sm:hidden absolute top-3 left-2 text-gray-500"
            size={15}
          />
        </div>
      </div>
    </>
  );
};

export default TopHeader;
