import React from "react";
import { FaTimes } from "react-icons/fa";


const AddFacilityModal = ({ addModal, setAddModal }) => {
  return (
    <div
      className={
        addModal
          ? "fixed w-[90%] max-w-[600px] h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 z-20 rounded-lg space-y-6 p-5 ease-in duration-300"
          : "fixed w-[90%] max-w-[600px] h-[90%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 z-20 rounded-lg space-y-6 p-5 ease-in duration-300"
      }
    >
      <h1 className="font-bold text-2xl">Add Facility</h1>

      <div className="w-full mt-8">
        <h1 className="text-lg font-semibold">Facility Name:</h1>
        <input
          className="border w-full rounded-lg py-2 text-lg ps-2 mt-1"
          type="text"
          name=""
          id=""
        />
      </div>

      <div className="w-full">
        <h1 className="text-lg font-semibold">Facility Image:</h1>
        <input
          className="border w-full rounded py-2 bg-white ps-2"
          type="file"
          name="facilityImage"
          id="facilityImage"
          accept="image/*"
        />
      </div>

      <div className="w-full">
        <h1 className="text-lg font-semibold">Facility Details:</h1>
        <textarea
          className="border w-full rounded-lg text-lg py-2 ps-2 mt-1"
          name="facilityDetails"
          id="facilityDetails"
          rows={5}
        ></textarea>
      </div>
      <div className="w-full flex justify-center items-center mt-4">
        <button
          onClick={() => setAddModal(false)}
          className="text-white bg-blue-500 font-bold py-2 px-5 rounded hover:bg-blue-600 hover:scale-105 duration-300 "
        >
          Submit
        </button>
      </div>

      {/* close button  */}
      <div
        onClick={() => setAddModal(false)}
        className="absolute top-[-16px] right-2 cursor-pointer hover:bg-gray-300 duration-200 rounded-full p-3"
      >
        <FaTimes />
      </div>
    </div>
  );
};

export default AddFacilityModal;
