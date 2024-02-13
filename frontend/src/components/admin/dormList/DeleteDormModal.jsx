import axios from "axios";
import React from "react";
import { useSnackbar } from "notistack";

const DeleteDormModal = ({ dorm, deleteModal, setDeleteModal }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteDorm = async () => {
    try {
      await axios.delete(
        "https://auxillary-services-api-rosy.vercel.app/api/dormList/" +
          dorm._id
      );
      enqueueSnackbar("Dorm has been deleted", { variant: "success" });
      // Reload the page upon successful submission
      window.location.reload();
    } catch (error) {
      console.log(error);
    }

    setDeleteModal(false);
  };
  return (
    <>
      {/*Modal Overlay  */}
      <div
        onClick={() => setDeleteModal(false)}
        className={
          deleteModal
            ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20"
            : ""
        }
      />
      <div
        className={
          deleteModal
            ? "fixed h-[300px] w-[90%] max-w-[400px] px-4 flex flex-col gap-14 justify-center items-center bg-white font-bold rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-in duration-300 z-20"
            : "fixed h-[300px] w-[90%] max-w-[400px] px-4 flex flex-col gap-14 justify-center items-center bg-white font-bold rounded-xl top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-in duration-300 z-20"
        }
      >
        <h1 className="text-xl text-center">
          Are you sure you want to delete <br /> <br />
          <span className="text-blue-800 text-2xl capitalize">{dorm.name}</span>
          <br />
          <span className="text-blue-800 text-xl capitalize">
            {dorm.firstName} {dorm.lastName} <br /> {dorm.type} dorm : room{" "}
            {dorm.roomNumber}
          </span>
          ?
        </h1>
        <div className="flex justify-between items-center gap-3">
          <button
            onClick={() => setDeleteModal(false)}
            className="py-2 px-5 rounded-xl bg-red-500 text-white"
          >
            No
          </button>
          <button
            onClick={handleDeleteDorm}
            className="py-2 px-5 rounded-xl bg-blue-500 text-white"
          >
            Yes
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteDormModal;
