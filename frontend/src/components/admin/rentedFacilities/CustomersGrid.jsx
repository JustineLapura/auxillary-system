import React from "react";
import RentedFacilityGridCard from "./RentedFacilityGridCard";

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

const CustomersGrid = () => {
  return (
    <div className="sm:hidden grid gap-4 place-items-center mt-8">
      {rentedFacilities.map((rentedFacility, index) => (
        <RentedFacilityGridCard
          key={rentedFacility.id}
          facility={rentedFacility.facility}
          name={rentedFacility.name}
          date={rentedFacility.date}
          time={rentedFacility.time}
        />
      ))}
    </div>
  );
};

export default CustomersGrid;
