import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filters = () => {
  return (
    <div className="">
      <h1 className="text-xl lg:text-3xl mb-2 font-bold my-4 text-gray-700">
        Reservations
      </h1>
      <div className="sm:flex items-center justify-between py-1">
        <Input
          placeholder="Filter client's name..."
          // value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          // onChange={(event) =>
          //   table.getColumn("email")?.setFilterValue(event.target.value)
          // }
          className="w-full sm:w-[180px]"
        />
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by:" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="facility">FACILITY</SelectItem>
            <SelectItem value="status">STATUS</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <div className="w-full max-w-[900px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 place-items-center gap-2 px-8">
        <select
          className="w-full lg:w-[250px] border-2 rounded text-center border-gray-700 text-sm"
          name="bookingStatus"
          id="bookingStatus"
        >
          <option value="confirmed">Filter by faciliities:</option>
          <option value="cancelled">Option 1</option>
          <option value="pending">Option 2</option>
        </select>
        <input
          type="text"
          className="w-full lg:w-[250px] border-2 rounded text-center border-gray-700 text-sm"
          placeholder="Start Time"
        />
        <input
          type="text"
          className="w-full lg:w-[250px] border-2 rounded text-center border-gray-700 text-sm"
          placeholder="End Time"
        />
        <select
          className="w-full lg:w-[250px] lg:hidden border-2 rounded text-center border-gray-700"
          name="bookingStatus"
          id="bookingStatus"
        >
          <option value="confirmed">Filter by Booking Date:</option>
          <option value="cancelled">Option 1</option>
          <option value="pending">Option 2</option>
        </select>
        <select
          className="w-full lg:w-[250px] lg:hidden border-2 rounded text-center border-gray-700"
          name="bookingStatus"
          id="bookingStatus"
        >
          <option value="confirmed">Filter by Booking Status:</option>
          <option value="cancelled">Option 1</option>
          <option value="pending">Option 2</option>
        </select>
      </div>
      <div className="w-full max-w-[520px] mx-auto mt-4 hidden lg:flex justify-between">
        <select
          className="w-full lg:w-[250px] border-2 rounded text-center border-gray-700 text-sm"
          name="bookingStatus"
          id="bookingStatus"
        >
          <option value="confirmed">Filter by Booking Date:</option>
          <option value="cancelled">Option 1</option>
          <option value="pending">Option 2</option>
        </select>
        <select
          className="w-full lg:w-[250px] border-2 rounded text-center border-gray-700 text-sm"
          name="bookingStatus"
          id="bookingStatus"
        >
          <option value="confirmed">Filter by Booking Status:</option>
          <option value="cancelled">Option 1</option>
          <option value="pending">Option 2</option>
        </select>
      </div> */}
    </div>
  );
};

export default Filters;
