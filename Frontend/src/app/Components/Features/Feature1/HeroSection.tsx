import React from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Goodbye punch cards.",
  subtitle = "Hello! smart attendance",
  description = "With geofence-based clock-ins and facial recognition, you can accurately track employee attendance while ensuring a secure and touchless experience.",
}) => (
  <div style={{ textAlign: "center", marginBottom: "32px" }}>
    <h1
      style={{
        fontSize: "52px",
        fontWeight: 500,
        marginBottom: "2px",
        color: "#fff",
        lineHeight: 1.1,
      }}
    >
      {title}
      <br />
      {subtitle}
    </h1>
    <p
      style={{
        fontSize: "16px",
        color: "#fff",
        maxWidth: "580px",
        margin: "0 auto",
        lineHeight: 1.5,
      }}
    >
      {description}
    </p>
  </div>
);

export default HeroSection;
