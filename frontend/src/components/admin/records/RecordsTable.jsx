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
    <div className="w-full h-[250px] mt-10">
      <Table className="w-full rounded-lg">
        <TableCaption className="text-lg">
          {completedClients.length > 0
            ? completedClients.length + " list of Reports."
            : "No list of Reports"}
        </TableCaption>
        <TableHeader className="md:text-lg text-center uppercase">
          <TableRow>
            <TableHead className="min-w-[120px] text-center">
              Client's Name
            </TableHead>
            <TableHead className="min-w-[120px] text-center">
              Facility
            </TableHead>
            <TableHead className="min-w-[120px] text-center">Date</TableHead>
            <TableHead className="min-w-[120px] text-center">
              Time Start
            </TableHead>
            <TableHead className="min-w-[120px] text-center">
              Time End
            </TableHead>
            <TableHead className="min-w-[120px] text-center">
              Price Rate
            </TableHead>
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
