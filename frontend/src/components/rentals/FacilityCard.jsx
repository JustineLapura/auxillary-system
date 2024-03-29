import React, { useContext, useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Calendar } from "../ui/calendar";
import { Skeleton } from "../ui/skeleton";
import axios from "axios";

const FacilityCard = ({ facility, setIsBooking }) => {
  const { user } = useContext(AuthContext).user || {};

  const [clients, setClients] = useState([]);

  // console.log("Bookings: ", clients);

  const bookedDates = clients
    .filter((client) => client.facility === facility.name)
    .map((client) => new Date(client.date));

  // console.log(bookedDates);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/booking`
        );
        setClients(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchClients();
  }, []);

  const PF = "http://localhost:4000/images/";

  const navigate = useNavigate();

  const handleBook = () => {
    if (!user) {
      navigate("/login");
    } else {
      setIsBooking(true);
    }
  };

  return (
    <div className="w-full h-full lg:flex justify-between items-center gap-16">
      <div className="w-full">
        {/* {facility && facility.photo && (
          <img
            className="w-full h-[400px] md:w-full rounded-lg object-cover"
            src={PF + facility.photo}
            alt={facility.name}
          />
        )} */}
        <img
          className="w-full h-[200px] sm:h-[400px] md:w-full rounded-lg object-cover"
          src="/SSU.jpg"
          alt={facility.name}
        />
        {!facility && facility.photo && (
          <Skeleton className="w-full h-[200px] sm:h-[400px] md:w-full rounded-lg object-cover" />
        )}
      </div>
      <div className=" w-full h-full">
        <div className="w-full lg:flex">
          {/* left containter  */}
          <div className="w-full lg:w-3/5">
            <div className="w-full flex justify-between items-center my-4">
              <div className="w-[2/3]">
                <h1 className="text-2xl md:text-4xl font-black text-blue-950">
                  {facility.name}
                </h1>
              </div>
              <div className="flex md:hidden items-center w-[1/3] space-x-1">
                <button
                  onClick={handleBook}
                  className="py-2 px-4 rounded-full bg-blue-800 text-xs text-white font-semibold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 duration-300"
                >
                  Book now
                </button>
              </div>
            </div>
            <div className="text-gray-900 py-5">
              <p className="font-bold md:text-xl text-gray-700">Details</p>
              <ul className="p-5 text-sm md:text-base text-gray-500 font-semibold">
                <li className="flex gap-2 items-center">
                  <FaCircle size={5} />
                  Government Agencies -
                  {facility.governmentPrice
                    ? "₱" + facility.governmentPrice + "/8hours"
                    : "N/A"}
                </li>
                <li className="flex gap-2 items-center">
                  <FaCircle size={5} />
                  Non-Government Agencies -
                  {facility.nonGovernmentPrice
                    ? "₱" + facility.nonGovernmentPrice + "/8hours"
                    : "N/A"}
                </li>
                <li className="flex gap-2 items-center">
                  <FaCircle size={5} />
                  Others -
                  {facility.otherPrice
                    ? "₱" + facility.otherPrice + "/8hours"
                    : "N/A"}
                </li>
              </ul>
            </div>
            <div className="hidden lg:block mb-12">
              {/* <Link to={`/rentals/facility/${facility.name}`}> */}
              <button
                onClick={handleBook}
                className="py-3 px-6 rounded-full bg-blue-800 text-lg text-white font-semibold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 duration-300"
              >
                Book now
              </button>
              {/* </Link> */}
            </div>
          </div>
          {/* right container  */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center ">
            <h1 className="text-gray-900 font-bold my-7 text-xl">
              Booked Date:
            </h1>
            <Calendar
              mode="multiple"
              selected={bookedDates}
              // onSelect={setDate}
              className="rounded-md border shadow"
            />
          </div>
        </div>
        <div className="w-full max-w-[600px] flex justify-between text-xl md:text-2xl pb-8 md:pb-0 mt-6">
          <h1 className="text-gray-700 font-bold">How was your Experience?</h1>
          <div className="flex justify-between items-center gap-3 text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
