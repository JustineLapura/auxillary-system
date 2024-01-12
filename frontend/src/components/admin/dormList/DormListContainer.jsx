// src/components/DormListContainer.js
import React from "react";
import DormListTable from "./DormListTable";

const DormListContainer = () => {
  const dorms = [
    {
      id: 1,
      name: "John Doe",
      dormitory: "Male Dorm",
      roomNo: "101",
      dateStarted: "2024-01-01",
      dueDate: "2024-02-01",
    },
    {
      id: 2,
      name: "Jane Doe",
      dormitory: "Female Dorm",
      roomNo: "201",
      dateStarted: "2024-01-15",
      dueDate: "2024-02-15",
    },
    // Add more dorm data as needed
  ];
  return (
    <div className="w-full bg-white rounded-lg h-[330px] mt-6">
      <DormListTable dorms={dorms} />
    </div>
  );
};

export default DormListContainer;
