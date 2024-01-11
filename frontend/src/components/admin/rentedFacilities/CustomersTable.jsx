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
          <tr className="text-xs md:text-base font-semibold text-gray-700 py-2">
            <td>Conference Room</td>
            <td>Jireh Lapura</td>
            <td>09/22/2021</td>
            <td>2:00 PM</td>
          </tr>
          <tr className="text-xs md:text-base font-semibold text-gray-700 py-2">
            <td>Convention Center</td>
            <td>Jireh Lapura</td>
            <td>09/22/2021</td>
            <td>2:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
