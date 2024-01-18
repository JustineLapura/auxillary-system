import { enqueueSnackbar, useSnackbar } from "notistack";
import React, { useState } from "react";

const AddDormModal = ({ addModal, setAddModal }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [dueStart, setDueStart] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [emptyFields, setEmptyFields] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleAddDormList = async (e) => {
    e.preventDefault();
    alert(`
      name: ${name}
      type: ${type}
      roomNumber: ${roomNumber}
      dueStart: ${dueStart}
      dueDate: ${dueDate}
    `);

    //   const newDormManagement = {
    //     type,
    //     roomNumber,
    //     status,
    //     monthlyRate,
    //   };

    //   try {
    //     const response = await fetch("http://localhost:4000/api/dormManagement", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(newDormManagement),
    //     });

    //     const json = await response.json();

    //     if (!response.ok) {
    //       setEmptyFields(json.emptyFields);
    //       const errorMessage = json.error || "An error occurred";
    //       setError(errorMessage);
    //       enqueueSnackbar(errorMessage, {
    //         variant: "error",
    //       });
    //     }

    //     if (response.ok) {
    //       enqueueSnackbar("New student has been created", { variant: "success" });
    //       setType("");
    //       setRoomNumber("");
    //       setStatus("");
    //       setMonthlyRate("");
    //       setAddModal(false);

    //       // Reload the page upon successful submission
    //       window.location.reload();
    //     }
    //   } catch (error) {
    //     console.error("Error creating post:", error);
    //     // Handle create post error
    //   }
  };

  return (
    <form
      onSubmit={handleAddDormList}
      className={
        addModal
          ? "fixed w-[80%] max-w-[500px] h-[70%] top-1/2 left-1/2 transdiv -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
          : "fixed w-[80%] max-w-[500px] h-[70%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
      }
    >
      <div className="w-full flex flex-col">
        <label htmlFor="" className="font-semibold ">
          Name:
        </label>
        <input
          type="text"
          className="w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="" className="font-semibold">
          Dormitory:
        </label>
        <select
          className="w-full rounded py-1 mt-2 text-center text-gray-500 focus:outline-none cursor-pointer"
          name=""
          id=""
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="">SELECT DORMITORY</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="" className="font-semibold ">
          Room no:
        </label>
        <input
          type="number"
          className="w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none"
          onChange={(e) => setRoomNumber(e.target.value)}
          value={roomNumber}
        />
      </div>
      <div className="w-full flex gap-6">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-semibold ">
            Due Start:
          </label>
          <input
            type="date"
            className="w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none"
            onChange={(e) => setDueStart(e.target.value)}
            value={dueStart}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-semibold ">
            Due Start:
          </label>
          <input
            type="date"
            className="w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </div>
      </div>
      <div className="w-full flex items-end gap-6">
        <div className="w-2/3 mx-auto flex gap-4 mt-4">
          <button
            className="w-full bg-gray-500 text-white rounded h-10"
            onClick={() => setAddModal(false)}
          >
            Cancel
          </button>
          <button className="w-full bg-blue-500 text-white rounded h-10">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDormModal;
