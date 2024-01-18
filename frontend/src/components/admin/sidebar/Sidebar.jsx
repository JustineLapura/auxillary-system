import React from "react";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { FiSettings, FiClock } from "react-icons/fi";
import { FaTooth, FaDesktop, FaRegQuestionCircle } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsBuildingAdd } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { MdBookmarkAdded, MdManageHistory } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
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
              <MdBookmarkAdded size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">Bookings</h1>
          </div>
        </Link>
        <Link to="/admin/rented-facilities">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaBuildingColumns size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">
              Rented <br /> Facilities
            </h1>
          </div>
        </Link>
        <Link to="/admin/add-facilities">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsBuildingAdd size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">
              Add <br /> Facilities
            </h1>
          </div>
        </Link>
        <Link to="/admin/records">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <TbReport size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">Records</h1>
          </div>
        </Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2 mt-3 mb-6" />
        <h1 className="hidden lg:flex text-gray-500 mb-4">Dormitory</h1>
        <Link to="/admin/student-profile">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <ImProfile size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">
              Student <br /> Profile
            </h1>
          </div>
        </Link>
        <Link to="/admin/manage-dorm">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <MdManageHistory size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">
              Manage <br /> Dorm
            </h1>
          </div>
        </Link>
        <Link to="/admin/dorm-list">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <CiViewList size={20} />
            </div>
            <h1 className="hidden lg:block text-xs">Dorm List</h1>
          </div>
        </Link>
        <Link to="/admin/inquiries">
          <div className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100">
            <div className="w-full bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaRegQuestionCircle size={20} />
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
