import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { useSnackbar } from "notistack";

const AddFacilityModal = ({ addModal, setAddModal }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [governmentPrice, setGovernmentPrice] = useState(null);
  const [nonGovernmentPrice, setNonGovernmentPrice] = useState(null);
  const [otherPrice, setOtherPrice] = useState(null);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  const handleAddFacility = async () => {
    const newFacility = {
      name,
      desc,
      governmentPrice,
      nonGovernmentPrice,
      otherPrice,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newFacility.photo = filename;
      try {
        await axios.post(
          // "https://auxillary-services-api-rosy.vercel.app/api/upload/",
          "http://localhost:4000/api/upload",
          data
        );
      } catch (error) {
        console.log("Error uploading file:", error);
      }
    }

    try {
      const response = await fetch(
        // "https://auxillary-services-api-rosy.vercel.app/api/facility",
        "http://localhost:4000/api/facility",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFacility),
        }
      );

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
        enqueueSnackbar("Facility has been created", { variant: "success" });
        setName("");
        setDesc("");
        setFile(null);
        setGovernmentPrice("");
        setNonGovernmentPrice("");
        setOtherPrice("");
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
    <div
      className={
        addModal
          ? "fixed w-[90%] max-w-[600px] h-[90%] top-1/2 left-1/2 transdiv -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-4 p-5 ease-in duration-300 overflow-y-scroll"
          : "fixed w-[90%] max-w-[600px] h-[90%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-4 p-5 ease-in duration-300"
      }
    >
      <h1 className="font-bold text-2xl">Add Facility</h1>

      <div className="w-full mt-8">
        <h1 className="text-lg font-semibold">Facility Name:</h1>
        <input
          className={
            emptyFields && emptyFields.includes("name")
              ? "border border-red-500 w-full rounded-lg py-1 text-lg ps-2 mt-1 focus:outline-none"
              : "border w-full rounded-lg py-1 text-lg ps-2 mt-1 focus:outline-none"
          }
          type="text"
          name=""
          id=""
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="w-full">
        <h1 className="text-lg font-semibold">Facility Image:</h1>
        <input
          className={
            emptyFields && emptyFields.includes("photo")
              ? "border w-full rounded py-1 bg-white ps-2 border-red-500"
              : "border w-full rounded py-1 bg-white ps-2"
          }
          type="file"
          name="facilityImage"
          id="facilityImage"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <div className="w-full">
        <h1 className="text-lg font-semibold">Facility Details:</h1>
        <textarea
          className={
            emptyFields && emptyFields.includes("desc")
              ? "border border-red-500 w-full rounded-lg text-lg py-1 ps-2 mt-1 focus:outline-none"
              : "border w-full rounded-lg text-lg py-1 ps-2 mt-1 focus:outline-none"
          }
          name="facilityDetails"
          id="facilityDetails"
          rows={2}
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></textarea>
      </div>
      <div className="w-full">
        <h1 className="text-lg font-semibold sm:text-center my-3">
          Price Rate:
        </h1>
        <div className="sm:flex justify-between items-center gap-4">
          <div className="flex flex-col">
            <label className="text-gray-500" htmlFor="">
              Government:
            </label>
            <input
              className={
                emptyFields && emptyFields.includes("governmentPrice")
                  ? "w-[150px] border border-red-500 focus:outline-none ps-1"
                  : "w-[150px] border border-gray-300 focus:outline-none ps-1"
              }
              type="number"
              onChange={(e) => setGovernmentPrice(e.target.value)}
              value={governmentPrice}
              placeholder="Enter price here"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500" htmlFor="">
              Non-Government:
            </label>
            <input
              className={
                emptyFields && emptyFields.includes("nonGovernmentPrice")
                  ? "w-[150px] border border-red-500 focus:outline-none ps-1"
                  : "w-[150px] border border-gray-300 focus:outline-none ps-1"
              }
              type="number"
              onChange={(e) => setNonGovernmentPrice(e.target.value)}
              value={nonGovernmentPrice}
              placeholder="Enter price here"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500" htmlFor="">
              Others:
            </label>
            <input
              className={
                emptyFields && emptyFields.includes("otherPrice")
                  ? "w-[150px] border border-red-500 focus:outline-none ps-1"
                  : "w-[150px] border border-gray-300 focus:outline-none ps-1"
              }
              type="number"
              onChange={(e) => setOtherPrice(e.target.value)}
              value={otherPrice}
              placeholder="Enter price here"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-4">
        <button
          onClick={handleAddFacility}
          className="text-white bg-blue-500 font-bold py-2 px-5 rounded hover:bg-blue-600 hover:scale-105 duration-300 "
        >
          Submit
        </button>
      </div>
      <p className="text-red-500 font-semibold text-center mt-2">{error}</p>

      {/* close button  */}
      <div
        onClick={() => setAddModal(false)}
        className="absolute top-[-16px] right-2 cursor-pointer hover:bg-gray-300 duration-200 rounded-full p-3"
      >
        <FaTimes />
      </div>
    </div>
  );
};

export default AddFacilityModal;
