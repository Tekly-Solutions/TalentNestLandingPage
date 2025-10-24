import React from "react";

type Props = {
  onClick?: () => void;
  ariaLabel?: string;
  size?: number; 
};

const RoundedShadowButton: React.FC<Props> = ({
  onClick,
  ariaLabel = "Rounded action",
  size = 40,
}) => {
  const px = `${size}px`;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="relative inline-flex items-center justify-center"
      style={{ width: px, height: px }}
    >
      <span
        className="block rounded-full"
        style={{
          width: px,
          height: px,
          background:
            "linear-gradient(90deg, var(--color-teal-light), var(--color-teal-medium))",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
        }}
      />
      {/* Center chevron (>) */}
      <span
        aria-hidden
        className="absolute text-white font-bold"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          lineHeight: 1,
          fontSize: Math.round(size * 0.45) + "px",
        }}
      >
        &gt;
      </span>
    </button>
  );
};

export default RoundedShadowButton;
