import axios from "axios";
import React, { useState, useEffect } from "react";

const ViewFacilityModal = ({ facility, viewModal, setViewModal }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  console.log("Facility: ", facility);
  const PF = "http://localhost:4000/images/";

  return (
    <>
      {/* View Modal Overlay  */}
      <div
        className={
          viewModal
            ? "fixed w-full h-full top-0 left-0 bg-blue-900/60 z-20"
            : ""
        }
      />
      {/* View Modal  */}

      <div
        className={
          viewModal
            ? "fixed w-[90%] max-w-[500px] h-[90%] max-h-[600px] flex flex-col justify-between bg-white rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-5 ease-in duration-300"
            : "fixed w-[90%] max-w-[500px] h-[90%] max-h-[600px] flex flex-col justify-between bg-white rounded-xl top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-5 ease-in duration-300"
        }
      >
        {facility && facility.photo && (
          <img
            className="w-full h-[300px] rounded-xl object-cover"
            width={300}
            height={200}
            src={PF + facility.photo}
            alt={facility.name}
          />
        )}
        {updateMode ? (
          <input
            className="text-center text-2xl border border-gray-500 rounded py-1 mt-6 focus:outline-none"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={true}
          />
        ) : (
          <h1 className="text-center font-bold text-gray-900 text-2xl mt-6">
            {facility && facility.name}
          </h1>
        )}
        {updateMode ? (
          <textarea
            className="mt-4 border border-gray-500 rounded p-3 focus:outline-none"
            name=""
            id=""
            cols="30"
            rows="4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="text-sm mt-4 text-gray-700">
            {facility && facility.desc}
          </p>
        )}
        <div className="mt-6 flex justify-end items-center gap-4">
          {updateMode ? (
            <button
              onClick={() => setUpdateMode(false)}
              className="px-6 py-2 rounded-xl bg-red-500 font-bold text-white"
            >
              Cancel
            </button>
          ) : (
            <button
              onClick={() => setUpdateMode(true)}
              className="px-6 py-2 rounded-xl bg-green-600 font-bold text-white"
            >
              Edit
            </button>
          )}
          {updateMode ? (
            <button className="px-6 py-2 rounded-xl bg-blue-500 font-bold text-white">
              Save
            </button>
          ) : (
            <button
              onClick={() => setViewModal(false)}
              className="px-6 py-2 rounded-xl bg-red-500 font-bold text-white"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewFacilityModal;
