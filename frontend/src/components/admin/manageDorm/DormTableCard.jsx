import React, { useState } from "react";
import DeleteDormModal from "./DeleteDormModal";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const DormTableCard = ({ dorm, i }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <tr className="text-gray-500">
      <td className="py-2 px-4 border-b">{i + 1}</td>
      <td className="py-2 px-4 border-b capitalize">{dorm.type} Dorm</td>
      <td className="py-2 px-4 border-b">{dorm.roomNumber}</td>
      <td className="py-2 px-4 border-b">₱{dorm.monthlyRate}</td>
      <td className="py-2 px-4 border-b">{dorm.status}</td>
      <td className="h-full flex justify-center items-center gap-2 py-2 px-4">
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
      </td>
      {/* Add more cells as needed */}
    </tr>
  );
};

export default DormTableCard;
