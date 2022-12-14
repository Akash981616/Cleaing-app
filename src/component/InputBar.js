import React from "react";
import "./InputBar.scss";
const InputBar = ({ type, placeholder, inputHeading, size }) => {
  return (
    <div
      className={
        size === "small" ? "small-input-container" : "service-input-container"
      }
    >
      <p>{inputHeading}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputBar;
