"use client";

import React, { useState, useRef, CSSProperties } from "react";
import AnimatedEmoji from "../Shared/AnimatedEmoji";

interface NavButton2Props {
  label?: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const NavButton2: React.FC<NavButton2Props> = ({
  label = "Request Demo",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    if (onClick) onClick(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const flowStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50px",
    background: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 150, 136, 0.4) 0%, rgba(0, 121, 107, 0.2) 40%, transparent 70%)`,
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.2s ease",
    pointerEvents: "none",
    zIndex: 0,
  };

  const buttonStyle: CSSProperties = {
    background: `linear-gradient(90deg, var(--teal-light) 0%, var(--teal-medium) 20%, var(--teal-deep) 40%, var(--teal-dark) 60%, var(--teal-very-dark) 80%, var(--teal-almost-black) 100%), ${noiseTexture}`,
    backgroundBlendMode: "multiply",
    boxShadow:
      "15px 4px 20px 0px rgba(0,0,0,0.32), 0px 4px 4px 0px rgba(0,0,0,0.25), inset 0px 4px 4px 0px rgba(0,0,0,0.25)",
  };

  const hoverStyle: CSSProperties = {
    background: `linear-gradient(90deg, var(--teal-almost-black) 0%, var(--teal-very-dark) 20%, var(--teal-dark) 40%, var(--teal-deep) 60%, var(--teal-medium) 80%, var(--teal-light) 100%), ${noiseTexture}`,
    backgroundBlendMode: "multiply",
    boxShadow:
      "20px 6px 25px 0px rgba(0,0,0,0.4), 0px 6px 6px 0px rgba(0,0,0,0.3), inset 0px 6px 6px 0px rgba(0,0,0,0.3)",
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      className={`w-40 h-9 mr-4 rounded-[50px] flex items-center justify-center text-white font-medium text-xs cursor-pointer transition-all duration-300 ease-in-out active:scale-95 px-3 relative overflow-visible ${className}`}
      aria-label={typeof label === "string" ? label : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div style={flowStyle}></div>
      <span style={{ zIndex: 1, position: "relative" }}>Request Demo</span>
    </button>
  );
};

export default NavButton2;
