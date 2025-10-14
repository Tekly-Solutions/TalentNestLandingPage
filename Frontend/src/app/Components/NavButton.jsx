"use client";

import React from "react";

const NavButton = () => {
  const gradientBorderStyle = {
    background:
      "linear-gradient(90deg, #85DBA0 0%, #5CCA97 25%, #2CB58F 50%, #15AC9A 75%, #04A4A1 100%)",
    borderRadius: "50px",
    padding: "4px",
  };

  const innerButtonStyle = {
    background: "white",
    borderRadius: "50px",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontSize: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div
      className="w-32 h-9 shadow-[8px_4px_20px_0px_rgba(0,0,0,0.47)] hover:shadow-[8px_4px_25px_0px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out"
      style={gradientBorderStyle}
    >
      <div
        style={innerButtonStyle}
        onMouseEnter={(e) => {
          e.target.style.background =
            "linear-gradient(90deg, #85DBA0 0%, #5CCA97 25%, #2CB58F 50%, #15AC9A 75%, #04A4A1 100%)";
          e.target.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "white";
          e.target.style.color = "black";
        }}
      >
        Start Freee Trial
      </div>
    </div>
  );
};

export default NavButton;
