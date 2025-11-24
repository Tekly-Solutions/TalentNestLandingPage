"use client";

import React from "react";

type GradientButtonProps = {
  label?: string;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  label = "Start Free Trial",
}) => {
  return (
    <div
      className="w-52 h-9 transition-all duration-300 ease-in-out"
      style={{
        background:
          "linear-gradient(90deg, var(--teal-light) 0%, var(--teal-medium) 25%, var(--teal-deep) 50%, var(--teal-dark) 75%, var(--teal-very-dark) 100%)",
        borderRadius: "50px",
        padding: "4px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
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
          position: "relative",
          zIndex: 2,
          padding: "0 16px",
        }}
      >
        <span>{label}</span>
      </div>
    </div>
  );
};

export default GradientButton;
