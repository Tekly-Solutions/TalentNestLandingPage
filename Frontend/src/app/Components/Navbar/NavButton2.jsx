"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";

const NavButton2 = ({
  label = "Request Demo",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`;

  const buttonStyle = {
    background: `linear-gradient(90deg, #85DBA0 0%, #5CCA97 25%, #2CB58F 50%, #15AC9A 75%, #04A4A1 100%), ${noiseTexture}`,
    backgroundBlendMode: "multiply",
    boxShadow:
      "15px 4px 20px 0px rgba(0,0,0,0.32), 0px 4px 4px 0px rgba(0,0,0,0.25), inset 0px 4px 4px 0px rgba(0,0,0,0.25)",
  };

  const hoverStyle = {
    background: `linear-gradient(90deg, #6BC788 0%, #49B885 25%, #239A7D 50%, #138B82 75%, #038A89 100%), ${noiseTexture}`,
    backgroundBlendMode: "multiply",
    boxShadow:
      "20px 6px 25px 0px rgba(0,0,0,0.4), 0px 6px 6px 0px rgba(0,0,0,0.3), inset 0px 6px 6px 0px rgba(0,0,0,0.3)",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      className={`w-32 h-9 mr-4 rounded-[50px] flex items-center justify-center text-white font-medium text-xs cursor-pointer transition-all duration-300 ease-in-out active:scale-95 ${className}`}
      aria-label={typeof label === "string" ? label : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Request Demo
    </button>
  );
};

NavButton2.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default NavButton2;
