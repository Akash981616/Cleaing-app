import React from "react";
import "./OnwerList.scss";
import userEditIcon from "../assets/userEditIcon.svg";
import userDeleteIcon from "../assets/userDeleteIcon.svg";
import EyeAction from "../assets/EyeAction.svg";
const OnwerList = ({
  name,
  phoneno,
  property,
  email,
  document,
  city,
  header,
  ownerType,
  type,
  contractType,
  status,
}) => {
  return (
    <div className={header ? "list-container" : "list-container-list"}>
      <div className="list-name-container">
        <h4>{name}</h4>
      </div>
      <div
        className={
          header ? "list-phone-container" : "list-phone-container-list"
        }
      >
        <h4>{phoneno}</h4>
      </div>
      <div
        className={
          header ? "list-email-container" : "list-email-container-list"
        }
      >
        <h4>{email}</h4>
      </div>
      <div className="list-name-container">
        <h4>{ownerType}</h4>
      </div>
      <div
        className={
          header ? "list-property-container" : "list-property-container-list"
        }
      >
        <h4>{property}</h4>
      </div>
      <div className="list-name-container">
        <h4>{contractType}</h4>
      </div>

      <div
        className={
          header ? "list-property-container" : "list-city-container-list"
        }
      >
        <h4>{city}</h4>
      </div>
      <div
        className={
          header ? "list-document-container" : "list-document-container-list"
        }
      >
        <h4>{status}</h4>
      </div>
      <div className="list-action-container">
        {header ? (
          <h4>Action</h4>
        ) : (
          <div className="userPage-curd-operation">
            {type === "Guest" && (
              <div className="userPage-curd-operation-div">
                <img src={userEditIcon} alt="error"></img>
              </div>
            )}
            <div className="userPage-curd-operation-div">
              <img src={EyeAction} alt="error"></img>
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

export default OnwerList;
