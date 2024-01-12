import React from "react";

const StudentsTable = ({ students }) => {
  return (
    <div className="hidden lg:block container mx-auto p-4">
      <table className=" min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Contact</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Address</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="py-2 px-4 border-b">{student.id}</td>
              <td className="py-2 px-4 border-b">{student.firstName}</td>
              <td className="py-2 px-4 border-b">{student.lastName}</td>
              <td className="py-2 px-4 border-b">{student.age}</td>
              <td className="py-2 px-4 border-b">{student.contact}</td>
              <td className="py-2 px-4 border-b">{student.email}</td>
              <td className="py-2 px-4 border-b">{student.gender}</td>
              <td className="py-2 px-4 border-b">{student.address}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;