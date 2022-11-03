import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import UserPage from "./UserPage";
import "./AdminDashBoard.css";
import SideBarNav from "../component/SideBarNav";
import ContractPage from "./ContractPage";
import InpectionPage from "./InpectionPage";
import PropertyPage from "./PropertyPage.js";
import ReportPage from "./ReportPage";
const AdminDashBoard = () => {
  const [currAppState, setCurrAppState] = useState("DashBoard");
  return (
    <div className="dashboard-container">
      <SideBarNav
        currAppState={currAppState}
        setCurrAppState={setCurrAppState}
      />
      {/* second Div */}
      <div className="main-dashBoard-container">
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
