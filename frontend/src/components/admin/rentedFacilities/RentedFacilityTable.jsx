import axios from "axios";
import { enqueueSnackbar, useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TableRow, TableCell } from "@/components/ui/table";

const CustomersTableCard = ({ client }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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

  const handleComplete = async () => {
    try {
      await axios.put(
        `https://auxillary-services-api-rosy.vercel.app/api/booking/${client._id}/complete`
      );
      // Optionally, you can fetch the updated booking after approval
      const response = await axios.get(
        `https://auxillary-services-api-rosy.vercel.app/api/booking/${client._id}`
      );
      // setClient(response.data);
      enqueueSnackbar("Booking successfuly completed", { variant: "success" });
      navigate("/admin/records");
    } catch (error) {
      console.log("Error Approving:", error);
    }
  };

  return (
    <>
      <TableRow className="text-xs md:text-base font-semibold text-gray-700 text-center">
        <TableCell className="text-center">{client.facility}</TableCell>
        <TableCell className="text-center">
          {client.firstName} {client.lastName}
        </TableCell>
        <TableCell className="text-center">{formatDate(client.date)}</TableCell>
        <TableCell className="text-center">
          {formatTime(client.startTime)}
        </TableCell>
        <TableCell className="text-center">
          {formatTime(client.endTime)}
        </TableCell>
        <TableCell className="capitalize text-blue-800 font-bold text-center">
          {client.status}
        </TableCell>
        <TableCell className="text-center">
          <button
            onClick={handleComplete}
            className="px-2 py-1 my-1 bg-blue-600 rounded-lg text-white font-boldhover:scale-105 duration-200 hover:bg-blue-700"
          >
            Complete
          </button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CustomersTableCard;
