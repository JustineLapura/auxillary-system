import { useContext } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/client/home/Home";
import Services from "./pages/client/services/Services";
import Navbar from "./components/navbar/Navbar";
import Facilities from "./pages/client/rentals/Facilities";
import Contacts from "./pages/client/contacts/Contact";
import Login from "./pages/client/login/Login";
import Signup from "./pages/client/signup/Signup";
import SingleFacility from "./pages/client/rentals/SingleFacility";
import BookFacility from "./pages/client/bookFacility/BookFacility";
import Dormitory from "./pages/client/dormitory/Dormitory";
import DormInquiry from "./pages/client/dormitory/DormInquiry";
import MensRoomAvailability from "./pages/client/dormitory/MensRoomAvailability";
import LadiesRoomAvailability from "./pages/client/dormitory/LadiesRoomAvailability";
import AdminLogin from "./pages/admin/login/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Layout from "./pages/admin/Layout";
import Bookings from "./pages/admin/bookings/Bookings";
import RentedFacilities from "./pages/admin/rentedFacilities/RentedFacilities";
import AddFacilities from "./pages/admin/addFacility/AddFacilities";
import { AuthContext } from "./context/AuthContext";
import BookedFacility from "./pages/admin/bookings/bookedFacility/BookedFacility";
import StudentProfile from "./pages/admin/studentProfile/StudentProfile";
import ManageDorm from "./pages/admin/manageDorm/ManageDorm";
import DormList from "./pages/admin/dormList/DormList";
import Inquiries from "./pages/admin/inquiries/Inquiries";
import Profile from "./pages/client/profile/Profile";
import Records from "./pages/admin/records/Records";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rentals" element={<Facilities />} />
        <Route path="/rentals/:id" element={<SingleFacility />} />
        <Route
          path="/rentals/facility/:name"
          element={user ? <BookFacility /> : <Navigate to="/login" />}
        />
        <Route path="/dorm" element={<Dormitory />} />
        <Route path="/dorm/inquire" element={<DormInquiry />} />
        <Route
          path="/dorm/available-room-men"
          element={user ? <MensRoomAvailability /> : <Navigate to="/login" />}
        />
        <Route
          path="/dorm/available-room-ladies"
          element={user ? <LadiesRoomAvailability /> : <Navigate to="/login" />}
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/:id" element={<BookedFacility />} />
          <Route path="rented-facilities" element={<RentedFacilities />} />
          <Route path="add-facilities" element={<AddFacilities />} />
          <Route path="add-facilities" element={<AddFacilities />} />
          <Route path="records" element={<Records />} />
          <Route path="student-profile" element={<StudentProfile />} />
          <Route path="manage-dorm" element={<ManageDorm />} />
          <Route path="dorm-list" element={<DormList />} />
          <Route path="inquiries" element={<Inquiries />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
