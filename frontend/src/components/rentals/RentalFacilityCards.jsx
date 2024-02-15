import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RentalFacilityCards = ({ facility }) => {
  const PF = "http://localhost:4000/api/images/";

  return (
    <div className="h-[300px] w-[300px] text-center flex flex-col justify-center items-center gap-4">
      <div className="w-full h-full">
        {facility && facility.photo && (
          <img
            className="rounded-xl h-[200px] w-full object-cover -z-10"
            src={PF + facility.photo}
            alt="logo"
          />
        )}
        {/* <img
          className="w-full h-[200px] rounded-xl object-cover"
          width={300}
          height={200}
          src="/SSU.jpg"
          alt={facility.name}
        /> */}
      </div>
      <div className="">
        <h1 className="text-xl text-blue-950 font-bold ">{facility.name}</h1>
      </div>
      <Link to={`/rentals/${facility._id}`}>
        <button className="py-1 px-3 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700 hover:text-blue-200">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default RentalFacilityCards;
