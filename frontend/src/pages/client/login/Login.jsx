import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../../hooks/useLogin";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash, FaCheckCircle } from "react-icons/fa";

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const { login, isLoading, error, emptyFields } = useLogin();

  const icon = visible ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />;
  const inputType = visible ? "text" : "password";

  // console.log("email: ", email, "Password: ", password);

  const toggleShowPassword = () => {
    setVisible(!visible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  // Event handler for when the mouse enters the element
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Event handler for when the mouse leaves the element
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative h-screen w-full pt-24 bg-gradient-to-b from-blue-500 to-yellow-300 flex justify-center items-center text-gray-900">
      <div className="flex justify-evenly items-center bg-gray-300/30 rounded-xl h-[450px] w-[300px] md:w-2/3 overflow-hidden">
        <div className=" hidden lg:flex justify-center items-center bg-gray-300/50 h-full w-full">
          <img
            className="w-1/2 hidden lg:flex"
            width={100}
            height={100}
            src="/ssuBigLogo.png"
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center px-16">
          <h1 className="mt-2 text-xl md:text-2xl text-white font-bold">
            Sign in
          </h1>
          <div className="relative w-2/3 flex justify-center overflow-hidden font-semibold rounded-lg bg-gray-300/70 text-gray-800 border-none gap-4">
            <div className="h-full w-full text-center py-2 pe-1 z-10">
              <h1>Login</h1>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-full w-full text-center py-2 pe-1 z-10"
            >
              <Link to="/signup">
                <h1>SignUp</h1>
              </Link>
            </div>

            {/* background  */}
            <div
              className={
                isHovered
                  ? "absolute right-0 h-full w-1/2 rounded-lg bg-gradient-to-l from-yellow-100 to-yellow-400/80 duration-300 ease-in transform"
                  : "absolute left-0 h-full w-1/2 rounded-lg bg-gradient-to-l from-yellow-100 to-yellow-400/80 duration-300 ease-in transform"
              }
            />
          </div>
          <form action="" className="w-full">
            <input
              className={
                emptyFields && emptyFields.includes("email")
                  ? "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border-2 border-red-500 mb-2"
                  : "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none mb-2"
              }
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus={true}
            />
            {/* <input
              className={
                emptyFields && emptyFields.includes("password")
                  ? "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border-2 border-red-500 mb-2"
                  : "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none mb-2"
              }
              type={inputType}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            /> */}
            <div className="relative w-full">
              <input
                className={
                  emptyFields && emptyFields.includes("password")
                    ? "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border border-red-500"
                    : "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none"
                }
                type={inputType}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                onClick={toggleShowPassword}
              >
                {icon}
              </span>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <Link
                to="/"
                className="py-2 px-2 rounded-lg bg-red-500/80 font-bold shadow-xl text-white "
              >
                <AiFillHome size={25} />
              </Link>
              <button
                disabled={isLoading}
                className="py-2 px-12 rounded-lg bg-blue-500 font-bold shadow-xl text-white "
                onClick={handleLogin}
              >
                {isLoading ? (
                  <AiOutlineLoading3Quarters
                    size={25}
                    className="animate-spin text-white font-bold"
                  />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          {error && (
            <p className="text-center text-sm text-red-500 font-semibold">
              {error}
            </p>
          )}
          <div className="w-full space-y-2">
            <div className="w-full flex flex-col items-center gap-4 justify-center">
              <Link to="/signup">
                <button className="py-2 px-5 rounded-lg bg-gray-500 font-bold shadow-xl text-white ">
                  Create New Account
                </button>
              </Link>
              <Link to="/admin-login">
                <button className="py-2 px-9 rounded-lg bg-gray-500 font-bold shadow-xl text-white ">
                  Log in as admin
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
