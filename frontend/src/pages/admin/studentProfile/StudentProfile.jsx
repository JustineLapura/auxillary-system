import React from "react";
import TopHeader from "../../../components/admin/studentProfile/TopHeader";
import StudentProfileContainer from "../../../components/admin/studentProfile/StudentProfileContainer";

const StudentProfile = () => {
  return (
    <div className="w-full h-full p-5 bg-gray-200">
      <TopHeader />
      <StudentProfileContainer />
    </div>
  );
};

export default StudentProfile;
