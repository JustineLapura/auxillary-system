// src/components/DormContainer.js
import React from "react";
import DormTable from "./DormTable";

const DormContainer = () => {
  const dorms = [
    {
      id: 1,
      dormitory: "Male Dorm",
      roomNo: "101",
      monthlyRate: 500,
      status: "Occupied",
    },
    {
      id: 2,
      dormitory: "Female Dorm",
      roomNo: "201",
      monthlyRate: 550,
      status: "Vacant",
    },
    // Add more dorm data as needed
  ];
  return (
    <div className="w-full bg-white rounded-lg h-[330px] mt-6">
      <DormTable dorms={dorms} />
    </div>
  );
};

export default DormContainer;