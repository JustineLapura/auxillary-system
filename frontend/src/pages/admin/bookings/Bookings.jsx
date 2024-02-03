import React, { useState, useEffect } from "react";
import Filters from "../../../components/admin/bookings/Filters";
import CustomersTable from "../../../components/admin/bookings/CustomersTable";
import CustomersGrid from "../../../components/admin/bookings/CustomersGrid";
import PaginationSection from "../../../components/admin/bookings/PaginationSection";
import axios from "axios";

const Bookings = () => {
  const [clients, setClients] = useState([]);

  console.log("Bookings: ", clients);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/booking`
        );
        setClients(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="flex flex-col justify-between w-full h-[85vh] p-5">
      {/* Filters  */}
      <Filters />

      {/* Constumers Table  */}
      <CustomersTable clients={clients} />

      {/* Costumers grid  */}
      <CustomersGrid />

      {/* Pagination Section  */}
      <PaginationSection />
    </div>
  );
};

export default Bookings;
