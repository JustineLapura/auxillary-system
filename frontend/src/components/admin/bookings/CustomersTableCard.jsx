import React from "react";
import { Link } from "react-router-dom";
import { TableRow, TableCell } from "@/components/ui/table";

const CustomersTableCard = ({ client, index }) => {
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
    <TableRow className="text-xs text-center font-semibold md:text-base hover:bg-gray-100">
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        {client.firstName} {client.lastName}
      </TableCell>
      <TableCell>{client.facility}</TableCell>
      <TableCell>{formatDate(client.date)}</TableCell>
      <TableCell>{formatTime(client.startTime)}</TableCell>
      <TableCell>{formatTime(client.endTime)}</TableCell>
      <TableCell>{client.agency}</TableCell>
      <TableCell className="text-yellow-500 font-bold ">
        {client.status}
      </TableCell>
      <TableCell className="hover:underline">
        <Link to={`/admin/bookings/${client._id}`} className="cursor-pointer">
          View
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default CustomersTableCard;
