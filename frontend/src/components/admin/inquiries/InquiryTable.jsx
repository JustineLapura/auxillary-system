import React from "react";
import InquiryTableCard from "./InquiryTableCard";

const InquiryTable = ({ inquiries }) => {
  return (
    <div className="hidden lg:block container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Contact</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Inquiries</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry, i) => (
            <InquiryTableCard inquiry={inquiry} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryTable;
