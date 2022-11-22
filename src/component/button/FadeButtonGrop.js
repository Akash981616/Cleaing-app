import React from "react";
import { useNavigate } from "react-router-dom";

const FadeButtonGrop = () => {
  const navigate = useNavigate();
  return (
    <div className="service-input-button-container">
      <button onClick={navigate(-1)}>Next</button>
      <button className="service-fade-button">Back</button>
    </div>
  );
};

export default FadeButtonGrop;
