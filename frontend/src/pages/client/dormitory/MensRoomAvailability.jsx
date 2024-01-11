import React from "react";
import Navbar from "../../../components/navbar/Navbar";

const MensRoomAvailability = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pt-20 px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center mt-16">
          Available Rooms for Men
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
            <tr>
              <td className="border-2 border-gray-600 px-4 py-2 font-semibold text-center">
                1
              </td>
              <td className="border-2 border-gray-600 px-4 py-2 bg-green-300"></td>
            </tr>
            <tr>
              <td className="border-2 border-gray-600 px-4 py-2 font-semibold text-center">
                2
              </td>
              <td className="border-2 border-gray-600 px-4 py-2 bg-green-300"></td>
            </tr>
            <tr>
              <td className="border-2 border-gray-600 px-4 py-2 font-semibold text-center">
                3
              </td>
              <td className="border-2 border-gray-600 px-4 py-2 bg-red-400"></td>
            </tr>
            <tr>
              <td className="border-2 border-gray-600 px-4 py-2 font-semibold text-center">
                4
              </td>
              <td className="border-2 border-gray-600 px-4 py-2 bg-green-300"></td>
            </tr>
            <tr>
              <td className="border-2 border-gray-600 px-4 py-2 font-semibold text-center">
                5
              </td>
              <td className="border-2 border-gray-600 px-4 py-2 bg-green-300"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MensRoomAvailability;
