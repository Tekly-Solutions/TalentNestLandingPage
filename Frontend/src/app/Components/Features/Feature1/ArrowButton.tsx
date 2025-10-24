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
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
          {/* Arrow icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          
            style={{
              filter:
                "drop-shadow(0 2px 6px rgba(20, 184, 166, 0.45)) drop-shadow(0 1px 2px rgba(0,0,0,0.12))",
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
