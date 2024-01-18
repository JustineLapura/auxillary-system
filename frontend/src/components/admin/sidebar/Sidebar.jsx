import React from "react";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { FiSettings, FiClock } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaTooth, FaDesktop } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="fixed border-2  top-24 w-20 lg:w-40 h-full p-4 bg-white border-r-[1px] flex flex-col justify-between overflow-y-scroll">
      <div className="flex flex-col items-center uppercase text-sm font-bold w-full">
        <Link to="/admin">
          <div className="group w-full flex justify-between items-center gap-1 px-2 lg:mr-3 lg:hover:bg-gray-100 ">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaDesktop size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">Dashboard</h1>
          </div>
        </Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2 mt-3 mb-6" />
        <h1 className="hidden lg:flex text-gray-500 mb-4">Facilities</h1>

        <Link to="/admin/bookings">
          <div className="group w-full flex justify-between items-center gap-2 px-2 lg:mr-3 lg:hover:bg-gray-100 ">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">Bookings</h1>
          </div>
        </Link>
        <Link to="/admin/rented-facilities">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiClock size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">
              Rented <br /> Facilities
            </h1>
          </div>
        </Link>
        <Link to="/admin/add-facilities">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaTooth size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">
              Add <br /> Facilities
            </h1>
          </div>
        </Link>
        <Link to="/admin/records">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaTooth size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">Records</h1>
          </div>
        </Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2 mt-3 mb-6" />
        <h1 className="hidden lg:flex text-gray-500 mb-4">Dormitory</h1>
        <Link to="/admin/student-profile">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">
              Student <br /> Profile
            </h1>
          </div>
        </Link>
        <Link to="/admin/manage-dorm">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">
              Manage <br /> Dorm
            </h1>
          </div>
        </Link>
        <Link to="/admin/dorm-list">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">Dorm List</h1>
          </div>
        </Link>
        <Link to="/admin/inquiries">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">Inquiries</h1>
          </div>
        </Link>
        <Link to="/">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">Inquiries</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
