import axios from "axios";
import { enqueueSnackbar, useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";

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
        `http://localhost:4000/api/booking/${client._id}/complete`
      );
      // Optionally, you can fetch the updated booking after approval
      const response = await axios.get(
        `http://localhost:4000/api/booking/${client._id}`
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
      <tr className="text-xs md:text-base font-semibold text-gray-700 text-center">
        <td>{client.facility}</td>
        <td>
          {client.firstName} {client.lastName}
        </td>
        <td>{formatDate(client.date)}</td>
        <td>{formatTime(client.startTime)}</td>
        <td>{formatTime(client.endTime)}</td>
        <td className="capitalize text-blue-800 font-bold">{client.status}</td>
        <td>
          <button
            onClick={handleComplete}
            className="px-2 py-1 my-1 bg-blue-600 rounded-lg text-white font-boldhover:scale-105 duration-200 hover:bg-blue-700"
          >
            Complete
          </button>
        </td>
      </tr>
    </>
  );
};

export default CustomersTableCard;
