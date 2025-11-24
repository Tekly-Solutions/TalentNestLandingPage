import React from "react";

interface HeroSectionProps {
  headline?: React.ReactNode;
  description?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  description,
}) => {
  const defaultHeadline = (
    <>
      Goodbye punch cards.
      <br />
      Hello! smart attendance
    </>
  );

  const defaultDescription = (
    <>
      With geofence-based clock-ins and facial recognition, you can accurately
      track employee attendance while ensuring a secure and touchless
      experience.
    </>
  );

  return (
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
        {headline ?? defaultHeadline}
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
        {description ?? defaultDescription}
      </p>
    </div>
  );
};

export default HeroSection;
