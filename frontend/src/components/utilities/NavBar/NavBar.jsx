import React, { useState, useContext } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../images/white-rubixe-logo.png";

import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { BtnTextContext } from "./../../../App";

const NavBar = () => {
  const [btnText, setBtnText] = useContext(BtnTextContext);

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const navigate = useNavigate();

  const doLogout = () => {
    sessionStorage.clear();
    navigate("/");
    setBtnText("Log in");
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        className="navbar"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Rubixe Logo" width={160} height={50} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav as="ul">
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/">
                  HOME
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/services">
                  SERVICES
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/products">
                  PRODUCTS
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/AIinternshsip">
                  AI INTERNSHIP
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/career">
                  CAREER
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/blog">
                  BLOG
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/contactus">
                  CONTACT US
                </NavLink>
              </Nav.Item>
              {btnText === "Login" ? (
                <Nav.Item as="li">
                  <NavLink className="nav-link" to="/login">
                    <button id="btn-login">{btnText}</button>
                  </NavLink>
                </Nav.Item>
              ) : (
                <Nav.Item as="li">
                  <NavLink className="nav-link" to="/">
                    <button onClick={doLogout} id="btn-login">
                      {btnText}
                    </button>
                  </NavLink>
                </Nav.Item>
              )}

              {isAlertVisible && (
                <div className="alert-container">
                  <div className="alert-inner">Logged out successfully.</div>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
