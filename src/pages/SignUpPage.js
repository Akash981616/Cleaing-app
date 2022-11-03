import React from "react";
import { Link, NavLink } from "react-router-dom";
import EyeIcon from "../assets/fi_eye-off.svg";
import "./SignUpPage.css";
const SingupPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="LoginPageContainer">
      {/* this is form container */}
      <div className="form_container">
        <div
          style={{
            marginTop: "30px",
            height: "130px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          className="Home-icon-container"
        >
          <h1
            style={{
              fontSize: "40px",
              fontFamily: "Bebas Neue",
              color: "#262626",
              fontWeight: 400,
            }}
          >
            create account
          </h1>
        </div>
        <div className="form-heading-input">
          <h4>Username</h4>
          <input type="text" placeholder="Enter Username" />
        </div>
        <div className="form-heading-input">
          <h4>Enter Your Email</h4>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div className="form-heading-input">
          <h4>Phone</h4>
          <input type="text" placeholder="Enter Phonenumber" />
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
            className="password-showIcon-eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            style={{ top: "542px", left: "565px", position: "absolute" }}
            src={EyeIcon}
            alt="error"
          />
        </div>

        <div className="button-container">
          <button>Sign Up &#8594;</button>
        </div>
        <div>
          <h4>
            Already have an Account ? <Link to="/">Login</Link>
          </h4>
        </div>
        <div className="form-footer">
          <h4>&copy; 2022 All Right Reserved</h4>
        </div>
      </div>
      {/* this is second container */}
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

export default SingupPage;
