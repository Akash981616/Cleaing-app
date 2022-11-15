import React from "react";

import InputBar from "../component/InputBar";
import InspectionCard from "../component/InspectionCard";
import { ContractTemplateData } from "../data/ContractTemplateData";
import { createCleanerSchema } from "../data/createCleanerSchema";

const CreateInpectionForm = () => {
  return (
    <>
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
      <div style={{ margin: "20px 0px" }}>
        <InspectionCard />
      </div>
      ;
    </>
  );
};

export default CreateInpectionForm;
