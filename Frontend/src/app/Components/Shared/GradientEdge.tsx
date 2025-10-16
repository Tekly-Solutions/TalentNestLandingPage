import React from "react";

type GradientPanelProps = {
  className?: string;
  widthClassName?: string; // override default width
  heightClassName?: string; // override default height
  stops?: string[]; // custom color stops; defaults to brand teal palette
  withTexture?: boolean; // overlay subtle noise texture
  textureSize?: string; // size of the noise tile, e.g., "64px 64px"
  textureStrength?: "subtle" | "medium" | "strong"; // visibility of texture
  children?: React.ReactNode; // inner content
  edgeOnly?: boolean; // render gradient only on the edge (border ring)
  borderWidth?: number; // border width in px when edgeOnly=true
  fillColor?: string; // inner fill when edgeOnly=true
  paddingClassName?: string; // padding inside panel
  contentClassName?: string; // class for inner content wrapper
};

const defaultBrandStops = [
  "var(--teal-light)",
  "var(--teal-medium)",
  "var(--teal-deep)",
  "var(--teal-medium)",
  "var(--teal-dark)",
];

const GradientEdge: React.FC<GradientPanelProps> = ({
  className = "",
  widthClassName = "w-[645px]",
  heightClassName = "h-[675px]",
  stops = defaultBrandStops,
  withTexture = true,
  textureSize = "64px 64px",
  textureStrength = "medium",
  children,
  edgeOnly = true,
  borderWidth = 4,
  fillColor = "#ffffff",
  paddingClassName = "p-6",
  contentClassName = "",
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

  // When edgeOnly=true, use multi-layer background to create a gradient border ring
  // Layers order (top to bottom): noise (optional), fill, gradient ring
  const styleEdgeOnly: React.CSSProperties = edgeOnly
    ? (() => {
        const hasNoise = withTexture && !!noiseLayer;
        // Build layers top->bottom
        const images = [
          hasNoise ? noiseLayer! : null,
          `linear-gradient(${fillColor}, ${fillColor})`,
          gradient,
        ].filter(Boolean) as string[];

        const origins = images.map((_, i) =>
          i === images.length - 1 ? "border-box" : "border-box"
        );
        const clips = images.map((_, i) =>
          i === images.length - 1 ? "border-box" : "padding-box"
        );
        const sizes = images.map((_, i) =>
          hasNoise && i === 0 ? textureSize : "cover"
        );
        const positions = images.map((_, i) =>
          hasNoise && i === 0 ? "0 0" : "center center"
        );
        const blends = hasNoise ? ["overlay", "normal", "normal"] : undefined;

        return {
          backgroundImage: images.join(", "),
          backgroundOrigin: origins.join(", "),
          backgroundClip: clips.join(", "),
          backgroundSize: sizes.join(", "),
          backgroundPosition: positions.join(", "),
          ...(blends ? { backgroundBlendMode: blends.join(", ") as any } : {}),
          border: `${borderWidth}px solid transparent`,
        } as React.CSSProperties;
      })()
    : {};

  const styleFill: React.CSSProperties = !edgeOnly
    ? {
        backgroundImage: noiseLayer ? `${gradient}, ${noiseLayer}` : gradient,
        backgroundSize: noiseLayer ? `cover, ${textureSize}` : "cover",
        backgroundPosition: noiseLayer ? "center center, 0 0" : "center center",
        backgroundBlendMode: noiseLayer ? "normal, overlay" : undefined,
      }
    : {};

  return (
    <div
      className={`${widthClassName} ${heightClassName} rounded-[50px] shadow-[8px_4px_20px_0px_rgba(0,0,0,0.47)] ${className} ${paddingClassName}`}
      style={{ ...(edgeOnly ? styleEdgeOnly : styleFill) }}
    >
      {children && (
        <div className={`w-full h-full ${contentClassName}`}>{children}</div>
      )}
    </div>
  );
};

export default GradientEdge;
