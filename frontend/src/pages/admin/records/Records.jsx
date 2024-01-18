import React from "react";
import RecordsTable from "../../../components/admin/records/RecordsTable";
import Header from "../../../components/admin/records/Header";

const Records = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <Header />
      <RecordsTable />
      <div className="w-full flex justify-end px-4">
        <button
          className="w-28 p-3 rounded-lg font-semibold bg-green-700 text-white"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default Records;
