import React, { useState } from "react";
import UserSearchIcon from "../assets/UserSearchIcon.svg";
import TopNavBar from "../component/TopNavBar";
import DownArrow from "../assets/downArrow.svg";
import "./UserPage.scss";
import plusCircleICon from "../assets/plusCircle.svg";
import List from "../component/List";
import {data} from "../data/listData.js"
const UserPage = () => {
 
  const selectStyle = {
    backgroundColor: "#8A8A8A",
    borderRadius: "4px 4px 0px 0px",
    color: "#FFFFFF",
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
        <h1>Onwer List</h1>
        <div className="userpage-search-filter-container">
          <div className="userpage-search-container">
            <input type="text" placeholder="Search"></input>
            <img src={UserSearchIcon} alt="error"></img>
          </div>
          <div className="userpage-filter-container">
            <h3>Filter</h3>
            <img src={DownArrow} alt="error"></img>
          </div>
          <button className="create-user-button">
            <img src={plusCircleICon} alt="error"></img> <h3>Create User</h3>
          </button>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <List
          name={"Name"}
          phoneno={"Phone no."}
          property={"Property"}
          email={"Email"}
          city={"City"}
          document={"Docment"}
          header={true}
        />
      </div>
      <div className="userpage-list-container">
        {data.map((e) => {
          return (
            <List key={e.id}
              name={e.name}
              phoneno={e.phoneno}
              property={e.property}
              email={e.email}
              city={e.city}
              document={e.document}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserPage;
