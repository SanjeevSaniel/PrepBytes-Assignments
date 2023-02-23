import React from "react";
import { Link } from "react-router-dom";

const styles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "10px",
  background: "#29551E",
  color: "#ffffff",
  fontSize: "20px",
  textAlign: "center",
  zIndex: 1,
  boxShadow: "2px 2px 20px 2px grey",
};

const links = {
  color: "#ffffff",
  textDecoration: "none",
};

const Navbar = () => {
  return (
    <div style={styles}>
      <Link style={links} to="/">
        news.ly
      </Link>
    </div>
  );
};

export default Navbar;
