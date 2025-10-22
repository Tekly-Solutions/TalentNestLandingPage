import React from "react";
import Card from "./Card";

const IntegrationsCard: React.FC = () => (
  <Card className="integrations-card">
    <h3
      style={{
        fontSize: "24px",
        fontWeight: 700,
        marginBottom: "14px",
        color: "#000",
      }}
    >
      270+ integrations
    </h3>
    <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
      Bring all of your favorite productivity tools. Connect to email, calendar,
      Slack, video conferencing, productivity suites, analytics platforms, and
      HR tech and assessments to payroll.
    </p>
    <a
      href="#"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "20px",
        fontSize: "15px",
        color: "#000",
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      <span>→</span>
    </a>
  </Card>
);

export default IntegrationsCard;
