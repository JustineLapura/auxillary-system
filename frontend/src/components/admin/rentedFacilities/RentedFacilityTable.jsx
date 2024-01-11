import React from "react";

const CustomersTableCard = ({ facility, name, date, time }) => {
  return (
    <>
      <tr className="text-xs md:text-base font-semibold text-gray-700">
        <td>{facility}</td>
        <td>{name}</td>
        <td>{name}</td>
        <td>{time}</td>
      </tr>
    </>
  );
};

export default CustomersTableCard;
