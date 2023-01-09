import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../../pages/Home/Home";
import Services from "./../../pages/Services";
import Products from "./../../pages/Products";
import ContactUs from "./../../pages/ContactUs";
import About from "./../../pages/About";
import Blog from "./../../pages/Blog";
import Career from "./../../pages/Career";
import AiInternship from "./../../pages/AiInternship";
import Login from "../Form/Login/Login";

const Routers = () => {
  return (
    <div>
      <Routes path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/AIinternship" element={<AiInternship />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Routers;
