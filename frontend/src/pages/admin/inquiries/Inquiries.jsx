import React from "react";
import TopHeader from "../../../components/admin/inquiries/TopHeader";
import InquiryContainer from "../../../components/admin/inquiries/InquiryContainer";

const Inquiries = () => {
  return (
    <div className="w-ful p-5 h-[85vh] bg-gray-200">
      <TopHeader />
      <InquiryContainer />
    </div>
  );
};

export default Inquiries;
