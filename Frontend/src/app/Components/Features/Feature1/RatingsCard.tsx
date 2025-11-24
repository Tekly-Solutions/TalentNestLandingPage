import React from "react";
import Card from "./Card";
import RatingCircle from "./RatingCircle";

interface RatingsCardProps {
  colorScheme?: {
    gradient: string;
    shadow: string;
  };
  badgeColorScheme?: {
    gradient: string;
    shadow: string;
  };
  badgeText?: string;
  circle1Label?: string;
  circle1Sentence?: string;
  circle2Label?: string;
  circle2Sentence?: string;
  circle3Label?: string;
  circle3Sentence?: string;
  circle4Label?: string;
  circle4Sentence?: string;
  useBlackText?: boolean;
}

const RatingsCard: React.FC<RatingsCardProps> = ({
  colorScheme,
  badgeColorScheme,
  badgeText = "No More Attendance Headaches",
  circle1Label = "Eliminated",
  circle1Sentence = "Buddy-punching?",
  circle2Label = "Automated.",
  circle2Sentence = "Manual attendance logs?",
  circle3Label = "Gone.",
  circle3Sentence = "Unknown clock-ins from outside work-zone?",
  circle4Label = "Reduced",
  circle4Sentence = "HR audits and discrepancies?",
  useBlackText = false,
}) => {
  const defaultColors = {
    gradient: "linear-gradient(90deg, #ffe066 0%, #ffb300 50%, #bfa100 100%)",
    shadow: "rgba(255,224,102,0.12)",
  };

  const colors = colorScheme || defaultColors;
  const badgeColors = badgeColorScheme || { gradient: "#ffd700", shadow: "" };

  return (
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
          background: badgeColors.gradient,
          color: badgeColorScheme ? "#fff" : "#000",
          padding: "8px 20px",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: 600,
          marginBottom: "30px",
        }}
      >
        {badgeText}
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
          label={circle1Label}
          borderRadius="0px 20px 0px 20px"
          sentence={circle1Sentence}
          colorScheme={colorScheme}
          labelColor={useBlackText ? "#000" : "white"}
          sentenceColor={useBlackText ? "#000" : "white"}
        />
        <RatingCircle
          label={circle2Label}
          borderRadius="20px 0px 20px 0px"
          sentence={circle2Sentence}
          colorScheme={colorScheme}
          labelColor={useBlackText ? "#000" : "white"}
          sentenceColor={useBlackText ? "#000" : "white"}
        />
        <RatingCircle
          label={circle3Label}
          borderRadius="20px 0px 20px 0px"
          sentence={circle3Sentence}
          colorScheme={colorScheme}
          labelColor={useBlackText ? "#000" : "white"}
          sentenceColor={useBlackText ? "#000" : "white"}
        />
        <RatingCircle
          label={circle4Label}
          borderRadius="0px 20px 0px 20px"
          sentence={circle4Sentence}
          colorScheme={colorScheme}
          labelColor={useBlackText ? "#000" : "white"}
          sentenceColor={useBlackText ? "#000" : "white"}
        />
      </div>
    </Card>
  );
};

export default RatingsCard;
