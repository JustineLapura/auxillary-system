import { enqueueSnackbar, useSnackbar } from "notistack";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ facility, isBooking, setIsBooking }) => {
  const { user } = useContext(AuthContext).user || {};
  // console.log("Facility from Booking Modal: ", facility);
  // console.log("User from Booking Modal: ", user);

  const [agency, setAgency] = useState("");
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleBook = async (e) => {
    e.preventDefault();

    // alert(`
    //   firstName: ${user.firstName}
    //   lastName: ${user.lastName}
    //   phoneNumber: ${user.phoneNumber}
    //   email: ${user.email}
    //   address: ${user.address}
    //   facility: ${facility.name}
    //   agency: ${agency}
    //   date: ${date}
    //   startTime: ${startTime}
    //   endTime: ${endTime}
    // `);

    const newBooking = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
      facility: facility.name,
      agency,
      date,
      startTime,
      endTime,
    };

    try {
      const response = await fetch("http://localhost:4000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBooking),
      });

      const json = await response.json();

      if (!response.ok) {
        setEmptyFields(json.emptyFields);
        const errorMessage = json.error || "An error occurred";
        setError(errorMessage);
        enqueueSnackbar(errorMessage, {
          variant: "error",
        });
      }

      if (response.ok) {
        enqueueSnackbar("Booking successfuly made!", { variant: "success" });
        setEmptyFields([]);
        setError(null);
        setAgency("");
        setDate(null);
        setStartTime(null);
        setEndTime(null);
        setIsBooking(false);

        // navigate to profile section
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle create post error
    }
  };

  return (
    <form
      onSubmit={handleBook}
      className={
        isBooking
          ? "fixed w-[60%] max-w-[600px] h-[90%] lg:h-[78%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300 overflow-y-scroll lg:overflow-hidden"
          : "fixed w-[60%] max-w-[600px] h-[90%] lg:h-[78%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
      }
    >
      {/* <div className=" w-full flex justify-end items-center border-2 ">
            <p className="font-bold text-gray-500 bg-gray-300 rounded-full px-2 hover:bg-gray-400 hover:text-white cursor-pointer">x</p>
        </div> */}
      <div className="w-full lg:flex items-center gap-4 border-2">
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Firstname:
          </label>
          <input
            value={user && user.firstName}
            className="rounded py-1 focus:outline-none ps-1 bg-gray-100 text-gray-500"
            type="text"
            disabled
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Lastname:
          </label>
          <input
            value={user && user.lastName}
            className="rounded py-1 focus:outline-none ps-1 bg-gray-100 text-gray-500"
            type="text"
            disabled
          />
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Email:
          </label>
          <input
            value={user && user.email}
            className="rounded py-1 focus:outline-none ps-1 bg-gray-100 text-gray-500"
            type="text"
            disabled
          />
        </div>
        <div className="w-full flex flex-col border-2">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Phone:
          </label>
          <div className="w-full flex items-center rounded-l-lg">
            <input
              className="w-full rounded py-1 focus:outline-none ps-1 bg-gray-100 text-gray-500"
              value={user && "+63" + user.phoneNumber}
              disabled
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full flex flex-col">
          <label
            className="text-gray-500 font-semibold lg:text-center"
            htmlFor=""
          >
            Address:
          </label>
          <input
            value={user && user.address}
            className="rounded py-1 focus:outline-none ps-1 bg-gray-100 text-gray-500"
            type="text"
            disabled
          />
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Facility:
          </label>
          <input
            value={facility.name}
            className="rounded py-1 focus:outline-none ps-1 bg-gray-100 text-gray-500"
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Agency:
          </label>
          <select
            className={
              emptyFields && emptyFields.includes("agency")
                ? "rounded py-1 focus:outline-none ps-1 bg-white border border-red-500 cursor-pointer"
                : "rounded py-1 focus:outline-none ps-1 bg-white cursor-pointer"
            }
            onChange={(e) => setAgency(e.target.value)}
          >
            <option value="">Select Agency</option>
            <option value="government">Government</option>
            <option value="non-government">Non-Government</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full lg:w-1/3 flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Date:
          </label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date || ""}
            className={
              emptyFields && emptyFields.includes("date")
                ? "rounded py-1 focus:outline-none ps-1 bg-white border border-red-500"
                : "rounded py-1 focus:outline-none ps-1 bg-white"
            }
            type="date"
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Time Start:
          </label>
          <input
            onChange={(e) => setStartTime(e.target.value)}
            value={startTime || ""}
            className={
              emptyFields && emptyFields.includes("startTime")
                ? "rounded py-1 focus:outline-none ps-1 bg-white border border-red-500"
                : "rounded py-1 focus:outline-none ps-1 bg-white"
            }
            type="time"
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Time End:
          </label>
          <input
            onChange={(e) => setEndTime(e.target.value)}
            value={endTime || ""}
            className={
              emptyFields && emptyFields.includes("endTime")
                ? "rounded py-1 focus:outline-none ps-1 bg-white border border-red-500"
                : "rounded py-1 focus:outline-none ps-1 bg-white"
            }
            type="time"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button className="bg-blue-500 text-white font-bold rounded-lg px-6 py-2 mt-3">
          Submit
        </button>
        {error && (
          <p className="text-red-500 font-semibold text-center mt-2">{error}</p>
        )}
      </div>
    </form>
  );
};

export default BookingModal;
