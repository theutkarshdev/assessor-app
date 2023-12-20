import React from "react";
import Layout from "./Layout";
import DrawerAppBar from "../components/DrawerAppBar";
import TopCardImg from "../images/top-card.png";
import CardImage from "../images/dummy-img.png";
import AnalogClock from "../components/AnalogClock";

const Home = () => {
  return (
    <Layout>
      <DrawerAppBar />
      <div className="home-container">
        <div className="home-header">
          <h2>Hello Ankit</h2>
          <p>Have a nice day !</p>
        </div>
        <img width={"100%"} src={TopCardImg} />
        <div className="home-inner-status-card">
          <div className="home-clock">
            <AnalogClock />
          </div>
          <div className="home-date">
            <h3>Thursday </h3>
            <p>5 October 2022</p>
          </div>
        </div>

        <div className="home-upcoming-batches">
          <h3>Upcoming Batches</h3>
          <div className="card">
            <div className="card-top">
              <img width={"100%"} src={CardImage} />
              <div className="card-description">
                <h3>Assistant Chef-(2329623)</h3>
                <p>Batch ID: TC_00216824</p>
                <p>Batch Type: Regular</p>
                <p>09 Oct - 10 Oct</p>
              </div>
            </div>
            <button> View Batch</button>
          </div>

          <div className="card">
            <div className="card-top">
              <img width={"100%"} src={CardImage} />
              <div className="card-description">
                <h3>Assistant Chef-(2329623)</h3>
                <p>Batch ID: TC_00216824</p>
                <p>Batch Type: Regular</p>
                <p>09 Oct - 10 Oct</p>
              </div>
            </div>
            <button> View Batch</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
