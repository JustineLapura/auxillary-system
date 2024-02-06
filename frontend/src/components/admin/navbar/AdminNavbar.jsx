import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  //   const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin-login");
  };

  return (
    <div className="fixed h-24 w-full bg-blue-900/90 mx-auto flex justify-between items-center px-4 z-20">
      {/* left */}
      <div className="text-white font-bold flex gap-4 items-center">
        {/* image  */}
        <img
          className="w-14 rounded-full border-2 border-white"
          width={80}
          height={80}
          src="/auxillaryLogo.png"
          alt="logo"
        />
        <h1 className="text-sm lg:text-xl font-black">
          Auxilliary
          Services
        </h1>
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
    </div>
  );
};

export default AdminNavbar;
