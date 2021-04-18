import React from "react";
import "./index.css";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const PostSkeleton = () => {
  const content = Array.from({ length: 10 }).map((item, index) => (
    <div className="main__Skeleton" key={index}>
      <div className="header__Skeleton">
        <div className="header__author" />
        <div className="header__title" />
      </div>
      <div className="content" />
      <div className="footer">
        <div className="footer__icon">
          <ChatBubbleIcon style={{ fontSize: 15, color: "#7f79c0" }} />
        </div>
        <div className="footer__icon">
          <ThumbUpAltIcon style={{ fontSize: 15, color: "#7f79c0" }} />
        </div>
        <div className="footer__icon">
          <BorderColorIcon style={{ fontSize: 15, color: "#7f79c0" }} />
        </div>
      </div>
    </div>
  ));
  return <div className="wrap__Skeleton">{content}</div>;
};

export default PostSkeleton;
