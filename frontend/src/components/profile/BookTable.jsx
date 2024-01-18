import React, { useState, useEffect } from "react";

import axios from "axios";
import BookTableCard from "./bookTableCard";

const BookTable = () => {
  const [clients, setClients] = useState([]);

  //   const pendingClients = clients.filter(
  //     (client) => client.status === "pending"
  //   );

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/booking`);
        setClients(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="hidden md:block w-full h-[350px] mt-12">
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
          {clients.map((client, index) => (
            <BookTableCard key={client._id} client={client} index={index} />
          ))}
          {/* Add more data rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
