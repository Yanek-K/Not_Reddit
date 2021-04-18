import React from "react";
import "./index.css";

//Assets
import Camera from "./../../assets/Ad1.png";

const Advertisement1 = () => {
  return (
    <div className="ad1">
      <div className="ad1__header">Advertisment</div>
      <div className="ad1__main">
        <img src={Camera} alt="Premium Cameras" className="ad1__img" />
      </div>
    </div>
  );
};

export default Advertisement1;
