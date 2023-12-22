import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const BottomDrawer = ({ isDrawerOpen, toggleDrawer, children }) => {
  return (
    <div>
      <SwipeableDrawer
        className="bottom-drawer"
        anchor="bottom"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div style={{ height: "40px" }}>
          <div
            style={{
              width: "100px",
              height: "4px",
              position: "absolute",
              top: "15px",
              left: "calc(50% - 50px)",
              background: "#ddd",
              borderRadius: "20px",
            }}
          ></div>
        </div>
        {children}
      </SwipeableDrawer>
    </div>
  );
};

export default BottomDrawer;
