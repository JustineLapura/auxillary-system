import React from "react";

const BookFacility = () => {
  return (
    <div className="p-5 w-full bg-gray-200 flex pt-32">
      <div className="w-full px-5 py-10 bg-white rounded-xl">
        <h1 className="font-bold text-gray-700 text-2xl mb-6">
          Customer Details:
        </h1>
        <form action="" className="grid md:grid-cols-2 gap-8 ">
          <div className="">
            <label htmlFor="" className="font-semibold text-gray-500">
              Name:
            </label>
            <input
              type="text"
              className="border-b border-gray-300 w-full focus:outline-none"
            />
          </div>
          <div className="">
            <label htmlFor="" className="font-semibold text-gray-500">
              Address:
            </label>
            <input
              type="text"
              className="border-b border-gray-300 w-full focus:outline-none"
            />
          </div>
          <div className="">
            <label htmlFor="" className="font-semibold text-gray-500">
              Contact no:
            </label>
            <input
              type="text"
              className="border-b border-gray-300 w-full focus:outline-none"
            />
          </div>
          <div className="">
            <label htmlFor="" className="font-semibold text-gray-500">
              Gmail:
            </label>
            <input
              type="text"
              className="border-b border-gray-300 w-full focus:outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookFacility;
