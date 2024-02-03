import React from "react";
import { Link } from "react-router-dom";
import { TableCell, TableRow } from "@/components/ui/table";

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
      <TableRow className="text-xs text-center font-semibold py-6 md:text-base hover:bg-gray-100">
        <TableCell>{index + 1}</TableCell>
        <TableCell>
          {client.firstName} {client.lastName}
        </TableCell>
        <TableCell>{client.facility}</TableCell>
        <TableCell>{formatDate(client.date)}</TableCell>
        <TableCell>{formatTime(client.startTime)}</TableCell>
        <TableCell>{formatTime(client.endTime)}</TableCell>
        <TableCell>{client.agency}</TableCell>
        <TableCell
          className={
            client.status === "pending"
              ? "text-yellow-500 font-bold capitalize"
              : client.status === "approved"
              ? "text-blue-500 font-bold capitalize"
              : client.status === "completed"
              ? "text-green-500 font-bold capitalize"
              : "text-gray-500 font-bold capitalize"
          }
        >
          {client.status}
        </TableCell>
        <TableCell className="hover:underline">
          <Link
            to={`/profile/booking/${client._id}`}
            className="cursor-pointer"
          >
            View
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BookTableCard;
