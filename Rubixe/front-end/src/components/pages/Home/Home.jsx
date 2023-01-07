import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <div className="banner-inner">
          <div className="banner-content">
            <h1>TECH FOR TEENS</h1>
            <br />
            <p>CARYING FUTURE</p>
            <p>TECHNOLOGY PROFESSIONALS</p>
            <p>OUT OF YOUNG MINDS</p>
          </div>
        </div>
      </div>

      <div className="about">
        <Container className="about-content">
          <h2>WHO WE ARE</h2>
          <p>
            Rubixe™ is a global technology company specializing in disruptive
            technologies – Artificial Intelligence (AI), Machine Learning,
            Robotic Process Automation (RPA), BlockChain and Internet of Things
            (IoT). Rubixe mission to enable businesses to leverage the full
            potential of disruptive technologies to stay competitive in the
            market.
          </p>
          <p>
            At Rubixe™, we make your business more efficient, more predictable
            and more effective, turning complex challenges into solutions by
            leveraging disruptive technologies, providing a strategic
            competitive advantage. We serve clients in most industries including
            Banking & Finance, Retail, e-commerce, healthcare, logistics et., We
            have the capability to deliver solutions to clients of all sizes
            across the globe.
          </p>
        </Container>

        <Container className="about-image">
          <img
            src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg"
            alt=""
          />
        </Container>
      </div>

      <div className="establish">
        <h2>WHERE WE STARTED</h2>
        <p>
          Started in 2008, providing technology solutions based in the
          Netherlands, founders of Rubixe™ have gained expertise in cutting-edge
          technology through delivering several smart city solutions for
          European Commission (EC) projects.
        </p>
      </div>

      <div className="tech-for-teens">
        <h2>TECH FOR TEENS - A RUBIXE INITIATIVE</h2>
      </div>

      
    </div>
  );
};

export default Home;
