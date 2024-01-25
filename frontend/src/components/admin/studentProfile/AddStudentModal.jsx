import { enqueueSnackbar, useSnackbar } from "notistack";
import React, { useState } from "react";

const AddStudentModal = ({ addModal, setAddModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  const handleAddStudent = async (e) => {
    e.preventDefault();

    const newStudent = {
      firstName,
      lastName,
      contact,
      email,
      address,
      age,
      gender,
    };

    try {
      const response = await fetch("https://auxillary-services-api-rosy.vercel.app/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
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
        setContact("");
        setEmail("");
        setAddress("");
        setAge("");
        setGender("");
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
      onSubmit={handleAddStudent}
      className={
        addModal
          ? "fixed w-[60%] max-w-[600px] h-[90%] lg:h-[65%] top-1/2 left-1/2 transdiv -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
          : "fixed w-[60%] max-w-[600px] h-[90%] lg:h-[65%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
      }
    >
      {/* <div className=" w-full flex justify-end items-center border-2 ">
            <p className="font-bold text-gray-500 bg-gray-300 rounded-full px-2 hover:bg-gray-400 hover:text-white cursor-pointer">x</p>
        </div> */}
      <div className="w-full lg:flex items-center gap-4 border-2">
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Firstname:
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={
              emptyFields && emptyFields.includes("firstName")
                ? "rounded py-1 focus:outline-none ps-1 border border-red-500"
                : "rounded py-1 focus:outline-none ps-1"
            }
            type="text"
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Lastname:
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={
              emptyFields && emptyFields.includes("lastName")
                ? "rounded py-1 focus:outline-none ps-1 border border-red-500"
                : "rounded py-1 focus:outline-none ps-1"
            }
            type="text"
          />
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full flex flex-col border-2">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Phone:
          </label>
          <div className="w-full flex items-center bg-gray-400 rounded-l-lg">
            <p className="text-white font-semibold px-2">+63</p>
            <input
              className={
                emptyFields && emptyFields.includes("contact")
                  ? "w-full rounded py-1 focus:outline-none ps-1 border border-red-500"
                  : "w-full rounded py-1 focus:outline-none ps-1"
              }
              type="tel"
              maxLength="10"
              placeholder="Phone Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Email:
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={
              emptyFields && emptyFields.includes("email")
                ? "rounded py-1 focus:outline-none ps-1 border border-red-500"
                : "rounded py-1 focus:outline-none ps-1"
            }
            type="text"
          />
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Address:
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={
              emptyFields && emptyFields.includes("address")
                ? "rounded py-1 focus:outline-none ps-1 border border-red-500"
                : "rounded py-1 focus:outline-none ps-1"
            }
            type="text"
          />
        </div>
      </div>

      <div className="w-full lg:flex items-center gap-4">
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold" htmlFor="">
            Age:
          </label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={
              emptyFields && emptyFields.includes("age")
                ? "rounded py-1 focus:outline-none ps-1 border border-red-500"
                : "rounded py-1 focus:outline-none ps-1"
            }
            type="number"
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray-500 font-semibold " htmlFor="">
            Gender:
          </label>
          <select
            className={
              emptyFields && emptyFields.includes("gender")
                ? "rounded py-1 focus:outline-none ps-1 border border-red-500"
                : "rounded py-1 focus:outline-none ps-1"
            }
            name=""
            id=""
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button className="bg-blue-500 text-white font-bold rounded-lg px-6 py-2 mt-3">
          Submit
        </button>
        {error && (
          <p className="text-red-500 font-semibold text-center mt-2">{error}</p>
        )}
      </div>
    </form>
  );
};

export default AddStudentModal;
