import React from "react";

const HeroSection: React.FC = () => (
  <div style={{ textAlign: "center", marginBottom: "70px" }}>
    <h1
      style={{
        fontSize: "52px",
        fontWeight: 700,
        marginBottom: "20px",
        color: "#000",
        lineHeight: 1.1,
      }}
    >
      An efficient way to manage attendance

      <br />
       and ensure security
    </h1>
    <p
      style={{
        fontSize: "16px",
        color: "#333",
        maxWidth: "580px",
        margin: "0 auto",
        lineHeight: 1.5,
      }}
    >
      With geofence-based clock-ins and facial recognition, you can accurately track employee attendance while ensuring a secure and touchless experience.
    </p>
  </div>
);

export default HeroSection;
