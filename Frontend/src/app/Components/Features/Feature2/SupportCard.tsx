import React from "react";
import Card from "./Card";

const SupportCard: React.FC = () => (
  <Card className="support-card">
    <h3
      style={{
        fontSize: "24px",
        fontWeight: 700,
        marginBottom: "14px",
        color: "#000",
      }}
    >
      Outstanding support & training
    </h3>
    <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
      Access award-winning, 24/7 support and extensive training resources, from
      video courses to in-product help. Schedule one-on-one training or get
      assistance in your time zone from our global team.
    </p>
  </Card>
);

export default SupportCard;
