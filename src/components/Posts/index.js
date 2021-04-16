import React, { useEffect, useState } from "react";
import "./index.css";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EcoIcon from "@material-ui/icons/Eco";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
// import ShowMoreText from "react-show-more-text";

// import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getSearch } from "../../redux/actions/searchActions";
import moment from "moment";

const mapState = (state) => ({
  about: state.search.about,
});

const Posts = ({ post }) => {
  const { about } = useSelector(mapState);
  return (
    <div className="feed">
      <div className="feed__center">
        <div className="feed__center__header">
          {about.data.icon_img ? (
            <img
              src={about.data.icon_img}
              className="feed__searchIcon"
              alt="icon"
            />
          ) : (
            <EcoIcon style={{ fill: "#457b9dff" }} />
          )}
          <p className="feed__author">{post.data.author}</p>
          <p>Title</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
