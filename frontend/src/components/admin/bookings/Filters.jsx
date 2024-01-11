import React from "react";

const Filters = () => {
  return (
    <div className="">
      <h1 className="text-xl lg:text-3xl mb-6 font-bold my-4 text-gray-700">
        Bookings
      </h1>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8 px-8">
        <select
          className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
          name="bookingStatus"
          id="bookingStatus"
        >
          <option value="confirmed">Filter by faciliities:</option>
          <option value="cancelled">Option 1</option>
          <option value="pending">Option 2</option>
        </select>
        <input
          type="text"
          className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
          placeholder="Start Time"
        />
        <input
          type="text"
          className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
          placeholder="End Time"
        />
        <select
          className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
          name="bookingStatus"
          id="bookingStatus"
        >
          <option value="confirmed">Filter by Booking Date:</option>
          <option value="cancelled">Option 1</option>
          <option value="pending">Option 2</option>
        </select>
        <select
          className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
          name="bookingStatus"
          id="bookingStatus"
        >
          <option value="confirmed">Filter by Booking Status:</option>
          <option value="cancelled">Option 1</option>
          <option value="pending">Option 2</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
