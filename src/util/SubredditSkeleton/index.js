import React from "react";
import "./index.css";

const SubredditSkeleton = () => {
  return (
    <div className="wrap">
      <div className="image" />
      <div classname="content">
        <div classname="title" />
        <div classname="info" />
      </div>
    </div>
  );
};

export default SubredditSkeleton;
