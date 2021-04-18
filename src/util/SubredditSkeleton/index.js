import React from "react";
import "./index.css";

const SubredditSkeleton = () => {
  return (
    <div className="wrap">
      <div className="wrap__image" />
      <div className="wrap__content">
        <div className="wrap__image2" />
        <div className="wrap__image2" />
      </div>
    </div>
  );
};

export default SubredditSkeleton;
