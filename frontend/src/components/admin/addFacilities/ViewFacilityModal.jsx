import React from "react";

const ViewFacilityModal = ({ facility, viewModal, setViewModal }) => {
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
        <h1 className="text-center font-bold text-gray-900 text-2xl mt-6">
          {facility && facility.name}
        </h1>
        <p className="text-sm mt-4 text-gray-700">
          {facility && facility.desc}
        </p>
        <div className="mt-6 flex justify-end items-center gap-4">
          <button className="px-6 py-2 rounded-xl bg-green-600 font-bold text-white">
            Edit
          </button>
          <button
            onClick={() => setViewModal(false)}
            className="px-6 py-2 rounded-xl bg-red-500 font-bold text-white"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewFacilityModal;
