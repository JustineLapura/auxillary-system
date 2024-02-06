import React from "react";
import TopHeader from "../../../components/admin/manageDorm/TopHeader";
import DormContainer from "../../../components/admin/manageDorm/DormContainer";

const ManageDorm = () => {
  return (
    <div className="w-full h-[85vh] p-5 bg-gray-200">
      <TopHeader />
      <DormContainer />
    </div>
  );
};

export default ManageDorm;
