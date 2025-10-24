import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  style = {},
}) => {
  const baseStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: "20px",
    padding: "35px",
    position: "relative",
    overflow: "hidden",
    border: "1px solid #ececec",
    width: "auto",
    minHeight: "unset",
    maxWidth: "100%",
    ...style,
  };

  return (
    <div className={`card ${className}`} style={baseStyle}>
      {children}
    </div>
  );
};

export default Card;
