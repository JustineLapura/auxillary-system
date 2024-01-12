import React from "react";

const BookedFacility = () => {
  return (
    <div className="p-5">
      <div className="w-full h-full lg:flex justify-between my-6">
        <h1 className="text-2xl lg:text-4xl mb-6 lg:mb-0 font-bold text-gray-800">
          Booking#123397070231
        </h1>
        <div className="">
          <select
            className="border border-gray-900 w-[312px] h-[50px] mb-4 md:mb-10 ps-4 font-semibold text-gray-700"
            name="bookingStatus"
            id="bookingStatus"
          >
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="pending">Pending</option>
          </select>
          <p className="text-gray-800 font-semibold ">
            Booking Date: 9/23/2023 7:51
          </p>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-2 max-w-[1000px] mt-8 mx-auto">
        {/* Costumer Section  */}
        <div className="">
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            Costumer Details:
          </h1>

          <div className="flex justify-between items-center">
            <div className="w-1/2 text-gray-600 font-semibold">
              <p>Name:</p>
              <p>Address:</p>
              <p>Contact no:</p>
              <p>Gmail:</p>
            </div>
            <div className="w-1/2 text-gray-600 font-semibold">
              <p>Jireh Lapura</p>
              <p>Catbalogan City</p>
              <p>09123456789</p>
              <p>jirehlapura@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Bookng Section  */}
        <div className="mt-8 md:mt-0">
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            Book Details:
          </h1>

          <div className="flex justify-between items-center">
            <div className="w-1/2 text-gray-600 font-semibold">
              <p>Facility</p>
              <p>Booking No.</p>
              <p>Booked Date</p>
              <p>Start Time</p>
              <p>End Time</p>
              <p>Booking Status</p>
            </div>
            <div className="w-1/2 text-gray-600 font-semibold">
              <p>AVC-RIC (Government Agency)</p>
              <p>123397070231</p>
              <p>09/23/2023</p>
              <p>3:00pm</p>
              <p>11:00pm</p>
              <p>pending</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 max-w-[800px] mx-auto mt-10 gap-4 text-gray-600 font-semibold">
        <div className="">
          <p className="text-xl font-bold text-gray-900">Date</p>
          <p>09/23/2023</p>
        </div>
        <div className="">
          <p className="text-xl font-bold text-gray-900">Price</p>
          <p>5,000</p>
        </div>
        <div className="">
          <p className="text-xl font-bold text-gray-900">Total Price</p>
          <p>5,000</p>
        </div>
      </div>
    </div>
  );
};

export default BookedFacility;
