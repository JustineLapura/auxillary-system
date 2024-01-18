import React from "react";

const CustomersTableCard = ({ client }) => {
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
      <tr className="text-xs md:text-base font-semibold text-gray-700">
        <td>{client.facility}</td>
        <td>
          {client.firstName} {client.lastName}
        </td>
        <td>{formatDate(client.date)}</td>
        <td>{formatTime(client.startTime)}</td>
        <td>{formatTime(client.endTime)}</td>
        <td className="capitalize">{client.status}</td>
      </tr>
    </>
  );
};

export default CustomersTableCard;
