"use client";

import React, { useState, useRef } from "react";

const NavButton = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

  const gradientBorderStyle = {
    background:
      "linear-gradient(90deg, #85DBA0 0%, #5CCA97 25%, #2CB58F 50%, #15AC9A 75%, #04A4A1 100%)",
    borderRadius: "50px",
    padding: "4px",
    position: "relative",
    overflow: "hidden",
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
    position: "relative",
    zIndex: 2,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    padding: "0 16px",
  };

  const flowStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50px",
    background: `radial-gradient(circle 60px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 40%, transparent 70%)`,
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.2s ease",
    pointerEvents: "none",
    zIndex: 1,
  };

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    e.target.style.background =
      "linear-gradient(90deg, #85DBA0 0%, #5CCA97 25%, #2CB58F 50%, #15AC9A 75%, #04A4A1 100%)";
    e.target.style.color = "white";
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    e.target.style.background = "white";
    e.target.style.color = "black";
  };

  return (
    <div
      ref={buttonRef}
      className="w-32 h-9 shadow-[8px_4px_20px_0px_rgba(0,0,0,0.47)] hover:shadow-[8px_4px_25px_0px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out"
      style={gradientBorderStyle}
      onMouseMove={handleMouseMove}
    >
      <div style={flowStyle}></div>
      <div
        style={innerButtonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Start Free Trial
      </div>
    </div>
  );
};

export default NavButton;
