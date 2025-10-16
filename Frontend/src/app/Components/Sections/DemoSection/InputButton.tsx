import React from "react";

type GradientButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  widthClassName?: string;
  heightClassName?: string;
  roundedClassName?: string;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  onClick,
  className = "",
  widthClassName = "w-72",
  heightClassName = "h-9",
  roundedClassName = "rounded-[50px]",
}) => {
  const gradient =
    "linear-gradient(90deg, rgba(133, 219, 160, 1) 0%, rgba(92, 202, 151, 1) 25%, rgba(44, 181, 143, 1) 50%, rgba(21, 172, 154, 1) 75%, rgba(4, 164, 161, 1) 100%)";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${widthClassName} ${heightClassName} ${roundedClassName} shadow-[8px_4px_20px_0px_rgba(0,0,0,0.47)] text-teal-800 font-medium mix-blend-normal ${className}`}
      style={{
        // Two layers: inner solid fill, outer gradient for the border
        backgroundImage: `linear-gradient(var(--btn-fill, #ffffff), var(--btn-fill, #ffffff)), ${gradient}`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        border: "4px solid transparent",
      }}
    >
      {label}
    </button>
  );
};

export default GradientButton;
