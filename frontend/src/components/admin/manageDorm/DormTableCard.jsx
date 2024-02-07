import React, { useState } from "react";
import DeleteDormModal from "./DeleteDormModal";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { TableCell, TableRow } from "@/components/ui/table";

const DormTableCard = ({ dorm, i }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <TableRow className="text-gray-500">
      <TableCell className="text-center py-2 px-4 border-b">{i + 1}</TableCell>
      <TableCell className="text-center py-2 px-4 border-b capitalize">
        {dorm.type} Dorm
      </TableCell>
      <TableCell className="text-center py-2 px-4 border-b">{dorm.roomNumber}</TableCell>
      <TableCell className="text-center py-2 px-4 border-b">₱{dorm.monthlyRate}</TableCell>
      <TableCell className="text-center py-2 px-4 border-b">{dorm.status}</TableCell>
      <TableCell className="h-full flex justify-center items-center gap-2 py-2 px-4">
        <FaRegEdit
          className="text-yellow-500 cursor-pointer hover:scale-125 duration-200"
          size={20}
        />
        <FaTrashAlt
          className="text-red-500 cursor-pointer hover:scale-125 duration-200"
          size={20}
          onClick={() => setDeleteModal(true)}
        />
        {deleteModal && (
          <DeleteDormModal
            dorm={dorm}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          />
        )}
      </TableCell>
      {/* Add more cells as needed */}
    </TableRow>
  );
};

export default DormTableCard;
