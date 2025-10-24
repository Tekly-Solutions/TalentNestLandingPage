import React from "react";
import Card from "./Card";

const SecurityCard: React.FC = () => (
  <Card
    className="security-card"
    style={{
      background: "#fff",
      border: "1px solid #ececec",
      borderRadius: "12px",
      boxShadow:
        "inset 0 2px 12px 0 rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
      padding: "24px 20px",
      margin: 0,
      position: "relative",
      gridColumn: "1 / -1",
    }}
  >
    <h3
      style={{
        fontSize: "24px",
        fontWeight: 700,
        marginBottom: "14px",
        color: "#000",
      }}
    >
      Enterprise-grade security & compliance
    </h3>
    <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
      Trust Workable with your data, backed by ISO 27001, 27017, SOC 2 Type II,
      SOC 3 certifications. Compliant with GDPR, EEO and CCPA data privacy,
      automated policy toggles. Maintain transparency with backup and audit
      logging included.
    </p>
  </Card>
);

export default SecurityCard;
