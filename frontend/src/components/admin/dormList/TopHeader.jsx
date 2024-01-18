import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AddDormModal from "./AddDormModal";

const TopHeader = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center text-lg ">
        <h1 className="text-gray-900 text-2xl md:text-5xl font-bold">
          Dorm List
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

      <div className="w-full flex items-center mt-12">
        <button
          onClick={() => setAddModal(true)}
          className="flex text-white bg-blue-600/90 hover:bg-blue-800 py-2 sm:py-3 px-5 rounded-lg font-semibold"
        >
          + Add <span className="hidden sm:block ps-2">New</span>
        </button>
      </div>

      {/*Modal Overlay  */}
      <div
        className={
          addModal
            ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20"
            : ""
        }
        onClick={() => setAddModal(false)}
      />

      {addModal && (
        <AddDormModal addModal={addModal} setAddModal={setAddModal} />
      )}
    </>
  );
};

export default TopHeader;
