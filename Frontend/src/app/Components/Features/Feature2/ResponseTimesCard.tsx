import React from "react";
import Card from "./Card";
import StatRow from "./StatRow";

const ResponseTimesCard: React.FC = () => (
  <Card className="response-card">
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
        iconColor="#333"
      />
      <StatRow
        icon="Email"
        name="Email"
        time="96m"
        iconBg="#ff6b9d"
        iconColor="white"
      />
    </div>
  </Card>
);

export default ResponseTimesCard;
