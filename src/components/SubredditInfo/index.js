import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

//MUI
import EcoIcon from "@material-ui/icons/Eco";
import SubredditSkeleton from "../../util/SubredditSkeleton";

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
          {/* <div className="subredditImg"> */}
          {about.data.icon_img !== "" ? (
            <img
              src={about.data.icon_img}
              className="subredditImg"
              alt="Icon"
            />
          ) : about.data.header_img ? (
            <img src={about.data.header_img} alt="icon" />
          ) : (
            <EcoIcon style={{ fill: "#7f79c0" }} />
          )}
          <div className="info">
            <h3>{about.data.title}</h3>
            <p>
              {about.data.display_name_prefixed} • {about.data.subscribers}{" "}
              Subscribers
            </p>
          </div>
        </div>
      ) : (
        <SubredditSkeleton />
      )}
    </div>
  );
};

export default SubredditInfo;
