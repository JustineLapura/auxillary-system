import React, { useState, useEffect } from "react";
import CustomersTableCard from "./RentedFacilityTable";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const CustomersTable = () => {
  const [clients, setClients] = useState([]);

  const approvedClients = clients.filter(
    (client) => client.status === "approved"
  );

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/booking`
        );
        setClients(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="w-full h-[320px] hidden sm:block">
      <Table className="w-full rounded-sm">
        <TableCaption className="text-lg">
          {approvedClients.length > 0
            ? approvedClients.length + " list of Rented Facilities."
            : "No list of Reservartions"}
        </TableCaption>
        <TableHeader className="md:text-lg text-center uppercase">
          <TableRow>
            <TableHead className="text-center">Facility Name</TableHead>
            <TableHead className="text-center">Booked By</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Time Start</TableHead>
            <TableHead className="text-center">Time End</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {approvedClients.map((client) => (
            <CustomersTableCard key={client._id} client={client} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersTable;
