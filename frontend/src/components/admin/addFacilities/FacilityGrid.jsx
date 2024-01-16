import React from "react";
import FacilityGridCard from "./FacilityGridCard";

const FacilityGrid = ({ facilities }) => {
  return (
    <div className="w-full sm:hidden grid gap-4 place-items-center mt-10">
      {facilities &&
        facilities.map((facility) => (
          <FacilityGridCard
            key={facility._id}
            // id={facility._id}
            // img={facility.photo}
            // facilityName={facility.name}
            facility={facility}
          />
        ))}
    </div>
  );
};

export default FacilityGrid;
