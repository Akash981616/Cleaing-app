import React from "react";
import "./InputBar.scss";
const InputBar = ({ type, placeholder, inputHeading }) => {
  return (
    <div className="service-input-container">
      <p>{inputHeading}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputBar;
