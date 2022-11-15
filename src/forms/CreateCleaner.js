import React from "react";
import FadeButtonGrop from "../component/button/FadeButtonGrop";
import InputBar from "../component/InputBar";
import { createCleanerSchema } from "../data/createCleanerSchema";
import UploadImageIcon from "../assets/UploadImageIcon.svg";
const CreateCleaner = () => {
  return (
    <div className="create-service-form-container">
      <form>
        <div className="form-container-create-container ">
          {createCleanerSchema.map((schema) => {
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
        <div className="cleaner-upload-image">
          <h1>Document Image</h1>
          <div className="cleaner-upload-image-container">
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="error"
            ></img>
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="error"
            ></img>
            <label class="custom-file-upload">
              <img src={UploadImageIcon} alt="error"></img>
              <input type="file" />
              Upload Image
            </label>
          </div>
        </div>
      </form>
      <div style={{ marginTop: "80px" }}></div>
      <FadeButtonGrop />
    </div>
  );
};

export default CreateCleaner;
