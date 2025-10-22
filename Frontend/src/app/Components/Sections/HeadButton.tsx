import React from "react";

const HeadButton = () => {
  return (
    <div
      className="w-60 h-10 flex items-center justify-center"
      style={{
        background: "linear-gradient(90deg, #ffe066, #ffb300, #bfa100)",
        borderRadius: "50px",
        padding: "4px",
        boxSizing: "border-box",
        position: "relative",
        boxShadow: "0 8px 20px rgba(0,0,0,0.32)",
      }}
    >
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background: "white",
          borderRadius: "46px",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Place button content here if needed */}
      </div>
    </div>
  );
};

export default HeadButton;
