import React, { useState } from "react";
import "./UserPage.css";
import TopNavBar from "../component/TopNavBar";
const UserPage = () => {
    const selectStyle = {
      backgroundColor: "#8A8A8A",
      borderRadius: "4px 4px 0px 0px",
      color: "#FFFFFF"
    };
    const [selectOptiom, setSelectOptiom] = useState("Ownwer");
  return (
    <div>
      <TopNavBar />
      <div className="userpage-top-conatiner">
        <div className="userpage-top-conatiner-select-menu">
          <button
            style={selectOptiom === "Ownwer" ? selectStyle : {}}
            onClick={() => {
              setSelectOptiom("Ownwer");
            }}
          >
            Ownwer
          </button>
          <button
            style={selectOptiom === "Cleaner" ? selectStyle : {}}
            onClick={() => {
              setSelectOptiom("Cleaner");
            }}
          >
            Cleaner
          </button>
          <button
            style={selectOptiom === "Guest" ? selectStyle : {}}
            onClick={() => {
              setSelectOptiom("Guest");
            }}
          >
            Guest
          </button>
        </div>
      </div>
      <div className="userpage-top-conatiner-utility">
        <h1>OnwerList</h1>
        <div className="userpage-search-filter-container">  
        </div>
      </div>
    </div>
  );
};

export default UserPage;
