// src/components/DormListContainer.js
import React, { useState, useEffect } from "react";
import DormListTable from "./DormListTable";
import axios from "axios";

const DormListContainer = () => {
  const [dorms, setDorms] = useState([]);
  console.log(dorms);

  useEffect(() => {
    const fetchDorms = async () => {
      try {
        const response = await axios.get(`https://auxillary-services-api-rosy.vercel.app/api/dormList`);
        setDorms(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchDorms();
  }, []);

  return (
    <>
      <DormListTable dorms={dorms} />
    </>
  );
};

export default DormListContainer;
