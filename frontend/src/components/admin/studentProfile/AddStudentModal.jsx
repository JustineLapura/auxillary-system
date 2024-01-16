import React from "react";

const AddStudentModal = ({ addModal, setAddModal }) => {
  return (
    <div
      className={
        addModal
          ? "fixed w-[60%] max-w-[600px] h-[90%] lg:h-[65%] top-1/2 left-1/2 transdiv -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
          : "fixed w-[60%] max-w-[600px] h-[90%] lg:h-[65%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
      }
    >
      {/* <div className=" w-full flex justify-end items-center border-2 ">
            <p className="font-bold text-gray-500 bg-gray-300 rounded-full px-2 hover:bg-gray-400 hover:text-white cursor-pointer">x</p>
        </div> */}
      <div className="w-full lg:flex items-center gap-4 border-2">
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Firstname:
          </label>
          <input className="rounded py-1 focus:outline-none ps-1" type="text" />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Lastname:
          </label>
          <input className="rounded py-1 focus:outline-none ps-1" type="text" />
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full flex flex-col border-2">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Email:
          </label>
          <div className="w-full flex items-center bg-gray-400 rounded-l-lg">
            <p className="text-white font-semibold px-2">+63</p>
            <input
              className="w-full rounded py-1 focus:outline-none ps-1"
              type="tel"
              maxLength="10"
              placeholder="Phone Number"
              // value={phoneNumber}
              // onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Email:
          </label>
          <input className="rounded py-1 focus:outline-none ps-1" type="text" />
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Address:
          </label>
          <input className="rounded py-1 focus:outline-none ps-1" type="text" />
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Age:
          </label>
          <input className="rounded py-1 focus:outline-none ps-1" type="text" />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Gender:
          </label>
          <select
            className="rounded py-1 ps-1 focus:outline-none"
            name=""
            id=""
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-blue-500 text-white font-bold rounded-lg px-6 py-2 mt-3">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddStudentModal;
