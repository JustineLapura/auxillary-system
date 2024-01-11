import React from "react";
import { FaPaperPlane } from "react-icons/fa6";

const DormInquiry = () => {
  return (
    <div className="p-5 w-full bg-gray-200 flex pt-32">
      <div className="w-full px-8 py-10 bg-white rounded-xl">
        <h1 className="font-bold text-gray-700 text-3xl mb-10 text-center">
          DORMITORY
        </h1>
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
        <div className="w-full flex justify-center items-center">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="bg-gray-200 w-full lg:w-[1000px] text-lg mt-12 rounded-xl focus:outline-none p-4 text-gray-700"
          />
        </div>
        <div className="w-full max-w-[1000px] mx-auto flex justify-end">
          <button className="px-6 py-3 text-white flex items-center gap-2 bg-blue-800 rounded-xl text-xl font-semibold mt-4">
            <FaPaperPlane /> Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DormInquiry;
