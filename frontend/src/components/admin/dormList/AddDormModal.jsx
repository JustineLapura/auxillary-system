import { enqueueSnackbar, useSnackbar } from "notistack";
import React, { useState } from "react";

const AddDormModal = ({ addModal, setAddModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [type, setType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [dueStart, setDueStart] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [emptyFields, setEmptyFields] = useState("");
  const [error, setError] = useState(null);

  const { enqueueSnackbar } = useSnackbar();

  const handleAddDormList = async (e) => {
    e.preventDefault();
    // alert(`
    //   name: ${name}
    //   type: ${type}
    //   roomNumber: ${roomNumber}
    //   dueStart: ${dueStart}
    //   dueDate: ${dueDate}
    // `);

    const newDormList = {
      firstName,
      lastName,
      type,
      roomNumber,
      dueStart,
      dueDate,
    };

    try {
      const response = await fetch("http://localhost:4000/api/dormList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDormList),
      });

      const json = await response.json();

      if (!response.ok) {
        setEmptyFields(json.emptyFields);
        const errorMessage = json.error || "An error occurred";
        setError(errorMessage);
        enqueueSnackbar(errorMessage, {
          variant: "error",
        });
      }

      if (response.ok) {
        enqueueSnackbar("New student has been created", { variant: "success" });
        setFirstName("");
        setLastName("");
        setType("");
        setRoomNumber("");
        setDueStart(null);
        setDueDate(null);
        setAddModal(false);

        // Reload the page upon successful submission
        window.location.reload();
      }
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle create post error
    }
  };

  // const handleDueStart = (selectedDate) => {
  //   // Set Due Start
  //   setDueStart(selectedDate);

  //   // Calculate Due Date by adding 1 month to Due Start
  //   const dueStartDate = new Date(selectedDate);
  //   const dueDate = new Date(dueStartDate);
  //   dueDate.setMonth(dueStartDate.getMonth() + 1);

  //   // Set Due Date directly
  //   setDueDate(dueDate.toISOString()); // Save Due Date as ISO string
  // };

  return (
    <form
      onSubmit={handleAddDormList}
      className={
        addModal
          ? "fixed w-[80%] max-w-[500px] h-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
          : "fixed w-[80%] max-w-[500px] h-[70%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
      }
    >
      <div className="w-full flex gap-6">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-semibold ">
            Firstname:
          </label>
          <input
            type="text"
            className={
              emptyFields && emptyFields.includes("lastName")
                ? "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none border border-red-500"
                : "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none"
            }
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-semibold ">
            Lastname:
          </label>
          <input
            type="text"
            className={
              emptyFields && emptyFields.includes("lastName")
                ? "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none border border-red-500"
                : "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none"
            }
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="" className="font-semibold">
          Dormitory:
        </label>
        <select
          className={
            emptyFields && emptyFields.includes("type")
              ? "w-full rounded py-1 mt-2 text-center text-gray-500 focus:outline-none cursor-pointer border border-red-500"
              : "w-full rounded py-1 mt-2 text-center text-gray-500 focus:outline-none cursor-pointer"
          }
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
          className={
            emptyFields && emptyFields.includes("roomNumber")
              ? "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none border border-red-500"
              : "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none"
          }
          onChange={(e) => setRoomNumber(e.target.value)}
          value={roomNumber}
        />
      </div>
      <div className="w-full flex gap-6">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-semibold ">
            Date Start:
          </label>
          <input
            type="date"
            className={
              emptyFields && emptyFields.includes("dueStart")
                ? "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none cursor-pointer border border-red-500"
                : "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none cursor-pointer"
            }
            onChange={(e) => setDueStart(e.target.value)}
            value={dueStart}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-semibold ">
            Due Date:
          </label>
          <input
            type="date"
            className={
              emptyFields && emptyFields.includes("dueDate")
                ? "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none cursor-pointer border border-red-500"
                : "w-full rounded py-1 mt-2 ps-1 text-gray-500 focus:outline-none cursor-pointer"
            }
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
      {error && (
        <p className="text-red-500 font-semibold text-center mt-2">{error}</p>
      )}
    </form>
  );
};

export default AddDormModal;
