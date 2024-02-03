import React, { useState, useEffect } from "react";
import CustomersTableCard from "./CustomersTableCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CustomersTable = ({ clients }) => {
  const pendingClients = clients.filter(
    (client) => client.status === "pending"
  );

  return (
    <div className="hidden md:block w-full h-[400px] mt-4">
      <Table className="w-full border">
        <TableCaption className="text-lg">A list of Reservations.</TableCaption>
        <TableRow className="lg:font-bold text-xs lg:text-lg">
          <TableHead>No.</TableHead>
          <TableHead>Client's Name</TableHead>
          <TableHead>Facility</TableHead>
          <TableHead>Booking Date</TableHead>
          <TableHead>Start Time</TableHead>
          <TableHead>End Time</TableHead>
          <TableHead>Agency</TableHead>
          <TableHead>Booking Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
        <TableBody>
          {pendingClients.map((client, index) => (
            <CustomersTableCard
              key={client._id}
              client={client}
              index={index}
            />
          ))}
          {/* Add more data rows here */}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersTable;
