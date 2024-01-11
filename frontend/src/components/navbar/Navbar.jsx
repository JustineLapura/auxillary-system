import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import NavMenu from "./NavMenu";
import { AuthContext } from "../../context/AuthContext";
import { useLogout } from "../../hooks/useLogout";
// import NavMenu from "./NavMenu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { user } = useContext(AuthContext);
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

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

      <div
        onClick={() => setNav(true)}
        className="lg:hidden text-white cursor-pointer"
      >
        <FaBars size={20} />
      </div>

      {/* Navbar Menu overlay  */}
      <div
        className={
          nav
            ? "fixed lg:hidden top-0 left-0 w-full h-screen bg-blue-950/80 z-20"
            : "hidden"
        }
      />

      {/* Hamburger menu  */}
      <NavMenu nav={nav} setNav={setNav} />

      {/* right  */}
      <div className="h-full hidden lg:flex items-center gap-16 text-white">
        <ul className="flex justify-center items-center uppercase text-lg gap-8">
          <Link className="hover:text-blue-200/90" to="/">
            <li>Home</li>
          </Link>
          <Link className="hover:text-blue-200/90" to="/rentals">
            <li>Facility</li>
          </Link>
          <Link className="hover:text-blue-200/90" to="/dorm">
            <li>Dormitory</li>
          </Link>
          <Link className="hover:text-blue-200/90" to="/contacts">
            <li>Contact Us</li>
          </Link>
        </ul>
        {user && (
          <button
            className="py-3 border border-yellow-400 bg-yellow-400 hover:bg-yellow-300 font-bold hover:scale-105 duration-300 px-6 rounded-xl "
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        {!user && (
          <div className="flex items-center gap-8 text-xl font-bold">
            <Link className="hover:text-blue-200/90" to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button className="py-3 border border-yellow-400 bg-yellow-400 hover:bg-yellow-300 hover:scale-105 duration-300 px-6 rounded-xl ">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
