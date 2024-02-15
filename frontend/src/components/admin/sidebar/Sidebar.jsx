import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
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
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);

  return (
    <div
      className={`hidden fixed border-2 top-24 ${
        openSidebarMenu ? "w-[300px]" : "w-20"
      } duration-200 ease-in h-full p-4 bg-white border-r-[1px] md:flex flex-col overflow-y-scroll z-20`}
    >
      <div className="flex flex-col items-center uppercase text-sm font-bold w-full">
        <div className="w-full">
          <div className="group w-full flex justify-center items-center gap-4 px-2 ">
            <div
              className="w-11 bg-gray-100  hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block"
              onClick={() => setOpenSidebarMenu(!openSidebarMenu)}
            >
              {openSidebarMenu ? (
                <IoIosArrowBack size={20} />
              ) : (
                <IoIosArrowForward size={20} />
              )}
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-lg font-black text-gray-500">
                Auxilliary Admin
              </h1>
            )}
          </div>
        </div>

        <Link
          to="/admin"
          className="w-full"
          onClick={() => setOpenSidebarMenu(false)}
        >
          <div
            className={`group w-full flex ${
              openSidebarMenu
                ? "justify-start hover:bg-gray-200"
                : "justify-center"
            } items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <PiSquaresFourFill size={20} />
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-xs">Dashboard</h1>
            )}
          </div>
        </Link>
        {openSidebarMenu && (
          <div className="w-full h-full flex justify-start items-center">
            <span className="border-b-[1px] border-gray-200 w-full mx-1" />
            <h1 className="hidden md:flex text-gray-500">Facilities</h1>
            <span className="border-b-[1px] border-gray-200 w-full mx-1" />
          </div>
        )}

        <Link
          className="w-full"
          onClick={() => setOpenSidebarMenu(false)}
          to="/admin/bookings"
        >
          <div
            className={`group w-full flex ${
              openSidebarMenu
                ? "justify-start hover:bg-gray-200"
                : "justify-center"
            } items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <MdBookmarkAdded size={20} />
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-xs">Bookings</h1>
            )}
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setOpenSidebarMenu(false)}
          to="/admin/rented-facilities"
        >
          <div
            className={`group w-full flex ${
              openSidebarMenu
                ? "justify-start hover:bg-gray-200"
                : "justify-center"
            } items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaBuildingColumns size={20} />
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-xs">Rented Facilities</h1>
            )}
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setOpenSidebarMenu(false)}
          to="/admin/add-facilities"
        >
          <div
            className={`group w-full flex ${
              openSidebarMenu
                ? "justify-start hover:bg-gray-200"
                : "justify-center"
            } items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsBuildingAdd size={20} />
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-xs">Add Facilities</h1>
            )}
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setOpenSidebarMenu(false)}
          to="/admin/records"
        >
          <div
            className={`group w-full flex ${
              openSidebarMenu
                ? "justify-start hover:bg-gray-200"
                : "justify-center"
            } items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <TbReport size={20} />
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-xs">Records</h1>
            )}
          </div>
        </Link>
        {openSidebarMenu && (
          <div className="w-full h-full flex justify-start items-center">
            <span className="border-b-[1px] border-gray-200 w-full mx-1" />
            <h1 className="hidden md:flex text-gray-500">Dormitories</h1>
            <span className="border-b-[1px] border-gray-200 w-full mx-1" />
          </div>
        )}
        <Link
          className="w-full"
          onClick={() => setOpenSidebarMenu(false)}
          to="/admin/student-profile"
        >
          <div
            className={`group w-full flex ${
              openSidebarMenu
                ? "justify-start hover:bg-gray-200"
                : "justify-center"
            } items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <ImProfile size={20} />
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-xs">Student Profile</h1>
            )}
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setOpenSidebarMenu(false)}
          to="/admin/manage-dorm"
        >
          <div
            className={`group w-full flex ${
              openSidebarMenu
                ? "justify-start hover:bg-gray-200"
                : "justify-center"
            } items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <MdManageHistory size={20} />
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-xs">Manage Dorm</h1>
            )}
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setOpenSidebarMenu(false)}
          to="/admin/dorm-list"
        >
          <div
            className={`group w-full flex ${
              openSidebarMenu
                ? "justify-start hover:bg-gray-200"
                : "justify-center"
            } items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <CiViewList size={20} />
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-xs">Dorm List</h1>
            )}
          </div>
        </Link>
        <Link
          className="w-full"
          onClick={() => setOpenSidebarMenu(false)}
          to="/admin/inquiries"
        >
          <div
            className={`group w-full flex ${
              openSidebarMenu
                ? "justify-start hover:bg-gray-200"
                : "justify-center"
            } items-center gap-4 px-2 rounded`}
          >
            <div className="w-11 bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaRegQuestionCircle size={20} />
            </div>
            {openSidebarMenu && (
              <h1 className="hidden md:block text-xs">Inquiries</h1>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
