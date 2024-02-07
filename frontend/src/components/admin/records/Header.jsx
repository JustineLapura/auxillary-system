import React from "react";

const Header = () => {
  return (
    <>
      <div className="lg:flex justify-center items-center gap-8 text-gray-800 ">
        <img
          className="lg:hidden w-20 h-20 object-cover mx-auto mt-5 rounded-full"
          src="/auxillaryLogo.png"
          alt=""
        />
        <div className="w-[250px] lg:w-full mx-auto text-center font-bold lg:text-2xl my-6">
          <h1>Samar State University Auxillary Services</h1>
          <p>Arteche BlvdBrgy. Guindapunan, Catbalogan City, 6700 Samar</p>
        </div>
        <img
          className="hidden lg:block w-20 h-20 object-cover rounded-full"
          src="/auxillaryLogo.png"
          alt=""
        />
      </div>
      <h1 className="text-center font-bold text-3xl mt-8 text-blue-900">
        Reports
      </h1>
    </>
  );
};

export default Header;
