import React, { useEffect, useState } from "react";
import "./Login.scss";
import HomeIcon from "../assets/VectorhomeIcon.png";
import closeEyeIcon from "../assets/fi_eye-off.svg";
import openEyeIcon from "../assets/EyeIcon.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const router = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {}, []);

  return (
    <div className="LoginPageContainer">
      {/* this is form container */}
      <div className="form_container">
        <div className="Home-icon-container">
          <img src={HomeIcon} alt="error"></img>
          <h1>NGARNA 310</h1>
        </div>
        <div className="Cleaning-app-heading">
          <h1>Welcome to Cleaning App</h1>
        </div>
        <div className="form-heading-input">
          <h4>Enter Your Email</h4>
          <input type="email" placeholder="Enter Email" />
        </div>
        {/* <div classsName="mid-or-bar"></div> */}
        <div className="form-heading-input">
          <h4>Password</h4>
          <input
            className="password-showIcon"
            type={showPassword === true ? "text" : "password"}
            placeholder="Enter Password"
          />
          <img
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="eye-icon"
            src={closeEyeIcon}
            alt="error"
          />
          <div className="forget-password-checkbox">
            <input type="checkbox" />
            <p>Forget Password</p>
          </div>
        </div>

        <div className="button-container">
          <button
            onClick={(e) => {
              router("/admin-dashboard");
            }}
          >
            Sign In &#8594;
          </button>
        </div>
        <div>
          <h4>
            Don't have an account yet ? <Link to="/signup">SignUp</Link>
          </h4>
        </div>
        <div className="form-footer">
          <h4>&copy; 2022 All Right Reserved</h4>
        </div>
      </div>
      {/*  second container */}
      <div className="right-side-container">
        <div className="text-container">
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
