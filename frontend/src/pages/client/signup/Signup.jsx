import React, { useState, useContext } from "react";
import { AiFillHome, AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSignup } from "../../../hooks/useSignup";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const { signup, isLoading, error, emptyFields } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    await signup(
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      password,
      passwordConfirm
    );
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
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-500 to-yellow-300 flex justify-center items-center text-gray-900">
      <div className="w-[80%] md:w-[40%] py-4 px-6 mt-6 rounded-xl flex flex-col items-center gap-6 bg-white/30">
        <h1 className="mt-2 text-xl md:text-2xl text-white font-bold">
          Create an Account
        </h1>
        <div className="relative flex justify-center overflow-hidden text-gray-800 font-semibold rounded-lg w-2/3 md:w-1/3 bg-gray-300/70 border-none gap-4 px-2">
          <div
            className="h-full w-1/2 text-center py-2 rounded-xl ps-1 z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/login" className="w-full">
              <h1>Login</h1>
            </Link>
          </div>
          <div className="h-full w-full text-center py-2 ps-2 rounded-xl z-10">
            <h1>SignUp</h1>
          </div>
          {/* background  */}
          <div
            className={
              isHovered
                ? "absolute left-0 h-full w-1/2 rounded-lg bg-gradient-to-l from-yellow-100 to-yellow-400/80 duration-300 ease-in transform"
                : "absolute right-0 h-full w-1/2 rounded-lg bg-gradient-to-l from-yellow-100 to-yellow-400/80 duration-300 ease-in transform"
            }
          />
        </div>

        <form className="">
          <div className="w-full flex items-center gap-4 mb-3">
            <input
              className={
                emptyFields && emptyFields.includes("firstName")
                  ? "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border border-red-500"
                  : "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none"
              }
              type="text"
              placeholder="Firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus={true}
              required
            />
            <input
              className={
                emptyFields && emptyFields.includes("lastName")
                  ? "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border border-red-500"
                  : "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none"
              }
              type="text"
              placeholder="Lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex items-center gap-4 mb-3">
            <input
              className={
                emptyFields && emptyFields.includes("email")
                  ? "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border border-red-500"
                  : "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none"
              }
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="w-full flex items-center bg-gray-200 rounded-full">
              <p className="text-gray-500 font-semibold px-2">+63</p>
              <input
                className={
                  emptyFields && emptyFields.includes("phoneNumber")
                    ? "w-full py-2 px-4 rounded-e-full bg-white/80 shadow-lg focus:outline-none border border-red-500"
                    : "w-full py-2 px-4 rounded-e-full bg-white/80 shadow-lg focus:outline-none"
                }
                type="tel"
                maxLength="10"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <input
            className={
              emptyFields && emptyFields.includes("address")
                ? "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border border-red-500"
                : "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none"
            }
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <div className="w-full flex items-center gap-4 mt-3">
            <input
              className={
                emptyFields && emptyFields.includes("password")
                  ? "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border border-red-500"
                  : "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none"
              }
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className={
                emptyFields && emptyFields.includes("passwordConfirm")
                  ? "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none border border-red-500"
                  : "w-full py-2 px-4 rounded-full bg-white/80 shadow-lg focus:outline-none"
              }
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </div>
          <div className="w-full mt-4 flex justify-center gap-2">
            <Link
              to="/"
              className="py-2 px-3 rounded-lg bg-red-500/80 font-bold shadow-xl text-white "
            >
              <AiFillHome size={25} />
            </Link>
            <button
              disabled={isLoading}
              type="submit"
              className="w-26 py-2 px-6 rounded-lg bg-blue-500 font-bold shadow-xl text-white "
              onClick={handleSignup}
            >
              {isLoading ? (
                <AiOutlineLoading3Quarters
                  size={25}
                  className="animate-spin text-white font-bold"
                />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          {error && (
            <p className="w-full text-red-500 text-center text-sm mt-4 font-semibold">
              {error}
            </p>
          )}
        </form>
        <div className="w-full flex justify-center">
          <Link to="/login">
            <button className="py-2 px-5 rounded-lg bg-gray-500 font-bold shadow-xl text-white ">
              Log into Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
