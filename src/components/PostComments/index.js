import React from "react";
import "./index.css";
import moment from "moment";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShowMoreText from "react-show-more-text";

const PostComments = ({ comment }) => {
  const time = new Date(0).setUTCSeconds(comment.created_utc);
  return (
    <div className="Comment">
      <div className="Comment__header">
        <p className="Comment__author"> Posted By {comment.author}</p>
        <div className="Comment__info">
          <div className="Comment__icon"></div>
          <div className="Comment__icon">
            <BorderColorIcon style={{ fontSize: 15, color: "#7f79c0" }} />
            <p className="Comment__time">{moment(time).fromNow()}</p>
            <ThumbUpAltIcon style={{ fontSize: 15, color: "#7f79c0" }} />
            <p>{comment.ups}</p>
          </div>
        </div>
      </div>
      <div className="Comment__body">
        <ShowMoreText lines={3} anchorClass="showMoreText" expanded={false}>
          <div>{comment.body}</div>
        </ShowMoreText>
      </div>
    </div>
  );
};

export default PostComments;
