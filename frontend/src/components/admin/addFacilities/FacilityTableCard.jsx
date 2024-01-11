import React, { useState } from "react";
import DeleteFacilityModal from "./DeleteFacilityModal";
import ViewFacilityModal from "./ViewFacilityModal";

const FacilityTableCard = ({ id, img, facilityName }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{facilityName}</td>
        <td>
          <button
            onClick={() => setViewModal(true)}
            className="py-1 px-5 border bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            View
          </button>
          <button
            onClick={() => setDeleteModal(true)}
            className="py-1 px-4 ms-2 border bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Delete
          </button>
        </td>
      </tr>

      {/* View Modal   */}
      <ViewFacilityModal
        id={id}
        name={facilityName}
        img={img}
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

export default FacilityTableCard;
