import React, { useState, useEffect } from "react";
import FacilityTableCard from "./FacilityTableCard";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FacilityTable = ({ facilities }) => {
  return (
    <div className="w-full hidden sm:block">
      <Table className="w-full">
        <TableCaption className="text-lg">
          {facilities.length > 0
            ? facilities.length + " list of Facilities."
            : "No list of Facilities"}
        </TableCaption>
        <TableHeader className="text-lg uppercase tracking-wide">
          <TableRow>
            <TableHead className="text-center">No.</TableHead>
            <TableHead className="text-center">Facility Name</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-sm sm:text-base font-semibold text-gray-600">
          {facilities &&
            facilities.map((facility, i) => (
              <FacilityTableCard
                key={facility._id}
                no={i}
                facility={facility}
              />
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FacilityTable;
