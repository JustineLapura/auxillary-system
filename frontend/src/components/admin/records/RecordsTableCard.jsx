import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

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
    <TableRow className="text-xs md:text-base font-semibold text-gray-700 text-center">
      <TableCell className="py-1 my-1">
        {client.firstName} {client.lastName}
      </TableCell>
      <TableCell className="py-1 my-1">{client.facility}</TableCell>
      <TableCell className="py-1 my-1">{formatDate(client.date)}</TableCell>
      <TableCell className="py-1 my-1">
        {formatTime(client.startTime)}
      </TableCell>
      <TableCell className="py-1 my-1">{formatTime(client.endTime)}</TableCell>
      <TableCell className="py-1 my-1">₱10,000</TableCell>
      <TableCell className="capitalize py-1 my-1 text-green-500 font-bold">
        {client.status}
      </TableCell>
    </TableRow>
  );
};

export default RecordsTableCard;
