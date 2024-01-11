import React from "react";

const Pricing = () => {
  return (
    <div className="w-full h-[250px] flex flex-col justify-center items-center gap-8 px-10 pt-40">
      <h1 className="text-2xl font-bold text-gray-800 ">Rent per Month</h1>
      <table className="w-full max-w-[400px] border-2 border-gray-600 bg-white">
        <thead>
          <tr>
            <th className="border-2 border-gray-600 px-4 py-2">Men</th>
            <th className="border-2 border-gray-600 px-4 py-2">Women</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-600 px-4 py-2 font-semibold">500.00</td>
            <td className="border-2 border-gray-600 px-4 py-2 font-semibold">500.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
