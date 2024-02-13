import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

const AdminNavbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleLogout = () => {
    navigate("/admin-login");
  };

  return (
    <div className="fixed h-24 w-full bg-blue-900/90 mx-auto flex justify-between items-center px-4 z-20">
      {/* left */}

      <div className="text-white font-bold flex gap-4 items-center">
        <div className="md:hidden cursor-pointer" onClick={toggleMode}>
          <AiOutlineMenu size={20} />
        </div>
        {/* image  */}
        <Link to="/admin">
          <img
            className="w-14 rounded-full border-2 border-white"
            width={80}
            height={80}
            src="/auxillaryLogo.png"
            alt="logo"
          />
        </Link>
        <h1 className="text-sm lg:text-xl font-black">Auxilliary Services</h1>
      </div>

      {/* right  */}
      <div className="h-full flex items-center gap-16 text-white">
        <button
          onClick={handleLogout}
          className="py-1 lg:py-3 px-2 lg:px-6 border text-sm lg:text-base border-yellow-400 bg-yellow-400 hover:bg-yellow-300 font-bold hover:scale-105 duration-300 rounded lg:rounded-xl "
        >
          Logout
        </button>
      </div>

      {/* mobile menu */}
      {/* overlat */}
      {nav && (
        <div
          className="md:hidden bg-black/40 fixed w-full h-screen z-10 top-0 left-0"
          // onClick={setNav(false)}
        />
      )}

      {/* Side Drawer menu  */}
      {nav && <SidebarMenu nav={nav} setNav={setNav} />}
    </div>
  );
};

export default AdminNavbar;
