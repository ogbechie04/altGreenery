import React from "react";
import "@/app/globals.css";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text = "Contact  Us" }) => {
  return (
    <button className="font-roboto px-8 py-4 bg-[var(--secondary-500)] rounded-[6.25rem] font-medium flex items-center justify-center hover:shadow-button-shadow whitespace-nowrap">
      {text}
    </button>
  );
};

export default Button;
