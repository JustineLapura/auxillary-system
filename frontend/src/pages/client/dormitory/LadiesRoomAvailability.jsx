import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";

const LadiesRoomAvailability = () => {
  const [dorms, setDorms] = useState([]);
  const ladiesDorm = dorms
    .filter((dorm) => dorm.type === "female")
    .sort((a, b) => a.roomNumber - b.roomNumber);

  console.log("Ladies Dorm: ", ladiesDorm);

  useEffect(() => {
    const fetchDorms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/dormManagement`
        );
        setDorms(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchDorms();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full pt-20 px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center mt-16">
          Available Rooms for Ladies
        </h1>
        <table className="w-full max-w-[610px] mx-auto border-2 border-gray-600 bg-white mt-20">
          <thead>
            <tr>
              <th className="border-2 border-gray-600 px-4 py-2">Room</th>
              <th className="border-2 border-gray-600 px-4 py-2">
                Availability
              </th>
            </tr>
          </thead>
          <tbody>
            {ladiesDorm.map((dorm) => (
              <tr>
                <td className="border-2 border-gray-600 px-4 py-2 font-semibold text-center">
                  {dorm.roomNumber}
                </td>
                <td
                  className={
                    dorm.status === "vacant"
                      ? "border-2 border-gray-600 px-4 py-2 bg-green-300"
                      : "border-2 border-gray-600 px-4 py-2 bg-red-400"
                  }
                ></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LadiesRoomAvailability;
