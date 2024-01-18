import React, { useEffect, useState } from "react";
import { facilities } from "../../../facilities";
import FacilityCard from "../../../components/rentals/FacilityCard";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import BookingModal from "../../../components/rentals/BookingModal";

const SingleFacility = ({ params }) => {
  const [facility, setFacility] = useState([]); // Provide the correct type for the state
  // console.log("Facility from SingleFacilityCard: ", facility);

  const [isBooking, setIsBooking] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/facility/${id}`
        );
        setFacility(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchFacilities();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-full px-6 pt-32">
        {facility ? (
          <FacilityCard
            facility={facility}
            setIsBooking={() => setIsBooking(true)}
          />
        ) : (
          <h1>Faicility Not Found!</h1>
        )}

        {/* Modal overlay  */}
        <div
          onClick={() => setIsBooking(false)}
          className={
            isBooking ? "fixed top-0 left-0 w-full h-full bg-blue-900/60" : ""
          }
        />

        {/* Booking Modal */}
        <BookingModal
          facility={facility}
          isBooking={isBooking}
          setIsBooking={setIsBooking}
        />
      </div>
    </>
  );
};

export default SingleFacility;
