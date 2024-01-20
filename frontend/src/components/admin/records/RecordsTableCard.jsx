import React from "react";

const RecordsTableCard = ({ client }) => {
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
      <tr className="text-xs md:text-base font-semibold text-gray-700 text-center">
        <td className="py-1 my-1">
          {client.firstName} {client.lastName}
        </td>
        <td className="py-1 my-1">{client.facility}</td>
        <td className="py-1 my-1">{formatDate(client.date)}</td>
        <td className="py-1 my-1">{formatTime(client.startTime)}</td>
        <td className="py-1 my-1">{formatTime(client.endTime)}</td>
        <td className="py-1 my-1">₱10,000</td>
        <td className="capitalize py-1 my-1 text-green-500 font-bold">{client.status}</td>
      </tr>
    </>
  );
};

export default RecordsTableCard;
