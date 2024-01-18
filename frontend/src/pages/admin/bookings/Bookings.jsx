import React from "react";
import Filters from "../../../components/admin/bookings/Filters";
import CustomersTable from "../../../components/admin/bookings/CustomersTable";
import CustomersGrid from "../../../components/admin/bookings/CustomersGrid";
import PaginationSection from "../../../components/admin/bookings/PaginationSection";

const Bookings = () => {
  return (
    <div className="flex flex-col justify-between w-full h-[85vh] p-5">
      {/* Filters  */}
      <Filters />

      {/* Constumers Table  */}
      <CustomersTable />

      {/* Costumers grid  */}
      <CustomersGrid />

      {/* Pagination Section  */}
      <PaginationSection />
    </div>
  );
};

export default Bookings;
