import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookedFacility = () => {
  const [client, setClient] = useState({});
  console.log("Client from BookedFacility: ", client);

  const { id } = useParams();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/booking/${id}`
        );
        setClient(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchClient();
  }, []);

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
    <div className="p-5">
      <div className="w-full h-full lg:flex justify-between my-6">
        <h1 className="text-2xl lg:text-4xl mb-6 lg:mb-0 font-bold text-gray-800">
          BookingID: <span className="text-lg text-gray-500">{client._id}</span>
        </h1>
        <div className="">
          <p className="text-gray-800 font-bold ">
            Booking Date:
            <span className="text-gray-500 font-semibold mx-3">
              {formatDate(client.date)} ({formatTime(client.startTime)} -{" "}
              {formatTime(client.endTime)})
            </span>
          </p>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-2 max-w-[1000px] mt-8 mx-auto">
        {/* Costumer Section  */}
        <div className="">
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            Costumer Details:
          </h1>

          <div className="flex justify-between items-center">
            <div className="w-1/2 text-gray-600 font-semibold">
              <p>Name:</p>
              <p>Address:</p>
              <p>Contact no:</p>
              <p>Gmail:</p>
            </div>
            <div className="w-1/2 text-gray-600 font-semibold">
              <p>
                {client.firstName} {client.lastName}
              </p>
              <p>{client.address}</p>
              <p>{client.phoneNumber}</p>
              <p>{client.email}</p>
            </div>
          </div>
        </div>
        {/* Bookng Section  */}
        <div className="mt-8 md:mt-0">
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            Book Details:
          </h1>

          <div className="flex justify-between items-center">
            <div className="w-1/2 text-gray-600 font-semibold">
              <p>Facility:</p>
              <p>Booked Date:</p>
              <p>Start Time:</p>
              <p>End Time:</p>
              <p>Booking Status:</p>
            </div>
            <div className="w-1/2 text-gray-600 font-semibold">
              <p className="capitalize">
                {client.facility} ({client.agency})
              </p>
              <p>{formatDate(client.date)}</p>
              <p>{formatTime(client.startTime)}</p>
              <p>{formatTime(client.endTime)}</p>
              <p className="capitalize">{client.status}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-around mx-auto mt-12 gap-4 text-gray-600 font-semibold">
        <div className="">
          <p className="text-xl font-bold text-gray-900">Agency Price:</p>
          <p>5,000</p>
        </div>
        <div className="">
          <p className="text-xl font-bold text-gray-900">Total Price:</p>
          <p>5,000</p>
        </div>
      </div>

      <div className="w-full flex justify-end gap-6 mt-12">
        <button className="w-[150px] py-2 rounded-lg bg-gray-500 text-white font-semibold">Suggest Date</button>
        <button className="w-[150px] py-2 rounded-lg bg-blue-500 text-white font-semibold">Approve</button>
      </div>
    </div>
  );
};

export default BookedFacility;
