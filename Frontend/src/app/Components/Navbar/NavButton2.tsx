"use client";

import React, { useState, useRef, CSSProperties } from "react";

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
      <div className="flex items-center gap-3">
        {/* Live Character Avatar */}
        <div
          className="relative w-6 h-6"
          style={{ zIndex: 100, overflow: "visible" }}
        >
          <div
            className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center relative overflow-visible transition-all duration-300 ${
              isClicked ? "animate-spin-once" : "animate-bounce"
            }`}
            style={{
              transform: isClicked ? "scale(1.3) rotate(360deg)" : "scale(1)",
              transition:
                "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              zIndex: 100,
            }}
          >
            {/* Face */}
            <div className="relative">
              {/* Eyes - change expression on click */}
              <div className="flex gap-1 mb-0.5">
                <div
                  className={`w-1 h-1 bg-white rounded-full ${
                    isClicked ? "animate-none" : "animate-pulse"
                  }`}
                  style={{ transform: isClicked ? "scaleY(0.3)" : "scaleY(1)" }}
                ></div>
                <div
                  className={`w-1 h-1 bg-white rounded-full ${
                    isClicked ? "animate-none" : "animate-pulse"
                  }`}
                  style={{
                    animationDelay: "0.5s",
                    transform: isClicked ? "scaleY(0.3)" : "scaleY(1)",
                  }}
                ></div>
              </div>
              {/* Mouth - changes to excited expression on click */}
              <div
                className={`w-2 h-1 border-b-2 border-white rounded-full transform`}
                style={{
                  transform: isClicked
                    ? "scale(1.2) translateY(-1px)"
                    : "scale(0.75)",
                  borderRadius: isClicked ? "50% 50% 50% 50%" : "50%",
                }}
              ></div>
            </div>
            {/* Floating particles around character - burst on click */}
            <div
              className={`absolute -top-1 -right-1 w-1 h-1 bg-teal-200 rounded-full ${
                isClicked ? "animate-burst" : "animate-ping"
              }`}
              style={{
                transform: isClicked
                  ? "translate(10px, -10px) scale(2)"
                  : "translate(0, 0)",
                transition: "all 0.3s ease-out",
              }}
            ></div>
            <div
              className={`absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-teal-300 rounded-full ${
                isClicked ? "animate-burst" : "animate-ping"
              }`}
              style={{
                animationDelay: isClicked ? "0s" : "1s",
                transform: isClicked
                  ? "translate(-10px, 10px) scale(2)"
                  : "translate(0, 0)",
                transition: "all 0.3s ease-out",
              }}
            ></div>
            {isClicked && (
              <>
                <div className="absolute top-0 right-0 w-1 h-1 bg-teal-200 rounded-full animate-burst"></div>
                <div
                  className="absolute bottom-0 left-1 w-0.5 h-0.5 bg-teal-300 rounded-full animate-burst"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="absolute top-1 left-0 w-0.5 h-0.5 bg-teal-400 rounded-full animate-burst"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </>
            )}
          </div>
          {/* Waving hand - goes wild on click */}
          <div
            className="absolute -top-0.5 -right-1.5 text-sm"
            style={{
              animation: isClicked
                ? "wave-excited 0.3s ease-in-out 2"
                : "wave 1s ease-in-out infinite",
              transformOrigin: "70% 70%",
              zIndex: 101,
              color: "white",
            }}
          >
            👋
          </div>
        </div>
        <span style={{ zIndex: 1, position: "relative" }}>Request Demo</span>
      </div>
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }
        @keyframes wave-excited {
          0% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-30deg) scale(1.3);
          }
          50% {
            transform: rotate(30deg) scale(1.3);
          }
          75% {
            transform: rotate(-30deg) scale(1.3);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }
        @keyframes burst {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: scale(3);
          }
        }
        .animate-burst {
          animation: burst 0.6s ease-out forwards;
        }
      `}</style>
    </button>
  );
};

export default NavButton2;
