import axios from "axios";
import React, { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import DeleteStudentModal from "./DeleteStudentModal";

const StudentsTable = ({ students }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  // const handleDeleteStudent = async (id) => {
  //   try {
  //     await axios.delete("http://localhost:4000/api/student/" + id);
  //     enqueueSnackbar("Student has been deleted", { variant: "success" });
  //     // Reload the page upon successful submission
  //     window.location.reload();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="hidden lg:block container mx-auto p-4">
      <table className=" min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr className="text-gray-900">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Contact</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Action</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <>
              <tr className="text-gray-500">
                <td className="py-2 px-4 border-b">{i + 1}</td>
                <td className="py-2 px-4 border-b">{student.firstName}</td>
                <td className="py-2 px-4 border-b">{student.lastName}</td>
                <td className="py-2 px-4 border-b">{student.age}</td>
                <td className="py-2 px-4 border-b">{student.contact}</td>
                <td className="py-2 px-4 border-b">{student.email}</td>
                <td className="py-2 px-4 border-b capitalize">
                  {student.gender}
                </td>
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
              {/* Add more cells as needed */}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
