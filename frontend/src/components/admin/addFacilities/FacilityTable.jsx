import React, { useState, useEffect } from "react";
import FacilityTableCard from "./FacilityTableCard";
import axios from "axios";

const FacilityTable = () => {
  const [facilities, setFacilities] = useState([]);
  console.log(facilities);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/facility`);
        setFacilities(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchFacilities();
  }, []);

  return (
    <div className="w-full mt-10 hidden sm:block">
      <table className="w-full">
        <thead className="text-left text-2xl">
          <tr>
            <th>No.</th>
            <th>Facility Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-base font-semibold text-gray-600">
          {facilities &&
            facilities.map((facility, i) => (
              <FacilityTableCard
                key={facility._id}
                // id={facility._id}
                // img={facility.photo}
                // name={facility.name}
                no={i}
                facility={facility}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacilityTable;
