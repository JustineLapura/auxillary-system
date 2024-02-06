import React from "react";
import CustomersTable from "../../../components/admin/rentedFacilities/CustomersTable";
import PaginationSection from "../../../components/admin/bookings/PaginationSection";
import CustomersGrid from "../../../components/admin/rentedFacilities/CustomersGrid";

const RentedFacilities = () => {
  return (
    <div className="w-full h-full min-h-[85vh] p-5 md:flex flex-col justify-between">
      <h1 className="text-2xl md:text-4xl font-bold">Rented Facilites</h1>
      {/* Costumers Table  */}
      <CustomersTable />

      {/* Costumers grid  */}
      {/* <CustomersGrid /> */}

      <PaginationSection />
    </div>
  );
};

export default RentedFacilities;
