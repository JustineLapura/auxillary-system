import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";

const Map = () => {
  return (
    <div className="w-full py-10">
      <h1 className="text-4xl text-gray-900 text-center font-bold">
        Map & Directions
      </h1>
      <div className="w-full h-full lg:flex items-center gap-10 py-6 px-8 my-8">
        <div className="border-[5px] border-gray-400 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.478440888423!2d124.88525946439373!3d11.771122640061659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309cac0018a1485%3A0x5426e9e36a9980cd!2sSamar%20State%20University!5e0!3m2!1sen!2sph!4v1704865138140!5m2!1sen!2sph"
            width="600"
            height="350"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="h-full mt-16 lg:mt-0">
          <div className="">
            <h1 className="flex items-center gap-2 text-blue-900 text-2xl font-bold mt-4">
              <FaLocationDot />
              Address
            </h1>
            <p className="text-gray-500 font-semibold">
              Arteche Blvd, Brgy. Guindapunan, Catbalogan City, 6700 Samar
            </p>
          </div>
          <div className="">
            <h1 className="flex items-center gap-2 text-blue-900 text-2xl font-bold mt-4">
              <BiSolidPhoneCall /> Call
            </h1>
            <p className="text-gray-500 font-semibold">(055)-530-0629</p>
          </div>
          <div className="">
            <h1 className="flex items-center gap-2 text-blue-900 text-2xl font-bold mt-4">
              <FaGlobe />
              Visit Our Website
            </h1>
            <p className="text-gray-500 font-semibold">info@ssu.edu.ph</p>
            <p className="text-gray-500 font-semibold">registrar@ssu.edu.ph</p>
            <p className="text-gray-500 font-semibold">
              ssu_bac@ssu.edu.ph procurementservices@ssu.edu.ph
            </p>
            <p className="text-gray-500 font-semibold">
              research_extension@ssu.edu.ph
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
