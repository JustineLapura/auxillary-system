import React from "react";

const InquiryTable = ({ inquiries }) => {
  return (
    <div className="hidden lg:block container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Contact</th>
            <th className="py-2 px-4 border-b">Gmail</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id}>
              <td className="py-2 px-4 border-b">{inquiry.id}</td>
              <td className="py-2 px-4 border-b">{inquiry.name}</td>
              <td className="py-2 px-4 border-b">{inquiry.address}</td>
              <td className="py-2 px-4 border-b">{inquiry.contact}</td>
              <td className="py-2 px-4 border-b">{inquiry.gmail}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryTable;