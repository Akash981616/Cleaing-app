import React from "react";
import "./ContractList.scss";
import ShareIcon from "../assets/ShareIcon.svg";
import userDeleteIcon from "../assets/userDeleteIcon.svg";
import DownloadIcon from "../assets/DownloadIcon.svg";
import userEditIcon from "../assets/userEditIcon.svg";
import Rating from "@mui/material/Rating";
const ContractList = ({ col1, col2, col3, col4, col5, header }) => {
  return (
    <div className={header ? "list-container" : "list-container-list"}>
      <div className="list-name-container">
        <h4>{col1}</h4>
      </div>
      <div
        className={
          header ? "list-phone-container" : "list-phone-container-list"
        }
      >
        <h4>{col2}</h4>
      </div>
      <div
        className={
          header ? "list-email-container" : "list-email-container-list"
        }
      >
        <h4>{col3}</h4>
      </div>
      <div
        className={
          header ? "list-property-container" : "list-property-container-list"
        }
      >
        <h4>{col4}</h4>
      </div>
      {col5 && (
        <div
          className={
            header ? "list-property-container" : "list-city-container-list"
          }
        >
          <h4>{col5}</h4>
        </div>
      )}

      <div className="list-action-container-rating">
        {header ? (
          <h4>Rating</h4>
        ) : (
          <div className="userPage-curd-operation">
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
          </div>
        )}
      </div>
      <div className="list-action-container-contract">
        {header ? (
          <h4>Action</h4>
        ) : (
          <div className="userPage-curd-operation">
            <div className="userPage-curd-operation-div">
              <img src={DownloadIcon} alt="error"></img>
            </div>

            <div className="userPage-curd-operation-div">
              <img src={ShareIcon} alt="error"></img>
            </div>
            <div className="userPage-curd-operation-div">
              <img src={userEditIcon} alt="error"></img>
            </div>

            <div className="userPage-curd-operation-div-white">
              <img src={userDeleteIcon} alt="error"></img>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractList;
