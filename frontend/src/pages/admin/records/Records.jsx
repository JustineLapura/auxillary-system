import React, { useState } from "react";
import RecordsTable from "../../../components/admin/records/RecordsTable";
import Header from "../../../components/admin/records/Header";

const Records = () => {
  

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <Header />
      
      <RecordsTable />
    </div>
  );
};

export default Records;
