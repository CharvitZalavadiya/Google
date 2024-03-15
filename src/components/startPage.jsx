import React, { useState, useEffect, useRef } from "react";
import "../styles/main.css";

import Imports from "./imports";

const StartPage = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const tabsArray = ["Learn", "Design", "Google", "Tools", "Code"];

  const tabElements = [];
  tabsArray.forEach((tab) => {
    tabElements.push(
      <span
        className={`tab ${activeTab === tab ? `folderPopup ${tab}` : ""}`}
        onClick={() => handleTabClick(tab)}
        key={tab}
      >
        {tab}
      </span>
    );
  });

  const popupLinksLearnText = [
    "Coursera",
    "Roadmap",
    "GFG",
    "W3Schools",
    "TailwindCSS",
  ];

  const popupLinksLearnElements = [];
  popupLinksLearnText.forEach((link) => {
    popupLinksLearnElements.push(<span className="popupLinks">{link}</span>);
  });

  const popupLinksDesignText = [
    "Figma",
    "Webflow",
    "Spline",
    "UI Zard",
    "FlowPonent",
    "FigComponent",
    "Wix Studio",
    "UI Verse",
    "CodePen",
  ];

  const popupLinksDesignElements = [];
  popupLinksDesignText.forEach((link) => {
    popupLinksDesignElements.push(<span className="popupLinks">{link}</span>);
  });

  const popupLinksGoogleText = [
    "Drive",
    "Meet",
    "YouTube",
    "Gmail",
    "Maps",
    "Fonts",
    "Calender",
    "Translate",
  ];

  const popupLinksGoogleElements = [];
  popupLinksGoogleText.forEach((link) => {
    popupLinksGoogleElements.push(<span className="popupLinks">{link}</span>);
  });

  const popupLinksToolsText = [
    "ChatGPT",
    "Gemini",
    "QuillBot",
    "RemoveBG",
    "Sejda",
    "WhatsApp",
    "Telegram",
    "Pinterest",
    "Animista",
    "WebCode",
    "FlatIcon",
  ];

  const popupLinksToolsElements = [];
  popupLinksToolsText.forEach((link) => {
    popupLinksToolsElements.push(<span className="popupLinks">{link}</span>);
  });

  const popupLinksCodeText = [
    "HackerRank",
    "LeetCode",
    "GitHub",
    "CodeChef",
    "Netlify",
    "Render",
  ];

  const popupLinksCodeElements = [];
  popupLinksCodeText.forEach((link) => {
    popupLinksCodeElements.push(<span className="popupLinks">{link}</span>);
  });

  const handleTabClick = (clickedTab) => {
    setActiveTab(clickedTab);
    setShowPopup(true);
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

  return (
    <div className="main">
      {showPopup && (
        <div className="folderPopupArea">
          <div
            className="folderPopup"
            ref={popupRef}
            style={{
              animation: showPopup
                ? "popupEnter 0.5s ease-in-out both"
                : "popupExit 0.5s ease-in-out both",
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

            <div className="popupTabs">{popupLinksLearnElements}</div>
          </div>
        </div>
      )}

      <div className="tab-bar">{tabElements}</div>
    </div>
  );
};

export default StartPage;
