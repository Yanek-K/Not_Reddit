import React from "react";
import About from "../AboutSub";
import Advertisement1 from "../Advertisment-1";
import Advertisement2 from "../Advertisment-2";
import TopCommunities from "../TopCommunities";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TopCommunities />
      <Advertisement1 />
      <About />
      <Advertisement2 />
    </div>
  );
};

export default Sidebar;
