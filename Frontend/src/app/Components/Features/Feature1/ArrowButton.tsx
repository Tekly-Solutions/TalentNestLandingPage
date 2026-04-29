"use client";

import React from "react";

interface ArrowButtonProps {
  arrowColor?: string;
}

export default function CircularBackButton({
  arrowColor = "#FFD600",
}: ArrowButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="flex items-center justify-center p-2">
      <button
        className="relative group"
        onClick={() => console.log("Back button clicked")}
        aria-label="Go back"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main circle */}
        {/* Main circle */}
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300">
          {/* Arrow icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              opacity: isHovered ? 1 : 0.3,
              filter:
                "drop-shadow(0 2px 6px rgba(20, 184, 166, 0.45)) drop-shadow(0 1px 2px rgba(0,0,0,0.12))",
              transition: "all 0.3s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            <path
              d="M9 6L15 12L9 18"
              stroke={arrowColor}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Subtle inner shadow effect */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.05)",
          }}
        ></div>
      </button>
    </div>
  );
}
