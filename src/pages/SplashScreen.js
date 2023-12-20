import React from "react";
import Layout from "./Layout";
import SplashImg from "../images/start-bg.png";
import WhiteLogo from "../images/white-logo.png";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const divStyle = {
    backgroundImage: `url(${SplashImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const navigate = useNavigate();
  return (
    <Layout>
      <div className="splash-screen-container" style={divStyle}>
        <img src={WhiteLogo} />
        <div className="splash-screen-wrapper">
          <div className="splash-screen-inner-card">
            <h2>Get Better Talent Assessment Now</h2>
            <p>From Instinct to Insights : Make Powerful and Precise People Decisions</p>
            <button onClick={()=>navigate('/login')}>Log in</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SplashScreen;
