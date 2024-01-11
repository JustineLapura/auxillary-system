import React from "react";
import FacilityTableCard from "./FacilityTableCard";

const FacilityTable = ({ facilities }) => {
  return (
    <div className="w-full mt-10 hidden sm:block">
      <table className="w-full">
        <thead className="text-left text-2xl">
          <tr>
            <th>ID</th>
            <th>Facility Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-base font-semibold text-gray-600">
          {facilities &&
            facilities.map((facility) => (
              <FacilityTableCard
                key={facility.id}
                id={facility.id}
                img={facility.img}
                facilityName={facility.name}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacilityTable;
