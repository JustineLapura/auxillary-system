import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useLogout } from "@/hooks/useLogout";
import { AuthContext } from "@/context/AuthContext";

const NavMenu = ({ nav, setNav }) => {
  const { user } = useContext(AuthContext).user || {};
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* Hamburger Menu  */}
      <div
        className={
          nav
            ? "fixed h-[75%] w-[90%] lg:hidden text-blue-900 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl z-20 ease-in duration-300"
            : "fixed h-[75%] w-[90%] text-blue-900 left-1/2 top-[-100%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl z-10 ease-in duration-300"
        }
      >
        <div className="h-full flex w-full rounded-xl bg-white border">
          <ul className="p-5 mt-8 w-full flex flex-col items-center justify-center font-semibold gap-5 space-y-3">
            <Link
              className="cursor-pointer hover:bg-blue-500 w-full py-3 rounded-full text-center hover:text-white"
              onClick={() => setNav(false)}
              to="/"
            >
              <li>Home</li>
            </Link>

            <Link
              className="cursor-pointer hover:bg-blue-500 w-full py-3 rounded-full text-center hover:text-white"
              onClick={() => setNav(false)}
              to="/rentals"
            >
              <li>Facility</li>
            </Link>

            <Link
              className="cursor-pointer hover:bg-blue-500 w-full py-3 rounded-full text-center hover:text-white"
              onClick={() => setNav(false)}
              to="/dorm"
            >
              <li>Dormitory</li>
            </Link>

            {user && (
              <li className="w-full">
                <button className="w-full text-center font-semibold border-2 border-blue-400 hover:bg-yellow-300 hover:border-yellow-300 hover:text-white duration-300 px-6 py-2 rounded-full cursor-pointer">
                  Logout
                </button>
              </li>
            )}
            {!user && (
              <li className="w-full flex flex-col space-y-4">
                <Link
                  onClick={() => setNav(false)}
                  to="/login"
                  className="w-full text-center font-semibold border-2 border-blue-400 hover:bg-blue-400 hover:text-white duration-300 px-6 py-2 rounded-full cursor-pointer"
                >
                  Login
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/signup"
                  className="w-full text-center font-semibold border-2 border-blue-400 hover:bg-yellow-300 hover:border-yellow-300 hover:text-white duration-300 px-6 py-2 rounded-full cursor-pointer"
                >
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div
          onClick={() => setNav(false)}
          className="absolute top-5 right-5 flex justify-center items-center p-3 rounded-full hover:bg-gray-300 duration-300 h-10 w-10 mx-auto cursor-pointer"
        >
          <FaTimes size={20} />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
