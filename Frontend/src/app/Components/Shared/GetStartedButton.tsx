"use client";

import React from "react";

type GetStartedButtonProps = {
  label?: string;
  className?: string;
};

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  label = "Get Started",
  className,
}) => {
  return (
    <div
      className={`w-52 h-9 flex items-center justify-center ${className || ""}`}
      style={{
        background:
          "linear-gradient(90deg, #33B88C 0%, #007E7E 25%, #A9EBA9 50%, #33B88C 75%, #00A3A3 100%)",
        borderRadius: "50px",
        padding: "3px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <button
        type="button"
        className="w-full h-full flex items-center justify-center bg-white text-[#007E7E] font-semibold rounded-full px-4 py-2 focus:outline-none"
        style={{
          border: "none",
          background: "white",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ color: "#007E7E" }}>{label}</span>
      </button>
    </div>
  );
};

export default GetStartedButton;
