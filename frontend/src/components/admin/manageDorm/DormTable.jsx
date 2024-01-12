// src/components/DormTable.js
import React from "react";

const DormTable = ({ dorms }) => {
  return (
    <div className="hidden lg:block container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Dormitory</th>
            <th className="py-2 px-4 border-b">Room No.</th>
            <th className="py-2 px-4 border-b">Monthly Rate</th>
            <th className="py-2 px-4 border-b">Status</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {dorms.map((dorm) => (
            <tr key={dorm.id}>
              <td className="py-2 px-4 border-b">{dorm.id}</td>
              <td className="py-2 px-4 border-b">{dorm.dormitory}</td>
              <td className="py-2 px-4 border-b">{dorm.roomNo}</td>
              <td className="py-2 px-4 border-b">{dorm.monthlyRate}</td>
              <td className="py-2 px-4 border-b">{dorm.status}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DormTable;