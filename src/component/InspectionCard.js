import React from "react";
import "./InspectionCard.scss";
import AddIcon from "@mui/icons-material/Add";
import InspectionCardEditIcon from "../assets/InspectionCardEditIcon.svg";
import InspectionCardDeleteIcon from "../assets/InspectionCardDeleteIcon.svg";
import InspectionCardUrgentIcon from "../assets/InspectionCardUrgentIcon.svg";
import InspectionCardGoodQuality from "../assets/InspectionCardGoodQuality.svg";
const InspectionCard = ({ addCard, floor, type, msg }) => {
  return (
    <div
      className={
        addCard ? "inspectionCard-container-add" : "inspectionCard-container"
      }
    >
      {addCard ? (
        <div className="add-icon">
          <AddIcon fontW color="#262626" fontSize="large" />
          <header>Add More</header>
        </div>
      ) : (
        <>
          <div className="inspectionCard-container-header">
            <header>{floor}</header>
            <div>
              <img src={InspectionCardEditIcon} alt="error"></img>
              <img src={InspectionCardDeleteIcon} alt="error"></img>
            </div>
          </div>
          <h1>{type}</h1>
          <div className="inspectionCard-container-msglogo">
            {msg === "correct" ? (
              <img src={InspectionCardGoodQuality} alt="error"></img>
            ) : (
              <img src={InspectionCardUrgentIcon} alt="error"></img>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default InspectionCard;
