import React, { useEffect, useState } from "react";
import "./AdminDashBoard.scss";
import SideBarNav from "../component/SideBarNav";
import TopNavBar from "../component/TopNavBar";
import Model from "../model/Model";
import { useStateContext } from "../context/ContextProvider";
import {
  Outlet,
  useLocation,
  
} from "react-router-dom";
import ShareInspectionModal from "../model/ShareInspectionModal";

const AdminDashBoard = () => {
  const GetCurrentAppState = () => {
    let { pathname } = useLocation();

    switch (pathname) {
      case pathname == "/home/user":
        return "Users";
        break;
      case pathname == "dashboard":
        return "DashBoard";
        break;
      case pathname == "property-page":
        return "Property";
        break;
      case pathname == "contract-page":
        return "Contracts";
        break;
      case pathname == "inpection-page":
        return "Inspectionform";
        break;
      case pathname == "report-page":
        return "Reports";
        break;
      default:
        return "DashBoard";
        break;
    }
  };

  const {
    openModal,
    setopenModal,
    IsShareInspectionModal,
    SetIsShareInspectionModal,
  } = useStateContext();
  const [isModelOpen, SetIsModelOpen] = useState(false);
  const [currAppState, setCurrAppState] = useState("DashBoard");
  useEffect(() => {}, []);

  return (
    <div className="dashboard-container">
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
        <Outlet />
        <Model open={openModal} handleClose={setopenModal} />
        <ShareInspectionModal
          open={IsShareInspectionModal}
          handleClose={SetIsShareInspectionModal}
        />
      </div>
    </div>
  );
};

export default AdminDashBoard;
