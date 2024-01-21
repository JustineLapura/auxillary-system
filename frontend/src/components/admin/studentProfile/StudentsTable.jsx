import axios from "axios";
import React, { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import DeleteStudentModal from "./DeleteStudentModal";
import StudentsTableCard from "./StudentsTableCard";

const StudentsTable = ({ students }) => {
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
            <StudentsTableCard key={student._id} student={student} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
