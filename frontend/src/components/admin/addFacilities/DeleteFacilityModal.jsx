import React from "react";

const DeleteFacilityModal = ({
  id,
  facilityName,
  deleteModal,
  setDeleteModal,
}) => {
  return (
    <>
      {/*Modal Overlay  */}
      <div
        className={
          deleteModal
            ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20"
            : ""
        }
      />
      <div
        className={
          deleteModal
            ? "fixed h-[300px] w-[400px] px-4 flex flex-col gap-16 justify-center items-center bg-white font-bold rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-in duration-300 z-20"
            : "fixed h-[300px] w-[400px] px-4 flex flex-col gap-16 justify-center items-center bg-white font-bold rounded-xl top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-in duration-300 z-20"
        }
      >
        <h1 className="text-xl text-center">
          Are you sure you want to delete <br /> {facilityName}?
        </h1>
        <div className="flex justify-between items-center gap-3">
          <button
            onClick={() => setDeleteModal(false)}
            className="py-2 px-5 rounded-xl bg-red-500 text-white"
          >
            No
          </button>
          <button
            onClick={() => setDeleteModal(false)}
            className="py-2 px-5 rounded-xl bg-blue-500 text-white"
          >
            Yes
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteFacilityModal;
