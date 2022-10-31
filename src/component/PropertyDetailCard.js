import React from "react";
import "./PropertyDetailCard.css";
import EllipseIcon from "../assets/EllipseIcon.svg";
const PropertyDetailCard = ({heading,total,active,inActive}) => {
  return (
    <div className="card-container">
      <div className="upper-status-container">
        <div className="Img-container">
          <img src={EllipseIcon} alt="error"></img>
        </div>
        <div className="Detail-container">
          <h3>{heading}</h3>
          <h1 style={{ marginTop: "-10px" }}>{total}</h1>
        </div>
      </div>

      <div className="Bottom-status-container">
        <h5>
          Active : <span>{active}</span>
        </h5>
        <h5>
          InActive : <span>{inActive}</span>
        </h5>
      </div>
    </div>
  );
};

export default PropertyDetailCard;
