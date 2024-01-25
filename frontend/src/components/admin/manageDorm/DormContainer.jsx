// src/components/DormContainer.js
import React, { useState, useEffect } from "react";
import DormTable from "./DormTable";
import axios from "axios";

const DormContainer = () => {
  const [dorms, setDorms] = useState([]);

  useEffect(() => {
    const fetchDorms = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/dormManagement`
        );
        setDorms(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchDorms();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg h-[330px] mt-6">
      <DormTable dorms={dorms} />
    </div>
  );
};

export default DormContainer;
