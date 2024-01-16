import React, { useState } from "react";
import StudentsTable from "./StudentsTable";
import AddStudentModal from "./AddStudentModal";

const StudentProfileContainer = () => {
  const students = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 20,
      contact: "+1234567890",
      email: "john.doe@example.com",
      gender: "Male",
      address: "123 Main St, Cityville",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      age: 22,
      contact: "+9876543210",
      email: "jane.doe@example.com",
      gender: "Female",
      address: "456 Oak St, Townsville",
    },
    // Add more student data as needed
  ];

  return (
    <div className="w-full bg-white rounded-lg h-[330px] mt-6">
      <StudentsTable students={students} />
      
    </div>
  );
};

export default StudentProfileContainer;
