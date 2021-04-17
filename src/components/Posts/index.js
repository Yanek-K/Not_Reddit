import React, { useEffect, useState } from "react";
import "./index.css";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EcoIcon from "@material-ui/icons/Eco";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShowMoreText from "react-show-more-text";

import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getSearch } from "../../redux/actions/searchActions";
import moment from "moment";
import { postAction } from "../../redux/actions/postActions";

const mapState = (state) => ({
  about: state.search.about,
});

const Posts = ({ post }) => {
  const { about } = useSelector(mapState);
  const time = new Date(0).setUTCSeconds(post.data.created_utc);
  const history = useHistory();
  const [subreddit, setSubreddit] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (subreddit) {
      dispatch(postAction(subreddit));
      history.push("/post");
    }
    return () => {
      setSubreddit("");
      // dispatch(postAction(""));
    };
  }, [dispatch, subreddit]);

  return (
    <div className="feed" onClick={() => setSubreddit(post.data.permalink)}>
      <div className="feed__center">
        <div className="feed__center__header">
          {about.data.icon_img ? (
            <img
              src={about.data.icon_img}
              className="feed__searchIcon"
              alt="icon"
            />
          ) : (
            <EcoIcon style={{ fill: "#7f79c0" }} />
          )}
          <p className="feed__author">Posted by {post.data.author}</p>
        </div>
        <div className="feed__content">
          {post.data.title}
          <div className="feed__content__showmore">
            <ShowMoreText lines={3} anchorClass="showMoreText" expanded={false}>
              <p>{post.data.selftext}</p>
            </ShowMoreText>
          </div>
        </div>
        <div className="feed__media">
          {post.data.is_video ? (
            <div className="feed__video">
              <ReactPlayer
                controls={true}
                width="100%"
                height="100%"
                volume="1"
                url={post.data.media.reddit_video.fallback_url}
              />
            </div>
          ) : (
            <img
              className={
                post.data.url.match(/.png|.jpg|.jpeg|v.redd/)
                  ? "feed__image"
                  : null
              }
              src={
                post.data.url.match(/.png|.jpg|.jpeg|v.redd/)
                  ? post.data.url
                  : ""
              }
              alt=""
            />
          )}
        </div>
        <div className="feed__footer">
          <div className="feed__footer__item">
            <ChatBubbleIcon
              color="action"
              style={{ fontSize: 15, color: "#7f79c0" }}
            />
            <p className="feed__footer__text">
              {post.data.num_comments} Comments
            </p>
          </div>
          <div className="feed__footer__item">
            <ThumbUpAltIcon style={{ fontSize: 15, color: "#7f79c0" }} />
            <p className="feed__footer__text">{post.data.ups}</p>
          </div>
          <div className="feed__footer__item">
            <BorderColorIcon
              color="action"
              style={{ fontSize: 15, color: "#7f79c0" }}
            />{" "}
            <p className="feed__footer__text">{moment(time).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
