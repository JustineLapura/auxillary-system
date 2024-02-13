import React, { useEffect, useState } from "react";
import TopHeader from "../../../components/admin/addFacilities/TopHeader";
import FacilityTable from "../../../components/admin/addFacilities/FacilityTable";
import FacilityGrid from "../../../components/admin/addFacilities/FacilityGrid";
import AddFacilityModal from "../../../components/admin/addFacilities/AddFacilityModal";
import axios from "axios";

const AddFacilities = () => {
  const [addModal, setAddModal] = useState(false);
  const [facilities, setFacilities] = useState([]);
  // console.log("Facilities from AddFacility ", facilities);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/facility`
        );
        setFacilities(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchFacilities();
  }, []);

  return (
    <div className="w-full p-5">
      {/* Top Header Section  */}
      <div className="">
        <TopHeader
          facilitiesCount={facilities.length}
          setAddModal={setAddModal}
        />
      </div>

      {/* Facility Table  */}
      <FacilityTable facilities={facilities} />

      {/* Facility Grid  */}
      {/* <FacilityGrid facilities={facilities} /> */}

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
