// src/components/DormTable.js
import axios from "axios";
import React, { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import DeleteDormModal from "./DeleteDormModal";
import DormTableCard from "./DormTableCard";

const DormTable = ({ dorms }) => {
  // const handleDeleteDorm = async (id) => {
  //   try {
  //     await axios.delete("http://localhost:4000/api/dormManagement/" + id);
  //     enqueueSnackbar("Dorm has been deleted", { variant: "success" });
  //     // Reload the page upon successful submission
  //     window.location.reload();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="hidden lg:block container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 text-center ">
        <thead>
          <tr className="text-gray-900">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Dormitory</th>
            <th className="py-2 px-4 border-b">Room No.</th>
            <th className="py-2 px-4 border-b">Monthly Rate</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {dorms.map((dorm, i) => (
            <DormTableCard key={dorm._id} dorm={dorm} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DormTable;
