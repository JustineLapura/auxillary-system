import React, { useState, useEffect } from "react";
import CustomersTableCard from "./CustomersTableCard";
import axios from "axios";

const CustomersTable = ({ clients }) => {
  const pendingClients = clients.filter(
    (client) => client.status === "pending"
  );

  return (
    <div className="hidden md:block w-full h-[400px] mt-12">
      <table className="min-w-full ">
        <thead>
          <tr className="lg:font-bold text-xs lg:text-lg">
            <th>No.</th>
            <th>Client&apos;s Name</th> {/* Fix the single quote here */}
            <th>Facility</th>
            <th>Booking Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Agency</th>
            <th>Booking Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingClients.map((client, index) => (
            <CustomersTableCard
              key={client._id}
              client={client}
              index={index}
            />
          ))}
          {/* Add more data rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
