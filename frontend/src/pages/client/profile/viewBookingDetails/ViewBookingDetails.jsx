import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";
import Navbar from "@/components/navbar/Navbar";

const ViewBookingDetails = () => {
  const [client, setClient] = useState({});
  const [facility, setFacility] = useState({});
  // console.log("Client from BookedFacility: ", client);
  // console.log("Facility from BookedFacility: ", facility);
  // const agencyPrice =
  //   client && facility && client.agency === "government"
  //     ? facility.governmentPrice
  //     : client.agency === "non-government"
  //     ? facility.nonGovernmentPrice
  //     : facility.otherPrice;

  // console.log(`
  //   Government Price: ${facility.governmentPrice}
  //   Non-Government Price: ${facility.nonGovernmentPrice}
  //   Other Price: ${facility.otherPrice}
  // `);

  const { enqueueSnackbar } = useSnackbar();

  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchFacility = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://auxillary-services-api-rosy.vercel.app/api/facility/${client.facilityId}`
  //       );
  //       setFacility(response.data);
  //     } catch (error) {
  //       console.log("Error Fetching:", error);
  //     }
  //   };
  //   fetchFacility();
  // }, [client.facilityId]);

  useEffect(() => {
    const fetchFacility = async () => {
      try {
        // Check if client.facilityId is defined before making the request
        if (client.facilityId) {
          const response = await axios.get(
            `https://auxillary-services-api-rosy.vercel.app/api/facility/${client.facilityId}`
          );
          setFacility(response.data);
        }
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };
    fetchFacility();
  }, [client.facilityId]);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/booking/${id}`
        );
        setClient(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchClient();
  }, []);

  const handleApprove = async () => {
    try {
      await axios.put(
        `https://auxillary-services-api-rosy.vercel.app/api/booking/${id}/approve`
      );
      // Optionally, you can fetch the updated booking after approval
      const response = await axios.get(
        `https://auxillary-services-api-rosy.vercel.app/api/booking/${id}`
      );
      setClient(response.data);
      enqueueSnackbar("Approved Successfuly", { variant: "success" });
      navigate("/admin/rented-facilities");
    } catch (error) {
      console.log("Error Approving:", error);
    }
  };

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
      <Navbar />
      <div className="p-5 pt-24">
        <div className="w-full h-full lg:flex justify-between my-6">
          <h1 className="text-2xl lg:text-4xl mb-6 lg:mb-0 font-bold text-gray-800">
            BookingID:{" "}
            <span className="text-lg text-gray-500">{client._id}</span>
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
                <p className="text-xs">{client.address}</p>
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
            <p className="text-xl font-bold text-gray-900 capitalize">
              Agency Price ({client && client.agency}):
            </p>
            {client.agency === "government" &&
              facility.governmentPrice !== undefined && (
                <p>₱{facility.governmentPrice.toLocaleString()}</p>
              )}
            {client.agency === "non-government" &&
              facility.nonGovernmentPrice !== undefined && (
                <p>₱{facility.nonGovernmentPrice.toLocaleString()}</p>
              )}
            {client.agency === "others" &&
              facility.otherPrice !== undefined && (
                <p>₱{facility.otherPrice.toLocaleString()}</p>
              )}
          </div>
          <div className="">
            <p className="text-xl font-bold text-gray-900">Total Price:</p>
            {client.agency === "government" &&
              facility.governmentPrice !== undefined && (
                <p>₱{facility.governmentPrice.toLocaleString()}</p>
              )}
            {client.agency === "non-government" &&
              facility.nonGovernmentPrice !== undefined && (
                <p>₱{facility.nonGovernmentPrice.toLocaleString()}</p>
              )}
            {client.agency === "others" &&
              facility.otherPrice !== undefined && (
                <p>₱{facility.otherPrice.toLocaleString()}</p>
              )}
          </div>
        </div>

        <div className="w-full flex justify-end gap-6 mt-12">
          <Link to="/profile">
            <button className="w-[150px] py-2 rounded-lg bg-gray-500 text-white font-semibold">
              Go back
            </button>
          </Link>
          <button className="w-[150px] py-2 rounded-lg bg-green-600 text-white font-semibold">
            Print
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewBookingDetails;
