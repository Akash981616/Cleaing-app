import React from "react";
import "./Model.scss";
import ModelDeleteIcon from "../assets/ModelDeleteIcon.svg";
const Model = () => {
  return (
    <div className="model-container">
      <div className="model-container-image">
        <img src={ModelDeleteIcon} alt="error"></img>
      </div>
      <h2>Are You Sure</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div style={{ display: "flex", gap: 20,marginTop:40 }} className="model-btn-container">
        <button style={{ background: "#8A8A8A", color: " #FFFFFF" }}>
          Yes
        </button>
        <button style={{ border: 1, borderColor: "#E9E9E9", color: "#565656" ,}} >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Model;
