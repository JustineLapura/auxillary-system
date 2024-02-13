import React, { useState, useContext } from "react";
import Pricing from "../../../components/dormitory/Pricing";
import MenSection from "../../../components/dormitory/MenSection";
import LadiesSection from "../../../components/dormitory/LadiesSection";
import MainDorm from "../../../components/dormitory/MainDorm";
import { FaRegQuestionCircle } from "react-icons/fa";
import Navbar from "../../../components/navbar/Navbar";
import InquireModal from "../../../components/dormitory/InquireModal";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dormitory = () => {
  const { user } = useContext(AuthContext).user || {};
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleOpenInquireModal = () => {
    if (!user) {
      navigate("/login");
    } else {
      setOpenModal(true);
    }
  };

  return (
    <div>
      <Navbar />
      <MainDorm />
      <Pricing />
      <MenSection />
      <LadiesSection />
      <div className="w-full flex justify-center py-10 px-8">
        <button
          className="px-3 py-1 md:px-6 md:py-3 text-white flex items-center gap-2 bg-yellow-400 rounded-xl md:text-xl font-semibold mt-12"
          onClick={handleOpenInquireModal}
        >
          <FaRegQuestionCircle /> Inquire Now
        </button>
        {openModal && (
          <InquireModal openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
};

export default Dormitory;
