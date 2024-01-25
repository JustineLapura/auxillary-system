import React, { useState, useEffect } from "react";
import RecordsTableCard from "./RecordsTableCard";
import axios from "axios";

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
      <table className="w-full rounded-lg">
        <thead className="md:text-2xl text-center">
          <tr>
            <th>Client's Name</th>
            <th>Facility</th>
            <th>Date</th>
            <th>Time Start</th>
            <th>Time End</th>
            <th>Price Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {completedClients.map((client) => (
            <RecordsTableCard key={client._id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordsTable;
