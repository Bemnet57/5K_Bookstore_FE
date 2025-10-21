import React from "react";
import "../style/Button.css";

const Button = ({ variant = "primary", children, onClick, disabled }) => {
  return (
    <button
      className={`custom-btn ${variant}`} // class changes based on variant
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
