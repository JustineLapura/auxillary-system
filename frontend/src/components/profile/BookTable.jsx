import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import BookTableCard from "./bookTableCard";

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
          {personalDisplay.map((client, index) => (
            <BookTableCard key={client._id} client={client} index={index} />
          ))}
          {/* Add more data rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
