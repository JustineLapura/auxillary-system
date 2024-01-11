import React from "react";
import Facilities from "../../../components/admin/dashboard/Facilities";
import Dormitories from "../../../components/admin/dashboard/Domitories";

const Dashboard = () => {
  return (
    <div className="w-full ">
      <div className="w-full h-full lg:flex justify-between gap-4 py-6 px-8">
        <h1 className="text-2xl lg:text-5xl font-black text-gray-950 text-center">
          Welcome Admin!
        </h1>
        <div className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-500">
          <p>September 26, 2023</p>
          <p>Moday, 12:28 PM</p>
        </div>
      </div>

      {/* Faciliities  */}
      <div className="w-full">
        <Facilities />

        <div className="w-full h-[1px] bg-gray-300/90 shadow my-8 mx-6" />

        <Dormitories />
      </div>
    </div>
  );
};

export default Dashboard;
