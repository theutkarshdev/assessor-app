import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Layout from "./Layout";
import CircleCut from "../images/circle-cut.png";
import ArrowLeft from "../images/svg/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const divStyle = {
    backgroundImage: `url(${CircleCut})`,
    backgroundPosition: "top right",
    backgroundRepeat: "no-repeat",
  };
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="login-screen-container">
        <div className="login-screen-wrapper">
          <div style={divStyle} className="login-screen-header">
            <img onClick={() => navigate(-1)} src={ArrowLeft} />
            <h2>
              Log in to your <br />
              Account
            </h2>
            <p>Enter your credential to continue.</p>
          </div>

          <div className="login-screen-form-wrapper">
            <form>
              <div className="login-form-box">
                <input type="text" placeholder="Assessor ID" />
              </div>
              <div className="login-form-box">
                <input type="text" placeholder="Password" />
              </div>
              <div className="login-form-checkbox">
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#ADADAD",
                        "&.Mui-checked": {
                          color: "#13B8FF",
                        },
                      }}
                    />
                  }
                  label={<span style={{ color: "#ADADAD", fontSize: 14 }}>Stay logged in ?</span>}
                />

                <p>Forgot Password</p>
              </div>
              <button type="button" onClick={() => navigate("/home")}>
                Log in
              </button>
            </form>
            <div className="drawer-line"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
