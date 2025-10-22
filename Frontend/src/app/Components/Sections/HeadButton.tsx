import React from "react";

const HeadButton = () => {
  return (
    <>
      <div
        className="w-72 h-20 rounded-[50px]"
        style={{
          background:
            "linear-gradient(90deg, var(--color-teal-light), var(--color-teal-medium)), var(--background-noise), var(--background-noise)",
          backgroundBlendMode: "overlay, normal, normal",
          backgroundSize: "cover, 64px 64px, 64px 64px",
          backgroundPosition: "center center, 0 0, 16px 16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.32)",
          filter: "contrast(115%)",
        }}
      />
    </>
  );
};

export default HeadButton;
