import React from "react";
import InputBar from "../component/InputBar";
import { createOnwerSchema } from "../data/createOnwerSchema";
import Slider from "@mui/material/Slider";
const CreateOwnerForm = () => {
  return (
    <div>
      <hr className="seprator" />
      <div className="create-user-form-types">
        <h1>Create Owner</h1>
        <h1>Create Property</h1>
        <h1>Create Property Item</h1>
        <h1>Create Contract Owner</h1>
      </div>
      <Slider 
        style={{ color: "grey" }}
        size="small"
        defaultValue={30}
      />
      <div className="create-service-form-container">
        <form>
          <div className="form-container-create-container ">
            {createOnwerSchema.map((schema) => {
              return (
                <InputBar
                  key={schema.key}
                  type={schema.type}
                  placeholder={schema.placeholder}
                  inputHeading={schema.inputHeading}
                />
              );
            })}
          </div>
          <div className="service-input-description-container">
            <p>Detais</p>
            <textarea placeholder="Add some deatails..."></textarea>
          </div>
        </form>
        <div className="service-input-button-container">
          <button>Save</button>
          <button className="service-fade-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateOwnerForm;
