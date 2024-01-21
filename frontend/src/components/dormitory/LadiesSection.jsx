import React from "react";
import { Link } from "react-router-dom";

const LadiesSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-32 px-8">
      <h1 className="text-xl md:text-3xl text-gray-800 font-bold mb-6">
        LADIE'S DORMITORY
      </h1>
      <img
        src="/ladies.png"
        alt=""
        className="w-full max-w-[800px] lg:h-[450px] rounded-xl object-cover"
      />
      <p className="max-w-[800px] font-semibold text-gray-500 mt-10 text-justify md:text-xl">
        Nestled near Samar State University, our ladies dormitory stands as a
        secure and inviting haven, tailored to meet the unique needs of female
        students. With a prime location offering easy access to local shops,
        delightful restaurants, and efficient public transportation, our
        dormitory prioritizes safety, convenience, and comfort. From
        thoughtfully designed living spaces to curated amenities, we provide an
        environment fostering community and security. Embrace the convenience
        and camaraderie that our dormitory offers, ensuring a hassle-free and
        enriching university experience.
      </p>
      <div className="w-full max-w-[800px] flex justify-end mt-12">
        <Link to="/dorm/available-room-ladies">
          <button className="px-6 py-3 text-white bg-blue-800 rounded-xl text-xl font-semibold">
            Room Availability
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LadiesSection;
