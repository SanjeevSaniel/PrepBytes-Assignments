import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="about-us">
        <p>ABOUT US</p>
        <p>
          Rubixe™ is a global technology company specializing in disruptive
          technologies – Artificial Intelligence (AI), Machine Learning, Robotic
          Process Automation (RPA), BlockChain and Internet of Things (IoT).
          Rubixe mission to enable businesses to leverage the full potential of
          disruptive technologies to stay competitive in the market.
        </p>
      </div>

      <div className="menus">
        <ul>
          <p>MENUS</p>
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li>Career</li>
        </ul>
      </div>

      <div className="learn-more">
        <p>LEARN MORE</p>
        <li>About</li>
        <li>Contact Us</li>
      </div>

      <div className="address">
        <p>ADDRESS</p>
        <li>
          Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka
          560068
        </li>
        <li>Phone: 0804-717-8999</li>
        <li>Email: hi@rubixe.com</li>

        <br />

        <p>SOCIAL MEDIA</p>
      </div>
    </div>
  );
};

export default Footer;
