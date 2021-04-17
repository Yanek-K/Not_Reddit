import React from "react";
import Sidebar from "../../components/Sidebar";

//MUI
import Grid from "@material-ui/core/Grid";
import SinglePost from "../../components/SinglePost";

const PostInfo = () => {
  return (
    <div className="container">
      <Grid container spacing={0}>
        <Grid item md={8} sm={8} xs={12}>
          <SinglePost />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default PostInfo;
