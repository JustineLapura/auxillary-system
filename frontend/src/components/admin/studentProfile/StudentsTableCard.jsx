import React, { useState } from "react";
import DeleteStudentModal from "./DeleteStudentModal";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const StudentsTableCard = ({ student, i }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <tr className="text-gray-500" key={student._id}>
      <td className="py-2 px-4 border-b">{i + 1}</td>
      <td className="py-2 px-4 border-b">{student.firstName}</td>
      <td className="py-2 px-4 border-b">{student.lastName}</td>
      <td className="py-2 px-4 border-b">{student.age}</td>
      <td className="py-2 px-4 border-b">{student.contact}</td>
      <td className="py-2 px-4 border-b">{student.email}</td>
      <td className="py-2 px-4 border-b capitalize">{student.gender}</td>
      <td className="py-2 px-4 border-b">{student.address}</td>
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
          <DeleteStudentModal
            student={student}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          />
        )}
      </td>
    </tr>
  );
};

export default StudentsTableCard;
