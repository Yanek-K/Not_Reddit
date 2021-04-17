import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import BorderColorIcon from "@material-ui/icons/BorderColor";

import moment from "moment";
import PostComments from "../PostComments";
import { getSearch } from "../../redux/actions/searchActions";

const mapState = (state) => ({
  item: state.post.item,
  loading: state.post.loading,
});

const SinglePost = () => {
  const { item, loading } = useSelector(mapState);
  const [postInfo, setPostInfo] = useState("");
  const [commentInfo, setCommentInfo] = useState([]);
  const time = new Date(0).setUTCSeconds(postInfo.created_utc);
  const dispatch = useDispatch();

  useEffect(() => {
    if (item) {
      setPostInfo(item[0].data.children[0].data);
      setCommentInfo(item[1].data.children);
    }
    console.log(commentInfo);
    console.log(postInfo);
    return () => {
      setPostInfo("");
      setCommentInfo([]);
    };
  }, [item]);

  return (
    <div className="postPage">
      <div className="post__info">
        <div className="post__header">
          <p>Author: {postInfo.author}</p>
          <h4>{postInfo.title}</h4>
        </div>
        <div className="post__content">
          {postInfo.isVideo ? (
            ""
          ) : (
            <img src={postInfo.url} alt="" className="post__image" />
          )}
        </div>
        <div className="post__footer">
          <div className="post__footer__icon">
            <ChatBubbleIcon style={{ fontSize: 15, color: "#7f79c0" }} />
            <p>{postInfo.num_comments}</p>
          </div>
          <div className="post__footer__icon">
            <ThumbUpAltIcon style={{ fontSize: 15, color: "#7f79c0" }} />
            <p>{postInfo.ups}</p>
          </div>
          <div className="post__footer__icon">
            <BorderColorIcon style={{ fontSize: 15, color: "#7f79c0" }} />

            <p>{moment(time).fromNow()}</p>
          </div>
        </div>
      </div>
      <div className="post__comments">
        <p>Comments...</p>
        {commentInfo &&
          commentInfo.map((comment) => <PostComments comment={comment.data} />)}
      </div>
    </div>
  );
};

export default SinglePost;
