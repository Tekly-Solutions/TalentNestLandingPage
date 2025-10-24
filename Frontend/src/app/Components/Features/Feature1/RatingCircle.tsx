import React from "react";

export interface RatingCircleProps {
  score: number;
  label: string;
}

const RatingCircle: React.FC<RatingCircleProps> = ({ score, label }) => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background: "#ffd700",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "36px",
        fontWeight: 700,
        color: "#000",
        margin: "0 auto 12px",
        border: "4px solid rgba(255, 215, 0, 0.3)",
        boxShadow: "0 4px 20px rgba(255, 215, 0, 0.4)",
      }}
    >
      {score.toFixed(1)}
    </div>
    <div style={{ fontSize: "13px", color: "white" }}>{label}</div>
  </div>
);

export default RatingCircle;
