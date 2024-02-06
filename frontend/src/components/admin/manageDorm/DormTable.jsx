// src/components/DormTable.js
import axios from "axios";
import React, { useState } from "react";
import DormTableCard from "./DormTableCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DormTable = ({ dorms }) => {
  return (
    <div className="bg-white p-4 rounded mt-6">
      <Table>
        <TableCaption className="text-lg">
          {dorms.length > 0
            ? dorms.length + " list of Dorms."
            : "No list of Dorms"}
        </TableCaption>
        <TableHeader>
          <TableRow className="text-gray-900">
            <TableHead className="text-center">ID</TableHead>
            <TableHead className="text-center">Dormitory</TableHead>
            <TableHead className="text-center">Room No.</TableHead>
            <TableHead className="text-center">Monthly Rate</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
            {/* Add more columns as needed */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dorms.map((dorm, i) => (
            <DormTableCard key={dorm._id} dorm={dorm} i={i} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DormTable;
