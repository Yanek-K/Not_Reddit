import React from "react";
import "./index.css";

//Assets
import SmallTalk from "./../../assets/Ad2.png";

const Advertisement2 = () => {
  return (
    <div className="ad2">
      <div className="ad2__header">Advertisment</div>
      <div className="ad2__main">
        <img src={SmallTalk} alt="Premium Cameras" className="ad2__img" />
      </div>
    </div>
  );
};

export default Advertisement2;
