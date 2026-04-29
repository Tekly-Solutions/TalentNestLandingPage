"use client";

import React, { useState, useRef, CSSProperties } from "react";

interface NavButtonProps {
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ onClick }) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const gradientBorderStyle: CSSProperties = {
    background:
      "linear-gradient(90deg, var(--teal-light) 0%, var(--teal-medium) 25%, var(--teal-deep) 50%, var(--teal-dark) 75%, var(--teal-very-dark) 100%)",
    borderRadius: "50px",
    padding: "4px",
    position: "relative",
    overflow: "hidden",
  };

  const innerButtonStyle: CSSProperties = {
    background: "transparent",
    borderRadius: "50px",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    zIndex: 2,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    padding: "0 16px",
    gap: "8px",
  };

  const flowStyle: CSSProperties = {
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

  const flowingBorderStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50px",
    backgroundImage: `linear-gradient(45deg, transparent 30%, var(--teal-light) 35%, var(--teal-medium) 45%, var(--teal-deep) 55%, var(--teal-dark) 65%, var(--teal-very-dark) 75%, transparent 85%)`,
    backgroundSize: "400% 400%",
    opacity: isHovered ? 0 : 0.8,
    animation: isHovered ? "none" : "flow 2s ease-in-out infinite",
    pointerEvents: "none",
    zIndex: 1,
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    const target = e.target as HTMLDivElement;
    target.style.background =
      "linear-gradient(90deg, var(--teal-light) 0%, var(--teal-medium) 25%, var(--teal-deep) 50%, var(--teal-dark) 75%, var(--teal-very-dark) 100%)";
    target.style.color = "white";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
    const target = e.target as HTMLDivElement;
    target.style.background = "transparent";
    target.style.color = "white";
  };

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div
      ref={buttonRef}
      className="w-52 h-9 hover:shadow-[8px_4px_25px_0px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out"
      style={gradientBorderStyle}
      onMouseMove={handleMouseMove}
    >
      <div style={flowingBorderStyle}></div>
      <div style={flowStyle}></div>
      <div
        style={innerButtonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <span>Start Free Trial</span>
      </div>
      {/* <style jsx>{`
        @keyframes flow {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style> */}
    </div>
  );
};

export default NavButton;
