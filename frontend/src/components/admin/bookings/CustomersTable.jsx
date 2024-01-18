import React, { useState, useEffect } from "react";
import CustomersTableCard from "./CustomersTableCard";
import axios from "axios";

const CustomersTable = () => {
  const [clients, setClients] = useState([]);

  const pendingClients = clients.filter(
    (client) => client.status === "pending"
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

// import React from "react";
// import CostumersTableCard from "./CostumersTableCard";

// const costumers = [
//   {
//     id: 1,
//     bookId: 12345,
//     name: "Justine Lapura",
//     facility: "Conference Room",
//     date: "2023-09-26",
//     startTime: "09:00 AM",
//     endTime: "10:00 AM",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     bookId: 23456,
//     name: "Jireh Lapura",
//     facility: "Convention Center",
//     date: "2023-09-30",
//     startTime: "02:00 PM",
//     endTime: "5:00 PM",
//     status: "Approved",
//   },
//   {
//     id: 3,
//     bookId: 34567,
//     name: "Jethro Lapura",
//     facility: "Audio Visual Center",
//     date: "2023-09-26",
//     startTime: "09:00 AM",
//     endTime: "10:00 AM",
//     status: "Cancelled",
//   },
// ];

// const CostumersTable = () => {
//   return (
//     <div className="hidden md:block w-full mt-12">
//       <table className="w-full">
//         <thead>
//           <tr className="lg:font-bold text-xs lg:text-lg">
//             <th>No.</th>
//             <th>Booking No.</th>
//             <th>Customer's Name</th>
//             <th>Facility</th>
//             <th>Booking Date</th>
//             <th>Start Time</th>
//             <th>End Time</th>
//             <th>Booking Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {costumers.map((costumer) => (
//             <CostumersTableCard key={costumer.id} costumer={costumer} />
//           ))}
//           {/* Add more data rows here */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CostumersTable;
