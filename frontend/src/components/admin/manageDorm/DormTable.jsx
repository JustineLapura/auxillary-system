// src/components/DormTable.js
import axios from "axios";
import React, { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import DeleteDormModal from "./DeleteDormModal";

const DormTable = ({ dorms }) => {
  const [deleteModal, setDeleteModal] = useState(false);
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
            <tr key={dorm._id} className="text-gray-500">
              <td className="py-2 px-4 border-b">{i + 1}</td>
              <td className="py-2 px-4 border-b capitalize">
                {dorm.type} Dorm
              </td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DormTable;
