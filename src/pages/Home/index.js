import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

//MUI
import Grid from "@material-ui/core/Grid";

//Redux
import { getSearch } from "../../redux/actions/searchActions";

//Components
import Feed from "./../../components/Feed/index";
import TopCommunities from "./../../components/TopCommunities";
import SubredditInfo from "../../components/SubredditInfo";
import Sidebar from "../../components/Sidebar";

const mapState = (state) => ({
  posts: state.search,
  loading: state.search,
});

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(mapState);

  useEffect(() => {
    dispatch(getSearch("funny"));
  }, [dispatch]);

  return (
    <div className="container">
      <Grid container spacing={0}>
        <Grid item md={8} sm={8} xs={12}>
          <Feed posts={posts} loading={loading} />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
