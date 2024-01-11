import React from "react";

const PaginationSection = () => {
  return (
    <div className="w-full max-w-[1000px] flex justify-between items-center mt-12">
      <h1 className=" text-sm lg:text-xl font-semibold text-gray-700">
        Showing page 1 out of 10
      </h1>

      <div className="flex justify-between items-center w-[130px] md:w-[200px] h-[35px] md:h-[40px] rounded text-center text-gray-600 font-semibold border border-gray-300 shadow">
        <div className="w-2/5 h-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 duration-200">
          <h1 className="">Prev</h1>
        </div>
        <div className="w-1/5 h-full flex justify-center items-center text-white bg-blue-700 border-blue-700">
          <h1>1</h1>
        </div>
        <div className="w-2/5 h-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 duration-200">
          <h1>Next</h1>
        </div>
      </div>
    </div>
  );
};

export default PaginationSection;
