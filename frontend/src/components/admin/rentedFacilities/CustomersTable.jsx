import React from "react";
import CustomersTableCard from "./RentedFacilityTable";

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
  return (
    <div className="w-full mt-10 hidden sm:block">
      <table className="w-full rounded-lg">
        <thead className="md:text-2xl text-left">
          <tr>
            <th>Facility Name</th>
            <th>Booked By</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {rentedFacilities.map((rentedFacility) => (
            <CustomersTableCard
              key={rentedFacility.id}
              facility={rentedFacility.facility}
              name={rentedFacility.name}
              date={rentedFacility.date}
              time={rentedFacility.time}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
