import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import UserPage from "./UserPage";
import "./AdminDashBoard.css";
import SideBarNav from "../component/SideBarNav";
import ContractPage from "./ContractPage";
import InpectionPage from "./InpectionPage";
import PropertyPage from "./PropertyPage.js";
import ReportPage from "./ReportPage";
import TopNavBar from "../component/TopNavBar";
import Model from "../model/Model";

const AdminDashBoard = () => {
  const [isModelOpen, SetIsModelOpen] = useState(false);
  const [currAppState, setCurrAppState] = useState("Users");
  return (
    <div
      // style={
      //   isModelOpen === true ? { pointerEvents: "none",  } : {}
      // }
      className="dashboard-container"
    >
      <SideBarNav
        currAppState={currAppState}
        setCurrAppState={setCurrAppState}
      />

      {/* second Div */}
      <div
        onClick={() => SetIsModelOpen(!isModelOpen)}
        className="main-dashBoard-container"
      >
        <div>
          <TopNavBar currAppState={currAppState} />
        </div>
        {/* <DashBoard/> */}
        {currAppState === "DashBoard" ? (
          <DashBoard />
        ) : currAppState === "Users" ? (
          <UserPage />
        ) : currAppState === "Property" ? (
          <PropertyPage />
        ) : currAppState === "Contracts" ? (
          <ContractPage />
        ) : currAppState == "Inspectionform" ? (
          <InpectionPage />
        ) : (
          <ReportPage />
        )}
      </div>
    </div>
  );
};

export default AdminDashBoard;
