import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import UserPage from "./UserPage";
import "./AdminDashBoard.css";
import SideBarNav from "../component/SideBarNav";

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
        <UserPage/>
      </div>
    </div>
  );
};

export default AdminDashBoard;
