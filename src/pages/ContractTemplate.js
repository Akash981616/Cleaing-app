import React from "react";
import InputBar from "../component/InputBar";
import { ContractTemplateData } from "../data/ContractTemplateData.js";
import "./ContractTemplate.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import FadeButtonGrop from "../component/button/FadeButtonGrop";
const ContractTemplate = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="contract-template-form">
        {ContractTemplateData.map((e) => {
          return (
            <InputBar
              key={e.id}
              type={e.type}
              placeholder={e.placeholder}
              inputHeading={e.inputHeading}
              size={e.size}
            />
          );
        })}
      </div>
      <Accordion
        style={{
          background: "#f9f9f9",
          borderRadius: "5px",
          border: "1px",
          borderColor: "#e2e2e2",
          marginTop: "40px",
          padding: "0px 20px 0px 20px",
        }}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h1
            className="accordin-header"
            style={{
              background: "#f9f9f9",
              borderRadius: "5px",
              border: "1px",
              borderColor: "#e2e2e2",
            }}
          >
            Pick Which Cancelllation Policy you want
          </h1>
        </AccordionSummary>
        <div className="accordin-details-container">
          <Checkbox
            style={{ color: "grey" }}
            inputProps={{
              "aria-label": "Checkbox A",
            }}
          />
          <label>Strict Cancelllation Policy</label>
        </div>
        <div className="accordin-details-container">
          <Checkbox
            style={{ color: "grey" }}
            inputProps={{
              "aria-label": "Checkbox A",
            }}
          />
          <label>Custom cancellation policy</label>
        </div>
        <div className="accordin-third-container">
          <label>
            Guest receive a full refund for cancellations made within 48 hours
            of booking, if the check-in date is at least 14 days away. 50%
            refund for cancellations made at least 7 days before check-in. No
            refunds for cancellations made within 7 days of check-in
          </label>
        </div>
      </Accordion>
      <Accordion
        style={{
          background: "#f9f9f9",
          borderRadius: "5px",
          border: "1px",
          borderColor: "#e2e2e2",
          marginTop: "40px",
          padding: "0px 20px 0px 20px",
        }}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h1
            className="accordin-header"
            style={{
              background: "#f9f9f9",
              borderRadius: "5px",
              border: "1px",
              borderColor: "#e2e2e2",
            }}
          >
            Insurances
          </h1>
        </AccordionSummary>
        <div className="accordin-details-container">
          <Checkbox
            style={{ color: "grey" }}
            inputProps={{
              "aria-label": "Checkbox A",
            }}
          />
          <label>Strict Cancelllation Policy</label>
        </div>
        <div className="accordin-details-container">
          <Checkbox
            style={{ color: "grey" }}
            inputProps={{
              "aria-label": "Checkbox A",
            }}
          />
          <label>Custom cancellation policy</label>
        </div>
        <div className="accordin-third-container">
          <label>
            Guest receive a full refund for cancellations made within 48 hours
            of booking, if the check-in date is at least 14 days away. 50%
            refund for cancellations made at least 7 days before check-in. No
            refunds for cancellations made within 7 days of check-in
          </label>
        </div>
      </Accordion>
      <Accordion
        style={{
          background: "#f9f9f9",
          borderRadius: "5px",
          border: "1px",
          borderColor: "#e2e2e2",
          marginTop: "40px",
          padding: "0px 20px 0px 20px",
        }}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h1
            className="accordin-header"
            style={{
              background: "#f9f9f9",
              borderRadius: "5px",
              border: "1px",
              borderColor: "#e2e2e2",
            }}
          >
            Add an additional Information
          </h1>
        </AccordionSummary>
        <div className="accordin-details-container">
          <Checkbox
            style={{ color: "grey" }}
            inputProps={{
              "aria-label": "Checkbox A",
            }}
          />
          <label>Strict Cancelllation Policy</label>
        </div>
        <div className="accordin-details-container">
          <Checkbox
            style={{ color: "grey" }}
            inputProps={{
              "aria-label": "Checkbox A",
            }}
          />
          <label>Custom cancellation policy</label>
        </div>
        <div className="accordin-third-container">
          <label>
            Guest receive a full refund for cancellations made within 48 hours
            of booking, if the check-in date is at least 14 days away. 50%
            refund for cancellations made at least 7 days before check-in. No
            refunds for cancellations made within 7 days of check-in
          </label>
        </div>
      </Accordion>
      <FadeButtonGrop />
      <Accordion
        style={{
          background: "#f9f9f9",
          borderRadius: "5px",
          border: "1px",
          borderColor: "#e2e2e2",
          marginTop: "40px",
          padding: "0px 20px 0px 20px",
        }}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h1
            className="accordin-header"
            style={{
              background: "#f9f9f9",
              borderRadius: "5px",
              border: "1px",
              borderColor: "#e2e2e2",
            }}
          >
            Add an additional Information
          </h1>
        </AccordionSummary>
        <div className="accordin-details-container">
          <Checkbox
            style={{ color: "grey" }}
            inputProps={{
              "aria-label": "Checkbox A",
            }}
          />
          <label>Strict Cancelllation Policy</label>
        </div>
        <div className="accordin-details-container">
          <Checkbox
            style={{ color: "grey" }}
            inputProps={{
              "aria-label": "Checkbox A",
            }}
          />
          <label>Custom cancellation policy</label>
        </div>
        <div className="accordin-third-container">
          <label>
            Guest receive a full refund for cancellations made within 48 hours
            of booking, if the check-in date is at least 14 days away. 50%
            refund for cancellations made at least 7 days before check-in. No
            refunds for cancellations made within 7 days of check-in
          </label>
        </div>
      </Accordion>
    </>
  );
};

export default ContractTemplate;
