import React from "react";
import "./index.css";

//Components
import Advertisement1 from "../Advertisment-1";
import Advertisement2 from "../Advertisment-2";
import TopCommunities from "../TopCommunities";
import About from "../AboutSub";

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
