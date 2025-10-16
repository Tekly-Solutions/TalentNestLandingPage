import React from "react";

type GradientHeadlineProps = {
  prefix: string; // e.g., "The Platform for"
  firstWord: string; // e.g., "Talent"
  secondWord: string; // e.g., "People"
  sizeClassName?: string; // e.g., "text-4xl"
  wrapperClassName?: string; // e.g., margin classes
  prefixClassName?: string; // default: text-black font-[350]
  firstWordClassName?: string; // default: text-black italic font-light
  secondWordWeightClassName?: string; // default: font-[350]
  gradientStops?: string[]; // array of CSS color strings; defaults to teal sequence
};

const defaultStops = ["#007E7E", "#33B88C", "#A9EBA9", "#33B88C", "#00A3A3"];

const GradientHeadline: React.FC<GradientHeadlineProps> = ({
  prefix,
  firstWord,
  secondWord,
  sizeClassName = "text-4xl",
  wrapperClassName = "mb-3",
  prefixClassName = "text-black font-[350]",
  firstWordClassName = "text-black italic font-light",
  secondWordWeightClassName = "font-[350]",
  gradientStops = defaultStops,
}) => {
  const gradientCss = `linear-gradient(90deg, ${gradientStops
    .map(
      (c, i) => `${c} ${Math.round((i / (gradientStops.length - 1)) * 100)}%`
    )
    .join(", ")})`;

  return (
    <div className={`${sizeClassName} font-bold ${wrapperClassName}`}>
      <span className={prefixClassName}>{prefix}</span>
      <br />
      <span className={firstWordClassName}>{firstWord}</span>{" "}
      <span
        className={`inline-block bg-clip-text text-transparent ${secondWordWeightClassName}`}
        style={{ backgroundImage: gradientCss }}
      >
        {secondWord}
      </span>
    </div>
  );
};

export default GradientHeadline;
