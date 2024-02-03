import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import BookTableCard from "./BookTableCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BookTable = () => {
  const [clients, setClients] = useState([]);
  const { user } = useContext(AuthContext).user || {};
  console.log(user);
  const personalDisplay = clients.filter(
    (client) =>
      client.firstName === user.firstName && client.lastName === user.lastName
  );
  console.log(personalDisplay);

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
    <div className="hidden md:block w-full h-[350px] mt-12">
      <Table className="min-w-full ">
        <TableHeader>
          <TableRow className="lg:font-bold text-xs lg:text-lg uppercase">
            <TableHead className="text-center">No.</TableHead>
            <TableHead className="text-center">Client's Name</TableHead>
            <TableHead className="text-center">Facility</TableHead>
            <TableHead className="text-center">Booking Date</TableHead>
            <TableHead className="text-center">Start Time</TableHead>
            <TableHead className="text-center">End Time</TableHead>
            <TableHead className="text-center">Agency</TableHead>
            <TableHead className="text-center">Booking Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {personalDisplay.map((client, index) => (
            <BookTableCard key={client._id} client={client} index={index} />
          ))}
          {/* Add more data rows here */}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookTable;
