import React from "react";
import CustomersGridCard from "./CustomersGridCard";

const costumers = [
  {
    id: 1,
    bookId: 12345,
    name: "Justine Lapura",
    facility: "Conference Room",
    date: "2023-09-26",
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    status: "Pending",
  },
  {
    id: 2,
    bookId: 23456,
    name: "Jireh Lapura",
    facility: "Convention Center",
    date: "2023-09-30",
    startTime: "02:00 PM",
    endTime: "5:00 PM",
    status: "Approved",
  },
  {
    id: 3,
    bookId: 34567,
    name: "Jethro Lapura",
    facility: "Audio Visual Center",
    date: "2023-09-26",
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    status: "Cancelled",
  },
];

const CustomersGrid = () => {
  return (
    <div className="md:hidden w-full grid place-items-center gap-4 mt-8">
      {costumers.map((costumer) => (
        <CustomersGridCard key={costumer.id} costumer={costumer} />
      ))}
    </div>
  );
};

export default CustomersGrid;
