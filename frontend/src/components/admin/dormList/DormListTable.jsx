import React, { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import DeleteDormModal from "./DeleteDormModal";
import SendMessageModal from "./SendMessageModal";
import DormListTableCard from "./DormListTableCard";

const DormListTable = ({ dorms }) => {
  

  

  return (
    <div className="hidden lg:block container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr className="text-gray-900">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Firstname</th>
            <th className="py-2 px-4 border-b">Lastname</th>
            <th className="py-2 px-4 border-b">Dormitory</th>
            <th className="py-2 px-4 border-b">Room No.</th>
            <th className="py-2 px-4 border-b">Date Started</th>
            <th className="py-2 px-4 border-b">Due Date</th>
            <th className="py-2 px-4 border-b">Action</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {dorms.map((dorm, i) => (
            <DormListTableCard
              i={i}
              key={dorm._id}
              dorm={dorm}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DormListTable;
