import React, { useState, useEffect, useRef } from "react";
import "../styles/main.css";

import axios from "axios";
import DateTime from "./dateTime";

import avtr from "../assets/avtr.jpg";
import yt from "../assets/youtube.png";
import wa from "../assets/whatsapp.png";
import gh from "../assets/github.png";
import drv from "../assets/drive.png";
import lnkdn from "../assets/linkedin.png";
import blflx from "../assets/bollyflix.png";
import sjd from "../assets/sejda.png";
import chtgpt from "../assets/chatgpt.png";
import gml from "../assets/gmail.png";
import gmn from "../assets/Gemini.png";

const StartPage = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const handleTabClick = (clickedTab) => {
  //   setActiveTab(clickedTab);
  //   setShowPopup(true);
  // };

  const handleTabClick = (clickedTab) => {
    if (activeTab === clickedTab) {
      setShowPopup(false);
      setActiveTab("");
    } else {
      setActiveTab(clickedTab);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const TabContent = () => {
    if (!data || !activeTab) return null;
    const tabData = data.tabName[activeTab];
    return (
      <div className="popupTabs">
        {tabData.map((item, index) => (
          <a href={item.link}>
            <div key={index} className="popupCard">
              <img
                src={item.img}
                alt={item.name}
                className="popupCardImage"
                loading="lazy"
              />
              <span className="popupCardName">{item.name}</span>
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="main">
      <div className="left">
        <div className="name">
          <img src={avtr} alt="Avtar" />
          <span>Charvit Zalavadiya</span>
        </div>

        <div className="date-time">
          <DateTime />
        </div>
      </div>
      <div className="center">
        <span className="text">Radhe Krishna</span>

        {showPopup && (
          <div className="folderPopupArea">
            <div
              className="folderPopup"
              ref={popupRef}
              style={{
                animation: "popupEnter 0.5s ease-in-out both",
              }}
            >
              <div className="tab-info">
                <span
                  className="activeTabName"
                  style={{
                    color:
                      activeTab === "Learn"
                        ? "#00ffd5"
                        : activeTab === "Design"
                        ? "#ff2f00"
                        : activeTab === "Google"
                        ? "#1aa5f6"
                        : activeTab === "Tools"
                        ? "#e6df19"
                        : activeTab === "Code"
                        ? "#ff04b5"
                        : "",
                  }}
                >
                  {activeTab}
                </span>
              </div>

              <TabContent />
            </div>
          </div>
        )}

        <div className="tab-bar">
          {data &&
            Object.keys(data.tabName).map((tab) => (
              <span
                className={`tab ${
                  activeTab === tab ? `folderPopup ${tab}` : ""
                }`}
                onClick={() => handleTabClick(tab)}
                key={tab}
              >
                {tab}
              </span>
            ))}
        </div>
      </div>
      <div className="right">
        <div className="dtql">
          <div className="quick-links ql1">
            <a href="https://web.whatsapp.com/">
              <img src={wa} alt="WhatsApp" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={yt} alt="YT" />
            </a>
            <a href="https://github.com/CharvitZalavadiya/">
              <img src={gh} alt="GitHub" />
            </a>
            <a href="https://drive.google.com/drive/my-drive">
              <img src={drv} alt="Drive" />
            </a>
          </div>

          <div className="quick-links ai ql2">
            <a href="https://chat.openai.com/">
              <img src={chtgpt} alt="ChatGPT" />
            </a>
            <a href="https://gemini.google.com/app">
              <img src={gmn} alt="Gemini" />
            </a>
          </div>

          <div className="quick-links ql3">
            <a href="https://www.linkedin.com/in/charvitzalavadiya/">
              <img src={lnkdn} alt="LinkedIn" />
            </a>
            <a href="https://bollyflix.nexus/">
              <img src={blflx} alt="BollyFlix" />
            </a>
            <a href="https://www.sejda.com/pdf-editor">
              <img src={sjd} alt="Sejda" />
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
              <img src={gml} alt="Gmail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
