import React, { useState, useEffect } from "react";
import StudentsTable from "./StudentsTable";
import axios from "axios";

const StudentProfileContainer = () => {
  const [students, setStudents] = useState([]);
  console.log("Students from StudentContainer ", students);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/student`);
        setStudents(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg h-[330px] mt-6">
      <StudentsTable students={students} />
      
    </div>
  );
};

export default StudentProfileContainer;
