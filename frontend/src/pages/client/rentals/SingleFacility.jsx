import React, { useEffect, useState } from "react";
import { facilities } from "../../../facilities";
import FacilityCard from "../../../components/rentals/FacilityCard";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import BookingModal from "../../../components/rentals/BookingModal";
import SkeletonCard from "@/components/rentals/singleFacilityLoading/SkeletonCard";

const SingleFacility = ({ params }) => {
  const [facility, setFacility] = useState({}); // Provide the correct type for the state
  console.log("Facility from SingleFacilityCard: ", facility);

  const [isBooking, setIsBooking] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchFacility = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/facility/${id}`
        );
        console.log("Facility Response:", response.data);
        setFacility(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchFacility();
  }, [id]);

  // useEffect(() => {
  //   const fetchFacility = async () => {
  //     try {
  //       // Simulate a delay of 3 seconds
  //       await new Promise((resolve) => setTimeout(resolve, 3000));

  //       const response = await axios.get(
  //         `https://auxillary-services-api-rosy.vercel.app/api/facility/${id}`
  //       );

  //       console.log("Facility Response:", response.data);
  //       setFacility(response.data);
  //     } catch (error) {
  //       console.log("Error Fetching:", error);
  //     }
  //   };

  //   fetchFacility();
  // }, [id]); // Make sure to include id as a dependency if it's used inside the useEffect

  return (
    <>
      <Navbar />
      <div className="w-full h-full px-6 pt-32">
        {!facility && <SkeletonCard />}
        {facility && (
          <FacilityCard
            facility={facility}
            setIsBooking={() => setIsBooking(true)}
          />
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
