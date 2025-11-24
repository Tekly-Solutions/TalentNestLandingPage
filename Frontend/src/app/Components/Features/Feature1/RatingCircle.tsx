import React from "react";

export interface RatingCircleProps {
  label: string;
  borderRadius?: string;
  sentence?: string;
  colorScheme?: {
    gradient: string;
    shadow: string;
  };
}

const RatingCircle: React.FC<RatingCircleProps> = ({
  label,
  borderRadius,
  sentence,
  colorScheme,
}) => {
  const defaultColors = {
    gradient: "linear-gradient(135deg, #fff9c4 0%, #ffe066 50%, #ffb300 100%)",
    shadow: "rgba(255,224,102,0.12)",
  };

  const colors = colorScheme || defaultColors;

  return (
  <div
    style={{
      width: "140px",
      height: "140px",
      borderRadius: borderRadius,
      padding: "20px 15px 0",
      boxShadow: "none",
      position: "relative",
      overflow: "hidden",
      backgroundImage: `${colors.gradient}, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
      backgroundBlendMode: "multiply, lighten",
      backgroundAttachment: "fixed",
      zIndex: 1,
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "48px",
          fontWeight: 800,
          color: "#ffd700",
          margin: "0 auto 12px",
          textShadow: "0 2px 8px rgba(255, 215, 0, 0.5)",
        }}
      ></div>
      {sentence && (
        <div
          style={{
            fontSize: "10px",
            color: "white",
            fontWeight: 500,
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          {sentence}
        </div>
      )}
      <div
        style={{
          fontSize: "18px",
          color: "white",
          fontWeight: 600,
          marginTop: "34px",
        }}
      >
        {label}
      </div>
    </div>
  </div>
  );
};

export default RatingCircle;
