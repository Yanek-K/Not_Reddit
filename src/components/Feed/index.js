import React from "react";
import "./index.css";

import { useSelector } from "react-redux";
import Post from "./../Posts";
import PostSkeleton from "./../../util/PostSkeleton";

const mapState = (state) => ({
  posts: state.search.posts,
});

const Feed = () => {
  const { posts } = useSelector(mapState);

  return (
    <div>
      {posts.data ? (
        posts.data.children.map((post, index) => (
          <Post post={post} key={index} />
        ))
      ) : (
        <PostSkeleton />
      )}
    </div>
  );
};

export default Feed;
