import React, { useState } from "react";

const Header = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="lg:flex justify-center items-center gap-8 text-gray-800 ">
        <img
          className="lg:hidden w-20 h-20 object-cover mx-auto mt-5 rounded-full"
          src="/auxillaryLogo.png"
          alt=""
        />
        <div className="w-[250px] lg:w-full mx-auto text-center font-bold lg:text-2xl my-6">
          <h1>Samar State University Auxilary Services</h1>
          <p>Arteche BlvdBrgy. Guindapunan, Catbalogan City, 6700 Samar</p>
        </div>
        <img
          className="hidden lg:block w-20 h-20 object-cover rounded-full me-4"
          src="/auxillaryLogo.png"
          alt=""
        />
      </div>
      <div className="w-full flex justify-between items-center mt-4 ps-4 md:pe-4">
        <h1 className="md:text-center font-bold text-3xl text-blue-900">
          Reports
        </h1>
        <button
          className="w-24 py-1 px-2 rounded-lg font-semibold bg-green-700 text-white"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </>
  );
};

export default Header;
