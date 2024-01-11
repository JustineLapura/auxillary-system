import React from "react";
import MainDorm from "../../../components/dormitory/MainDorm";
import Pricing from "../../../components/dormitory/Pricing";
import MenSection from "../../../components/dormitory/MenSection";
import LadiesSection from "../../../components/dormitory/LadiesSection";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";

const Dormitory = () => {
  return (
    <div>
      <Navbar/>
      {/* <MainDorm /> */}
      <Pricing />
      <MenSection />
      <LadiesSection />
      <div className="w-full flex justify-center py-10 px-8">
        <Link to="/dorm/inquire">
          <button className="px-6 py-3 text-white flex items-center gap-2 bg-yellow-400 rounded-xl text-xl font-semibold mt-12">
            <FaRegQuestionCircle /> Inquire Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dormitory;
