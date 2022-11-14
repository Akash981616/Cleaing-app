import React from "react";
import InputBar from "../component/InputBar";
import { ViewFormSchema } from "../data/ViewFormSchema";
const ViewReport = () => {
  return (
    <div className="create-service-form-container">
      <h1 className="create-service-form-header">View Report</h1>
      <form>
        <div className="form-container-create-container ">
          {ViewFormSchema.map((schema) => {
            return (
              <InputBar
                key={schema.key}
                type={schema.type}
                placeholder={schema.placeholder}
                inputHeading={schema.inputHeading}
              />
            );
          })}
          <div className="service-input-description-container">
            <p>Document Image</p>
            <div className="view-report-image-container">
              <img
                src="https://media.cntraveler.com/photos/59272dbe2b0ad1382eadf7b0/16:9/w_2560%2Cc_limit/GettyImages-88997497.jpg"
                alt="error"
              ></img>
              <img
                src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
                alt="error"
              ></img>
              <img
                src="https://media.cntraveler.com/photos/59272dbe2b0ad1382eadf7b0/16:9/w_2560%2Cc_limit/GettyImages-88997497.jpg"
                alt="error"
              ></img>
            </div>
          </div>
        </div>
        <div className="service-input-button-container">
          <button>Save</button>
          <button className="service-fade-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ViewReport;
