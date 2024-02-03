import React, { useState } from "react";
import DeleteFacilityModal from "./DeleteFacilityModal";
import ViewFacilityModal from "./ViewFacilityModal";

const FacilityGridCard = ({ facility }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  return (
    <>
      <div className="w-[95%] border bg-gray-100 rounded-lg text-center p-5 space-y-2 hover:scale-105 duration-300">
        <div className="flex justify-between items-center">
          {/* <h1 className="text-gray-500 text-xs">ID {facility._id}</h1> */}
          <p className="text-gray-900 font-bold">{facility.name}</p>
          <button
            onClick={() => setViewModal(true)}
            className="py-1 px-[18px] border bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            View
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div />
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
        // id={facility._id}
        // img={facility.photo}
        // name={facility.name}
        facility={facility}
        viewModal={viewModal}
        setViewModal={setViewModal}
      />
      {/* Delete Modal  */}
      <DeleteFacilityModal
        id={facility._id}
        facilityName={facility.name}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
      />
    </>
  );
};

export default FacilityGridCard;
