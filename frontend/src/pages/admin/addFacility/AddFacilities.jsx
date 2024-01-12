import React, { useEffect, useState } from "react";
import { facilities } from "../../../facilities";
import TopHeader from "../../../components/admin/addFacilities/TopHeader";
import FacilityTable from "../../../components/admin/addFacilities/FacilityTable";
import FacilityGrid from "../../../components/admin/addFacilities/FacilityGrid";
import AddFacilityModal from "../../../components/admin/addFacilities/AddFacilityModal";

const AddFacilities = () => {
  const [addModal, setAddModal] = useState(false);
  const [facilitiesData, setFacilitiesData] = useState([]);

  useEffect(() => {
    setFacilitiesData(facilities);
  }, []);

  return (
    <div className="w-full p-5">
      {/* Top Header Section  */}
      <div className="">
        <TopHeader
          facilitiesCount={facilitiesData.length}
          setAddModal={setAddModal}
        />
      </div>

      {/* Facility Table  */}
      <FacilityTable facilities={facilitiesData} />

      {/* Facility Grid  */}
      <FacilityGrid facilities={facilitiesData} />

      {/*Modal Overlay  */}
      <div
        className={
          addModal
            ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20"
            : ""
        }
      />

      {/* Add Facility Modal  */}
      <AddFacilityModal addModal={addModal} setAddModal={setAddModal} />
    </div>
  );
};

export default AddFacilities;
