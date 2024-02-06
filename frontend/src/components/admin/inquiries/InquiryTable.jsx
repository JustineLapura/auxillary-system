import React from "react";
import InquiryTableCard from "./InquiryTableCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InquiryTable = ({ inquiries }) => {
  return (
    <div className="bg-white mt-12 rounded p-4">
      <Table>
        <TableCaption className="text-lg">
          {inquiries.length > 0
            ? inquiries.length + " list of Inquiries."
            : "No list of Inquiries"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">No</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="min-w-[200px] text-center">Address</TableHead>
            <TableHead className="text-center">Contact</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Inquiries</TableHead>
            {/* Add more columns as needed */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {inquiries.map((inquiry, i) => (
            <InquiryTableCard inquiry={inquiry} i={i} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InquiryTable;
