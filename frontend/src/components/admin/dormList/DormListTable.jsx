import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const DormListTable = ({ dorms }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="hidden lg:block container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr className="text-gray-900">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
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
            <tr key={dorm.id} className="text-gray-500">
              <td className="py-2 px-4 border-b">{i + 1}</td>
              <td className="py-2 px-4 border-b">{dorm.name}</td>
              <td className="py-2 px-4 border-b capitalize">{dorm.type}</td>
              <td className="py-2 px-4 border-b">{dorm.roomNumber}</td>
              <td className="py-2 px-4 border-b">
                {formatDate(dorm.dueStart)}
              </td>
              <td className="py-2 px-4 border-b">{formatDate(dorm.dueDate)}</td>
              <td className="h-full flex justify-center items-center gap-2 py-2 px-4">
                <FaRegEdit
                  className="text-yellow-500 cursor-pointer hover:scale-125 duration-200"
                  size={20}
                />
                <FaTrashAlt
                  className="text-red-500 cursor-pointer hover:scale-125 duration-200"
                  size={20}
                />
              </td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DormListTable;
