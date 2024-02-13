import React from "react";
import Main from "../../../components/home/Main";
import Categories from "../../../components/home/Categories";
import Map from "../../../components/home/Map";
import CategoryModal from "../../../components/home/CategoryModal";
import Navbar from "../../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Main />
      <Categories />
      <Map />
    </div>
  );
};

export default Home;
