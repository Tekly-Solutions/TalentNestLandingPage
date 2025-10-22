import React from "react";
import Card from "./Card";
import RatingCircle from "./RatingCircle";

const RatingsCard: React.FC = () => (
  <Card className="ratings-card">
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
      The best rated HR system
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      <RatingCircle score={9.0} label="Ease of setup" />
      <RatingCircle score={9.1} label="Ease of use" />
      <RatingCircle score={9.3} label="Quality of support" />
    </div>
  </Card>
);

export default RatingsCard;
