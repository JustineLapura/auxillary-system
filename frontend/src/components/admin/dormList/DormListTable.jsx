import React, { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import DeleteDormModal from "./DeleteDormModal";
import SendMessageModal from "./SendMessageModal";
import DormListTableCard from "./DormListTableCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DormListTable = ({ dorms }) => {
  return (
    <div className="bg-white mt-6 p-4 rounded ">
      <Table className="overflow-y-auto">
        <TableCaption className="text-lg">
          {dorms.length > 0
            ? dorms.length + " list of Dorms."
            : "No list of Dorms"}
        </TableCaption>
        <TableHeader>
          <TableRow className="text-gray-900">
            <TableHead className="text-center">ID</TableHead>
            <TableHead className="text-center">Firstname</TableHead>
            <TableHead className="text-center">Lastname</TableHead>
            <TableHead className="text-center">Dormitory</TableHead>
            <TableHead className="text-center">Room No.</TableHead>
            <TableHead className="text-center">Date Started</TableHead>
            <TableHead className="text-center">Due Date</TableHead>
            <TableHead className="text-center">Action</TableHead>
            {/* Add more columns as needed */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dorms.map((dorm, i) => (
            <DormListTableCard i={i} key={dorm._id} dorm={dorm} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DormListTable;
