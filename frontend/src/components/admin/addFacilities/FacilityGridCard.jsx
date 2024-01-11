"use client";
import React, { useState } from "react";
import DeleteFacilityModal from "./DeleteFacilityModal";
import ViewFacilityModal from "./ViewFacilityModal";

const FacilityGridCard = ({ id, img, facilityName }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  return (
    <>
      <div className="w-[95%] border bg-gray-100 rounded-lg text-center p-5 space-y-2 hover:scale-105 duration-300">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-500">ID {id}</h1>
          <button
            onClick={() => setViewModal(true)}
            className="py-1 px-[18px] border bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            View
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-900 font-bold">{facilityName}</p>
          <button
            onClick={() => setDeleteModal(true)}
            className="py-1 px-4 border bg-red-500 hover:bg-red-600 text-sm text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>

      {/* View Modal  */}
      <ViewFacilityModal
        id={id}
        img={img}
        name={facilityName}
        viewModal={viewModal}
        setViewModal={setViewModal}
      />
      {/* Delete Modal  */}
      <DeleteFacilityModal
        id={id}
        facilityName={facilityName}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
      />
    </>
  );
};

export default FacilityGridCard;
