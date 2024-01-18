import React from "react";
import { Link } from "react-router-dom";

const BookTableCard = ({ client, index }) => {

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <>
      <tr className="text-xs text-center font-semibold py-6 md:text-base hover:bg-gray-100">
        <td>{index + 1}</td>
        <td>
          {client.firstName} {client.lastName}
        </td>
        <td>{client.facility}</td>
        <td>{formatDate(client.date)}</td>
        <td>{formatTime(client.startTime)}</td>
        <td>{formatTime(client.endTime)}</td>
        <td>{client.agency}</td>
        <td>{client.status}</td>
        <td className="hover:underline">
          <Link to={`/profile/booking/${client._id}`} className="cursor-pointer">
            View
          </Link>
        </td>
      </tr>
    </>
  );
};

export default BookTableCard;
