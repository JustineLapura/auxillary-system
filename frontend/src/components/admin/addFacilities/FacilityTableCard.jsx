import React, { useState } from "react";
import DeleteFacilityModal from "./DeleteFacilityModal";
import ViewFacilityModal from "./ViewFacilityModal";

const FacilityTableCard = ({ facility, no }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  return (
    <>
      <tr>
        <td>{no + 1}</td>
        <td>{facility.name}</td>
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

export default FacilityTableCard;
