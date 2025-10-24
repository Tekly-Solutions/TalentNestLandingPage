import React from "react";

export interface StatRowProps {
  icon: string;
  name: string;
  time: string;
  iconBg: string;
  iconColor: string;
}

const StatRow: React.FC<StatRowProps> = ({
  icon,
  name,
  time,
  iconBg,
  iconColor,
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: 600,
          background: iconBg,
          color: iconColor,
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: "15px", color: "white" }}>{name}</span>
    </div>
    <div style={{ fontSize: "32px", fontWeight: 700, color: "white" }}>
      {time}
    </div>
  </div>
);

export default StatRow;
