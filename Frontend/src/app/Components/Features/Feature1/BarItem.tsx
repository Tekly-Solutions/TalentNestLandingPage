import React from "react";

export interface BarItemProps {
  label: string;
  width: number;
  color: string;
}

const BarItem: React.FC<BarItemProps> = ({ label, width, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <div style={{ fontSize: "10px", width: "70px", color: "#666" }}>
      {label}
    </div>
    <div
      style={{
        flex: 1,
        height: "8px",
        background: "#f0f0f0",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: color,
          borderRadius: "10px",
        }}
      />
    </div>
  </div>
);

export default BarItem;
