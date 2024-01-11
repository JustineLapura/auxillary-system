import React from "react";
import FacilityGridCard from "./FacilityGridCard";

const FacilityGrid = ({ facilities }) => {
  return (
    <div className="w-full sm:hidden grid gap-4 place-items-center mt-10">
      {facilities &&
        facilities.map((facility) => (
          <FacilityGridCard
            key={facility.id}
            id={facility.id}
            img={facility.img}
            facilityName={facility.name}
          />
        ))}
    </div>
  );
};

export default FacilityGrid;
