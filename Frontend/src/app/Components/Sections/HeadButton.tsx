import React from "react";

const HeadButton = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="h-10 flex items-center justify-center font-semibold text-lg text-white whitespace-nowrap px-8"
      style={{
        background: `linear-gradient(90deg, #ffe066, #ffb300, #bfa100), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        backgroundBlendMode: "multiply, overlay",
        borderRadius: "50px",
        padding: "4px 24px",
        boxSizing: "border-box",
        position: "relative",
        boxShadow: "0 8px 20px rgba(0,0,0,0.32)",
        width: "auto",
        minWidth: 0,
        maxWidth: "100%",
      }}
    >
      {children || "Get Started"}
    </div>
  );
};

export default HeadButton;
