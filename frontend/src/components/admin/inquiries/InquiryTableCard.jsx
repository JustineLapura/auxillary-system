import React, { useState } from "react";
import ViewInquiryModal from "./ViewInquiryModal";

const InquiryTableCard = ({ inquiry, i }) => {
  const [viewInquiry, setViewInquiry] = useState(false);

  return (
    <tr>
      <td className="py-2 px-4 border-b">{i + 1}</td>
      <td className="py-2 px-4 border-b">
        {inquiry.firstName} {inquiry.lastName}
      </td>
      <td className="py-2 px-4 border-b">{inquiry.address}</td>
      <td className="py-2 px-4 border-b">+63{inquiry.phoneNumber}</td>
      <td className="py-2 px-4 border-b">{inquiry.email}</td>
      <td
        className="py-2 px-4 border-b bg-blue-500 text-white font-bold cursor-pointer hover:bg-blue-600 duration-200"
        onClick={() => setViewInquiry(true)}
      >
        Read More
      </td>
      {viewInquiry && (
        <ViewInquiryModal
          inquiry={inquiry}
          viewInquiry={viewInquiry}
          setViewInquiry={setViewInquiry}
        />
      )}
      {/* Add more cells as needed */}
    </tr>
  );
};

export default InquiryTableCard;
