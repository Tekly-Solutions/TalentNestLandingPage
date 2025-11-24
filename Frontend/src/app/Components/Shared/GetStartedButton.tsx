"use client";

import React, { useState, useRef } from "react";

type GetStartedButtonProps = {
  label?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  label = "Get Started",
  className,
  type = "button",
  onClick,
  disabled,
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={buttonRef}
      className={`w-52 h-9 flex items-center justify-center transition-all duration-300 ${
        isHovered ? "scale-105 shadow-lg" : ""
      } ${className || ""}`}
      style={{
        background:
          "linear-gradient(90deg, #33B88C 0%, #007E7E 25%, #A9EBA9 50%, #33B88C 75%, #00A3A3 100%)",
        borderRadius: "50px",
        padding: "3px",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Flow effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50px",
          background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(169, 235, 169, 1) 0%, rgba(51, 184, 140, 0.8) 30%, rgba(0, 126, 126, 0.4) 60%, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: "none",
          zIndex: 1,
        }}
      ></div>

      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`w-full h-full flex items-center justify-center bg-white text-[#007E7E] font-semibold rounded-full px-4 py-2 focus:outline-none ${
          disabled ? "opacity-70 cursor-not-allowed" : ""
        }`}
        style={{
          border: "none",
          background: "white",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span style={{ color: "#007E7E" }}>{label}</span>
      </button>
    </div>
  );
};

export default GetStartedButton;
