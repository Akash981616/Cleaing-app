import React from "react";
import "./CreateInpectionForm.scss";
import InputBar from "../component/InputBar";
import Checkbox from "@mui/material/Checkbox";
import InspectionCard from "../component/InspectionCard";
import { ContractTemplateData } from "../data/ContractTemplateData";
import FadeButtonGrop from "../component/button/FadeButtonGrop";
const data = [
  {
    id: Math.random(1),
    floor: "Floor 1",
    type: "Bathroom",
    msg: "invalid",
  },
  {
    id: Math.random(1),
    floor: "Floor 2",
    type: "Walkin closet",
    msg: "fail",
  },
  {
    id: Math.random(1),
    floor: "Floor 1",
    type: "Kitchen",
    msg: "correct",
  },
];

const CreateInpectionForm = () => {
  
  return (
    <div className="scroll-container-all">
      <h1
        style={{ fontFamily: "Poppins", fontSize: "21px", fontWeight: "500" }}
      >
        Create Inspection - Cleaners
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {ContractTemplateData.map((schema) => {
          return (
            <InputBar
              key={schema.key}
              type={schema.type}
              size={schema.size}
              placeholder={schema.placeholder}
              inputHeading={schema.inputHeading}
            />
          );
        })}
      </div>
      <div class="horizontal-scroll-container">
        {data.map((c) => {
          return (
            <InspectionCard
              key={c.id}
              floor={c.floor}
              type={c.type}
              msg={c.msg}
            />
          );
        })}
        <InspectionCard addCard={true} />
      </div>
      <div className="inspection-item-container">
        <div className="inspection-item">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/307-primary-bedroom-1656015778.jpg"
            alt="error"
          ></img>
          <div>
            <header>Bathroom Items</header>
            <div className="inspection-item-list-container-div">
              <div className="inspection-item-list-container">
                <div className="inspection-item-list">
                  <Checkbox
                    size="small"
                    style={{ color: "grey" }}
                    inputProps={{
                      "aria-label": "Checkbox A",
                    }}
                  />
                  <label>Item 1: Mirror</label>
                </div>
                <div className="inspection-item-list">
                  <Checkbox
                    size="small"
                    style={{ color: "grey" }}
                    inputProps={{
                      "aria-label": "Checkbox A",
                    }}
                  />
                  <label>Item 1: Mirror</label>
                </div>
                <div className="inspection-item-list">
                  <Checkbox
                    size="small"
                    style={{ color: "grey" }}
                    inputProps={{
                      "aria-label": "Checkbox A",
                    }}
                  />
                  <label>Item 1: Mirror</label>
                </div>
              </div>
              <div className="inspection-item-list-container">
                <div className="inspection-item-list">
                  <Checkbox
                    size="small"
                    style={{ color: "grey" }}
                    inputProps={{
                      "aria-label": "Checkbox A",
                    }}
                  />
                  <label>Item 1: Mirror</label>
                </div>
                <div className="inspection-item-list">
                  <Checkbox
                    size="small"
                    style={{ color: "grey" }}
                    inputProps={{
                      "aria-label": "Checkbox A",
                    }}
                  />
                  <label>Item 1: Mirror</label>
                </div>
                <div className="inspection-item-list">
                  <Checkbox
                    size="small"
                    style={{ color: "grey" }}
                    inputProps={{
                      "aria-label": "Checkbox A",
                    }}
                  />
                  <label>Item 1: Mirror</label>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <header>Items Images</header>
      <div className="item-images-container">
        {Array.apply(null, Array(10)).map(function (x, i) {
          return (
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg"
              alt="error"
            ></img>
          );
        })}
      </div>
      <div className="service-input-description-container">
        <p>Comment</p>
        <textarea placeholder="Add some comment ..."></textarea>
      </div>
      <FadeButtonGrop />
    </div>
  );
};

export default CreateInpectionForm;
