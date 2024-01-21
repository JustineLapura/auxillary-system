import React, { useState } from "react";
import DeleteDormModal from "./DeleteDormModal";
import SendMessageModal from "./SendMessageModal";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";

const DormListTableCard = ({ i, dorm }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <tr key={dorm._id} className="text-gray-500">
      <td className="py-2 px-4 border-b">{i + 1}</td>
      <td className="py-2 px-4 border-b">{dorm.firstName}</td>
      <td className="py-2 px-4 border-b">{dorm.lastName}</td>
      <td className="py-2 px-4 border-b capitalize">{dorm.type}</td>
      <td className="py-2 px-4 border-b">{dorm.roomNumber}</td>
      <td className="py-2 px-4 border-b">{formatDate(dorm.dueStart)}</td>
      <td className="py-2 px-4 border-b">{formatDate(dorm.dueDate)}</td>
      <td className="h-full flex justify-center items-center gap-2 py-2 px-4">
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
      </td>
      {/* Add more cells as needed */}
    </tr>
  );
};

export default DormListTableCard;
