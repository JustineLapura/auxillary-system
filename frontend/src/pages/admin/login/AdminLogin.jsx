import React, { useState, useContext } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const AdminLogin = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorPrompt, setErrorPrompt] = useState("");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  let emptyFields = [];
  console.log("EmptyFields: ", emptyFields);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username) {
      emptyFields.push("username");
    }
    if (!password) {
      emptyFields.push("password");
    }

    if (emptyFields.length > 0) {
      setErrorPrompt("You must fill in all the fields ");
      return;
    }

    if (username !== "admin") {
      setErrorPrompt("Incorrect username");
      return;
    }

    if (password !== "admin") {
      setErrorPrompt("Incorrect password");
      return;
    }

    enqueueSnackbar("You logged in successfuly!", { variant: "success" });
    navigate("/admin");
  };

  console.log("Username: ", username, "Password: ", password);

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
        <form className="flex flex-col gap-6 justify-center items-center px-16">
          <div className="">
            <img
              className="w-24 lg:hidden"
              width={100}
              height={100}
              src="/ssunewlogo.png"
              alt="logo"
            />
          </div>

          <h1 className="font-bold text-xl md:text-2xl text-white">
            Admin Login
          </h1>

          <input
            className={
              emptyFields.includes("username")
                ? "py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border border-red-500"
                : "py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none"
            }
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus={true}
          />
          <input
            className="py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="w-full space-y-2">
            <div className="flex justify-center gap-2">
              {/* <Link to="/login">
                <button className="py-2 px-2 rounded-lg bg-red-500/80 font-bold shadow-xl text-white ">
                <FaArrowAltCircleLeft size={25} />
                </button>
              </Link> */}
              <button
                className="py-2 px-8 rounded-lg bg-blue-500 font-bold shadow-xl text-white "
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
          </div>
          {errorPrompt && (
            <p className="text-center text-sm text-red-500 font-semibold">
              {errorPrompt}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
