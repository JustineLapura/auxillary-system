import React, { useState, useEffect } from "react";
import InquiryTable from "./InquiryTable";
import axios from "axios";

const InquiryContainer = () => {
  const [inquiries, setInquiries] = useState([]);
  // console.log(dorms);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/inquiry`);
        setInquiries(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchInquiries();
  }, []);
  return (
    <div className="w-full bg-white rounded-lg h-[400px] mt-12">
      <InquiryTable inquiries={inquiries} />
    </div>
  );
};

export default InquiryContainer;
