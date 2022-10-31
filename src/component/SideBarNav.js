import React from "react";
import HomeIcon from "../assets/VectorhomeIcon.png";
import NoteIcon from "../assets/NoteIcon.svg";
import smallHomeIcon from "../assets/small-homeIcon.svg";
import UserIcon from "../assets/UserIcon.svg";
import RectAngle from "../assets/RectAngle.svg";
import InspectionIcon from "../assets/InspectionIcon.svg";
import Report from "../assets/Report.svg";
import "../component/SideBarNav.css";
const SideBarNav = ({ currAppState, setCurrAppState }) => {
  const currAppStateStyle = {
    backgroundColor: "rgba(135, 135, 135, 0.3)",
    borderRadius: "80px",
  };
  return (
    <div className="navBar-container">
      <div>
        <img src={HomeIcon}></img>
      </div>
      <div className="navbar-option">
        <div
          onClick={() => {
            setCurrAppState("DashBoard");
          }}
          style={currAppState === "DashBoard" ? currAppStateStyle : {}}
          className="navbar-option-content"
        >
          <img src={smallHomeIcon} alt="error"></img>
          <h3>DashBoard</h3>
        </div>
        <div
          onClick={() => {
            setCurrAppState("Users");
          }}
          style={currAppState === "Users" ? currAppStateStyle : {}}
          className="navbar-option-content"
        >
          <img src={UserIcon} alt="error"></img>
          <h3>Users</h3>
        </div>
        <div
          onClick={() => {
            setCurrAppState("Property");
          }}
          style={currAppState === "Property" ? currAppStateStyle : {}}
          className="navbar-option-content"
        >
          <img src={RectAngle} alt="error"></img>
          <h3>Property </h3>
        </div>
        <div
          onClick={() => {
            setCurrAppState("Contracts");
          }}
          style={currAppState === "Contracts" ? currAppStateStyle : {}}
          className="navbar-option-content"
        >
          <img src={NoteIcon} alt="error"></img>
          <h3>Contracts</h3>
        </div>
        <div
          onClick={() => {
            setCurrAppState("Inspectionform");
          }}
          style={currAppState === "Inspectionform" ? currAppStateStyle : {}}
          className="navbar-option-content"
        >
          <img src={InspectionIcon} alt="error"></img>
          <h3>Inspection form</h3>
        </div>
        <div
          onClick={() => {
            setCurrAppState("Reports");
          }}
          style={currAppState === "Reports" ? currAppStateStyle : {}}
          className="navbar-option-content"
        >
          <img src={Report} alt="error"></img>
          <h3>Reports</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBarNav;
