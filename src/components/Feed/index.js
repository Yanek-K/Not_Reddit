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

import Post from "./../Posts";

const mapState = (state) => ({
  posts: state.search.posts,
});

const Feed = ({}) => {
  const { posts } = useSelector(mapState);

  return (
    <div>
      {posts.data ? (
        posts.data.children.map((post) => (
          <Post post={post} key={post.postId} />
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Feed;
