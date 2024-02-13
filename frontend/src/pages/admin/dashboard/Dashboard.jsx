import React, { useState, useEffect } from "react";
import Facilities from "../../../components/admin/dashboard/Facilities";
import Dormitories from "../../../components/admin/dashboard/Domitories";

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Update date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const updateDateTime = () => {
    const now = new Date();
    const dateOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };

    setCurrentDate(now.toLocaleDateString("en-US", dateOptions));
    setCurrentTime(now.toLocaleTimeString("en-US", timeOptions));
  };

  return (
    <div className="w-full px-3">
      <div className="w-full h-full md:flex justify-between gap-4 py-6">
        <h1 className="text-2xl lg:text-5xl font-black text-gray-950 text-center">
          Welcome Admin!
        </h1>
        <div className="flex justify-center items-center gap-4 text-lg lg:text-2xl font-bold text-gray-500">
          <p>{currentDate}</p>
          <p>{currentTime}</p>
        </div>
      </div>

      {/* Faciliities  */}
      <div className="w-full">
        <Facilities />

        <div className="w-full h-[1px] bg-gray-300/90 shadow my-8" />

        <Dormitories />
      </div>
    </div>
  );
};

export default Dashboard;
