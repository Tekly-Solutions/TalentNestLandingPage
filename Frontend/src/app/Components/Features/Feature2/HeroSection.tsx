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
      Built for demanding
      <br />
      businesses
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
      Designed to meet the highest standards for seamless performance,
      scalability and reliability for businesses that need to stay ahead in a
      fast-paced market.
    </p>
  </div>
);

export default HeroSection;
