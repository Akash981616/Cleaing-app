import React from "react";
import LoadingBarIcon from "../assets/loadingBar.svg";
import ProfileImg from "../assets/ProfileImg.svg";
import AlarmIcon from "../assets/AlarmIcon.svg";
import SearchIcon from "../assets/Search-Icon.svg";
import DownArrow from "../assets/downArrow.svg";
import profileLoadingBar from "../assets/profileLoadingBar.svg";
const TopNavBar = () => {
  return (
    <div className="main-dashBoard-container-navbar">
      <div style={{ height: "80px" }}>
        <h2 style={{ height: "20px" }}>DashBoard</h2>
        <h6 style={{ height: "20px", marginTop: "-6px" }}>Admin</h6>
      </div>
      <div className="main-dashBoard-container-navbar-right">
        <div className="main-dashBoard-container-navbar-right-icons ">
          <div className="top-navbar-iocn-container">
            <img src={SearchIcon} alt="error"></img>
          </div>
          <div className="top-navbar-iocn-container">
            <img src={AlarmIcon} alt="error"></img>
          </div>
        </div>
        <div className="main-dashBoard-container-navbar-right-icons">
          <img src={ProfileImg} alt="error"></img>
          <h6>John Doe</h6>
          <img style={{ width: "15px" }} src={DownArrow} alt="error"></img>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
