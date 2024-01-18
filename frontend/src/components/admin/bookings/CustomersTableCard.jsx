import React from "react";
import { Link } from "react-router-dom";

const CustomersTableCard = ({ costumer }) => {
  return (
    <>
      <tr className="text-xs text-center font-semibold py-6 md:text-base hover:bg-gray-100">
        <td>{costumer.id}</td>
        <td>{costumer.name}</td>
        <td>{costumer.facility}</td>
        <td>{costumer.date}</td>
        <td>{costumer.startTime}</td>
        <td>{costumer.endTime}</td>
        <td>{costumer.agency}</td>
        <td>{costumer.status}</td>
        <td className="hover:underline">
          <Link to="/admin/bookings/1" className="cursor-pointer">
            View
          </Link>
        </td>
      </tr>
    </>
  );
};

export default CustomersTableCard;
