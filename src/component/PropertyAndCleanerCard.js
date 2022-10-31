import React from "react";
import "./PropertyAndCleanerCard.css";
import EyeIcon from "../assets/EyeIcon.svg"
const PropertyAndCleanerCard = ({
  detail,
  imgLink,
  name,
  views,
  ownerName,
}) => {
 
    return (
    <div
      style={{ height: `${views ? "320px" : "302px"}` }}
      className="property-card-container"
    >
      <div>
        <img src={imgLink} alt="eror"></img>
        <div className="propertyname-container">
          <h3>{name} </h3>

          {views ? (
            <div className="view-image-heading-container">
              <img src={EyeIcon} alt ="error"></img>
              <h5>{views}</h5>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {ownerName ? (
          <p className="para-heading" style={{ padding: "0px 15px", marginTop: "-0px" }}>
            Owner:{ownerName}
          </p>
        ) : (
          <div></div>
        )}
        <div className="propertyname-container-heading">
          <p >{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyAndCleanerCard;
