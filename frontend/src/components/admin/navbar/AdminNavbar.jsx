import React, { useState, useEffect, useContext } from "react";

const AdminNavbar = () => {
  //   const [nav, setNav] = useState(false);

  //   const handleLogout = () => {
  //     setIsLoggedin(false)
  //     router.push("/")
  //   }

  return (
    <div className="fixed h-24 w-full bg-blue-900/90 mx-auto flex justify-between items-center px-4 z-20">
      {/* left */}
      <div className="text-white font-bold text-xl flex gap-4 items-center">
        {/* image  */}
        <img
          className="w-14 rounded-full border-2 border-white"
          width={80}
          height={80}
          src="/auxillaryLogo.png"
          alt="logo"
        />
        <h1 className="text-xl font-black">
          Auxilliary <br />
          Services
        </h1>
      </div>

      {/* right  */}
      <div className="h-full hidden lg:flex items-center gap-16 text-white">
        <button className="py-3 border border-yellow-400 bg-yellow-400 hover:bg-yellow-300 font-bold hover:scale-105 duration-300 px-6 rounded-xl ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
