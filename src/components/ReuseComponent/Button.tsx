import React from "react";

interface ButtonProps {
  name: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({
  name,
  handleClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-[#FA7275] text-[15px] leading-5 text-center font-semibold text-white rounded-[41px] px-6 py-2 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
