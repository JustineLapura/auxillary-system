import axios from "axios";
import React, { useState, useEffect } from "react";
import { SiGooglemessages } from "react-icons/si";
import { enqueueSnackbar, useSnackbar } from "notistack";

const SendMessageModal = ({ dorm, messageModal, setMessageModal }) => {
  const [students, setStudents] = useState([]);
  //   console.log("Students from Message Modal: ", students);

  const { enqueueSnackbar } = useSnackbar();

  const student = students.filter(
    (student) =>
      student.firstName === dorm.firstName && student.lastName === dorm.lastName
  )[0];

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  //   console.log("Student from Message Modal:", student);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `https://auxillary-services-api-rosy.vercel.app/api/student`
        );
        setStudents(response.data);
      } catch (error) {
        console.log("Error Fetching:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleSendMessage = () => {
    // Call the Send Message API to send an SMS confirmation to the recipient's phone number
    const apiKey = "391dce2c4dff7870352a061e139d74841c57f1c7";
    const message = `Hello ${dorm.firstName},


    This is a notice that your dormitory payment for the upcoming month is due on ${formatDate(
      dorm.dueDate
    )}. Please make sure to submit your payment by this date to avoid any late fees or disruptions to your housing. Thank you for your prompt attention to this matter.`;
    const device = 584; // ID of the device used for sending
    const sim = 1; // Sim slot number for sending message
    const priority = 1; // Send the message as priority
    const url = `https://sms.teamssprogram.com/api/send?key=${apiKey}&phone=+63${student.contact}&message=${message}&device=${device}&sim=${sim}&priority=${priority}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    enqueueSnackbar("Message has been sent.", { variant: "success" });
    setMessageModal(false);
  };

  return (
    <>
      {/*Modal Overlay  */}
      <div
        onClick={() => setMessageModal(false)}
        className={
          messageModal
            ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20"
            : ""
        }
      />
      <div
        className={
          messageModal
            ? "fixed w-[80%] max-w-[500px] h-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
            : "fixed w-[80%] max-w-[500px] h-[60%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-20 rounded-lg space-y-3 p-5 ease-in duration-300"
        }
      >
        <div className="flex gap-2">
          <SiGooglemessages className="text-blue-900" size={30} />
          <h1 className="text-xl font-bold">Send SMS</h1>
        </div>
        {student && (
          <>
            <div className="flex justify-between">
              <div className="flex">
                <p className="font-bold">Name: </p>
                <p className="ps-2">
                  {student.firstName} {student.lastName}
                </p>
              </div>
              <div className="flex">
                <p className="font-bold">Contact: </p>
                <p className="ps-2 tracking-wider">+63{student.contact}</p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="mt-8">
                Hello <span className="font-bold">{student.firstName}</span>,
              </p>
              <br />
              <p className="text-left">
                This is a notice that your dormitory payment for the upcoming
                month is due on{" "}
                <span className="font-bold">{formatDate(dorm.dueDate)}</span>.
                Please make sure to submit your payment by this date to avoid
                any late fees or disruptions to your housing. Thank you for your
                prompt attention to this matter.
              </p>
            </div>
            <button
              className="w-full bg-blue-800 text-white py-2 font-semibold"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default SendMessageModal;
