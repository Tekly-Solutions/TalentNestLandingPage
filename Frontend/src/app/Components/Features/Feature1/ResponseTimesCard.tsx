import React from "react";
import Card from "./Card";
import StatRow from "./StatRow";

const ResponseTimesCard: React.FC = () => (
  <Card
    className="response-card"
    style={{
      background: "#fff",
      border: "1px solid #ececec",
      borderRadius: "12px",
      boxShadow:
        "inset 0 2px 12px 0 rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
      padding: "24px 20px",
      margin: 0,
      position: "relative",
      width: "auto",
      minHeight: "unset",
      maxWidth: "100%",
    }}
  >
    <div
      style={{
        display: "inline-block",
        background: "#90ee90",
        color: "#000",
        padding: "8px 18px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: 600,
        marginBottom: "25px",
      }}
    >
      Average time to first reply
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        marginTop: "20px",
      }}
    >
      <StatRow
        icon="Chat"
        name="Chat"
        time="24s"
        iconBg="#ff6b9d"
        iconColor="white"
      />
      <StatRow
        icon="Phone"
        name="Phone"
        time="35s"
        iconBg="#ffd93d"
        iconColor="white"
      />
      <StatRow
        icon="Email"
        name="Email"
        time="1m 12s"
        iconBg="#90caf9"
        iconColor="white"
      />
    </div>
  </Card>
);

export default ResponseTimesCard;
