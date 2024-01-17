import { enqueueSnackbar, useSnackbar } from "notistack";
import React, { useState } from "react";

const AddDormModal = ({ addModal, setAddModal }) => {
  const [type, setType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [status, setStatus] = useState("vacant");
  const [monthlyRate, setMonthlyRate] = useState(null);
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleAddDormManagement = async (e) => {
    e.preventDefault();
    // alert(`
    //   type: ${type}
    //   roomNumber: ${roomNumber}
    //   status: ${status}
    //   monthlyRate: ${monthlyRate}
    // `);

    const newDormManagement = {
      type,
      roomNumber,
      status,
      monthlyRate,
    };

    try {
      const response = await fetch("http://localhost:4000/api/dormManagement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDormManagement),
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
        setType("");
        setRoomNumber("");
        setStatus("");
        setMonthlyRate("");
        setAddModal(false);

        // Reload the page upon successful submission
        window.location.reload();
      }
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle create post error
    }
  };

  return (
    <form
      onSubmit={handleAddDormManagement}
      className={
        addModal
          ? "fixed w-[80%] max-w-[500px] h-[60%] lg:h-[60%] top-1/2 left-1/2 transdiv -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-6 p-5 ease-in duration-300"
          : "fixed w-[80%] max-w-[500px] h-[60%] lg:h-[60%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-6 p-5 ease-in duration-300"
      }
    >
      <div className="w-full flex flex-col">
        <label htmlFor="" className="font-semibold ">
          Type of Dormitory:
        </label>
        {/* <input type="text"  /> */}
        <select
          className={
            emptyFields && emptyFields.includes("type")
              ? "w-full rounded py-2 mt-2 text-center text-gray-500 focus:outline-none cursor-pointer border border-red-500"
              : "w-full rounded py-2 mt-2 text-center text-gray-500 focus:outline-none cursor-pointer"
          }
          name=""
          id=""
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="">SELECT TYPE</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="w-full flex gap-6 mt-2">
        <div className="w-1/3 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Room no:
          </label>
          <input
            type="number"
            className={
              emptyFields && emptyFields.includes("roomNumber")
                ? "w-full rounded py-2 focus:outline-none mt-2 ps-1 border border-red-500"
                : "w-full rounded py-2 focus:outline-none mt-2 ps-1"
            }
            onChange={(e) => setRoomNumber(e.target.value)}
            value={roomNumber}
          />
        </div>
        <div className="w-2/3 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Status:
          </label>
          <select
            className="w-full rounded py-2 mt-2 text-center text-gray-500 focus:outline-none cursor-pointer"
            name=""
            id=""
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="vacant">Vacant</option>
            <option value="occupied">Occupied</option>
          </select>
        </div>
      </div>
      <div className="w-full flex items-end gap-6">
        <div className="w-1/3 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Monthly Rate:
          </label>
          <input
            type="number"
            className={
              emptyFields && emptyFields.includes("monthlyRate")
                ? "w-full rounded py-2 focus:outline-none mt-2 ps-1 border border-red-500"
                : "w-full rounded py-2 focus:outline-none mt-2 ps-1"
            }
            onChange={(e) => setMonthlyRate(e.target.value)}
            value={monthlyRate}
          />
        </div>
        <div className="w-2/3 flex gap-4">
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
