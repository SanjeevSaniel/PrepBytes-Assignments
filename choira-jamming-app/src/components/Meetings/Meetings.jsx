import React, { useEffect, useState } from "react";
import "./Meetings.css";
import pexels from "../../assets/videos/pexels-cottonbro-10678930.mp4";
import mic from "../../assets/images/mic.png";

const Meetings = () => {
  const [visible, setVisible] = useState(false);
  //   const [count, setCount] = useState(1);
  const [items, setItems] = useState([pexels]);

  const videos = [pexels, pexels, pexels, pexels];

  const handleSelection = (count) => {
    setItems(videos.slice(0, count));
  };

  return (
    <main className="main-container">
      <h4>CoJam</h4>
      <section className="meetings__container">
        <header className="meetings__header">
          <img
            className="meetings__logo"
            src="https://choira.io/static/media/choria.96439620.svg"
            alt="Choira Logo"
          />

          <span className="meetings-title">Friday Night Jam</span>
          <div className="meetings__actions">
            <button onClick={() => setVisible(!visible)} className="btn-grids">
              <span
                style={{ paddingTop: "5px" }}
                className="material-symbols-outlined"
              >
                {visible ? `expand_less` : `expand_more`}
              </span>
              {visible ? (
                <ul className="grid-count">
                  <li onClick={() => handleSelection(1)}>1</li>
                  <li onClick={() => handleSelection(2)}>2</li>
                  <li onClick={() => handleSelection(3)}>3</li>
                  <li onClick={() => handleSelection(4)}>4</li>
                </ul>
              ) : (
                ""
              )}
            </button>
            <button className="btn-invite">Invite</button>
          </div>
        </header>
        <aside className="meetings__sidebar">
          <span className="material-symbols-outlined camera">videocam</span>
          <span className="material-symbols-outlined">menu</span>

          <div></div>
        </aside>
        <div className="meetings__grid-container">
          {items.map((item) => {
            return (
              <video className="meetings--video" autoPlay loop muted>
                <source src={item} type="video/mp4" />
              </video>
            );
          })}
        </div>

        <footer className="meetings__footer">
          <div className="meetings__footer-one">
            <ul>
              <li>
                <span className="material-symbols-outlined">lock</span>
              </li>
              <li>
                0004 <br /> Bar
              </li>
              <li>
                1 <br /> Beat
              </li>
              <li>
                - 120 + <br /> Tempo
              </li>
              <li>
                4/4 <br />
                Cmaj
              </li>
            </ul>
            <div className="record"></div>
          </div>
          <div className="meetings__footer-two">
            <button className="btn-end">End Jam</button>
            <div className="mic">
              <img src={mic} alt="" />
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default Meetings;
