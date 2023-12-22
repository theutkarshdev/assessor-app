import React, { useState } from "react";
import Layout from "./Layout";
import DrawerAppBar from "../components/DrawerAppBar";
import TopCardImg from "../images/top-card.png";
import CardImage from "../images/dummy-img.png";
import AnalogClock from "../components/AnalogClock";
import BottomDrawer from "../components/BottomDrawer";

const Home = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerOpen(open);
  };

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
            <button onClick={toggleDrawer(true)}> View Batch</button>
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
      <BottomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}>
        <div className="home-view-batch">
          <div className="view-top-map">
            <div>
              <h3>Ascensive Educare Limited</h3>
              <p>142 &143, Mahaveer Nagar, Mandideep, Bhopal, Madhya Pradesh 462046</p>
            </div>
            <div>
              <div style={{ width: "100%",border: "1px solid #ccc", overflow: "hidden", borderRadius: "15px", height: 120 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.026918712096!2d77.18461217549849!3d28.56895437569952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e7a852350c1%3A0xffde863ff786f13c!2sRadiant%20Infonet%20Private%20Limited!5e0!3m2!1sen!2sin!4v1703071949705!5m2!1sen!2sin"
                  width={"100%"}
                  height={300}
                  style={{ border: 0, marginTop: "-80px" }}
                ></iframe>
              </div>
            </div>
          </div>
          <button>Proceed</button>
          <div className="btach-detail-list">
            <ul>
              <li>
                <h4>Batch ID</h4>
                <p>TC_00216824</p>
              </li>
              <li>
                <h4>Batch ID</h4>
                <p>TC_00216824</p>
              </li>
              <li>
                <h4>Batch ID</h4>
                <p>TC_00216824</p>
              </li>
              <li>
                <h4>Batch ID</h4>
                <p>TC_00216824</p>
              </li>
              <li>
                <h4>Batch ID</h4>
                <p>TC_00216824</p>
              </li>
              <li>
                <h4>Batch ID</h4>
                <p>TC_00216824</p>
              </li>
              <li>
                <h4>Batch ID</h4>
                <p>TC_00216824</p>
              </li>
              <li>
                <h4>Batch ID</h4>
                <p>TC_00216824</p>
              </li>
              <li>
                <h4>Batch ID</h4>
                <p>TC_00216824</p>
              </li>
            </ul>
          </div>
        </div>
      </BottomDrawer>
    </Layout>
  );
};

export default Home;
