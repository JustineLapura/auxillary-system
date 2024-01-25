import React, { useState, useEffect } from "react";
import CustomersTableCard from "./RentedFacilityTable";
import axios from "axios";

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
    <div className="w-full h-[250px] mt-10 hidden sm:block">
      <table className="w-full rounded-lg">
        <thead className="md:text-2xl text-center">
          <tr>
            <th>Facility Name</th>
            <th>Booked By</th>
            <th>Date</th>
            <th>Time Start</th>
            <th>Time End</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {approvedClients.map((client) => (
            <CustomersTableCard key={client._id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
