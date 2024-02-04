import React, { useState } from "react";
import DeleteDormModal from "./DeleteDormModal";
import SendMessageModal from "./SendMessageModal";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { TableCell, TableRow } from "@/components/ui/table";

const DormListTableCard = ({ i, dorm }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <TableRow key={dorm._id} className="text-gray-500">
      <TableCell className="py-2 px-4 border-b">{i + 1}</TableCell>
      <TableCell className="py-2 px-4 border-b">{dorm.firstName}</TableCell>
      <TableCell className="py-2 px-4 border-b">{dorm.lastName}</TableCell>
      <TableCell className="py-2 px-4 border-b capitalize">{dorm.type}</TableCell>
      <TableCell className="py-2 px-4 border-b">{dorm.roomNumber}</TableCell>
      <TableCell className="py-2 px-4 border-b">{formatDate(dorm.dueStart)}</TableCell>
      <TableCell className="py-2 px-4 border-b">{formatDate(dorm.dueDate)}</TableCell>
      <TableCell className="h-full flex justify-center items-center gap-2 py-2 px-4">
        <SiGooglemessages
          className="text-blue-900 cursor-pointer hover:scale-125 duration-200"
          size={20}
          onClick={() => setMessageModal(true)}
        />
        <FaRegEdit
          className="text-yellow-500 cursor-pointer hover:scale-125 duration-200"
          size={20}
        />
        <FaTrashAlt
          className="text-red-500 cursor-pointer hover:scale-125 duration-200"
          size={20}
          onClick={() => setDeleteModal(true)}
        />
        {messageModal && (
          <SendMessageModal
            dorm={dorm}
            messageModal={messageModal}
            setMessageModal={setMessageModal}
          />
        )}
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

export default DormListTableCard;
