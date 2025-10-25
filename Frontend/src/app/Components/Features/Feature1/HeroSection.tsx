import React from "react";

const HeroSection: React.FC = () => (
  <div style={{ textAlign: "center", marginBottom: "32px" }}>
    <h1
      style={{
        fontSize: "52px",
        fontWeight: 500,
        marginBottom: "2px",
        color: "#000",
        lineHeight: 1.1,
      }}
    >
      Goodbye punch cards.
      <br />
      Hello! smart attendance
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
      With geofence-based clock-ins and facial recognition, you can accurately
      track employee attendance while ensuring a secure and touchless
      experience.
    </p>
  </div>
);

export default HeroSection;
