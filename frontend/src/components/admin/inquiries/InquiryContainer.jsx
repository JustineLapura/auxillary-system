import React from "react";
import InquiryTable from "./InquiryTable";

const InquiryContainer = () => {
  const inquiries = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, Cityville",
      contact: "+1234567890",
      gmail: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      address: "456 Oak St, Townsville",
      contact: "+9876543210",
      gmail: "jane.doe@example.com",
    },
    // Add more inquiry data as needed
  ];
  return (
    <div className="w-full bg-white rounded-lg h-[330px] mt-12">
      <InquiryTable inquiries={inquiries} />
    </div>
  );
};

export default InquiryContainer;