import React, { useState } from "react";
import DeleteStudentModal from "./DeleteStudentModal";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { TableCell, TableRow } from "@/components/ui/table";

const StudentsTableCard = ({ student, i }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <TableRow className="text-gray-500" key={student._id}>
      <TableCell className="py-2 px-4 border-b">{i + 1}</TableCell>
      <TableCell className="py-2 px-4 border-b capitalize">{student.firstName}</TableCell>
      <TableCell className="py-2 px-4 border-b capitalize">{student.lastName}</TableCell>
      <TableCell className="py-2 px-4 border-b">{student.age}</TableCell>
      <TableCell className="py-2 px-4 border-b">0{student.contact}</TableCell>
      <TableCell className="py-2 px-4 border-b">{student.email}</TableCell>
      <TableCell className="py-2 px-4 border-b capitalize">
        {student.gender}
      </TableCell>
      <TableCell className="py-2 px-4 border-b text-center">{student.address}</TableCell>
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
          <DeleteStudentModal
            student={student}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default StudentsTableCard;
