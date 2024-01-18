import React, { useState, useEffect } from "react";
import CustomersTableCard from "./RentedFacilityTable";
import axios from "axios";

const rentedFacilities = [
  {
    id: 1,
    facility: "Conference Room",
    name: "Jireh Lapura",
    date: "09/22/2021",
    time: "2:00 PM",
  },
  {
    id: 2,
    facility: "SSU Gymnasium",
    name: "Justine Lapura",
    date: "09/25/2021",
    time: "8:00 AM",
  },
  {
    id: 3,
    facility: "Convention Room",
    name: "Jethro Lapura",
    date: "09/31/2021",
    time: "5:00 PM",
  },
];

const CustomersTable = () => {
  const [clients, setClients] = useState([]);

  const approvedClients = clients.filter(
    (client) => client.status === "approved"
  );

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
    <div className="w-full h-[250px] mt-10 hidden sm:block">
      <table className="w-full rounded-lg">
        <thead className="md:text-2xl text-left">
          <tr>
            <th>Facility Name</th>
            <th>Booked By</th>
            <th>Date</th>
            <th>Time Start</th>
            <th>Time End</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {approvedClients.map((client) => (
            <CustomersTableCard
              key={client._id}
              client={client}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
