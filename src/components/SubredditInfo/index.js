import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

//MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const mapState = (state) => ({
  posts: state.search.posts,
  about: state.search.about,
});

const SubredditInfo = () => {
  const { posts, about } = useSelector(mapState);
  return (
    <div className="card">
      {posts.data && about.data ? (
        <div className="content">
          {about.data.icon_img !== "" ? (
            <img src={about.data.icon_img} className="subredditImg" />
          ) : (
            <img src={about.data.header_img} />
          )}
          <div className="info">
            <h3>{about.data.title}</h3>
            <p variant="body2">
              {about.data.display_name_prefixed} • {about.data.subscribers}{" "}
              Subscribers
            </p>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default SubredditInfo;
