import React, { useEffect, useState } from "react";
import "./Meetings.css";
import pexels from "../../assets/videos/pexels-cottonbro-10678930.mp4";
import videoOne from "../../assets/videos/production ID_4099022.mp4";
import videoTwo from "../../assets/videos/production ID_4393393.mp4";
import videoThree from "../../assets/videos/production ID_4434831.mp4";
import videoFour from "../../assets/videos/production ID_4629085.mp4";
import mic from "../../assets/images/mic.png";

const Meetings = () => {
  const [visible, setVisible] = useState(false);
  //   const [count, setCount] = useState(1);
  const [items, setItems] = useState([videoOne]);

  //   const [layout, setLayout] = useState("");
  const layoutOne = {
    gridTemplateColumns: "1fr",
  };

  //   const videoStyle = {
  //     width: "100%",
  //     };

  const layout = (items) => {
    if (items.length === 1) {
      return {
        gridTemplateColumns: "1fr",
      };
    } else if (items.length === 2) {
      return {
        gridTemplateColumns: "1fr 1fr",
      };
    }
  };

  const videoStyle = (items) => {
    if (items.length === 1) {
      return {
        width: "100%",
      };
    } else if (items.length === 2) {
      return {
        width: "50%",
      };
    }
  };

  //   useEffect(() => {
  //     layout(items);
  //     videoStyle(items);
  //   }, [items]);

  //   const gridLayout = (items) => {
  //     switch (items.length) {
  //       case 1:
  //         setLayout({
  //           gridTemplateColumns: "1fr",
  //           maxWidth: " 90%",
  //           height: "80%",
  //           padding: "20px",
  //         });
  //         break;

  //       default:
  //         break;
  //     }
  //   };

  const videos = [videoOne, videoTwo, videoThree, videoFour];

  const handleSelection = (count) => {
    setItems(videos.slice(0, count));
    // layout(items);
    // videoStyle(items);
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

        {/* <div
          className={`meetings__grid-container`}
          style={{ ...layout }}
          //   style={items.length === 1 ? { ...layoutOne } : ""}
        >
          {items.map((item) => {
            return (
              <div className="video-container">
                <video
                  className="meetings--video"
                  style={{ ...videoStyle }}
                  //   style={items.length === 1 ? { ...videoStyle } : ""}
                  autoPlay
                  loop
                  muted
                >
                  <source src={item} type="video/mp4" />
                </video>
              </div>
            );
          })}
        </div> */}

        {items.length === 1 ? (
          <div
            className={`meetings__grid-container`}
            style={{ gridTemplateColumns: "1fr" }}
          >
            {items.map((item) => {
              return (
                <div className="video-container">
                  <video
                    className="meetings--video"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                  >
                    <source src={item} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {items.length === 2 ? (
          <div
            className={`meetings__grid-container`}
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            {items.map((item) => {
              return (
                <div className="video-container">
                  <video className="meetings--video-2" autoPlay loop muted>
                    <source src={item} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {items.length === 3 ? (
          <div
            className="meetings__grid-container-3"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
            }}
          >
            {items.map((item, index) => {
              return (
                <div className={`video-container-3 meetings-${index}`}>
                  <video className="meetings--video-3" autoPlay loop muted>
                    <source src={item} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {items.length === 4 ? (
          <div
            className="meetings__grid-container-4"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
            }}
          >
            {items.map((item) => {
              return (
                <div className="video-container-4">
                  <video
                    className="meetings--video-4"
                    // style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                  >
                    <source src={item} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

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
