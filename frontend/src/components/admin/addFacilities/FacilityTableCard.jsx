import React, { useState } from "react";
import DeleteFacilityModal from "./DeleteFacilityModal";
import ViewFacilityModal from "./ViewFacilityModal";
import { TableCell, TableRow } from "@/components/ui/table";

const FacilityTableCard = ({ facility, no }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  return (
    <>
      <TableRow>
        <TableCell className="text-center">{no + 1}</TableCell>
        <TableCell className="text-center">{facility.name}</TableCell>
        <TableCell className="text-center text-xs sm:text-sm">
          <button
            onClick={() => setViewModal(true)}
            className="py-1 px-5 border bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            View
          </button>
          <button
            onClick={() => setDeleteModal(true)}
            className="py-1 px-4 sm:ms-2 border bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Delete
          </button>
        </TableCell>
      </TableRow>

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
