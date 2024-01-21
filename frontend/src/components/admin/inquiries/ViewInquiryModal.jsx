import React from "react";

const ViewInquiryModal = ({ inquiry, viewInquiry, setViewInquiry }) => {
  return (
    <>
      {/*Modal Overlay  */}
      <div
        onClick={() => setViewInquiry(false)}
        className={
          viewInquiry
            ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20"
            : ""
        }
      />
      <div
        className={
          viewInquiry
            ? "fixed w-[80%] max-w-[500px] h-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-20 rounded-lg  py-5 px-8 ease-in duration-300"
            : "fixed w-[80%] max-w-[500px] h-[450px] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-20 rounded-lg  p-5 ease-in duration-300"
        }
      >
        <div className="flex items-center mb-3">
          <p className="font-bold">Name: </p>
          <p className="ms-2 text-gray-900 font-semibold">
            {inquiry.firstName} {inquiry.lastName}
          </p>
        </div>
        <div className="flex items-center mb-3">
          <p className="font-bold">Address: </p>
          <p className="ms-2 text-gray-900 font-semibold text-xs">
            {inquiry.address}
          </p>
        </div>
        <div className="flex items-center mb-3">
          <p className="font-bold">Contact: </p>
          <p className="ms-2 text-gray-900 font-semibold">
            +63{inquiry.phoneNumber}
          </p>
        </div>
        <div className="flex items-center mb-3">
          <p className="font-bold">Email: </p>
          <p className="ms-2 text-gray-900 font-semibold">{inquiry.email}</p>
        </div>
        <div className="flex items-center mb-3">
          <p className="font-bold">Name: </p>
          <p className="ms-2 text-gray-900 font-semibold">
            {inquiry.firstName} {inquiry.lastName}
          </p>
        </div>
        <div className="w-full flex mt-10 mb-2">
          <p className="font-bold">Inquiries: </p>
          <p className="ms-2 text-gray-900 font-semibold h-[150px] overflow-y-scroll">{inquiry.message}</p>
        </div>

        <div className="absolute bottom-4 right-4 flex justify-end ">
          <button
            onClick={() => setViewInquiry(false)}
            className="px-6 py-2 bg-blue-800 text-white font-bold mt-2 rounded-sm"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewInquiryModal;
