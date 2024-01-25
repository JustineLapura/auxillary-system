import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { enqueueSnackbar, useSnackbar } from "notistack";

const InquireModal = ({ openModal, setOpenModal }) => {
  const [message, setMessage] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState();
  const { user } = useContext(AuthContext).user || {};
  console.log("User from Inquire Modal: ", user);

  const { enqueueSnackbar } = useSnackbar();

  const handleInquire = async (e) => {
    e.preventDefault();

    const newInquiry = {
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      email: user.email,
      phoneNumber: user.phoneNumber,
      message,
    };

    try {
      const response = await fetch(
        "https://auxillary-services-api-rosy.vercel.app/api/inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newInquiry),
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
        enqueueSnackbar("Your inquiry has been submitted.", {
          variant: "success",
        });
        setEmptyFields([]);
        setError(null);
        setMessage("");

        // navigate to profile section
        setOpenModal(false);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle create post error
    }
  };

  return (
    <>
      {/*Modal Overlay  */}
      <div
        onClick={() => setOpenModal(false)}
        className={
          openModal
            ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20"
            : ""
        }
      />
      <div
        className={
          openModal
            ? "fixed w-[60%] max-w-[600px] h-[90%] lg:h-[65%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 px-6 pt-6 ease-in duration-300 overflow-y-scroll lg:overflow-hidden"
            : "fixed w-[60%] max-w-[600px] h-[90%] lg:h-[65%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 px-6 pt-6 ease-in duration-300"
        }
      >
        <h1 className="text-center text-xl text-gray-700 font-bold">
          Write here your concerns:
        </h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          placeholder="Write a message for any inquiries"
          onChange={(e) => setMessage(e.target.value)}
          className={
            emptyFields && emptyFields.includes("message")
              ? "w-full rounded-xl focus:outline-none p-5 text-lg text-gray-700 tracking-wider border border-red-500"
              : "w-full rounded-xl focus:outline-none p-5 text-lg text-gray-700 tracking-wider"
          }
        ></textarea>
        <div className="absolute bottom-4 right-4 flex justify-end items-center gap-4">
          <button
            className="px-5 py-2 rounded-xl bg-gray-500 font-bold text-white"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 rounded-xl bg-blue-700 font-bold text-white"
            onClick={handleInquire}
          >
            Submit
          </button>
        </div>
        {error && (
          <p className="text-red-500 font-semibold text-center mt-2">{error}</p>
        )}
      </div>
    </>
  );
};

export default InquireModal;
