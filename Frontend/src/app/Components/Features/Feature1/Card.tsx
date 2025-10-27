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
    padding: "35px",
    
    ...style,
  };

  return (
    <div className={`card ${className}`} style={baseStyle}>
      {children}
    </div>
  );
};

export default Card;
