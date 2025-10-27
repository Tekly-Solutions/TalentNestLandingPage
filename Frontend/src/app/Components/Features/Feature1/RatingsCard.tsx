import React from "react";
import Card from "./Card";
import RatingCircle from "./RatingCircle";

const RatingsCard: React.FC = () => (
  <Card
    className="ratings-card"
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
        background: "#ffd700",
        color: "#000",
        padding: "8px 20px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: 600,
        marginBottom: "30px",
      }}
    >
      No More Attendance Headaches
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "140px 140px",
        gridRowGap: "6px",
        gridColumnGap: "6px",
        marginTop: "6px",
        justifyContent: "center",
      }}
    >
      <RatingCircle
        label="Eliminated"
        borderRadius="0px 20px 0px 20px"
        sentence="Buddy-punching?"
      />
      <RatingCircle
        label="Automated."
        borderRadius="20px 0px 20px 0px"
        sentence="Manual attendance logs?"
      />
      <RatingCircle
        label="Gone."
        borderRadius="20px 0px 20px 0px"
        sentence="Unknown clock-ins from outside work-zone?"
      />
      <RatingCircle
        label="Reduced"
        borderRadius="0px 20px 0px 20px"
        sentence="HR audits and discrepancies?"
      />
    </div>
  </Card>
);

export default RatingsCard;
