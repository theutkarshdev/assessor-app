import React from "react";

const Layout = ({ children }) => {
  const isMobile = window.innerWidth <= 2768;
  return <main>{isMobile ? <main className="main-screen-layout"><div className="mob-app-container">{children}</div></main> : <p>Only for mobile devices</p>}</main>;
};

export default Layout;
