import React from "react";

function Button({ disabled, onClick, text }) {
  return (
    <button
      className={disabled ? "pagination-button-disabled" : "pagination-button"}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}

export default Button;
