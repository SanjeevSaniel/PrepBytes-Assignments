import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../../pages/Home/Home";
import Services from "./../../pages/Services";

const Routers = () => {
  return (
    <div>
      <Routes path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Services />} />
      </Routes>
    </div>
  );
};

export default Routers;
