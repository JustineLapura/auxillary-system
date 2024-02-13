import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsBuildingAdd } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { MdBookmarkAdded, MdManageHistory } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const SidebarMenu = ({ nav, setNav }) => {
  return (
    <div
      className={`md:hidden fixed border-2 top-0 left-0 w-[250px] duration-300 ease-in h-full p-4  bg-white border-r-[1px] flex flex-col overflow-y-scroll z-20`}
    >
      <div className="flex flex-col items-center uppercase text-sm font-bold w-full">
        <div className="w-full">
          <div className="group w-full flex justify-start items-center gap-4 px-2 ">
            <div
              className="w-11 bg-gray-100  hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block"
              onClick={() => setNav(false)}
            >
              <IoIosArrowBack size={20} />
            </div>
            <h1 className="font-black text-xs text-gray-500 text-center">
              Auxilliary Admin
            </h1>
          </div>
        </div>
        <Link to="/admin" className="w-full" onClick={() => setNav(false)}>
          <div className="group w-full flex justify-start hover:bg-gray-200 items-center gap-4 px-2 rounded">
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <PiSquaresFourFill size={20} />
            </div>
            <h1 className="text-xs">Dashboard</h1>
          </div>
        </Link>
        <div className="w-full h-full flex justify-start items-center">
          <span className="border-b-[1px] border-gray-200 w-full mx-1" />
          <h1 className=" text-gray-500">Facilities</h1>
          <span className="border-b-[1px] border-gray-200 w-full mx-1" />
        </div>
        <Link
          className="w-full"
          onClick={() => setNav(false)}
          to="/admin/bookings"
        >
          <div
            className={`group w-full flex justify-start hover:bg-gray-200 items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <MdBookmarkAdded size={20} />
            </div>
            <h1 className="text-xs">Bookings</h1>
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setNav(false)}
          to="/admin/rented-facilities"
        >
          <div
            className={`group w-full flex justify-start hover:bg-gray-200 items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaBuildingColumns size={20} />
            </div>

            <h1 className="text-xs">Rented Facilities</h1>
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setNav(false)}
          to="/admin/add-facilities"
        >
          <div
            className={`group w-full flex justify-start hover:bg-gray-200 items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsBuildingAdd size={20} />
            </div>

            <h1 className="text-xs">Add Facilities</h1>
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setNav(false)}
          to="/admin/records"
        >
          <div
            className={`group w-full flex justify-start hover:bg-gray-200 items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <TbReport size={20} />
            </div>

            <h1 className="text-xs">Records</h1>
          </div>
        </Link>
        <div className="w-full h-full flex justify-start items-center">
          <span className="border-b-[1px] border-gray-200 w-full mx-1" />
          <h1 className=" text-gray-500">Dormitories</h1>
          <span className="border-b-[1px] border-gray-200 w-full mx-1" />
        </div>
        <Link
          className="w-full"
          onClick={() => setNav(false)}
          to="/admin/student-profile"
        >
          <div
            className={`group w-full flex justify-start hover:bg-gray-200 items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <ImProfile size={20} />
            </div>

            <h1 className="text-xs">Student Profile</h1>
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setNav(false)}
          to="/admin/manage-dorm"
        >
          <div
            className={`group w-full flex justify-start hover:bg-gray-200 items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <MdManageHistory size={20} />
            </div>

            <h1 className="text-xs">Manage Dorm</h1>
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setNav(false)}
          to="/admin/dorm-list"
        >
          <div
            className={`group w-full flex justify-start hover:bg-gray-200 items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <CiViewList size={20} />
            </div>

            <h1 className="text-xs">Dorm List</h1>
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setNav(false)}
          to="/admin/inquiries"
        >
          <div
            className={`group w-full flex justify-start hover:bg-gray-200 items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaRegQuestionCircle size={20} />
            </div>

            <h1 className="text-xs">Inquiries</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
