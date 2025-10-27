"use client";

import React from "react";

export default function CircularBackButton() {
  return (
    <div className="flex items-center justify-center p-2">
      <button
        className="relative group"
        onClick={() => console.log("Back button clicked")}
        aria-label="Go back"
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
              opacity: 0.3,
              filter:
                "drop-shadow(0 2px 6px rgba(20, 184, 166, 0.45)) drop-shadow(0 1px 2px rgba(0,0,0,0.12))",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.filter =
                "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter =
                "drop-shadow(0 2px 6px rgba(20, 184, 166, 0.45)) drop-shadow(0 1px 2px rgba(0,0,0,0.12))";
            }}
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#FFD600"
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
