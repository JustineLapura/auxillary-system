import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import Navbar from "../../components/navbar/Navbar";
import AdminNavbar from "../../components/admin/navbar/AdminNavbar";

const Layout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="w-full flex pt-24">
        <Sidebar />
        <div className="w-full h-full ml-20 md:ml-40">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
