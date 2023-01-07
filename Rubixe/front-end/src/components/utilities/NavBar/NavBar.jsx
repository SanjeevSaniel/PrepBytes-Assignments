import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../images/white-rubixe-logo.png";

import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  //   let activeStyle = {
  //     textDecoration: "underline",
  //   };

  //   let activeClassName = "underline";

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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
