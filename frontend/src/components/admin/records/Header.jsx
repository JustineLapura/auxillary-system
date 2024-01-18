import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-8 text-gray-800 ">
        <div className="text-center font-bold text-2xl my-6">
          <h1>Samar State University Auxillary Services</h1>
          <p>Arteche BlvdBrgy. Guindapunan, Catbalogan City, 6700 Samar</p>
        </div>
        <img
          className="w-20 h-20 object-cover rounded-full"
          src="/auxillaryLogo.png"
          alt=""
        />
      </div>
      <h1 className="text-center font-bold text-3xl mt-8 text-blue-900">Reports</h1>
    </>
  );
};

export default Header;
