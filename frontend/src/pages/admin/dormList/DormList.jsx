import React from "react";
import TopHeader from "../../../components/admin/dormList/TopHeader";
import DormListContainer from "../../../components/admin/dormList/DormListContainer";

const DormList = () => {
  return (
    <div className="w-full h-[85vh] p-5 bg-gray-200">
      <TopHeader />
      <DormListContainer />
    </div>
  );
};

export default DormList;
