import React from "react";
import Card from "./Card";
import CircularBackButton from "./ArrowButton";

const IntegrationsCard: React.FC = () => (
  <Card
    className="integrations-card"
    style={{
      boxShadow:
        "inset 0 2px 12px 0 rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
      background: "#fff",
      border: "1px solid #ececec",
      borderRadius: "12px",
      padding: "24px 20px",
      margin: 0,
      position: "relative",
      width: "auto",
      minHeight: "unset",
      maxWidth: "100%",
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
      Face Recognition for Secure, Touchless Clock-Integration
    </h3>
    <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
      Eliminate time theft with our face recognition system. Employees can clock
      in and out securely with facial recognition, ensuring accurate and
      fraud-free attendance tracking.
    </p>
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "20px",
      }}
    >
      <a
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "15px",
          color: "#000",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        <span>
          <CircularBackButton />
        </span>
      </a>
    </div>
  </Card>
);

export default IntegrationsCard;
