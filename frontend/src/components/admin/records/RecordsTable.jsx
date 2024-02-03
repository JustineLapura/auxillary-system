import React, { useState, useEffect } from "react";
import RecordsTableCard from "./RecordsTableCard";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RecordsTable = () => {
  const [clients, setClients] = useState([]);

  const completedClients = clients.filter(
    (client) => client.status === "completed"
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
    <div className="w-full h-[250px] mt-10 hidden sm:block">
      <Table className="w-full rounded-lg">
        <TableHeader className="md:text-lg text-center uppercase">
          <TableRow>
            <TableHead className="text-center">Client's Name</TableHead>
            <TableHead className="text-center">Facility</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Time Start</TableHead>
            <TableHead className="text-center">Time End</TableHead>
            <TableHead className="text-center">Price Rate</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {completedClients.map((client) => (
            <RecordsTableCard key={client._id} client={client} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecordsTable;
