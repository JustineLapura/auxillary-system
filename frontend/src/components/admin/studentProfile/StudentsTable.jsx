import axios from "axios";
import React, { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import DeleteStudentModal from "./DeleteStudentModal";
import StudentsTableCard from "./StudentsTableCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StudentsTable = ({ students }) => {
  return (
    <div className="bg-white container mx-auto p-4 rounded mt-6">
      <Table>
        <TableCaption className="text-lg">
          {students.length > 0
            ? students.length + " list of Students."
            : "No list of Students"}
        </TableCaption>
        <TableHeader>
          <TableRow className="text-gray-900">
            <TableHead className="text-center">ID</TableHead>
            <TableHead className="text-center">Firstname</TableHead>
            <TableHead className="text-center">Lastname</TableHead>
            <TableHead className="text-center">Age</TableHead>
            <TableHead className="text-center">Contact</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Gender</TableHead>
            <TableHead className="min-w-[200px] text-center">Address</TableHead>
            <TableHead className="text-center">Action</TableHead>
            {/* Add more columns as needed */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, i) => (
            <StudentsTableCard key={student._id} student={student} i={i} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentsTable;
