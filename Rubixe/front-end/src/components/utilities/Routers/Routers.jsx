import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../../pages/Home/Home";
import Services from "./../../pages/Services";
import Products from "./../../pages/Products";

const Routers = () => {
  return (
    <div>
      <Routes path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Routers;
