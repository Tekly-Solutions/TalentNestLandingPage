import React from "react";

type GradientPanelProps = {
  children?: React.ReactNode;
  className?: string;
  widthClassName?: string;
  heightClassName?: string;
  stops?: string[];
  withTexture?: boolean;
  textureSize?: string;
  textureStrength?: "subtle" | "medium" | "strong";
};

const defaultBrandStops = [
  "var(--teal-light)",
  "var(--teal-medium)",
  "var(--teal-deep)",
  "var(--teal-medium)",
  "var(--teal-dark)",
];

const GradientPanel: React.FC<GradientPanelProps> = ({
  children,
  className = "",
  widthClassName = "w-[645px]",
  heightClassName = "h-[675px]",
  stops = defaultBrandStops,
  withTexture = true,
  textureSize = "64px 64px",
  textureStrength = "medium",
}) => {
  const gradient = (() => {
    const s =
      Array.isArray(stops) && stops.length > 1 ? stops : defaultBrandStops;
    const parts = s.map(
      (c, i) => `${c} ${Math.round((i / (s.length - 1)) * 100)}%`
    );
    return `linear-gradient(90deg, ${parts.join(", ")})`;
  })();

  const noiseLayer = (() => {
    if (!withTexture) return null;
    if (textureStrength === "subtle") return "var(--background-noise)";
    const opacity = textureStrength === "strong" ? "0.12" : "0.06";
    const dataUri =
      "data:image/svg+xml;utf8," +
      `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' preserveAspectRatio='none'>` +
      `<filter id='n'><feTurbulence baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/>` +
      `<feColorMatrix type='saturate' values='0'/></filter>` +
      `<rect width='100%' height='100%' filter='url(%23n)' opacity='${opacity}' fill='black'/></svg>`;
    return `url("${dataUri}")`;
  })();

  return (
    <div
      className={`${widthClassName} ${heightClassName} rounded-[50px] shadow-[8px_4px_20px_0px_rgba(0,0,0,0.47)] flex flex-col items-center justify-center ${className}`}
      style={{
        backgroundImage: noiseLayer ? `${gradient}, ${noiseLayer}` : gradient,
        backgroundSize: noiseLayer ? `cover, ${textureSize}` : "cover",
        backgroundPosition: noiseLayer ? "center center, 0 0" : "center center",
        backgroundBlendMode: noiseLayer ? "normal, overlay" : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default GradientPanel;