import React from "react";

function Button({ disabled, onClick, text }) {
  return (
    <div
      className={disabled ? "pagination-button-disabled" : "pagination-button"}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default Button;
