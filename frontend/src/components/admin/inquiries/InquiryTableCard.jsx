import React, { useState } from "react";
import ViewInquiryModal from "./ViewInquiryModal";
import { TableCell, TableRow } from "@/components/ui/table";

const InquiryTableCard = ({ inquiry, i }) => {
  const [viewInquiry, setViewInquiry] = useState(false);

  return (
    <TableRow>
      <TableCell className="py-2 px-4 border-b">{i + 1}</TableCell>
      <TableCell className="py-2 px-4 border-b">
        {inquiry.firstName} {inquiry.lastName}
      </TableCell>
      <TableCell className="py-2 px-4 border-b">{inquiry.address}</TableCell>
      <TableCell className="py-2 px-4 border-b">+63{inquiry.phoneNumber}</TableCell>
      <TableCell className="py-2 px-4 border-b">{inquiry.email}</TableCell>
      <TableCell
        className="py-2 px-2 border-b bg-blue-500 text-white font-bold cursor-pointer hover:bg-blue-600 duration-200 rounded"
        onClick={() => setViewInquiry(true)}
      >
        Read More
      </TableCell>
      {viewInquiry && (
        <ViewInquiryModal
          inquiry={inquiry}
          viewInquiry={viewInquiry}
          setViewInquiry={setViewInquiry}
        />
      )}
      {/* Add more cells as needed */}
    </TableRow>
  );
};

export default InquiryTableCard;
