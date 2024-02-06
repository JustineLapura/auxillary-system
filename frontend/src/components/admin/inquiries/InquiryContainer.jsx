import React, { useState, useEffect } from "react";
import InquiryTable from "./InquiryTable";
import axios from "axios";

const InquiryContainer = () => {
  const [inquiries, setInquiries] = useState([]);
  // console.log(dorms);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/inquiry`
        );
        setInquiries(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchInquiries();
  }, []);
  return (
    <>
      <InquiryTable inquiries={inquiries} />
    </>
  );
};

export default InquiryContainer;
